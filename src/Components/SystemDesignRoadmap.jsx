import React from "react";
import "./Frontend.css";

export default function SystemDesignRoadmap() {
  const steps = [
    {
      step: "Step 1: Understand the Fundamentals",
      items: [
        "Learn how the Internet Works (DNS, HTTP/HTTPS, SSL)",
        "Understand Client-Server Architecture",
        "Study Basic Networking Concepts: IP, TCP, UDP, Load Balancers",
        "Familiarize Yourself with RESTful APIs and WebSockets"
      ]
    },
    {
      step: "Step 2: Learn Databases & Storage Systems",
      items: [
        "Master SQL Databases (MySQL, PostgreSQL)",
        "Learn NoSQL Databases (MongoDB, Redis, Cassandra)",
        "Understand Database Indexing, Sharding, and Replication",
        "Study Caching Techniques and CDN (Content Delivery Networks)"
      ]
    },
    {
      step: "Step 3: Scalability & Performance",
      items: [
        "Learn Horizontal and Vertical Scaling",
        "Understand Load Balancing and Auto-scaling",
        "Work with Caching Layers: Redis, Memcached",
        "Study Performance Optimization and Rate Limiting"
      ]
    },
    {
      step: "Step 4: High Availability & Fault Tolerance",
      items: [
        "Understand Redundancy, Failover Systems, and Replication",
        "Implement Health Checks and Auto-healing Mechanisms",
        "Use Distributed Systems Principles: CAP Theorem, Consensus Algorithms"
      ]
    },
    {
      step: "Step 5: Messaging & Event-Driven Architecture",
      items: [
        "Learn Message Brokers: RabbitMQ, Kafka, SQS",
        "Understand Pub/Sub and Event Queues",
        "Work with Microservices and Event-driven Systems"
      ]
    },
    {
      step: "Step 6: Security & Authentication",
      items: [
        "Learn OAuth, JWT, and API Key Authentication",
        "Implement Encryption (TLS, HTTPS, AES)",
        "Understand Security Best Practices: CORS, XSS, SQL Injection Prevention",
        "Handle Rate Limiting and Abuse Protection"
      ]
    },
    {
      step: "Step 7: Monitoring & Logging",
      items: [
        "Use Logging Tools: ELK Stack, Graylog",
        "Set Up Monitoring: Prometheus, Grafana, CloudWatch",
        "Understand Alerting and Incident Response"
      ]
    },
    {
      step: "Step 8: Design Patterns & Trade-offs",
      items: [
        "Study Common System Design Patterns (CQRS, Saga, Circuit Breaker)",
        "Understand Trade-offs: Consistency vs. Availability, Latency vs. Throughput",
        "Learn API Gateway and Backend-for-Frontend (BFF) Patterns"
      ]
    },
    {
      step: "Step 9: Design Real-world Systems",
      items: [
        "Design Scalable URL Shorteners (like Bitly)",
        "Build Social Media Feed Systems (like Instagram, Twitter)",
        "Design Chat Systems (WhatsApp, Slack)",
        "Build Scalable File Storage (Google Drive, Dropbox)"
      ]
    },
    {
      step: "Step 10: Practice & Mock Interviews",
      items: [
        "Solve System Design Problems on Educative, Exponent, or LeetCode Discuss",
        "Participate in Mock Interviews and System Design Sessions",
        "Read Case Studies from FAANG and Large-scale Systems",
        "Stay Updated on New Architecture Trends"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">System Design Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master system design and architect scalable, reliable, and efficient distributed systems.
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
