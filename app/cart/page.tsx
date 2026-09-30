"use client";

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  Phone,
  Mail,
} from "lucide-react";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();

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

          <nav className="flex items-center gap-5 text-xs">
            <a
              href="/"
              className="transition-opacity hover:opacity-50"
            >
              Home
            </a>

            <a
              href="/shop"
              className="transition-opacity hover:opacity-50"
            >
              Shop
            </a>

            <a
              href="/about"
              className="transition-opacity hover:opacity-50"
            >
              About
            </a>

           <a
  href="/account"
  className="transition-opacity hover:opacity-50"
>
  Account
</a>
            <a
              href="/cart"
              className="flex items-center gap-1 transition-opacity hover:opacity-50"
            >
              <ShoppingBag size={13} strokeWidth={1.5} />
              Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
            </a>
          </nav>

        </div>
      </header>


      {/* Cart */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-14">

        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            QANOUEI
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
            Your Cart
          </h1>
        </div>


        {cart.length === 0 ? (

  <div className="border-t border-black/10 py-28 text-center">

    <ShoppingBag
      size={32}
      strokeWidth={1}
      className="mx-auto text-zinc-400"
    />

    <h2 className="mt-6 text-2xl font-light">
      Your cart is empty
    </h2>

    <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-500">
      Discover our curated collection of beauty, fashion, and lifestyle.
    </p>

    <a
      href="/shop"
      className="mt-8 inline-block bg-[#171512] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80"
    >
      Discover Collection
    </a>

  </div>

        ) : (

          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">

            {/* Products */}
            <div>

              <div className="border-t border-black/10">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex flex-col gap-6 border-b border-black/10 py-8 sm:flex-row sm:items-center sm:justify-between"
                  >

                    {/* Product name */}
                    <div>
                      <h2 className="text-lg font-medium">
                        {item.name}
                      </h2>

                      <p className="mt-2 text-sm text-zinc-500">
                        {item.price.toFixed(3)} KD
                      </p>
                    </div>


                    {/* Quantity + total + remove */}
                    <div className="flex items-center justify-between gap-6 sm:justify-end">

                      <div className="flex items-center border border-black/15 bg-white">

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          className="p-3 transition-opacity hover:opacity-50"
                          aria-label="Decrease quantity"
                        >
                          <Minus
                            size={14}
                            strokeWidth={1.5}
                          />
                        </button>

                        <span className="w-10 text-center text-sm">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          className="p-3 transition-opacity hover:opacity-50"
                          aria-label="Increase quantity"
                        >
                          <Plus
                            size={14}
                            strokeWidth={1.5}
                          />
                        </button>

                      </div>


                      <p className="min-w-[85px] text-right text-sm">
                        {(item.price * item.quantity).toFixed(3)} KD
                      </p>


                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-zinc-400 transition-colors hover:text-black"
                        aria-label="Remove product"
                      >
                        <Trash2
                          size={16}
                          strokeWidth={1.5}
                        />
                      </button>

                    </div>

                  </div>

                ))}

              </div>


              {/* Continue Shopping */}
              <a
                href="/shop"
                className="mt-8 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-black"
              >
                ← Continue Shopping
              </a>

            </div>


            {/* Order Summary */}
            <div className="h-fit border border-black/10 bg-white p-8">

              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Order Summary
              </p>


              <div className="mt-8 space-y-4 text-sm">

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">
                    Subtotal
                  </span>

                  <span>
                    {cartTotal.toFixed(3)} KD
                  </span>
                </div>

              </div>


              <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-6">

                <span className="text-sm">
                  Total
                </span>

                <span className="text-xl font-medium">
                  {cartTotal.toFixed(3)} KD
                </span>

              </div>


              {/* Checkout */}
              <a
                href="/checkout"
                className="mt-8 block w-full bg-[#171512] px-6 py-4 text-center text-xs uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-80"
              >
                Checkout
              </a>

            </div>

          </div>

        )}

      </section>


      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-12">
  <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">

    <div>
      <p className="text-lg font-semibold tracking-[0.25em]">
        QANOUEI
      </p>

      <p className="mt-3 text-sm text-zinc-500">
        Beauty, fashion & lifestyle.
      </p>
    </div>

    <div className="flex flex-col gap-4 text-sm text-zinc-600">

      {/* Phone numbers */}
      <div className="flex flex-col gap-3">

        <a
          href="tel:+96567711085"
          className="flex items-center gap-3 transition-opacity hover:opacity-50"
        >
          <Phone size={16} strokeWidth={1.5} />
          <span>+965 67711085</span>
        </a>

        <a
          href="tel:+96565817656"
          className="flex items-center gap-3 transition-opacity hover:opacity-50"
        >
          <Phone size={16} strokeWidth={1.5} />
          <span>+965 65817656</span>
        </a>

      </div>

      {/* Email */}
      <a
        href="mailto:Qanouei.g.t@gmail.com"
        className="flex items-center gap-3 transition-opacity hover:opacity-50"
      >
        <Mail size={16} strokeWidth={1.5} />
        <span>Qanouei.g.t@gmail.com</span>
      </a>

      {/* Social media */}
      <div className="mt-2 flex gap-6">

        <a
          href="https://www.instagram.com/luna.curl.kw?stkn=ZnZ1a3loeGo0eGFp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-opacity hover:opacity-50"
        >
          <span className="text-base">◎</span>
          <span>Instagram</span>
        </a>

        <a
          href="https://www.tiktok.com/@luna.curl.kw?_r=1&_t=ZS-9A50VucmbvI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-opacity hover:opacity-50"
        >
          <span className="text-base">♪</span>
          <span>TikTok</span>
        </a>

      </div>

    </div>
  </div>

  <div className="mx-auto mt-10 max-w-7xl border-t border-black/10 pt-6 text-xs text-zinc-400">
    © 2026 QANOUEI. All rights reserved.
  </div>
</footer>

    </main>
  );
}