import React from "react";
import "./Frontend.css";

export default function AWSBestPractices() {
  const bestPractices = [
    {
      step: "Step 1: Account and Identity Management",
      items: [
        "Use IAM Roles Instead of Root Credentials",
        "Enable Multi-Factor Authentication (MFA)",
        "Apply the Principle of Least Privilege to IAM Policies",
        "Use AWS Organizations for Multi-Account Management"
      ]
    },
    {
      step: "Step 2: Networking and Security",
      items: [
        "Design Secure VPC Architecture (Public/Private Subnets)",
        "Use Security Groups and Network ACLs to Control Traffic",
        "Enable Encryption for Data at Rest and in Transit (KMS, SSL/TLS)",
        "Use AWS WAF and Shield for DDoS Protection"
      ]
    },
    {
      step: "Step 3: Monitoring and Logging",
      items: [
        "Enable CloudTrail for API Activity Logging",
        "Use CloudWatch for Metrics, Logs, and Alarms",
        "Enable VPC Flow Logs and GuardDuty for Threat Detection",
        "Monitor Billing and Usage with AWS Budgets and Cost Explorer"
      ]
    },
    {
      step: "Step 4: Compute and Storage Best Practices",
      items: [
        "Use Auto Scaling for EC2 Instances",
        "Choose the Right EC2 Instance Types Based on Workload",
        "Leverage S3 Lifecycle Policies to Manage Storage Costs",
        "Use Elastic File System (EFS) or Amazon FSx for Shared Storage"
      ]
    },
    {
      step: "Step 5: Database Optimization",
      items: [
        "Use RDS with Multi-AZ Deployment for High Availability",
        "Enable Automated Backups and Snapshots",
        "Use DynamoDB with Provisioned or On-Demand Capacity as Needed",
        "Optimize Database Connections with Connection Pooling"
      ]
    },
    {
      step: "Step 6: Automation and Infrastructure as Code",
      items: [
        "Manage Infrastructure with CloudFormation or Terraform",
        "Automate Deployments Using CodePipeline and CodeDeploy",
        "Use Lambda for Event-Driven Automation",
        "Implement CI/CD Pipelines for Application Delivery"
      ]
    },
    {
      step: "Step 7: Cost Optimization",
      items: [
        "Use AWS Trusted Advisor for Cost Optimization Recommendations",
        "Schedule Start/Stop for Non-Production Instances",
        "Use Reserved Instances or Savings Plans Where Appropriate",
        "Enable S3 Intelligent-Tiering for Optimized Storage Costs"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">AWS Best Practices</h1>
      <p className="frontend-description">
        Follow these best practices to secure, optimize, and efficiently manage your AWS infrastructure.
      </p>

      {bestPractices.map((section, index) => (
        <div key={index} className="frontend-section">
          <h2 className="frontend-step-title">{section.step}</h2>
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
