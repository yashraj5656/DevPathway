import React from "react";
import "./Frontend.css";

export default function DevOpsQuestions() {
  const questionSets = [
    {
      title: "Fundamentals of DevOps",
      items: [
        "What is DevOps and why is it important?",
        "Explain the key principles of the DevOps lifecycle.",
        "What is the difference between Agile and DevOps?",
        "What are microservices and how do they relate to DevOps?",
        "Name some common DevOps tools and their uses."
      ],
    },
    {
      title: "CI/CD & Automation",
      items: [
        "Explain the CI/CD pipeline and its stages.",
        "What tools do you use for CI/CD? (e.g., Jenkins, GitHub Actions, GitLab CI)",
        "How do you implement automated testing in a CI pipeline?",
        "What is infrastructure as code (IaC)? Give examples.",
        "How do you automate application deployment?"
      ],
    },
    {
      title: "Containerization & Orchestration",
      items: [
        "What is Docker and why is it used?",
        "Explain the difference between Docker and a virtual machine.",
        "What is Kubernetes? Describe its architecture.",
        "How do you manage secrets in Kubernetes?",
        "What are pods and services in Kubernetes?"
      ],
    },
    {
      title: "Monitoring & Logging",
      items: [
        "What tools do you use for monitoring and alerting?",
        "Explain how Prometheus and Grafana work together.",
        "What is centralized logging? Name some tools for it.",
        "How do you troubleshoot production issues efficiently?",
        "What are SLAs, SLOs, and SLIs?"
      ],
    },
    {
      title: "Security & Best Practices",
      items: [
        "How do you secure your CI/CD pipelines?",
        "Explain role-based access control (RBAC) in cloud environments.",
        "What is vulnerability scanning and how do you implement it?",
        "How do you ensure compliance in a DevOps process?",
        "What are blue-green and canary deployments?"
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">DevOps Interview Questions</h1>
      <p className="frontend-description">
        Key DevOps interview questions covering CI/CD, automation, containerization, security, and monitoring.
      </p>

      {questionSets.map((section, index) => (
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
