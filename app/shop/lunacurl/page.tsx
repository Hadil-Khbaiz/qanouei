export default function LunaCurlPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">

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


    </main>
  );
}