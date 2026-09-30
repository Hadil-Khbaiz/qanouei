"use client";

import { useState } from "react";
import { useCart } from "../../../context/CartContext";

import {
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AutoHairCurlerPage() {
  const { addToCart, cartCount } = useCart();
  const [mediaIndex, setMediaIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const nextMedia = () => {
    setMediaIndex((current) => (current + 1) % 2);
  };

  const previousMedia = () => {
    setMediaIndex((current) => (current - 1 + 2) % 2);
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

          <nav className="flex items-center gap-5 text-xs">
            <a href="/" className="transition-opacity hover:opacity-50">
              Home
            </a>

            <a href="/shop" className="transition-opacity hover:opacity-50">
              Shop
            </a>

            <a href="/about" className="transition-opacity hover:opacity-50">
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
              Cart ({cartCount})
            </a>
          </nav>

        </div>
      </header>

      {/* Product */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-12">

        <a
          href="/shop/lunacurl"
          className="text-xs text-zinc-500 transition hover:text-black"
        >
          ← Back to LUNACURL
        </a>

        <div className="mt-10 grid gap-12 md:grid-cols-2">

          {/* Product Media Gallery */}
          <div>

            <div className="relative overflow-hidden rounded-md bg-[#E9E1D7]">

              {/* Image */}
              {mediaIndex === 0 && (
                <div className="flex h-[520px] items-center justify-center">
                  <img
                    src="/auto-hair-curler.jpeg"
                    alt="LUNACURL Auto Hair Curler"
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              {/* Video */}
              {mediaIndex === 1 && (
                <div className="flex h-[520px] items-center justify-center bg-black">
                  <video
                    src="/auto-hair-curler-video.mp4"
                    controls
                    playsInline
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              {/* Left Arrow */}
              <button
                type="button"
                onClick={previousMedia}
                aria-label="Previous media"
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 transition hover:bg-white"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>

              {/* Right Arrow */}
              <button
                type="button"
                onClick={nextMedia}
                aria-label="Next media"
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 transition hover:bg-white"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>

            </div>

            {/* Media Indicator */}
            <div className="mt-4 flex justify-center gap-2">

              <button
                type="button"
                onClick={() => setMediaIndex(0)}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  mediaIndex === 0 ? "bg-black" : "bg-black/20"
                }`}
                aria-label="Show product image"
              />

              <button
                type="button"
                onClick={() => setMediaIndex(1)}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  mediaIndex === 1 ? "bg-black" : "bg-black/20"
                }`}
                aria-label="Show product video"
              />

            </div>

          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
              LUNACURL
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-[-0.03em] md:text-5xl">
              LUNACURL Auto Hair Curler
            </h1>

            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-zinc-400">
              WT-126
            </p>

            <p className="mt-6 text-lg">
              15.500 KD
            </p>

            {/* Description */}
            <div className="mt-8 border-t border-black/10 pt-7">

              <p className="text-sm leading-7 text-zinc-600">
                A quick automatic curling iron designed for effortless
                everyday styling.
              </p>

            </div>

            {/* Product Details */}
            <div className="mt-8 border-t border-black/10 pt-7">

              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Product Details
              </p>

              <div className="mt-5 space-y-3 text-sm">

                <div className="flex justify-between gap-6 border-b border-black/5 pb-3">
                  <span className="text-zinc-500">Model</span>
                  <span>WT-126</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-black/5 pb-3">
                  <span className="text-zinc-500">Material</span>
                  <span>PC</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-black/5 pb-3">
                  <span className="text-zinc-500">Color</span>
                  <span>Pink</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-black/5 pb-3">
                  <span className="text-zinc-500">Rated Power</span>
                  <span>38W</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-black/5 pb-3">
                  <span className="text-zinc-500">Voltage</span>
                  <span>110–240V</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-black/10 pb-3">
                  <span className="text-zinc-500">Frequency</span>
                  <span>50–60Hz</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-black/5 pb-3">
                  <span className="text-zinc-500">Temperature</span>
                  <span className="text-right">
                    110°C / 130°C / 150°C / 170°C / 190°C / 210°C
                  </span>
                </div>

                <div className="flex justify-between gap-6 border-b border-black/5 pb-3">
                  <span className="text-zinc-500">Speed</span>
                  <span>6 speed modes</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-black/5 pb-3">
                  <span className="text-zinc-500">Size</span>
                  <span>318 × 55 mm</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-black/5 pb-3">
                  <span className="text-zinc-500">Weight</span>
                  <span>500 g</span>
                </div>

                <div className="flex justify-between gap-6 pb-3">
                  <span className="text-zinc-500">Function</span>
                  <span className="text-right">
                    Quick automatic curling iron
                  </span>
                </div>

              </div>

            </div>

            {/* Add to Cart */}
            <button
              type="button"
              onClick={() => {
                addToCart({
                  id: "lunacurl-auto-hair-curler",
                  name: "LUNACURL Auto Hair Curler",
                  price: 15.5,
                });

                setAddedToCart(true);

                setTimeout(() => {
                  setAddedToCart(false);
                }, 1800);
              }}
              className={`mt-8 w-full px-6 py-4 text-xs uppercase tracking-[0.25em] text-white transition-all ${
                addedToCart
                  ? "bg-[#6f7a63]"
                  : "bg-[#171512] hover:opacity-80"
              }`}
            >
              {addedToCart ? "Added to Cart ✓" : "Add to Cart"}
            </button>

          </div>

        </div>

        {/* Tips & Safety */}
        <div className="mt-20 max-w-3xl border-t border-black/10 pt-10">

          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Tips & Safety
          </p>

          <ol className="mt-6 space-y-4 text-sm leading-6 text-zinc-600">

            <li>
              <span className="mr-2 text-black">01</span>
              Preheat for 2–3 minutes before use.
            </li>

            <li>
              <span className="mr-2 text-black">02</span>
              Styling time varies depending on the hair type.
            </li>

            <li>
              <span className="mr-2 text-black">03</span>
              A slight odor during the heating process is normal.
            </li>

            <li>
              <span className="mr-2 text-black">04</span>
              Avoid placing the device too close to the scalp or leaving it
              on the hair for too long to prevent damage.
            </li>

            <li>
              <span className="mr-2 text-black">05</span>
              Use heat-resistant gloves when handling the heated product to
              protect your hands.
            </li>

          </ol>

        </div>

      </section>

    </main>
  );
}