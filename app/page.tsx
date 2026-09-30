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

            <a
              href="/about"
              className="transition hover:opacity-50"
            >
              About
            </a>

            <a
              href="/account"
              className="transition hover:opacity-50"
            >
              Account
            </a>

            <a
              href="/cart"
              className="transition hover:opacity-50"
            >
              Cart
            </a>

          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem]">

          <img
            src="/qanouei-hero.jpeg"
            alt="QANOUEI"
            className="h-[600px] w-full object-cover"
          />

        </div>
      </section>

      {/* Introduction */}
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

      {/* Lifestyle */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem]">

          <img
            src="/qanouei-lifestyle.jpeg"
            alt="QANOUEI lifestyle collection"
            className="h-[500px] w-full object-cover"
          />

        </div>

      </section>

      {/* Discover */}
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

    </main>
  );
}