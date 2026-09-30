"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Account", href: "/account" },
  { name: "Cart", href: "/cart" },
];

export default function Header() {
  const pathname = usePathname();

  const { cartCount } = useCart();

  return (
    <header className="w-full border-b border-black/10 bg-[#F8F5F0]">

      <div className="mx-auto flex min-h-[78px] w-full max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <img
            src="/logo.jpeg"
            alt="QANOUEI"
            className="h-10 w-auto object-contain"
          />

          <span className="text-lg font-semibold tracking-[0.22em] text-[#2d241f]">
            QANOUEI
          </span>

        </Link>



        <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.15em] sm:gap-8">

          {links.map((link) => {

            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);


            return (

              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors ${
                  isActive
                    ? "text-[#2d241f]"
                    : "text-[#2d241f]/50 hover:text-[#2d241f]"
                }`}
              >

                {link.name}

                {link.name === "Cart" && (
                  <span>
                    {" "}({cartCount})
                  </span>
                )}


                {isActive && (
                  <span className="absolute bottom-0 left-0 h-px w-full bg-[#2d241f]" />
                )}

              </Link>

            );

          })}

        </nav>


      </div>

    </header>
  );
}