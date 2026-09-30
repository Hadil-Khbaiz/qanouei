import { Phone, Mail } from "lucide-react";

export default function LunaCurlPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">

      {/* Header */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="/"
            className="flex items-center gap-3"
          >
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

            <a href="/account" className="transition-opacity hover:opacity-50">
  Account
</a>

<a href="/cart" className="transition-opacity hover:opacity-50">
  Cart
</a>
          </nav>

        </div>
      </header>


      {/* Collection Intro */}
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-16">

        <a
          href="/shop"
          className="text-xs text-zinc-500 transition hover:text-black"
        >
          ← Back to Collections
        </a>

        <div className="mt-12">

          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            Beauty
          </p>

          <h1 className="mt-4 text-5xl font-medium tracking-[-0.03em] md:text-6xl">
            LUNACURL
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-500">
            Automatic styling tools designed for effortless everyday beauty.
          </p>

        </div>

      </section>


      {/* Products */}
      <section className="mx-auto max-w-5xl px-6 pb-24">

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">


          {/* Auto Hair Curler */}
          <a
            href="/shop/lunacurl/auto-hair-curler"
            className="group block"
          >

            <div className="overflow-hidden rounded-md bg-[#E9E1D7]">

              <div className="flex h-[280px] items-center justify-center overflow-hidden bg-[#E9E1D7]">

                <img
                  src="/auto-hair-curler.jpeg"
                  alt="LUNACURL Auto Hair Curler"
                  className="h-[68%] w-[68%] object-contain mix-blend-multiply transition duration-500 group-hover:scale-[1.04]"
                />

              </div>

              <div className="border-t border-black/10 bg-[#F8F5F0] p-5">

                <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                  LUNACURL
                </p>

                <h2 className="mt-2 text-base font-medium">
                  Auto Hair Curler
                </h2>

                <p className="mt-3 text-sm">
                  15.500 KD
                </p>

                <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-zinc-500 transition group-hover:text-black">
                  View Product →
                </p>

              </div>

            </div>

          </a>


          {/* Hair Straightener */}
          <div className="overflow-hidden rounded-md bg-[#E1DCD4]">

            <div className="flex h-[360px] items-center justify-center px-5 text-center">

              <div>

                <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-500">
                  LUNACURL
                </p>

                <h2 className="mt-4 text-lg font-medium tracking-wide">
                  Hair Straightener
                </h2>

                <p className="mt-4 text-[9px] uppercase tracking-[0.35em] text-zinc-400">
                  Coming Soon
                </p>

              </div>

            </div>

          </div>


          {/* Hair Dryer */}
          <div className="overflow-hidden rounded-md bg-[#E1DCD4]">

            <div className="flex h-[360px] items-center justify-center px-5 text-center">

              <div>

                <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-500">
                  LUNACURL
                </p>

                <h2 className="mt-4 text-lg font-medium tracking-wide">
                  Hair Dryer
                </h2>

                <p className="mt-4 text-[9px] uppercase tracking-[0.35em] text-zinc-400">
                  Coming Soon
                </p>

              </div>

            </div>

          </div>


        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-base font-semibold tracking-[0.22em]">
              QANOUEI
            </p>

            <p className="mt-2 text-xs text-zinc-500">
              Beauty, fashion & lifestyle.
            </p>
          </div>


                   <div className="flex flex-col gap-3 text-xs text-zinc-600">

            <a
              href="tel:+96567711085"
              className="flex items-center gap-2 transition-opacity hover:opacity-50"
            >
              <Phone size={13} strokeWidth={1.5} />
              <span>+965 67711085</span>
            </a>

            <a
              href="tel:+96565817656"
              className="flex items-center gap-2 transition-opacity hover:opacity-50"
            >
              <Phone size={13} strokeWidth={1.5} />
              <span>+965 65817656</span>
            </a>

            <a
              href="mailto:Qanouei.g.t@gmail.com"
              className="flex items-center gap-2 transition-opacity hover:opacity-50"
            >
              <Mail size={13} strokeWidth={1.5} />
              <span>Qanouei.g.t@gmail.com</span>
            </a>

            <div className="mt-1 flex gap-5">
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

      </footer>

    </main>
  );
}