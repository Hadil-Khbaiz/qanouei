import {
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
              href="/shop"
              className="transition hover:text-black"
            >
              Shop
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

            {/* WhatsApp 1 */}
            <a
              href="https://wa.me/96567711085"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-black"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .11 5.35.11 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.9 11.9 0 0 0 5.79 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.46-8.42ZM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.71.98.99-3.62-.23-.37a9.86 9.86 0 0 1-1.51-5.27C2.19 6.48 6.61 2.06 12.04 2.06c2.63 0 5.1 1.03 6.96 2.89a9.77 9.77 0 0 1 2.89 6.97c0 5.43-4.42 9.85-9.84 9.88Zm5.4-7.39c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z" />
              </svg>

              <span>+965 67711085</span>
            </a>

            {/* WhatsApp 2 */}
            <a
              href="https://wa.me/96565817656"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-black"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .11 5.35.11 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.9 11.9 0 0 0 5.79 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.46-8.42ZM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.71.98.99-3.62-.23-.37a9.86 9.86 0 0 1-1.51-5.27C2.19 6.48 6.61 2.06 12.04 2.06c2.63 0 5.1 1.03 6.96 2.89a9.77 9.77 0 0 1 2.89 6.97c0 5.43-4.42 9.85-9.84 9.88Zm5.4-7.39c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z" />
              </svg>

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