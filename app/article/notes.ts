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
  

  
];