"use client";

import { useEffect, useState } from "react";

export default function PaymentCallbackPage() {
  const [message, setMessage] = useState("Checking your payment...");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const paymentId = new URLSearchParams(
      window.location.search
    ).get("paymentId");

    if (!paymentId) {
      setMessage("We could not find your payment reference.");
      setChecking(false);
      return;
    }

    async function verifyPayment() {
      try {
        const response = await fetch("/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentId }),
        });

        const result = await response.json();

        if (response.ok && result.paid === true) {
          setMessage("Payment successful. Thank you for your order!");
        } else {
          setMessage(
            result.error ||
              "We could not confirm your payment. Please contact support."
          );
        }
      } catch {
        setMessage(
          "We could not check your payment right now. Please contact support."
        );
      } finally {
        setChecking(false);
      }
    }

    verifyPayment();
  }, []);

  return (
    <main className="mx-auto max-w-xl px-6 py-20 text-center">
      <h1 className="mb-4 text-3xl font-semibold">
        Payment status
      </h1>
      <p role="status">{message}</p>
      {checking && (
        <p className="mt-3 text-sm text-gray-500">
          Please wait while we verify your payment.
        </p>
      )}
      <a
        href="/shop"
        className="mt-8 inline-block underline"
      >
        Return to shop
      </a>
    </main>
  );
}
