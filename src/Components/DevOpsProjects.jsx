import React from "react";
import "./Frontend.css";

export default function DevOpsProjects() {
  const projectIdeas = [
    {
      title: "Beginner Projects",
      items: [
        "Set Up a CI/CD Pipeline with GitHub Actions",
        "Dockerize a Simple Node.js or Python App",
        "Write Shell Scripts for Automation",
        "Configure Nginx or Apache to Host a Static Website",
        "Deploy a Web App on Heroku or Railway"
      ]
    },
    {
      title: "Intermediate Projects",
      items: [
        "Build a Docker Compose Setup for Multi-Container Apps",
        "Automate Infrastructure with Terraform or Ansible",
        "Monitor Applications with Prometheus and Grafana",
        "Configure Jenkins Pipelines for Continuous Delivery",
        "Set Up SSL Certificates with Let's Encrypt",
        "Centralize Logs Using the ELK Stack (Elasticsearch, Logstash, Kibana)"
      ]
    },
    {
      title: "Advanced Projects",
      items: [
        "Deploy and Manage Kubernetes Clusters",
        "Create a GitOps Workflow Using ArgoCD",
        "Configure Auto Scaling on AWS/GCP/Azure",
        "Implement Blue/Green and Canary Deployments",
        "Manage Secrets Using HashiCorp Vault or AWS Secrets Manager"
      ]
    },
    {
      title: "Cloud & Deployment Projects",
      items: [
        "Deploy Microservices on AWS ECS or GCP Cloud Run",
        "Set Up a VPN or VPC for Cloud Security",
        "Deploy a Serverless Function (AWS Lambda, Azure Functions)"
      ]
    },
    {
      title: "Security and Best Practices Projects",
      items: [
        "Automate Vulnerability Scanning with Trivy or Snyk",
        "Set Up Role-Based Access Control (RBAC) in Kubernetes",
        "Monitor Infrastructure with CloudWatch, Datadog, or NewRelic",
        "Build Incident Response and Alerts with PagerDuty"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">DevOps Project Ideas</h1>
      <p className="frontend-description">
        Explore these project ideas to practice automation, deployment, and infrastructure management.
      </p>

      {projectIdeas.map((section, index) => (
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
