"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";

type NoteProps = {
  text: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
};

type SortOption = "recent" | "oldest" | "az";

type Props = {
  notes: NoteProps[];
  allTags: string[];
};

const PER_PAGE = 6;

export default function NotesClient({ notes, allTags }: Props) {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<SortOption>("recent");
  const [page, setPage] = useState(1);

  function toggleTag(tag: string) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
    setPage(1);
  }

  function resetFilters() {
    setQuery("");
    setActiveTags(new Set());
    setSort("recent");
    setPage(1);
  }

  const isFiltered = query !== "" || activeTags.size > 0 || sort !== "recent";

  const filtered = useMemo(() => {
    let list = notes.filter((note) => {
      const matchTag =
        activeTags.size === 0 ||
        [...activeTags].every((t) => note.tags.includes(t));
      const q = query.toLowerCase().trim();
      const matchQuery =
        !q ||
        note.text.toLowerCase().includes(q) ||
        note.description.toLowerCase().includes(q);
      return matchTag && matchQuery;
    });

    if (sort === "az") {
      list = [...list].sort((a, b) => a.text.localeCompare(b.text));
    } else if (sort === "oldest") {
      list = [...list].reverse();
    }

    return list;
  }, [notes, query, activeTags, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#141414] px-4 sm:px-8 md:px-12 py-8 sm:py-10 pb-20 text-gray-600 dark:text-[#a0a0a0]">

      {/* ── Top bar ── */}
      <div className="flex items-center justify-between gap-3 mb-8 flex-wrap">
        <h1 className="flex items-center gap-[10px] text-[26px] font-bold text-gray-900 dark:text-white tracking-tight
          before:content-[''] before:inline-block before:w-[4px] before:h-[24px]
          before:bg-[#e07230] before:rounded-[2px]">
          Articles
        </h1>
        <button
          onClick={resetFilters}
          className={`flex items-center gap-2 px-5 py-2 rounded-[8px] text-[14px] border transition-all duration-150
            ${isFiltered
              ? "border-[#e07230] text-[#e07230] bg-orange-50 dark:bg-[#1e1410]"
              : "border-gray-300 dark:border-[#2e2e2e] text-gray-600 dark:text-[#c0c0c0] hover:border-[#e07230] hover:text-[#e07230]"
            }`}
        >
          {isFiltered && (
            <span className="w-[6px] h-[6px] rounded-full bg-[#e07230] flex-shrink-0" />
          )}
          {isFiltered ? "Clear filters" : "View all articles"}
        </button>
      </div>

      {/* ── Search ── */}
      <div className="relative mb-3">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-gray-400 dark:text-[#555] pointer-events-none" />
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(1); }}
          className="w-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-[10px] py-[11px] pl-[42px] pr-4
            text-[15px] text-gray-800 dark:text-[#c0c0c0] placeholder:text-gray-400 dark:placeholder:text-[#444] outline-none
            focus:border-[#e07230] transition-colors duration-150 font-sans"
        />
      </div>

      {/* ── Sort ── */}
      <div className="flex items-center justify-end gap-2 mb-7">
        <span className="text-[13px] text-gray-400 dark:text-[#444]">Sort by</span>
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => { setSort(e.target.value as SortOption); setPage(1); }}
            className="appearance-none bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-[#c0c0c0]
              pl-3 pr-7 py-[7px] rounded-[8px] text-[14px] outline-none
              focus:border-[#e07230] cursor-pointer transition-colors duration-150 font-sans"
          >
            <option value="recent">Activity</option>
            <option value="oldest">Oldest</option>
            <option value="az">A–Z</option>
          </select>
          <ChevronIcon className="absolute right-[9px] top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 dark:text-[#555] pointer-events-none" />
        </div>
      </div>

      {/* ── Section bar ── */}
      <div className="flex items-center justify-between mb-5 pb-[14px] border-b border-gray-200 dark:border-[#1e1e1e]">
        <span className="text-[14px] font-semibold text-gray-700 dark:text-white uppercase tracking-[0.08em]">
          Latest articles
        </span>
        <span className="text-[13px] text-gray-400 dark:text-[#3a3a3a]">
          {filtered.length} article{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* ── Tag filters ── */}
      <div className="flex flex-wrap gap-2 mb-7">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-[14px] py-[5px] rounded-[8px] text-[13px] border transition-all duration-150 cursor-pointer font-sans
              ${
                activeTags.has(tag)
                  ? "bg-orange-50 dark:bg-[#1e1410] border-[#e07230] text-[#e07230]"
                  : "bg-transparent border-gray-200 dark:border-[#2a2a2a] text-gray-500 dark:text-[#555] hover:border-[#e07230] hover:text-[#e07230]"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-400 dark:text-[#333] text-[14px] py-16">
          No articles found
        </p>
      ) : (
        <nav>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {paginated.map((note, index) => (
              <li key={index}>
                <Link
                  href={`/article/${note.slug}`}
                  className="block h-full rounded-[12px] transition-transform duration-150 hover:-translate-y-[3px]"
                >
                  <ArticleCard
                    text={note.text}
                    image={note.image}
                    description={note.description}
                    tags={note.tags}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            disabled={page === 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-[8px] text-[13px] font-medium border
              border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a]
              text-gray-500 dark:text-[#555]
              hover:border-[#e07230] hover:text-[#e07230] transition-all duration-150
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-500 dark:disabled:hover:border-[#2a2a2a] dark:disabled:hover:text-[#555]"
          >
            <PrevIcon /> Prev
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`w-9 h-9 rounded-[8px] text-[13px] font-medium border transition-all duration-150
                  ${p === page
                    ? "bg-[#e07230] border-[#e07230] text-white"
                    : "border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] text-gray-500 dark:text-[#555] hover:border-[#e07230] hover:text-[#e07230]"
                  }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            disabled={page === totalPages}
            className="flex items-center gap-1.5 px-4 py-2 rounded-[8px] text-[13px] font-medium border
              border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a]
              text-gray-500 dark:text-[#555]
              hover:border-[#e07230] hover:text-[#e07230] transition-all duration-150
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-500 dark:disabled:hover:border-[#2a2a2a] dark:disabled:hover:text-[#555]"
          >
            Next <NextIcon />
          </button>
        </div>
      )}
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function PrevIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
