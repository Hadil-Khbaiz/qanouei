export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">

      {/* About Content */}
      <section className="mx-auto max-w-4xl px-6 py-20">

        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          About QANOUEI
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Where style meets everyday life.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
          QANOUEI is a modern destination for refined beauty, fashion, and
          lifestyle. We curate distinctive pieces selected for their
          aesthetic, functionality, and ability to complement everyday life
          with a touch of elegance.
        </p>

        {/* What We Offer */}
        <div className="mt-20 border-t border-black/10 pt-12">

          <h2 className="text-2xl font-semibold">
            What We Offer
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-600">
            Our collections bring together thoughtfully selected products
            across beauty, fashion, and lifestyle. From beauty essentials
            such as LUNACURL to future collections in eyewear and beyond,
            QANOUEI is continuously evolving to offer a carefully curated
            shopping experience.
          </p>

        </div>

        {/* Our Approach */}
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

      </section>

    </main>
  );
}