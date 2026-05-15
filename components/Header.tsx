"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { navItems } from "./Hero";
import ThemeToggle from "./ThemeToggle";

/**
 * Header — shown on every page EXCEPT the homepage.
 * On the homepage the Hero card owns the nav, so we skip the header entirely.
 * On inner pages we render a slim sticky top-bar with logo + nav links.
 */
const Header = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  // Shorten labels on mobile to prevent overflow
  const mobileLabel: Record<string, string> = {
    "Book Notes": "Books",
  };

  return (
    <header className="sticky top-0 z-50 mb-6">
      <nav
        className="flex items-center justify-between gap-1 px-2 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/[0.07] backdrop-blur-md bg-[hsla(38,10%,95%,0.85)] dark:bg-[hsla(38,10%,5%,0.85)]"
      >
        {/* Logo — smaller on mobile */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Jamil Khan"
            width={80}
            height={28}
            priority
            className="w-[80px] h-[28px] sm:w-[120px] sm:h-[40px]"
          />
        </Link>

        {/* Nav links — tighter padding on mobile, no overflow */}
        <div className="flex items-center gap-0 sm:gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={[
                  "flex-shrink-0 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 no-underline whitespace-nowrap",
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/8",
                ].join(" ")}
              >
                <span className="sm:hidden">{mobileLabel[item.name] ?? item.name}</span>
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
