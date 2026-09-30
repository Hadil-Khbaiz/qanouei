import {
  Phone,
  Mail,
  Music2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f8f5ef] px-6 py-12 text-[#171512]">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h3 className="text-sm font-medium tracking-[0.3em]">
            QANOUEI
          </h3>

          <p className="mt-4 max-w-xs text-xs leading-6 text-black/50">
            Beauty, Fashion & Style.
          </p>
        </div>

        {/* Information */}
        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.2em]">
            Information
          </h3>

          <div className="flex flex-col gap-3 text-xs text-black/60">
            <a
              href="/about"
              className="transition hover:text-black"
            >
              About
            </a>

            <a
              href="/shipping"
              className="transition hover:text-black"
            >
              Shipping & Delivery
            </a>

            <a
              href="/cart"
              className="transition hover:text-black"
            >
              Cart
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.2em]">
            Contact
          </h3>

          <div className="space-y-3 text-xs text-black/60">

            {/* Phone 1 */}
            <a
              href="tel:+96567711085"
              className="flex items-center gap-3 transition hover:text-black"
            >
              <Phone size={15} strokeWidth={1.5} />
              <span>+965 67711085</span>
            </a>

            {/* Phone 2 */}
            <a
              href="tel:+96565817656"
              className="flex items-center gap-3 transition hover:text-black"
            >
              <Phone size={15} strokeWidth={1.5} />
              <span>+965 65817656</span>
            </a>

            {/* Email */}
            <a
              href="mailto:Qanouei.g.t@gmail.com"
              className="flex items-center gap-3 transition hover:text-black"
            >
              <Mail size={15} strokeWidth={1.5} />
              <span>Qanouei.g.t@gmail.com</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/luna.curl.kw?stkn=ZnZ1a3loeGo0eGFp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-black"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.8"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>

              <span>Instagram</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@luna.curl.kw?_r=1&_t=ZS-9A50VucmbvI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-black"
            >
              <Music2 size={15} strokeWidth={1.5} />
              <span>TikTok</span>
            </a>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 max-w-6xl border-t border-black/10 pt-6 text-xs text-black/40">
        © {new Date().getFullYear()} QANOUEI. All rights reserved.
      </div>
    </footer>
  );
}