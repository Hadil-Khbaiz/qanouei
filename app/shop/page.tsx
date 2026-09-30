"use client";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">


      {/* Intro */}
      <section className="px-6 pb-16 pt-24">

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

              <div className="flex min-h-[380px] items-center justify-center px-6 py-8 text-center">

                <div className="w-full">


                  {/* LUNACURL Logo */}
                  <img
                    src="/lunacurl-logo.png"
                    alt="LUNACURL"
                    className="mx-auto h-36 w-auto object-contain sm:h-44 md:h-52"
                  />


                  <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-zinc-500 sm:text-[10px]">
                    Beauty
                  </p>


                  <p className="mx-auto mt-3 max-w-xs text-[11px] leading-5 text-zinc-600 sm:text-xs">
                    Automatic styling, effortlessly.
                  </p>


                  <div className="mt-4 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] sm:text-[10px]">

                    Discover LUNACURL

                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
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

          <div className="relative overflow-hidden rounded-[2rem] bg-black">

            <div className="flex min-h-[380px] items-center justify-center px-6 py-8 text-center">

              <div className="w-full">


                {/* VERONE Logo */}
                <img
                  src="/verone-logo.jpeg"
                  alt="VERONE"
                  className="mx-auto -translate-y-2 h-48 w-auto scale-[2] object-contain sm:h-60 sm:scale-[2] md:-translate-y-3 md:h-72 md:scale-[2]"
                />


                <p className="mt-0 text-[9px] uppercase tracking-[0.3em] text-white/55 sm:text-[10px]">
                  Eyewear
                </p>


                <p className="mx-auto mt-3 max-w-xs text-[11px] leading-5 text-white/60 sm:text-xs">
                  Timeless eyewear, thoughtfully curated.
                </p>


                <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-white/35 sm:text-[10px]">
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