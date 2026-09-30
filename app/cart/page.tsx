"use client";

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">

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

    </main>
  );
}