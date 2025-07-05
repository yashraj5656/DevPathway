import React from "react";
import "./Frontend.css";

export default function Docker() {
  const steps = [
    {
      title: "Step 1: Docker Basics",
      items: [
        "Understand what containers are and how they differ from virtual machines.",
        "Learn Docker architecture: Docker Engine, Docker Hub, Docker CLI.",
        "Install Docker on your local machine.",
        "Learn basic Docker commands (docker run, build, ps, stop, exec).",
        "Understand Docker images and containers."
      ],
    },
    {
      title: "Step 2: Working with Docker Images",
      items: [
        "Learn to write a Dockerfile to build custom images.",
        "Understand how to use base images from Docker Hub.",
        "Learn how to tag, push, and pull Docker images.",
        "Optimize Docker images for size and performance."
      ],
    },
    {
      title: "Step 3: Docker Compose & Multi-Container Apps",
      items: [
        "Learn Docker Compose to define multi-container applications.",
        "Write docker-compose.yml files to link services like databases and APIs.",
        "Practice managing environment variables and volumes with Compose."
      ],
    },
    {
      title: "Step 4: Docker Networking & Volumes",
      items: [
        "Understand Docker networking modes (bridge, host, overlay).",
        "Configure custom Docker networks for containers to communicate.",
        "Learn about Docker volumes and how to persist data between container runs.",
        "Manage bind mounts vs named volumes."
      ],
    },
    {
      title: "Step 5: Docker in Production & Best Practices",
      items: [
        "Learn about Docker Swarm and Kubernetes for container orchestration.",
        "Use Docker Compose in CI/CD pipelines.",
        "Implement security best practices for Docker containers.",
        "Monitor containerized applications with tools like Prometheus & Grafana.",
        "Prepare for Docker Certified Associate (DCA) exam (optional)."
      ],
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Docker Roadmap</h1>
      <p className="frontend-description">
        Learn Docker step-by-step to containerize your applications and deploy them efficiently.
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
