export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">

      {/* Header */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6">

          <a
            href="/"
            className="flex items-center justify-center gap-2 sm:justify-start sm:gap-3"
          >
            <img
              src="/logo.jpeg"
              alt="QANOUEI Logo"
              className="h-10 w-auto sm:h-14"
            />

            <span className="text-xl font-semibold tracking-[0.18em] sm:text-2xl sm:tracking-[0.25em]">
              QANOUEI
            </span>
          </a>

          <nav className="flex items-center justify-center gap-5 text-xs sm:gap-8 sm:text-sm">

            <a
              href="/"
              className="whitespace-nowrap transition hover:opacity-50"
            >
              Home
            </a>

            <a
              href="/shop"
              className="whitespace-nowrap transition hover:opacity-50"
            >
              Shop
            </a>

            <a
              href="/about"
              className="whitespace-nowrap transition hover:opacity-50"
            >
              About
            </a>

            <a
              href="/account"
              className="whitespace-nowrap transition hover:opacity-50"
            >
              Account
            </a>

            <a
              href="/cart"
              className="whitespace-nowrap transition hover:opacity-50"
            >
              Cart
            </a>

          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">

          <img
            src="/qanouei-hero.jpeg"
            alt="QANOUEI"
            className="h-[360px] w-full object-cover sm:h-[600px]"
          />

        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 sm:py-20">

        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500 sm:tracking-[0.35em]">
          Welcome to QANOUEI
        </p>

        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          Beauty, Fashion & Style
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Curated pieces chosen to elevate everyday life.
        </p>

        <a
          href="/shop"
          className="mt-8 inline-block border-b border-black pb-1 text-xs font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-50 sm:text-sm sm:tracking-[0.25em]"
        >
          Shop Collection →
        </a>

      </section>

      {/* Lifestyle */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">

          <img
            src="/qanouei-lifestyle.jpeg"
            alt="QANOUEI lifestyle collection"
            className="h-[320px] w-full object-cover sm:h-[500px]"
          />

        </div>

      </section>

      {/* Discover */}
      <section className="mx-auto max-w-4xl px-5 py-10 text-center sm:px-6 sm:py-12">

        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 sm:tracking-[0.35em]">
          Discover QANOUEI
        </p>

        <h2 className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          Curated for your everyday.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Beauty, fashion, and lifestyle pieces selected with intention.
        </p>

      </section>

    </main>
  );
}