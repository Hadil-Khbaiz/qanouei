"use client";

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { supabase } from "../../lib/supabase";

export default function CheckoutPage() {
  const { cart, cartTotal, isLoaded } = useCart();

  useEffect(() => {
    if (isLoaded && cart.length === 0) {
      window.location.href = "/cart";
    }
  }, [isLoaded, cart]);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
  const loadUserEmail = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user?.email) {
      setEmail(user.email);
    }
  };

  loadUserEmail();
}, []);

  const handleContinue = async () => {
  setError("");
  setSuccess("");

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

  // Get the currently signed-in customer
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    setError("Please sign in to your account before placing an order.");
    return;
  }

  const { error: insertError } = await supabase
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
    });

  if (insertError) {
    console.error(insertError);
    setError(insertError.message);
    return;
  }

  setSuccess(
    "Your order has been received. Payment will be available soon."
  );
};
  

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">

      {/* Header */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="QANOUEI"
              className="h-10 w-auto object-contain"
            />

            <span className="text-lg font-semibold tracking-[0.22em]">
              QANOUEI
            </span>
          </a>

          <a
            href="/cart"
            className="text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-50"
          >
            ← Cart
          </a>

        </div>
      </header>


      {/* Checkout */}
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

                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full border border-black/15 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-black"
                  />
                </div>


                {/* Phone Number */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">
                    Phone Number
                  </label>

                  <div className="flex border border-black/15 bg-white focus-within:border-black">

                    <div className="flex items-center border-r border-black/10 px-4 text-sm text-zinc-600">
                      +965
                    </div>

                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={phone}
                      placeholder="5XXXXXXX"
                      maxLength={8}
                      onChange={(e) => {
                        const numbersOnly =
                          e.target.value.replace(/\D/g, "");

                        setPhone(numbersOnly);
                      }}
                      className="w-full px-4 py-4 text-sm outline-none"
                    />

                  </div>

                  {phone.length > 0 &&
                    !/^[569][0-9]{7}$/.test(phone) && (
                      <p className="mt-2 text-xs text-red-500">
                        Enter 8 digits. Kuwait delivery only.
                      </p>
                    )}
                </div>


                {/* Email */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">
                    Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full border border-black/15 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-black"
                  />
                </div>


                {/* Delivery Address */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">
                    Delivery Address
                  </label>

                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Your delivery address"
                    rows={4}
                    className="w-full resize-none border border-black/15 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-black"
                  />
                </div>


                {/* Order Notes */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">
                    Order Notes
                  </label>

                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Optional"
                    rows={3}
                    className="w-full resize-none border border-black/15 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-black"
                  />
                </div>


                {/* Error */}
                {error && (
                  <div className="border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-600">
                    {error}
                  </div>
                )}


                {/* Success */}
                {success && (
                  <div className="border border-green-200 bg-green-50 px-4 py-4 text-sm text-green-700">
                    {success}
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
                    <p className="text-sm font-medium">
                      {item.name}
                    </p>

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


            {/* Total */}
            <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">

              <span className="text-sm">
                Total
              </span>

              <span className="text-xl font-medium">
                {cartTotal.toFixed(3)} KD
              </span>

            </div>


            {/* Continue to Payment */}
            <button
              type="button"
              onClick={handleContinue}
              className="mt-8 w-full bg-[#171512] px-6 py-4 text-xs uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-80"
            >
              Continue to Payment
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}