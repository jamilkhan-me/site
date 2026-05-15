"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Book = {
  title: string;
  author: string;
  slug: string;
  image: string;
  description: string;
  tags: string[];
  recommendation?: string;
  dateRead?: string;
};

export type TocEntry = {
  id: string;
  label: string;
  level: "h2" | "h3";
};

type Props = {
  book: Book;
  children?: React.ReactNode;
  toc?: TocEntry[];
};

export default function BookDetailLayout({ book, children, toc = [] }: Props) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const tocRef = useRef<HTMLUListElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop / (doc.scrollHeight - doc.clientHeight);
      setProgress(Math.round(scrolled * 100));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!toc.length) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [toc]);

  useEffect(() => {
    const list = tocRef.current;
    const btn = activeBtnRef.current;
    if (!list || !btn) return;
    const listTop = list.scrollTop;
    const listBottom = listTop + list.clientHeight;
    const btnTop = btn.offsetTop;
    const btnBottom = btnTop + btn.clientHeight;
    if (btnTop < listTop) {
      list.scrollTo({ top: btnTop - 8, behavior: "smooth" });
    } else if (btnBottom > listBottom) {
      list.scrollTo({ top: btnBottom - list.clientHeight + 8, behavior: "smooth" });
    }
  }, [activeId]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveId(id);
  }

  return (
    <div className="min-h-screen bg-[#f5f2ee] dark:bg-[#141414] text-[#4a4a4a] dark:text-[#a0a0a0]">

      {/* ── Breadcrumb header ── */}
      <div className="bg-[#ede8e1] dark:bg-[#1a1a1a] border-b border-[#d8d3cc] dark:border-[#1e1e1e] px-3 sm:px-11 py-4 flex items-center gap-2 overflow-x-auto">
        <Link
          href="/bookNote"
          className="flex items-center gap-[6px] text-[14px] text-[#777] dark:text-[#555] hover:text-[#e07230] transition-colors"
        >
          <BackIcon />
          Back
        </Link>
        <span className="text-[13px] text-[#bbb] dark:text-[#2a2a2a]">/</span>
        <span className="text-[13px] text-[#777] dark:text-[#555]">Book Notes</span>
        <span className="text-[13px] text-[#bbb] dark:text-[#2a2a2a]">/</span>
        <span className="text-[13px] text-[#555] dark:text-[#777] truncate max-w-[140px] sm:max-w-[400px]">
          {book.title}
        </span>
      </div>

      {/* ── Two-column body ── */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_240px] min-h-[calc(100vh-57px)]">

        {/* ── Main content ── */}
        <article className="px-4 sm:px-8 md:px-14 py-6 sm:py-11 pb-20 xl:border-r xl:border-[#e0dbd3] dark:xl:border-[#1e1e1e]">

          {/* ── Book header card ── */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 mb-10 pb-8 border-b border-[#e0dbd3] dark:border-[#1e1e1e]">

            {/* Cover image */}
            <div className="relative flex-shrink-0 w-[120px] h-[180px] rounded-[8px]
              overflow-hidden bg-[#e8e3dc] dark:bg-[#111] border border-[#d8d3cc] dark:border-[#1e1e1e]">
              {book.image && (
                <Image src={book.image} alt={book.title} fill className="object-cover" priority />
              )}
            </div>

            {/* Book meta */}
            <div className="flex flex-col justify-center gap-3 min-w-0">

              {/* Tags */}
              {book.tags.length > 0 && (
                <div className="flex flex-wrap gap-[6px]">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[12px] font-medium text-[#e07230]
                        bg-orange-50 dark:bg-[#1e1410] border border-orange-200 dark:border-[#3a2010]
                        px-[8px] py-[3px] rounded-[5px] uppercase tracking-[0.04em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="font-sans text-[22px] sm:text-[30px] font-extrabold leading-[1.15]
                tracking-tight text-[#111] dark:text-white">
                {book.title}
              </h1>

              {/* Author */}
              <p className="font-sans text-[16px] text-[#666] dark:text-[#555]">
                by <span className="text-[#444] dark:text-[#888]">{book.author}</span>
              </p>

              {/* Meta row */}
              <div className="flex items-center gap-4 mt-1">
                {book.dateRead && (
                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <span className="font-sans text-[13px] text-[#666] dark:text-[#444]">
                      Read {book.dateRead}
                    </span>
                  </div>
                )}
                {book.recommendation && (
                  <div className="flex items-center gap-2">
                    <StarIcon />
                    <span className="font-sans text-[13px] text-[#666] dark:text-[#444]">
                      {book.recommendation}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              {book.description && (
                <p className="font-sans text-[13px] text-[#666] dark:text-[#555] leading-[1.7]
                  max-w-full sm:max-w-[480px] border-l-2 border-[#d8d3cc] dark:border-[#1e1e1e] pl-3">
                  {book.description}
                </p>
              )}
            </div>
          </div>

          {/* ── MDX prose ── */}
          <div className="prose-article" style={{ fontFamily: '"GeistSite", ui-sans-serif, system-ui, sans-serif' }}>
            {children ?? <p>{book.description}</p>}
          </div>
        </article>

        {/* ── ToC sidebar ── */}
        {toc.length > 0 && (
          <aside className="hidden xl:block bg-[#f5f2ee] dark:bg-[#141414]">
            <div className="sticky top-32 h-screen flex flex-col px-6 py-9">

              {/* Progress bar */}
              <div className="w-full h-[2px] bg-[#e0dbd3] dark:bg-[#1e1e1e] rounded-full mb-5 overflow-hidden flex-shrink-0">
                <div
                  className="h-full bg-[#e07230] rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Label */}
              <p className="flex items-center gap-2 font-sans text-[13px] font-bold
                text-[#111] dark:text-white mb-4 uppercase tracking-[0.08em] flex-shrink-0
                before:content-[''] before:inline-block before:w-[3px] before:h-[13px]
                before:bg-[#e07230] before:rounded-[2px]">
                Contents
              </p>

              {/* Scrollable list */}
              <ul ref={tocRef} className="flex flex-col gap-[1px] overflow-y-auto flex-1" style={{ scrollbarWidth: "none" }}>
                {toc.map(({ id, label, level }) => {
                  const isActive = activeId === id;
                  return (
                    <li key={id}>
                      <button
                        ref={isActive ? (activeBtnRef as React.RefObject<HTMLButtonElement>) : null}
                        onClick={() => scrollTo(id)}
                        className={`
                          w-full text-left font-sans text-[13px] px-[10px] py-[7px]
                          rounded-[6px] border-l-2 transition-all duration-100
                          leading-snug bg-transparent
                          ${level === "h3" ? "pl-5 text-[12px]" : ""}
                          ${isActive
                            ? "text-[#e07230] bg-[#f5e8d8] dark:bg-[#1e1410] border-[#e07230] font-semibold"
                            : "text-[#888] dark:text-[#444] border-transparent hover:text-[#333] dark:hover:text-[#c0c0c0] hover:bg-[#ede8e1] dark:hover:bg-[#1a1a1a]"
                          }
                        `}
                      >
                        {label}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Back to top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mt-6 flex items-center gap-2 text-[13px] text-[#aaa] dark:text-[#333]
                  hover:text-[#e07230] transition-colors duration-150 font-sans flex-shrink-0"
              >
                <ArrowUpIcon />
                Back to top
              </button>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#e07230"
      stroke="#e07230" strokeWidth={1.5} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
