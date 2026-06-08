type NoteProps = {
  text: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
};

export const notes: NoteProps[] = [
{
    text: `IAM Roles, Policies & Least Privilege Audit on AWS`,
    slug: "/day-6-iam-roles-policies-least-privilege",
    image: "/projectImages/AWSProject-01.png",
    description:
      "No deployed resources. Just pure security. Day 6 covers the IAM building blocks every AWS architect must master — users, groups, roles, policy evaluation order, the Policy Simulator, and the principle of least privilege.",
    tags: ["AWS", "IAM", "Security"],
    date: "June 06, 2026",
  },

  {
    text: `Launch a Secure EC2 Web Server from Scratch`,
    slug: "/aws-project-blog",
    image: "/projectImages/AWSProject-01.png",
    description:
      "Build and harden your first EC2 instance",
    tags: ["AWS", "EC2", "Cloud"],
    date: "June 01, 2026",
  },
  {
    text: `Host a Static Website on S3 + CloudFront CDN`,
    slug: "/day-2-s3-cloudfront-static-website",
    image: "/projectImages/AWSProject-02.png",
    description:
      "Host a globally distributed, HTTPS-secured static website on Amazon S3 with CloudFront as your CDN — zero servers, zero OS patches, near-zero cost.",
    tags: ["S3", "CloudFront", "CDN"],
    date: "June 02, 2026",
  },
  {
    text: `Build a Production-Grade VPC with Public & Private Subnets`,
    slug: "/day3-project-VPC--public-private-subnets",
    image: "/projectImages/AWSProjectArchitect-03.png",
    description:
      "Stop using the default VPC. Build a proper network from scratch — public and private subnets across two availability zones, an internet gateway, a NAT gateway, and route tables that actually make sense.",
    tags: ["VPC", "Networking", "Subnets"],
    date: "June 03, 2026",
  },
  {
    text: `How I Made the Default MacBook Terminal Look Pro`,
    slug: "/how-to-make-macbook-terminal-look-pro",
    image: "/projectImages/iTerm2.png",
    description:
      "Customise your McBook Terminal ana give it pro look.",
    tags: ["iTerm2", "Terminal",],
    date: "June 03, 2026",
  },
  {
    text: `Build a Serverless REST API with Lambda + API Gateway`,
    slug: "/day4-project-Build-serverless-lambda-apigateway",
    image: "/projectImages/AWSProjectArchitect-04.png",
    description:
      "No servers. No EC2. No VPC. Just three Lambda functions, an API Gateway, and a DynamoDB table — a fully working REST API that scales to zero when idle and to millions of requests on demand",
    tags: ["Lambda", "API Gateway",  "Serverless", ],
    date: "June 04, 2026",
  },

  
];