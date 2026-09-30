export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#171512]">

      <section className="mx-auto max-w-3xl px-6 py-20">

        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/50">
          QANOUEI
        </p>

        <h1 className="text-4xl font-light tracking-tight md:text-5xl">
          Shipping & Delivery
        </h1>

        <div className="mt-12 space-y-8 text-sm leading-7 text-black/70">

          <div>
            <h2 className="mb-2 font-medium text-[#171512]">
              Delivery Within Kuwait
            </h2>

            <ul className="list-disc space-y-1 pl-5">

              <li>
                Delivery is available across all areas of Kuwait.
              </li>

              <li>
                Delivery fee: 1 KD per order.
              </li>

              <li>
                Orders are delivered within 24 hours.
              </li>

            </ul>
          </div>


          <div>
            <h2 className="mb-2 font-medium text-[#171512]">
              Delivery Information
            </h2>

            <p>
              Please make sure your delivery address and phone number
              are accurate. Delivery times may occasionally be affected
              by unforeseen circumstances.
            </p>
          </div>


          <div>
            <h2 className="mb-2 font-medium text-[#171512]">
              Contact
            </h2>

            <p>
              For any delivery questions, please contact us through the
              contact details provided on our website.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}