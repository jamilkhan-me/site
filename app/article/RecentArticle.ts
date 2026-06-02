type RecentArticleTypeProps = {
  text: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
};

export const RecentArticles: RecentArticleTypeProps[] = [
   {
    text: `Launch a Secure EC2 Web Server from Scratch`,
    slug: "/article/aws-project-blog",
    image: "/projectImages/AWSProject-01.png",
    description:
      "Build and harden your first EC2 instance",
    tags: ["AWS", "EC2", "Cloud"],
  },
  {
    text: `Host a Static Website on S3 + CloudFront CDN`,
    slug: "/article/day-2-s3-cloudfront-static-website",
    image: "/projectImages/AWSProject-02.png",
    description:
      "Host a globally distributed, HTTPS-secured static website on Amazon S3 with CloudFront as your CDN — zero servers, zero OS patches, near-zero cost.",
    tags: ["S3", "CloudFront", "CDN"],
  },
  {
    text: "Site v1.1: Tags",
    slug: "/article/site-v1-1",
    image: "/og/compsigh.png",
    description:
      "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.",
    tags: ["devlog", "engineering"],
  },
  {
    text: "Make your VS Code as Canvas",
    slug: "/article/vs-code",
    image: "/og/cue.png",
    description:
      "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.",
    tags: ["guide", "setup"],
  },
  {
    text: "Setting up MDX on Next.js 14",
    slug: "/article/mdx-nextjs-14",
    image: "/og/mdx-nextjs-14.png",
    description:
      "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.",
    tags: ["guide", "engineering"],
  },
  {
    text: `"It's easy"`,
    slug: "/article/easy",
    image: "/og/dcraft.png",
    description:
      "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.",
    tags: ["life"],
  },
];
