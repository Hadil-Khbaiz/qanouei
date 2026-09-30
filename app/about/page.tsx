export default function AboutPage() {
return ( <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">

```
  <header className="border-b border-black/10">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

      <a
  href="/"
  className="flex items-center gap-3"
>
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


  <section className="mx-auto max-w-4xl px-6 py-20">

    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
  About QANOUEI
</p>

    <h1 className="mt-4 text-5xl font-semibold tracking-tight">
      Where style meets everyday life.
    </h1>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
      QANOUEI is a modern destination for refined beauty, fashion, and lifestyle.
      We curate distinctive pieces selected for their aesthetic,
      functionality, and ability to complement everyday life with a touch
      of elegance.
    </p>


    <div className="mt-20 border-t border-black/10 pt-12">

      <h2 className="text-2xl font-semibold">
        What We Offer
      </h2>

      <p className="mt-5 max-w-2xl leading-7 text-zinc-600">
        Our collections bring together thoughtfully selected products
        across beauty, fashion, and lifestyle. From beauty essentials
        such as LUNACURL to future collections in eyewear and beyond,
        RMS is continuously evolving to offer a carefully curated
        shopping experience.
      </p>

    </div>


    <div className="mt-16 border-t border-black/10 pt-12">

      <h2 className="text-2xl font-semibold">
        Our Approach
      </h2>

      <p className="mt-5 max-w-2xl leading-7 text-zinc-600">
        We believe true style is found in the details.
      </p>

      <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
        Every collection is selected with attention to design,
        practicality, and quality, creating a refined selection for those
        who appreciate products that feel as good as they look.
      </p>

    </div>


    <div className="mt-16 border-t border-black/10 pt-12">

      <h2 className="text-2xl font-semibold">
        Contact
      </h2>

      <div className="mt-6 space-y-4 text-sm text-zinc-600">

        <p>
          Contact Number:{" "}
          <a href="tel:+96567711085" className="transition hover:opacity-50">
            +965 67711085
          </a>
          {" or "}
          <a href="tel:+96565817656" className="transition hover:opacity-50">
            +965 65817656
          </a>
        </p>

        <p>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/luna.curl.kw?stkn=ZnZ1a3loeGo0eGFp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-50"
          >
            @luna.curl.kw
          </a>
        </p>

        <p>
          TikTok:{" "}
          <a
            href="https://www.tiktok.com/@luna.curl.kw?_r=1&_t=ZS-9A50VucmbvI"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-50"
          >
            @luna.curl.kw
          </a>
        </p>

        <p>
          Email:{" "}
          <a
            href="mailto:Qanouei.g.t@gmail.com"
            className="transition hover:opacity-50"
          >
            Qanouei.g.t@gmail.com
          </a>
        </p>

      </div>

    </div>


  </section>

</main>
 
);
}
