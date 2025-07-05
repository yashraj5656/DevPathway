import React from "react";
import "./Frontend.css";

export default function BackendPerformance() {
  const bestPractices = [
    {
      step: "Step 1: Optimize Database Queries",
      items: [
        "Use Indexes on Frequently Queried Columns",
        "Avoid N+1 Query Problems (Use Joins or Batch Queries)",
        "Use Efficient Query Patterns and Avoid SELECT *",
        "Leverage Connection Pooling for Databases"
      ]
    },
    {
      step: "Step 2: Improve API and Server Response",
      items: [
        "Implement Caching Using Redis or Memcached",
        "Use Pagination and Limit Responses in APIs",
        "Compress API Responses (Gzip, Brotli)",
        "Handle Asynchronous Processing for Heavy Tasks"
      ]
    },
    {
      step: "Step 3: Efficient Code and Framework Use",
      items: [
        "Use Lightweight Frameworks for Microservices",
        "Optimize Loops, Recursion, and Algorithms",
        "Reduce Third-party Library Overhead",
        "Profile and Optimize Bottlenecks"
      ]
    },
    {
      step: "Step 4: Optimize Networking and HTTP",
      items: [
        "Use HTTP/2 or HTTP/3 for Faster Communication",
        "Optimize Keep-Alive and Connection Reuse",
        "Implement API Rate Limiting and Throttling",
        "Minimize Network Round-Trips"
      ]
    },
    {
      step: "Step 5: Scalable Infrastructure Design",
      items: [
        "Use Load Balancers to Distribute Traffic",
        "Deploy Services on Scalable Platforms (AWS, GCP, Azure)",
        "Auto-scale Instances Based on Load",
        "Use CDN for Static Content"
      ]
    },
    {
      step: "Step 6: Optimize I/O and Disk Usage",
      items: [
        "Use Efficient File Systems and Block Storage",
        "Stream Large Files Instead of Loading Them Fully",
        "Optimize Logging (Use Async Logging, Set Proper Log Levels)"
      ]
    },
    {
      step: "Step 7: Performance Monitoring and Alerts",
      items: [
        "Monitor Latency, Error Rates, and Throughput (APM Tools like New Relic, Datadog)",
        "Set Up Real-time Alerts for Performance Degradation",
        "Analyze Logs with ELK or CloudWatch"
      ]
    },
    {
      step: "Step 8: Best Practices in Deployment",
      items: [
        "Use Docker or Containers for Consistent Deployments",
        "Implement Blue-Green or Canary Deployments to Reduce Downtime",
        "Optimize Startup Time of Services"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Backend Performance Best Practices</h1>
      <p className="frontend-description">
        Follow these practices to optimize your backend services for speed, scalability, and efficiency.
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
