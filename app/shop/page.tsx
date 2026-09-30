"use client";

import { useCart } from "../context/CartContext";

export default function ShopPage() {
  const { cartCount } = useCart();

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">

      {/* Header */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="QANOUEI Logo"
              className="h-12 w-auto"
            />

            <span className="text-2xl font-semibold tracking-[0.25em]">
              QANOUEI
            </span>
          </a>

          <nav className="flex items-center gap-8 text-sm">
            <a href="/" className="transition hover:opacity-50">
              Home
            </a>

            <a href="/shop" className="transition hover:opacity-50">
              Shop
            </a>

            <a href="/account" className="transition hover:opacity-50">
              Account
            </a>

            <a
              href="/cart"
              className="transition hover:opacity-50"
            >
              Cart ({cartCount})
            </a>
          </nav>

        </div>
      </header>

      {/* Intro */}
      <section className="px-6 pt-24 pb-16">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
            QANOUEI
          </p>

          <h1 className="mt-5 text-5xl font-medium tracking-[-0.03em] md:text-7xl">
            Discover
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500">
            A curated selection of beauty, fashion, and lifestyle.
          </p>

        </div>
      </section>

      {/* LUNACURL */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">

          <a
            href="/shop/lunacurl"
            className="group block"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-[#E9E1D7]">

              <div className="flex h-[320px] items-center justify-center px-6 py-16 text-center">

                <div>

                  <img
                    src="/lunacurl-logo.png"
                    alt="LUNACURL"
                    className="mx-auto h-28 w-auto md:h-36"
                  />

                  <p className="mt-6 text-xs uppercase tracking-[0.4em] text-zinc-500">
                    Beauty
                  </p>

                  <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-zinc-600">
                    Automatic styling, effortlessly.
                  </p>

                  <div className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
                    Discover LUNACURL

                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </a>

        </div>
      </section>

      {/* VERONE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#E1DCD4]">

            <div className="flex h-[320px] items-center justify-center px-6 py-16 text-center">

              <div>

                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                  Eyewear
                </p>

                <h2 className="mt-6 text-5xl font-medium tracking-[0.12em] md:text-7xl">
                  VERONE
                </h2>

                <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-zinc-600">
                  Timeless eyewear, thoughtfully curated.
                </p>

                <p className="mt-6 text-xs uppercase tracking-[0.35em] text-zinc-400">
                  Coming Soon
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}