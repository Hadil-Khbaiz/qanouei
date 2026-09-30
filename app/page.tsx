import { Phone, Mail, } from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

<a
  href="/"
  className="flex items-center gap-3"
>
  <img
    src="/logo.jpeg"
    alt="QANOUEI Logo"
    className="h-14 w-auto"
  />

  <span className="text-2xl font-semibold tracking-[0.25em]">
    QANOUEI
  </span>
</a>

          <nav className="flex items-center gap-8 text-sm">

  <a href="/about" className="transition hover:opacity-50">
    About
  </a>

  <a href="/account" className="transition hover:opacity-50">
    Account
  </a>

  <a href="/cart" className="transition hover:opacity-50">
    Cart
  </a>

</nav>

        </div>
      </header>

            <section className="relative px-6 pt-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
          <img
            src="/qanouei-hero.jpeg"
            alt="QANOUEI"
            className="h-[600px] w-full object-cover"
          />
        </div>
      </section>

          <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-zinc-500">
          Welcome to QANOUEI
        </p>

        <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
          Beauty, Fashion & Style
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-zinc-600">
          Curated pieces chosen to elevate everyday life.
        </p>

        <a
          href="/shop"
          className="mt-8 inline-block border-b border-black pb-1 text-sm font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-50"
        >
          Shop Collection →
        </a>
      </section>
          <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
          <img
            src="/qanouei-lifestyle.jpeg"
            alt="QANOUEI lifestyle collection"
            className="h-[500px] w-full object-cover"
          />
        </div>
      </section>

  <section className="mx-auto max-w-4xl px-6 py-12 text-center">
  <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
    Discover QANOUEI
  </p>

  <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-4xl">
    Curated for your everyday.
  </h2>

  <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-zinc-600">
    Beauty, fashion, and lifestyle pieces selected with intention.
  </p>
</section>

      
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