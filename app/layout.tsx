import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const Geist = localFont({
  src: "../public/fonts/GeistVariableVF.woff2",
  variable: "--font-geist",
});

const GeistMono = localFont({
  src: "../public/fonts/GeistMonoVariableVF.woff2",
  variable: "--font-geist-mono",
});

let metadataBase: URL;
if (process.env.VERCEL_URL) metadataBase = new URL("https:jamilkhan.me");
else metadataBase = new URL(`http://localhost:${process.env.PORT || 3000}`);

export const metadata: Metadata = {
  metadataBase,
  title: "MDX on Next.js 14",
  description:
    "An ergonomic, performant MDX setup for your Next.js 14 app, fit with YAML frontmatter parsing, dynamic metadata & OG image generation, and static site generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Geist.variable} ${GeistMono.variable}`}>
      <body className="max-w-4xl mx-auto mt-10">
        <Image
          unoptimized
          src="/logo.svg"
          alt="A svg image of jamil khan"
          width={200}
          height={200}
        />
        <Breadcrumbs />
        <main>{children}</main>
      </body>
    </html>
  );
}
