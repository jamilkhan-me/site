"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

type Note = {
  text: string;
  slug: string;
  description: string;
  image?: string;
  tags?: string[];
};

export type TocEntry = {
  id: string;
  label: string;
  level: "h2" | "h3";
};

type Props = {
  note: Note;
  children?: React.ReactNode;
  toc?: TocEntry[];
  date?: string;
};

export default function ArticleLayout({
  note,
  children,
  toc,
  date = "",
}: Props) {
  // ── All arrays are guaranteed non-undefined from here on ──────
  const safeToc = useMemo(() => Array.isArray(toc) ? toc : [], [toc]);
  const safeTags = Array.isArray(note?.tags) ? note.tags : [];
  const hasImage = typeof note?.image === "string" && note.image.length > 0;

  const [activeId, setActiveId] = useState<string>(safeToc[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const tocRef = useRef<HTMLUListElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (total <= 0) return;
      setProgress(Math.round((doc.scrollTop / total) * 100));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!safeToc.length) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    safeToc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [safeToc]);

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

      {/* ── Header bar ── */}
      <div className="bg-[#ede8e1] dark:bg-[#1a1a1a] border-b border-[#d8d3cc] dark:border-[#1e1e1e] px-3 sm:px-11 py-4 flex items-center gap-2 overflow-x-auto">
        <Link
          href="/article"
          className="flex items-center gap-[6px] text-[14px] text-[#777] dark:text-[#555] hover:text-[#e07230] transition-colors"
        >
          <BackIcon />
          Back
        </Link>
        <span className="text-[13px] text-[#bbb] dark:text-[#2a2a2a]">/</span>
        <span className="text-[13px] text-[#777] dark:text-[#555]">Articles</span>
        <span className="text-[13px] text-[#bbb] dark:text-[#2a2a2a]">/</span>
        <span className="text-[13px] text-[#555] dark:text-[#777] truncate max-w-[140px] sm:max-w-[400px]">
          {note?.text ?? ""}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_240px] min-h-[calc(100vh-57px)]">
        <article className="px-4 sm:px-8 md:px-14 py-6 sm:py-11 pb-20 xl:border-r xl:border-[#e0dbd3] dark:xl:border-[#1e1e1e]">

          {/* Date */}
          <div className="flex items-center gap-2 font-sans text-[14px] text-[#777] dark:text-[#555] mb-4">
            {date && <time>{date}</time>}
            {date && <span className="text-[#bbb] dark:text-[#2a2a2a]">|</span>}
            <Link href="#comments" className="text-[#e07230] hover:underline transition-colors">
              Comments
            </Link>
          </div>

          {/* Title */}
          <h1 className="font-sans text-[26px] sm:text-[36px] font-extrabold leading-[1.15] tracking-tight text-[#111] dark:text-white mb-[18px]">
            {note?.text ?? ""}
          </h1>

          {/* Tags — only rendered when safeTags has items */}
          {safeTags.length > 0 && (
            <div className="flex flex-wrap gap-[7px] mb-8">
              {safeTags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[13px] text-[#555] dark:text-[#c0c0c0] border border-[#d0cbc4] dark:border-[#2e2e2e] bg-[#ede8e1] dark:bg-[#1e1e1e] px-3 py-1 rounded-[6px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Hero image — only rendered when src is a non-empty string */}
          {hasImage && (
            <div className="relative w-full aspect-[16/6] rounded-[10px] overflow-hidden mb-9 bg-[#e8e3dc] dark:bg-[#111] border border-[#d8d3cc] dark:border-[#1e1e1e]">
              <Image
                src={note.image!}
                alt={note?.text ?? ""}
                fill
                className="object-cover opacity-40"
                priority
              />
            </div>
          )}

          {/* MDX content */}
          <div className="prose-article" style={{ fontFamily: '"GeistSite", ui-sans-serif, system-ui, sans-serif' }}>
            {children ?? <p>{note?.description ?? ""}</p>}
          </div>
        </article>

        {/* ── ToC sidebar ── */}
        {safeToc.length > 0 && (
          <aside className="hidden xl:block bg-[#f5f2ee] dark:bg-[#141414]">
            <div className="sticky top-24 h-screen flex flex-col px-6 py-9">

              <div className="w-full h-[2px] bg-[#e0dbd3] dark:bg-[#1e1e1e] rounded-full mb-5 overflow-hidden flex-shrink-0">
                <div
                  className="h-full bg-[#e07230] rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="flex items-center gap-2 font-sans text-[13px] font-bold text-[#111] dark:text-white mb-4
                uppercase tracking-[0.08em] flex-shrink-0
                before:content-[''] before:inline-block before:w-[3px] before:h-[13px]
                before:bg-[#e07230] before:rounded-[2px] text-[#111] dark:text-white">
                Contents
              </p>

              <ul
                ref={tocRef}
                className="flex flex-col gap-[1px] overflow-y-auto flex-1"
                style={{ scrollbarWidth: "none" }}
              >
                {safeToc.map(({ id, label, level }) => {
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