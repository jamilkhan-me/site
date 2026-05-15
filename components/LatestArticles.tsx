import Link from "next/link";
import React from "react";
import { RecentArticles } from "@/app/article/RecentArticle";

// ─── Section header reusable ──────────────────────────────────────────────────

export const SectionHeader = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => (
  <div className="flex justify-between items-center mb-5">
    <h2 className="text-[15px] font-semibold text-gray-900 dark:text-white tracking-wide my-0 flex items-center gap-2">
      <span className="w-1 h-4 rounded-full bg-orange-500 inline-block" />
      {label}
    </h2>
    <Link
      href={href}
      className="text-[13px] text-orange-400 hover:text-orange-500 dark:hover:text-orange-300 transition-colors no-underline"
    >
      View all →
    </Link>
  </div>
);

// ─── Card ─────────────────────────────────────────────────────────────────────

type ArticleCardProps = {
  text: string;
  description: string;
  slug: string;
};

const ArticleCard = ({ text, description, slug }: ArticleCardProps) => (
  <Link
    href={slug}
    className="group block p-4 rounded-xl border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:bg-orange-50 dark:hover:bg-white/[0.05] hover:border-orange-300 dark:hover:border-orange-500/20 transition-all duration-200 no-underline"
  >
    <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors leading-snug my-0">
      {text}
    </h3>
    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 leading-relaxed line-clamp-2 my-0">
      {description}
    </p>
    <span className="inline-block mt-3 text-[13px] text-orange-500/70 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
      Read article →
    </span>
  </Link>
);

// ─── Export ───────────────────────────────────────────────────────────────────

const LatestArticles = () => (
  <section className="my-8 p-5 md:p-6 rounded-2xl border border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-[hsl(38,10%,5%)]">
    <SectionHeader label="Latest Articles" href="/article" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {RecentArticles.map((article, i) => (
        <ArticleCard key={i} {...article} />
      ))}
    </div>
  </section>
);

export default LatestArticles;
