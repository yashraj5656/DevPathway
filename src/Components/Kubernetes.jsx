import React from "react";
import "./Frontend.css";

export default function Kubernetes() {
  const steps = [
    {
      title: "Step 1: Kubernetes Basics",
      items: [
        "Understand the purpose of Kubernetes and why it is used.",
        "Learn the Kubernetes architecture: master node, worker nodes, etcd.",
        "Install Minikube or use a managed Kubernetes service (EKS, AKS, GKE).",
        "Learn how to use kubectl for managing clusters.",
        "Understand Pods, Nodes, and Clusters."
      ],
    },
    {
      title: "Step 2: Core Kubernetes Resources",
      items: [
        "Learn how to create and manage Deployments, ReplicaSets, and Services.",
        "Understand ConfigMaps and Secrets for configuration management.",
        "Explore Namespaces to organize and isolate resources.",
        "Use Labels and Selectors to manage and query Kubernetes objects."
      ],
    },
    {
      title: "Step 3: Networking & Storage",
      items: [
        "Understand Kubernetes networking fundamentals (ClusterIP, NodePort, LoadBalancer).",
        "Use Ingress Controllers for external HTTP/HTTPS traffic routing.",
        "Learn about Persistent Volumes (PV) and Persistent Volume Claims (PVC).",
        "Configure dynamic storage provisioning."
      ],
    },
    {
      title: "Step 4: Scaling, Monitoring, & Logging",
      items: [
        "Configure Horizontal Pod Autoscaling (HPA).",
        "Use readiness and liveness probes for better app health management.",
        "Monitor your cluster using Prometheus and Grafana.",
        "Collect and centralize logs with Fluentd and Elasticsearch."
      ],
    },
    {
      title: "Step 5: CI/CD & Security Best Practices",
      items: [
        "Integrate Kubernetes into CI/CD pipelines (e.g., GitHub Actions, Jenkins).",
        "Secure your Kubernetes cluster using RBAC and Network Policies.",
        "Scan containers for vulnerabilities before deployment.",
        "Manage secrets securely with tools like HashiCorp Vault.",
        "Prepare for Certified Kubernetes Administrator (CKA) certification (optional)."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Kubernetes Roadmap</h1>
      <p className="frontend-description">
        Follow this roadmap to master Kubernetes for deploying, scaling, and managing containerized applications.
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
