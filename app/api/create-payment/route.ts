import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const publishableKey =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    const secretKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const myFatoorahKey = process.env.MYFATOORAH_API_KEY;

    if (!supabaseUrl || !publishableKey || !secretKey || !myFatoorahKey) {
      return NextResponse.json(
        { error: "Server payment configuration is incomplete." },
        { status: 500 }
      );
    }

    // Authenticate the user with their Supabase access token.
    const authorization = request.headers.get("authorization");
    const accessToken = authorization?.startsWith("Bearer ")
      ? authorization.slice(7)
      : "";

    if (!accessToken) {
      return NextResponse.json(
        { error: "Please sign in before paying." },
        { status: 401 }
      );
    }

    const userClient = createClient(supabaseUrl, publishableKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const {
      data: { user },
      error: authError,
    } = await userClient.auth.getUser(accessToken);

    if (authError || !user) {
      return NextResponse.json(
        { error: "Your session is invalid. Please sign in again." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const orderId = body?.orderId;

    if (typeof orderId !== "string" || !orderId.trim()) {
      return NextResponse.json(
        { error: "A valid order ID is required." },
        { status: 400 }
      );
    }

    // Use the server-only service role key for database operations.
    const admin = createClient(supabaseUrl, secretKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { data: order, error: orderError } = await admin
      .from("orders")
      .select("id, user_id, total, status, myfatoorah_invoice_id")
      .eq("id", orderId)
      .eq("user_id", user.id)
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        { error: "Order not found." },
        { status: 404 }
      );
    }

    if (order.status !== "pending") {
      return NextResponse.json(
        { error: "This order is not awaiting payment." },
        { status: 409 }
      );
    }

    const amount = Number(order.total);

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        { error: "The order amount is invalid." },
        { status: 400 }
      );
    }

    // Create the hosted payment with MyFatoorah Demo.
    const response = await fetch(
      "https://apitest.myfatoorah.com/v3/payments",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${myFatoorahKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          PaymentMethod: "CARD",
          Order: {
            Amount: amount,
            Currency: "KWD",
            ExternalIdentifier: String(order.id),
          },
          IntegrationUrls: {
            Redirection:
              "https://qanouei.vercel.app/payment-callback",
          },
          Language: "EN",
        }),
        cache: "no-store",
      }
    );

    const result = await response.json();

    if (!response.ok || !result?.IsSuccess || !result?.Data?.PaymentURL) {
      console.error("MyFatoorah payment creation failed:", {
        status: response.status,
        message: result?.Message,
        validationErrors: result?.ValidationErrors,
      });

      return NextResponse.json(
        { error: "Could not create the payment link. Please try again." },
        { status: 502 }
      );
    }

    const invoiceId = result.Data.InvoiceId;

    if (invoiceId == null) {
      console.error(
        "MyFatoorah response did not include an InvoiceId."
      );

      return NextResponse.json(
        {
          error:
            "The payment was created, but its invoice ID was missing.",
        },
        { status: 502 }
      );
    }

    // Save the invoice ID so verification can match payment to this order.
    const { data: savedOrder, error: saveError } = await admin
      .from("orders")
      .update({ myfatoorah_invoice_id: String(invoiceId) })
      .eq("id", order.id)
      .eq("user_id", user.id)
      .eq("status", "pending")
      .select("id")
      .maybeSingle();

    if (saveError || !savedOrder) {
      console.error("Could not save MyFatoorah invoice ID:", {
        message: saveError?.message,
        orderId: order.id,
      });

      return NextResponse.json(
        { error: "Could not link the payment to your order." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      paymentUrl: result.Data.PaymentURL,
    });
  } catch (error) {
    console.error("Create payment route failed:", error);

    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}