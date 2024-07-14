import Link from "next/link";
import React from "react";
import { RecentArticles } from "@/app/article/RecentArticle";
export type LatestArticleCardProps = {
  text: string;
  description: string;
  slug: string;
};
const ArticleCard = ({ text, description, slug }: LatestArticleCardProps) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-2">{text}</h3>
    <p className="text-gray-500 mb-2">{description}</p>
    <a href={slug} className="text-gray-500 hover:text-gray-700">
      Read more →
    </a>
  </div>
);

const LatestArticles = () => {
  const articles = RecentArticles;

  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold tracking-wider">
          <span className="text-orange-400 mr-1">#</span>
          Read my articles
        </span>
        <span>
          <Link
            href="/article"
            className="text-orange-400 hover:text-orange-200"
          >
            View all →
          </Link>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  z-50 gap-8">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
