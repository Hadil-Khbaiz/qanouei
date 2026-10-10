
import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const text = (value: unknown): string =>
  value == null ? "" : String(value);

export async function POST(request: Request) {
  try {
    const secret = process.env.MYFATOORAH_WEBHOOK_SECRET;
    const apiKey = process.env.MYFATOORAH_API_KEY;
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!secret || !apiKey || !supabaseUrl || !serviceKey) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const event = body?.Event;
    const data = body?.Data;
    const invoice = data?.Invoice;
    const transaction = data?.Transaction;
    const amount = data?.Amount;

    if (
      event?.Code !== 1 ||
      event?.Name !== "PAYMENT_STATUS_CHANGED" ||
      !invoice ||
      !transaction ||
      !amount
    ) {
      return NextResponse.json({ received: true, ignored: true });
    }

    const signaturePayload = [
      `Invoice.Id=${text(invoice.Id)}`,
      `Invoice.Status=${text(invoice.Status)}`,
      `Transaction.Status=${text(transaction.Status)}`,
      `Transaction.PaymentId=${text(transaction.PaymentId)}`,
      `Invoice.ExternalIdentifier=${text(invoice.ExternalIdentifier)}`,
    ].join(",");

    const receivedSignature = request.headers.get("myfatoorah-signature");

    if (!receivedSignature) {
      return NextResponse.json(
        { error: "Missing signature" },
        { status: 401 }
      );
    }

    const expectedSignature = createHmac("sha256", secret)
      .update(signaturePayload, "utf8")
      .digest();

    const suppliedSignature = Buffer.from(
      receivedSignature.trim(),
      "base64"
    );

    if (
      suppliedSignature.length !== expectedSignature.length ||
      !timingSafeEqual(suppliedSignature, expectedSignature)
    ) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    if (
      text(invoice.Status).toUpperCase() !== "PAID" ||
      text(transaction.Status).toUpperCase() !== "SUCCESS"
    ) {
      return NextResponse.json({ received: true, ignored: true });
    }

    const paymentId = text(transaction.PaymentId);
    const invoiceId = text(invoice.Id);
    const orderId = text(invoice.ExternalIdentifier);

    if (!paymentId || !invoiceId || !orderId) {
      return NextResponse.json(
        { error: "Missing payment identifiers" },
        { status: 400 }
      );
    }

    const paymentResponse = await fetch(
      `https://apitest.myfatoorah.com/v3/payments/${encodeURIComponent(paymentId)}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!paymentResponse.ok) {
      return NextResponse.json(
        { error: "Payment verification unavailable" },
        { status: 502 }
      );
    }

    const result = await paymentResponse.json();
    const verified = result?.Data;

    if (
      !result?.IsSuccess ||
      !verified?.Invoice ||
      !verified?.Transaction ||
      !verified?.Amount
    ) {
      return NextResponse.json(
        { error: "Payment could not be verified" },
        { status: 502 }
      );
    }

    const verifiedInvoice = verified.Invoice;
    const verifiedTransaction = verified.Transaction;
    const verifiedAmount = verified.Amount;

    if (
      text(verifiedInvoice.Id) !== invoiceId ||
      text(verifiedInvoice.ExternalIdentifier) !== orderId ||
      text(verifiedTransaction.PaymentId) !== paymentId ||
      text(verifiedInvoice.Status).toUpperCase() !== "PAID" ||
      text(verifiedTransaction.Status).toUpperCase() !== "SUCCESS" ||
      text(verifiedAmount.PayCurrency).toUpperCase() !== "KWD"
    ) {
      return NextResponse.json(
        { error: "Payment details do not match" },
        { status: 400 }
      );
    }

    const paidAmount = Number(verifiedAmount.ValueInPayCurrency);

    if (!Number.isFinite(paidAmount) || paidAmount <= 0) {
      return NextResponse.json(
        { error: "Invalid payment amount" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, serviceKey);

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("id, total, status, myfatoorah_invoice_id")
      .eq("id", orderId)
      .eq("myfatoorah_invoice_id", invoiceId)
      .maybeSingle();

    if (orderError) {
      return NextResponse.json(
        { error: "Order lookup failed" },
        { status: 500 }
      );
    }

    if (!order) {
      return NextResponse.json(
        { error: "Matching order not found" },
        { status: 404 }
      );
    }

    if (text(order.status).toLowerCase() === "paid") {
      return NextResponse.json({ received: true, paid: true });
    }

    if (text(order.status).toLowerCase() !== "pending") {
      return NextResponse.json(
        { error: "Order is not pending" },
        { status: 409 }
      );
    }

    const orderTotal = Number(order.total);

    if (
      !Number.isFinite(orderTotal) ||
      Math.abs(orderTotal - paidAmount) > 0.001
    ) {
      return NextResponse.json(
        { error: "Payment amount does not match order" },
        { status: 400 }
      );
    }

    const { data: updatedOrder, error: updateError } = await supabase
      .from("orders")
      .update({ status: "paid" })
      .eq("id", orderId)
      .eq("myfatoorah_invoice_id", invoiceId)
      .eq("status", "pending")
      .select("id")
      .maybeSingle();

    if (updateError) {
      return NextResponse.json(
        { error: "Could not update order" },
        { status: 500 }
      );
    }

    if (!updatedOrder) {
      const { data: latestOrder, error: latestError } = await supabase
        .from("orders")
        .select("status")
        .eq("id", orderId)
        .maybeSingle();

      if (!latestError && text(latestOrder?.status).toLowerCase() === "paid") {
        return NextResponse.json({ received: true, paid: true });
      }

      return NextResponse.json(
        { error: "Order status was not updated" },
        { status: 409 }
      );
    }

    return NextResponse.json({ received: true, paid: true });
  } catch {
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
