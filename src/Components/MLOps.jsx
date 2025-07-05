import React from "react";
import "./Frontend.css";

export default function MLOps() {
  const steps = [
    {
      step: "Step 1: Understand the Basics of Machine Learning",
      items: [
        "Learn Machine Learning Fundamentals",
        "Study Model Development Lifecycle",
        "Understand Data Preparation, Training, and Evaluation",
        "Work with ML Frameworks: Scikit-learn, TensorFlow, PyTorch"
      ]
    },
    {
      step: "Step 2: Master Software Engineering & DevOps Fundamentals",
      items: [
        "Learn Git and Version Control",
        "Understand Continuous Integration / Continuous Deployment (CI/CD)",
        "Familiarize Yourself with Docker and Kubernetes",
        "Use Bash, Linux, and Cloud Platforms (AWS, Azure, GCP)"
      ]
    },
    {
      step: "Step 3: Learn Data Engineering for ML",
      items: [
        "Handle Large Datasets Using Pandas, Spark, and SQL",
        "Use Data Pipelines with Airflow, Prefect, or Kubeflow",
        "Understand ETL/ELT Processes",
        "Practice Data Versioning with DVC or LakeFS"
      ]
    },
    {
      step: "Step 4: Implement Model Versioning & Tracking",
      items: [
        "Use MLflow or Weights & Biases for Experiment Tracking",
        "Version ML Models and Artifacts",
        "Track Data and Model Metadata",
        "Manage Multiple Model Versions in Production"
      ]
    },
    {
      step: "Step 5: Build ML Pipelines",
      items: [
        "Automate Data Preprocessing, Training, and Evaluation",
        "Use Pipelines with Kubeflow Pipelines or Vertex AI",
        "Set Up Event-Driven Training Jobs",
        "Integrate Unit Tests and Validation in ML Pipelines"
      ]
    },
    {
      step: "Step 6: Deploy Models to Production",
      items: [
        "Deploy Using Docker Containers or Serverless Platforms",
        "Expose ML Models via RESTful APIs (FastAPI, Flask, Django)",
        "Deploy on Kubernetes, AWS SageMaker, Azure ML, or GCP AI Platform",
        "Implement Blue/Green & Canary Deployments"
      ]
    },
    {
      step: "Step 7: Monitor and Maintain ML Models",
      items: [
        "Set Up Monitoring for Drift Detection (Data Drift, Concept Drift)",
        "Track Model Performance and Latency",
        "Implement Logging and Alerting",
        "Retrain or Rollback Models Based on Monitoring Results"
      ]
    },
    {
      step: "Step 8: Secure ML Systems",
      items: [
        "Apply Role-Based Access Control (RBAC)",
        "Secure Data Pipelines and APIs",
        "Manage Secrets and API Keys Securely",
        "Understand Adversarial ML Attacks and Defenses"
      ]
    },
    {
      step: "Step 9: Practice Cloud-Native MLOps",
      items: [
        "Automate Infrastructure as Code (Terraform, CloudFormation)",
        "Use Managed ML Platforms (SageMaker, Vertex AI, Azure ML)",
        "Practice Multi-Cloud or Hybrid Deployments",
        "Optimize Cost and Resource Usage in Cloud ML Workloads"
      ]
    },
    {
      step: "Step 10: Continuous Learning & Certifications",
      items: [
        "Earn Certifications: TensorFlow Developer, Google Cloud ML Engineer, AWS Certified ML",
        "Stay Updated on MLOps Tools & Best Practices",
        "Join MLOps Communities (MLOps Community, Paperspace)",
        "Contribute to Open Source MLOps Projects"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">MLOps Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master MLOps, from building ML pipelines to deploying and monitoring machine learning models in production.
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
