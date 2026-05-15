export type AwsProjectProps = {
  title: string;
  description: string;
  awsServices: string[];
  links: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
};

export const awsProjects: AwsProjectProps[] = [
  {
    title: "Serverless Image Processing Pipeline",
    description:
      "A fully automated image processing pipeline triggered via S3 uploads. Resizes, watermarks, and stores optimised thumbnails back to S3 using Lambda and Step Functions.",
    awsServices: ["S3", "Lambda", "Step Functions", "CloudWatch", "IAM"],
    links: {
      github: "https://github.com/JamilKhan-me",
      caseStudy: "#",
    },
  },
  {
    title: "Multi-Region HA Web App",
    description:
      "Deployed a highly available Next.js application across two AWS regions with Route 53 failover routing, ALB, Auto Scaling Groups, and RDS Multi-AZ.",
    awsServices: ["EC2", "ALB", "Route 53", "RDS", "Auto Scaling", "CloudFront"],
    links: {
      github: "https://github.com/JamilKhan-me",
      live: "https://jamilkhan.me",
    },
  },
  {
    title: "CI/CD Pipeline with CodePipeline",
    description:
      "End-to-end deployment pipeline for a containerised app: CodeCommit → CodeBuild → ECR → ECS Fargate, with Slack notifications via SNS.",
    awsServices: ["CodePipeline", "CodeBuild", "ECR", "ECS", "SNS"],
    links: {
      github: "https://github.com/JamilKhan-me",
      caseStudy: "#",
    },
  },
  {
    title: "Real-Time Data Analytics Dashboard",
    description:
      "Streams IoT sensor data through Kinesis Data Streams, transforms with Lambda, stores in DynamoDB, and visualises in a custom React dashboard.",
    awsServices: ["Kinesis", "Lambda", "DynamoDB", "API Gateway", "CloudWatch"],
    links: {
      github: "https://github.com/JamilKhan-me",
    },
  },
];
