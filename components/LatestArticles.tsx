import Link from "next/link";
import React from "react";
export type LatestArticleCardProps = {
  title: string;
  excerpt: string;
  readMoreLink: string;
};
const ArticleCard = ({
  title,
  excerpt,
  readMoreLink,
}: LatestArticleCardProps) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-500 mb-2">{excerpt}</p>
    <a href={readMoreLink} className="text-gray-500 hover:text-gray-700">
      Read more →
    </a>
  </div>
);

const LatestArticles = () => {
  const articles = [
    {
      title: "Homemade Pizza Cheat Sheet",
      excerpt:
        "I'd like to preface this article by saying I'm by no means an expert on making your own pizza. I just recently started dabbling in making my own dough...",
      readMoreLink: "#",
    },
    {
      title: "2019 Gift Guide",
      excerpt:
        "I'm a notoriously difficult person to buy gifts for. With this holiday season coming up, I thought I'd take a stab at curating a list of gift ideas...",
      readMoreLink: "#",
    },
    {
      title: "Clockwise 322",
      excerpt:
        "I was privileged enough to be a guest on Clockwise this week. We talked about the California DMV selling your personal data, the video-recording-and...",
      readMoreLink: "#",
    },
    {
      title: "Shopify Email",
      excerpt:
        "I'm so happy to finally be able to share with the world Shopify Email . It's an email marketing tool built from the ground up for commerce. Even if...",
      readMoreLink: "#",
    },
    {
      title: "Design Details 196",
      excerpt:
        "This week was very special. While in San Francisco, Rafa and I not only met in person for the first time, but we also got to record an episode of...",
      readMoreLink: "#",
    },
    {
      title: "That Time One of My Tweets Reached 33K Retweets",
      excerpt:
        "Yeah, that really happened. On Monday last week, just after coming in to work we started noticing that the Beaver Hall street right in front of the...",
      readMoreLink: "#",
    },
  ];

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
