"use client";

import { Check } from "lucide-react";

export default function ConfirmationPage() {
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

        </div>
      </header>

      {/* Confirmation */}
      <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6 py-24">

        <div className="w-full text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white">
            <Check size={28} strokeWidth={1.5} />
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            QANOUEI
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
            Thank You
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-500">
            Your order has been received successfully. We will contact you
            with the order details and delivery information.
          </p>

          <div className="mx-auto mt-10 max-w-md border border-black/10 bg-white p-6 text-left">

            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Order Status
            </p>

            <p className="mt-4 text-sm">
              Payment confirmed
            </p>

            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Your order is being prepared for delivery.
            </p>

          </div>

          <a
            href="/shop"
            className="mt-10 inline-block bg-[#171512] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80"
          >
            Continue Shopping
          </a>

        </div>

      </section>

    </main>
  );
}