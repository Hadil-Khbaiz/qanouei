
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const secretKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const myFatoorahKey = process.env.MYFATOORAH_API_KEY;

    if (!supabaseUrl || !secretKey || !myFatoorahKey) {
      return NextResponse.json(
        { error: "Server payment configuration is incomplete." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const paymentId = body?.paymentId;

    if (
      (typeof paymentId !== "string" &&
        typeof paymentId !== "number") ||
      !String(paymentId).trim()
    ) {
      return NextResponse.json(
        { error: "A valid payment ID is required." },
        { status: 400 }
      );
    }

    const requestedPaymentId = String(paymentId).trim();

    const response = await fetch(
      `https://apitest.myfatoorah.com/v3/payments/${encodeURIComponent(
        requestedPaymentId
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${myFatoorahKey}`,
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    const result = await response.json();

    if (!response.ok || !result?.IsSuccess || !result?.Data) {
      console.error("MyFatoorah verification failed:", {
        status: response.status,
        message: result?.Message,
      });

      return NextResponse.json(
        { error: "We could not verify the payment yet." },
        { status: 502 }
      );
    }

    const data = result.Data;
    const invoice = data?.Invoice;
    const transaction = data?.Transaction;
    const amount = data?.Amount;

    // Require a paid invoice and a successful transaction.
    if (
      String(invoice?.Status ?? "").toUpperCase() !== "PAID" ||
      String(transaction?.Status ?? "").toUpperCase() !== "SUCCESS"
    ) {
      return NextResponse.json(
        {
          paid: false,
          error: "Payment has not been confirmed as successful.",
        },
        { status: 409 }
      );
    }

    // Ensure the returned transaction matches the requested payment.
    if (String(transaction?.PaymentId ?? "") !== requestedPaymentId) {
      return NextResponse.json(
        { error: "The payment reference does not match." },
        { status: 409 }
      );
    }

    const invoiceId = invoice?.Id;

    if (invoiceId == null) {
      return NextResponse.json(
        { error: "The verified payment did not include an invoice ID." },
        { status: 502 }
      );
    }

    const admin = createClient(supabaseUrl, secretKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data: order, error: orderError } = await admin
      .from("orders")
      .select("id, total, status, myfatoorah_invoice_id")
      .eq("myfatoorah_invoice_id", String(invoiceId))
      .maybeSingle();

    if (orderError) {
      console.error("Order lookup failed:", orderError.message);

      return NextResponse.json(
        { error: "Could not look up the order." },
        { status: 500 }
      );
    }

    if (!order) {
      return NextResponse.json(
        { error: "We could not match this payment to an order." },
        { status: 404 }
      );
    }

    if (amount?.PayCurrency !== "KWD") {
      return NextResponse.json(
        { error: "The payment currency does not match the order." },
        { status: 409 }
      );
    }

    const paidAmount = Number(amount?.ValueInPayCurrency);
    const orderTotal = Number(order.total);

    if (
      !Number.isFinite(paidAmount) ||
      !Number.isFinite(orderTotal) ||
      Math.abs(paidAmount - orderTotal) > 0.001
    ) {
      return NextResponse.json(
        { error: "The payment amount does not match the order." },
        { status: 409 }
      );
    }

    // Safe to return success for an already-paid, verified order.
    if (order.status === "paid") {
      return NextResponse.json({ paid: true });
    }

    if (order.status !== "pending") {
      return NextResponse.json(
        { error: "This order is not awaiting payment." },
        { status: 409 }
      );
    }

    const { data: updatedOrder, error: updateError } = await admin
      .from("orders")
      .update({ status: "paid" })
      .eq("id", order.id)
      .eq("status", "pending")
      .select("id, status")
      .maybeSingle();

    if (updateError) {
      console.error(
        "Could not update paid order:",
        updateError.message
      );

      return NextResponse.json(
        { error: "Payment was verified, but the order could not be updated." },
        { status: 500 }
      );
    }

    if (!updatedOrder) {
      const { data: latestOrder, error: latestOrderError } =
        await admin
          .from("orders")
          .select("status")
          .eq("id", order.id)
          .maybeSingle();

      if (latestOrderError) {
        return NextResponse.json(
          { error: "Could not confirm the final order status." },
          { status: 500 }
        );
      }

      if (latestOrder?.status === "paid") {
        return NextResponse.json({ paid: true });
      }

      return NextResponse.json(
        { error: "The order status could not be updated." },
        { status: 409 }
      );
    }

    return NextResponse.json({ paid: true });
  } catch (error) {
    console.error("Payment verification route failed:", error);

    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
