"use client";

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { supabase } from "../../lib/supabase";

export default function CheckoutPage() {
  const { cart, cartTotal, isLoaded } = useCart();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isLoaded && cart.length === 0) {
      window.location.replace("/cart");
    }
  }, [isLoaded, cart]);

  useEffect(() => {
    const loadUserEmail = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.email) {
        setEmail(user.email);
      }
    };

    void loadUserEmail();
  }, []);

  const handleContinue = async () => {
    if (isSubmitting) return;

    setError("");

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!/^[569][0-9]{7}$/.test(phone)) {
      setError("Please enter a valid Kuwait mobile number.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!address.trim()) {
      setError("Please enter your delivery address.");
      return;
    }

    if (!isLoaded || cart.length === 0 || cartTotal <= 0) {
      setError("Your cart is empty. Please add an item before checkout.");
      return;
    }

    setIsSubmitting(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setError("Please sign in before placing your order.");
        return;
      }

      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session?.access_token) {
        setError("Your session has expired. Please sign in again.");
        return;
      }

      // Create the pending order in Supabase.
      const { data: order, error: insertError } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          customer_name: fullName.trim(),
          phone: `+965${phone}`,
          email: email.trim(),
          address: address.trim(),
          notes: notes.trim(),
          items: cart,
          total: cartTotal,
          status: "pending",
        })
        .select("id")
        .single();

      if (insertError || !order) {
        console.error("Order creation failed:", insertError);
        setError("Could not create your order. Please try again.");
        return;
      }

      // Ask the server to create a MyFatoorah payment.
      // The MyFatoorah secret key stays on the server.
      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          orderId: String(order.id),
        }),
      });

      const result = await response.json();

      if (!response.ok || typeof result?.paymentUrl !== "string") {
        console.error("Payment creation failed:", result);
        setError(
          result?.error ||
            "Could not start payment. Your order remains pending."
        );
        return;
      }

      // Redirect to MyFatoorah's hosted payment page.
      window.location.assign(result.paymentUrl);
    } catch (err) {
      console.error("Checkout failed:", err);
      setError(
        "Something went wrong while starting payment. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-14">
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            QANOUEI
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
            Checkout
          </h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          {/* Customer Information */}
          <div>
            <div className="border-t border-black/10 pt-8">
              <h2 className="text-xl font-medium">
                Customer Information
              </h2>

              <div className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    disabled={isSubmitting}
                    className="w-full border border-black/15 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-black disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500"
                  >
                    Phone Number
                  </label>

                  <div className="flex border border-black/15 bg-white focus-within:border-black">
                    <div className="flex items-center border-r border-black/10 px-4 text-sm text-zinc-600">
                      +965
                    </div>

                    <input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      value={phone}
                      placeholder="5XXXXXXX"
                      maxLength={8}
                      disabled={isSubmitting}
                      onChange={(e) =>
                        setPhone(e.target.value.replace(/\D/g, ""))
                      }
                      className="w-full px-4 py-4 text-sm outline-none disabled:opacity-60"
                    />
                  </div>

                  {phone.length > 0 &&
                    !/^[569][0-9]{7}$/.test(phone) && (
                      <p className="mt-2 text-xs text-red-500">
                        Enter 8 digits. Kuwait delivery only.
                      </p>
                    )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    disabled={isSubmitting}
                    className="w-full border border-black/15 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-black disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500"
                  >
                    Delivery Address
                  </label>

                  <textarea
                    id="address"
                    autoComplete="street-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Your delivery address"
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full resize-none border border-black/15 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-black disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500"
                  >
                    Order Notes
                  </label>

                  <textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Optional"
                    rows={3}
                    disabled={isSubmitting}
                    className="w-full resize-none border border-black/15 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-black disabled:opacity-60"
                  />
                </div>

                {error && (
                  <div
                    role="alert"
                    className="border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-600"
                  >
                    {error}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit border border-black/10 bg-white p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Your Order
            </p>

            <div className="mt-8 space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="text-sm">
                    {(item.price * item.quantity).toFixed(3)} KD
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
              <span className="text-sm">Total</span>

              <span className="text-xl font-medium">
                {cartTotal.toFixed(3)} KD
              </span>
            </div>

            <button
              type="button"
              onClick={handleContinue}
              disabled={
                isSubmitting ||
                !isLoaded ||
                cart.length === 0
              }
              className="mt-8 w-full bg-[#171512] px-6 py-4 text-xs uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Continue to Payment"}
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
              Your order will be saved before you continue to secure checkout.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}