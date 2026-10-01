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

      <div className="mx-auto flex min-h-[78px] w-full max-w-7xl items-center px-4 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 sm:gap-3"
        >
          <img
            src="/logo.jpeg"
            alt="QANOUEI"
            className="h-8 w-auto object-contain sm:h-10"
          />

          <span className="text-sm font-semibold tracking-[0.16em] text-[#2d241f] sm:text-lg sm:tracking-[0.22em]">
            QANOUEI
          </span>
        </Link>

        {/* Navigation */}
        <div className="ml-auto min-w-0 max-w-[58%] sm:max-w-none">
          <nav className="flex items-center gap-4 overflow-x-auto whitespace-nowrap text-[9px] uppercase tracking-[0.08em] sm:gap-6 sm:text-xs sm:tracking-[0.15em] md:gap-8">

            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative shrink-0 pb-1 transition-colors ${
                    isActive
                      ? "text-[#2d241f]"
                      : "text-[#2d241f]/50 hover:text-[#2d241f]"
                  }`}
                >
                  {link.name}

                  {link.name === "Cart" && (
                    <span>{" "}({cartCount})</span>
                  )}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-px w-full bg-[#2d241f]" />
                  )}
                </Link>
              );
            })}

          </nav>
        </div>

      </div>

    </header>
  );
}
