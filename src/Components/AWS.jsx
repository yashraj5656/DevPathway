import React from "react";
import "./Frontend.css";

export default function AWS() {
  const steps = [
    {
      title: "Step 1: Cloud Basics & AWS Core Services",
      items: [
        "Understand Cloud Computing fundamentals (IaaS, PaaS, SaaS)",
        "Learn AWS Global Infrastructure (Regions, Availability Zones)",
        "Get familiar with IAM (Identity and Access Management)",
        "Understand core services: EC2, S3, RDS, Lambda, CloudWatch"
      ],
    },
    {
      title: "Step 2: Networking & Storage",
      items: [
        "Learn about VPC, subnets, and security groups",
        "Understand Route 53 for DNS management",
        "Master S3 for object storage & Glacier for archival",
        "Explore EFS and FSx for file storage solutions"
      ],
    },
    {
      title: "Step 3: Compute & Serverless",
      items: [
        "Launch and manage virtual servers with EC2",
        "Understand Auto Scaling Groups and Load Balancers",
        "Explore AWS Lambda for serverless computing",
        "Use Elastic Beanstalk for application deployment"
      ],
    },
    {
      title: "Step 4: Databases, Monitoring & CI/CD",
      items: [
        "Use RDS, DynamoDB, and ElastiCache for data storage",
        "Monitor applications with CloudWatch & X-Ray",
        "Set up CI/CD pipelines with CodePipeline, CodeBuild, and CodeDeploy",
        "Manage containers with ECS and EKS (Kubernetes)"
      ],
    },
    {
      title: "Step 5: Security, Deployment & Certification",
      items: [
        "Manage users and permissions securely with IAM roles & policies",
        "Use CloudTrail for auditing AWS activity",
        "Learn CloudFormation for Infrastructure as Code (IaC)",
        "Deploy your projects and prepare for AWS Certified Solutions Architect - Associate exam"
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">AWS Roadmap</h1>
      <p className="frontend-description">
        Step-by-step roadmap to learn and master AWS Cloud services for building scalable applications.
      </p>

      {steps.map((section, index) => (
        <div key={index} className="frontend-section">
          <h2 className="frontend-step-title">{section.title}</h2>
          <ul className="frontend-list">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
