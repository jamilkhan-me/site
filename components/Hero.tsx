"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ThemeToggle from "./ThemeToggle";

// ─── Nav items (single source of truth) ──────────────────────────────────────

export const navItems = [
  { name: "Home",      href: "/" },
  { name: "Articles",  href: "/article" },
  { name: "Projects",  href: "/project" },
  { name: "Book Notes",href: "/bookNote" },
  { name: "About",     href: "/about" },
];

// ─── Cover Banner ─────────────────────────────────────────────────────────────

const CoverBanner = () => (
  <div className="relative h-40 md:h-52 w-full overflow-hidden rounded-t-2xl">
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, #1a0a00 0%, #3d1a00 25%, #7c3100 50%, #c45200 70%, #ff6b00 100%)",
      }}
    />
    {/* Grain texture */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px",
      }}
    />
    {/* Decorative rings */}
    <div className="absolute right-8 top-6 w-32 h-32 rounded-full opacity-10 border border-orange-300" />
    <div className="absolute right-16 top-10 w-20 h-20 rounded-full opacity-10 border border-orange-200" />
    <div className="absolute left-1/3 bottom-4 w-2 h-2 rounded-full bg-orange-300 opacity-40" />
    <div className="absolute left-1/2 top-6 w-1.5 h-1.5 rounded-full bg-orange-200 opacity-30" />
  </div>
);

// ─── Profile Nav Bar ──────────────────────────────────────────────────────────

const ProfileNav = () => {
  const pathname = usePathname();

  return (
    <nav
      className="flex items-center gap-1 overflow-x-auto scrollbar-hide px-1"
      aria-label="Site navigation"
    >
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
              "relative flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 no-underline whitespace-nowrap",
              isActive
                ? "bg-orange-500 text-white shadow-sm shadow-orange-900/40"
                : "text-gray-400 hover:text-white hover:bg-white/8",
            ].join(" ")}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

// ─── Profile Section ──────────────────────────────────────────────────────────

const ProfileSection = () => (
  <div className="px-3 sm:px-5 md:px-8 pb-4 sm:pb-5 relative">
    {/* Avatar + Nav row */}
    <div className="flex flex-col gap-3">
      {/* Top: avatar left, social icons right */}
      <div className="flex items-end justify-between flex-wrap gap-y-2">
        <div className="-mt-12 sm:-mt-14 md:-mt-16">
          <div className="relative inline-block">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-[hsl(38,10%,95%)] dark:ring-[hsl(38,10%,5%)] shadow-2xl">
              <Image
                src="/profile.png"
                alt="Jamil Khan"
                width={128}
                height={128}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full ring-2 ring-[hsl(38,10%,95%)] dark:ring-[hsl(38,10%,5%)]" />
          </div>
        </div>

        {/* Social links — top-right */}
        <div className="flex items-center gap-2 mb-1">
          <ProfileNav />
          <ThemeToggle />
        </div>
      </div>

      {/* Name & bio */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight my-0">
          Jamil Khan
        </h1>
        <p className="text-orange-400 font-medium text-sm mt-1 tracking-wide my-0">
          Solutions Engineer @ Transperfect
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-base mt-3 max-w-xl leading-relaxed my-0">
          AWS Certified Cloud Engineer | Designing Scalable & Secure Cloud Architectures | Microservices & Distributed Systems | Building Production-Ready Cloud Architectures
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm text-gray-500 dark:text-gray-500 items-center">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            London, UK
          </span>
          
          <span className="hidden sm:flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            jamilkhan.nu@gmail.com
          </span>
          <Link
            href="https://github.com/JamilKhan-me"
            target="_blank"
            aria-label="GitHub"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
          >
            <Image src="/socialMediaIcon/github.svg" alt="GitHub" width={15} height={15} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jamilkhaninfo/"
            target="_blank"
            aria-label="LinkedIn"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
          >
            <Image src="/socialMediaIcon/linkedin.svg" alt="LinkedIn" width={15} height={15} />
          </Link>
          <Link
            href="https://x.com/JamilkhanInfo"
            target="_blank"
            aria-label="Twitter / X"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
          >
            <Image src="/socialMediaIcon/twitter.svg" alt="Twitter" width={15} height={15} />
          </Link>
        </div>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "UI/UX"].map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-md text-sm font-medium bg-orange-500/10 text-orange-600 dark:text-orange-300 border border-orange-500/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ─── Hero export ──────────────────────────────────────────────────────────────

const Hero = () => (
  <div
    className="my-4 sm:my-10 rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-orange-950/20 bg-[hsl(38,10%,95%)] dark:bg-[hsl(38,10%,5%)]"
  >
    <CoverBanner />
    <ProfileSection />
  </div>
);

export default Hero;
