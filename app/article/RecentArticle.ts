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
    text: "Build a Production-Grade VPC with Public & Private Subnets",
    slug: "/article/day3-project-VPC--public-private-subnets",
    image: "/projectImages/AWSProjectArchitect-03.png",
    description:
      "Stop using the default VPC. Build a proper network from scratch — public and private subnets across two availability zones, an internet gateway, a NAT gateway, and route tables that actually make sense.",
   tags: ["VPC", "Networking", "Subnets"],
  },
    {
    text: `How I Made the Default MacBook Terminal Look Pro`,
    slug: "/article/how-to-make-macbook-terminal-look-pro",
    image: "/projectImages/iTerm2.png",
    description:
      "Customise your McBook Terminal ana give it pro look.",
    tags: ["iTerm2", "Terminal",],
  
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
    text: `Build a Serverless REST API with Lambda + API Gateway`,
    slug: "/article/day4-project-Build-serverless-lambda-apigateway",
    image: "/projectImages/AWSProjectArchitect-04.png",
    description:
      "No servers. No EC2. No VPC. Just three Lambda functions, an API Gateway, and a DynamoDB table — a fully working REST API that scales to zero when idle and to millions of requests on demand",
    tags: ["Lambda", "API Gateway",  "Serverless", ],
 
  },
];
