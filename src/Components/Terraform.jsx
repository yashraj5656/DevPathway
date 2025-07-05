import React from "react";
import "./Frontend.css";

export default function Terraform() {
  const steps = [
    {
      title: "Step 1: Infrastructure as Code (IaC) Basics",
      items: [
        "Understand what Infrastructure as Code (IaC) is and why it's important.",
        "Learn the basics of declarative vs imperative infrastructure management.",
        "Explore common IaC tools: Terraform, Pulumi, CloudFormation."
      ],
    },
    {
      title: "Step 2: Terraform Fundamentals",
      items: [
        "Install Terraform on your system.",
        "Learn Terraform language syntax (HCL - HashiCorp Configuration Language).",
        "Understand Providers, Resources, and Data Sources.",
        "Write your first configuration to provision an AWS EC2 instance or S3 bucket."
      ],
    },
    {
      title: "Step 3: State Management & Variables",
      items: [
        "Understand how Terraform State works and why it’s critical.",
        "Use terraform init, plan, apply, destroy to manage your infrastructure.",
        "Work with input variables, output values, and local values.",
        "Securely store remote state in services like S3 with state locking (DynamoDB)."
      ],
    },
    {
      title: "Step 4: Modular & Reusable Infrastructure",
      items: [
        "Learn how to structure reusable Terraform modules.",
        "Organize your codebase with clear directory structures and workspaces.",
        "Use the Terraform Registry to import public modules.",
        "Version control your infrastructure using Git."
      ],
    },
    {
      title: "Step 5: Advanced Terraform Practices",
      items: [
        "Implement automation in CI/CD pipelines (GitHub Actions, GitLab CI).",
        "Apply security best practices and secret management with Vault or environment variables.",
        "Manage complex environments using workspaces and environment variables.",
        "Prepare for the HashiCorp Certified: Terraform Associate certification (optional)."
      ],
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Terraform Roadmap</h1>
      <p className="frontend-description">
        Learn Terraform step by step to provision and manage your infrastructure efficiently using code.
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
