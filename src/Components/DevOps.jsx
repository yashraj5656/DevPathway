import React from "react";
import "./Frontend.css"; // Reusing the same CSS styles

export default function DevOps() {
  const steps = [
    {
      step: "Step 1: Understand DevOps Culture",
      items: [
        "Learn what DevOps is and why it matters",
        "Understand CI/CD (Continuous Integration & Deployment)",
        "Familiarize yourself with Agile & Scrum methodologies",
        "Collaboration between Developers & Operations teams"
      ]
    },
    {
      step: "Step 2: Learn a Programming/Scripting Language",
      items: [
        "Bash / Shell Scripting",
        "Python (widely used in automation)",
        "Go (for building cloud-native tools)"
      ]
    },
    {
      step: "Step 3: Master Version Control",
      items: [
        "Git Basics & Branching Strategies",
        "GitHub / GitLab Workflows"
      ]
    },
    {
      step: "Step 4: Work with Linux Systems",
      items: [
        "Linux Command Line Essentials",
        "File Systems, Permissions, Process Management",
        "Networking & SSH"
      ]
    },
    {
      step: "Step 5: Learn about Infrastructure as Code (IaC)",
      items: [
        "Terraform — Infrastructure provisioning",
        "CloudFormation (AWS) or Pulumi",
        "Ansible for configuration management"
      ]
    },
    {
      step: "Step 6: Learn CI/CD Tools",
      items: [
        "Jenkins, GitHub Actions, GitLab CI/CD",
        "Build pipelines and automate deployments",
        "Automated Testing Integration"
      ]
    },
    {
      step: "Step 7: Containerization & Orchestration",
      items: [
        "Docker — Build and run containers",
        "Kubernetes — Container orchestration",
        "Helm Charts (for Kubernetes app deployments)"
      ]
    },
    {
      step: "Step 8: Cloud Platforms",
      items: [
        "Amazon Web Services (AWS) — Most popular",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)"
      ]
    },
    {
      step: "Step 9: Monitoring & Logging",
      items: [
        "Prometheus & Grafana for Monitoring",
        "ELK Stack (Elasticsearch, Logstash, Kibana)",
        "CloudWatch (AWS) or other monitoring tools"
      ]
    },
    {
      step: "Step 10: Continuous Learning & Security",
      items: [
        "Implement DevSecOps practices",
        "Secure CI/CD pipelines",
        "Learn about Zero Downtime Deployments",
        "Stay updated on cloud & automation trends"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">DevOps Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to build a strong DevOps skill set and automate your software development lifecycle.
      </p>

      {steps.map((section, index) => (
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
