"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "../../../context/CartContext";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AutoHairCurlerPage() {
  const { addToCart } = useCart();

  const [mediaIndex, setMediaIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const nextMedia = () => {
    setMediaIndex((current) => (current + 1) % 2);
  };

  const previousMedia = () => {
    setMediaIndex((current) => (current - 1 + 2) % 2);
  };

  const handleAddToCart = () => {
    addToCart({
      id: "lunacurl-auto-hair-curler",
      name: "LUNACURL Auto Hair Curler",
      price: 15.5,
    });

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 1800);
  };


  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-12">

        <a
          href="/shop/lunacurl"
          className="text-xs text-zinc-500 transition hover:text-black"
        >
          ← Back to LUNACURL
        </a>


        <div className="mt-10 grid gap-12 md:grid-cols-2">


          {/* Media */}
          <div>

            <div className="relative overflow-hidden rounded-md bg-[#E9E1D7]">


              {mediaIndex === 0 && (
                <div className="flex h-[520px] items-center justify-center">

                  <Image
                    src="/auto-hair-curler.jpeg"
                    alt="LUNACURL Auto Hair Curler"
                    width={600}
                    height={600}
                    className="h-full w-full object-contain"
                  />

                </div>
              )}



              {mediaIndex === 1 && (
                <div className="flex h-[520px] items-center justify-center bg-black">

                  <video
                    src="/auto-hair-curler-video.mp4"
                    controls
                    playsInline
                    muted
                    className="h-full w-full object-contain"
                  />

                </div>
              )}



              <button
                type="button"
                onClick={previousMedia}
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 hover:bg-white"
              >
                <ChevronLeft size={20}/>
              </button>



              <button
                type="button"
                onClick={nextMedia}
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 hover:bg-white"
              >
                <ChevronRight size={20}/>
              </button>


            </div>



            <div className="mt-4 flex justify-center gap-2">

              {[0,1].map((index)=>(
                <button
                  key={index}
                  onClick={()=>setMediaIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    mediaIndex === index
                    ? "bg-black"
                    : "bg-black/20"
                  }`}
                />
              ))}

            </div>


          </div>





          {/* Info */}
          <div className="flex flex-col justify-center">


            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
              LUNACURL
            </p>


            <h1 className="mt-4 text-4xl font-medium md:text-5xl">
              LUNACURL Auto Hair Curler
            </h1>


            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-zinc-400">
              WT-126
            </p>


            <p className="mt-6 text-lg">
              15.500 KD
            </p>



            <div className="mt-8 border-t border-black/10 pt-7">

              <p className="text-sm leading-7 text-zinc-600">
                A quick automatic curling iron designed for effortless
                everyday styling.
              </p>

            </div>





            <div className="mt-8 border-t border-black/10 pt-7">


              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Product Details
              </p>



              <div className="mt-5 space-y-3 text-sm">


                {[
                  ["Model","WT-126"],
                  ["Material","PC"],
                  ["Color","Pink"],
                  ["Rated Power","38W"],
                  ["Voltage","110–240V"],
                  ["Frequency","50–60Hz"],
                  ["Temperature","110°C / 130°C / 150°C / 170°C / 190°C / 210°C"],
                  ["Speed","6 speed modes"],
                  ["Size","318 × 55 mm"],
                  ["Weight","500 g"],
                  ["Function","Quick automatic curling iron"],
                ].map(([title,value])=>(
                  <div
                    key={title}
                    className="flex justify-between gap-6 border-b border-black/5 pb-3"
                  >

                    <span className="text-zinc-500">
                      {title}
                    </span>

                    <span className="text-right">
                      {value}
                    </span>

                  </div>
                ))}


              </div>

            </div>




            <button
              onClick={handleAddToCart}
              className={`mt-8 w-full px-6 py-4 text-xs uppercase tracking-[0.25em] text-white ${
                addedToCart
                ? "bg-[#6f7a63]"
                : "bg-[#171512] hover:opacity-80"
              }`}
            >
              {addedToCart ? "Added to Cart ✓" : "Add to Cart"}
            </button>



          </div>


        </div>





        {/* Safety */}

        <div className="mt-20 max-w-3xl border-t border-black/10 pt-10">

          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Tips & Safety
          </p>


          <ol className="mt-6 space-y-4 text-sm leading-6 text-zinc-600">

            <li>01 — Preheat for 2–3 minutes before use.</li>

            <li>02 — Styling time varies depending on hair type.</li>

            <li>03 — A slight odor during heating is normal.</li>

            <li>04 — Avoid placing the device too close to scalp.</li>

            <li>05 — Use heat-resistant gloves when handling.</li>

          </ol>


        </div>


      </section>


    </main>
  );
}