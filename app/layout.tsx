import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Jamil Khan",
  description:
    "A minimalist asthetic portfolio website built by Next JS 14, Typescript, Tailwindcss and MDX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Geist.variable} ${GeistMono.variable} dark`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='light'||(!s&&!p)){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 mt-3 sm:mt-5 overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
