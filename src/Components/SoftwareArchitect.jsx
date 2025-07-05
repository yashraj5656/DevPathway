import React from "react";
import "./Frontend.css";

export default function SoftwareArchitect() {
  const steps = [
    {
      step: "Step 1: Master Software Development Fundamentals",
      items: [
        "Solidify Programming Knowledge (Java, C#, Python, etc.)",
        "Deepen Understanding of Data Structures & Algorithms",
        "Master Object-Oriented Programming (OOP) Principles",
        "Version Control using Git & GitHub"
      ]
    },
    {
      step: "Step 2: Understand Software Architecture Concepts",
      items: [
        "Learn Different Architecture Styles (Monolithic, Microservices, SOA)",
        "Understand Design Patterns (Creational, Structural, Behavioral)",
        "Master Architectural Patterns (MVC, MVVM, Event-Driven, CQRS)",
        "Study SOLID & DRY Principles"
      ]
    },
    {
      step: "Step 3: Gain Proficiency in System Design",
      items: [
        "Design Scalable and Fault-Tolerant Systems",
        "Master Load Balancing, Caching, and Database Sharding",
        "Understand CAP Theorem and Consistency Models",
        "Design APIs and Workflows Efficiently"
      ]
    },
    {
      step: "Step 4: Learn Cloud & Deployment Architecture",
      items: [
        "Understand Cloud Platforms: AWS, Azure, GCP",
        "Design for High Availability & Disaster Recovery",
        "Use Containerization (Docker, Kubernetes)",
        "Know CI/CD Pipelines & Infrastructure as Code (Terraform, CloudFormation)"
      ]
    },
    {
      step: "Step 5: Master Database Design",
      items: [
        "Design Relational Databases (PostgreSQL, MySQL)",
        "Work with NoSQL Databases (MongoDB, Redis, DynamoDB)",
        "Plan for Data Modeling and Indexing",
        "Handle Migrations & Database Versioning"
      ]
    },
    {
      step: "Step 6: Prioritize Security & Compliance",
      items: [
        "Understand Authentication & Authorization (OAuth, JWT)",
        "Secure APIs & Data Encryption",
        "Follow Secure Software Development Lifecycle (SSDLC)",
        "Be Aware of Compliance Standards (GDPR, HIPAA)"
      ]
    },
    {
      step: "Step 7: Improve Performance & Optimization",
      items: [
        "Optimize Code for Performance & Maintainability",
        "Profile & Benchmark Applications",
        "Use Caching Layers (Redis, CDN)",
        "Monitor & Alert for System Health"
      ]
    },
    {
      step: "Step 8: Develop Leadership & Communication Skills",
      items: [
        "Collaborate with Development & Product Teams",
        "Document Architectural Decisions (ADR)",
        "Conduct Code Reviews & Mentoring",
        "Present Architecture to Stakeholders"
      ]
    },
    {
      step: "Step 9: Stay Updated with Modern Practices",
      items: [
        "Learn Domain-Driven Design (DDD)",
        "Explore Event Sourcing & CQRS",
        "Study Serverless Architecture",
        "Understand Edge Computing & Emerging Tech"
      ]
    },
    {
      step: "Step 10: Continuous Learning & Growth",
      items: [
        "Participate in Architecture Forums & Meetups",
        "Contribute to Open Source Design Projects",
        "Read Architecture Books & Case Studies",
        "Stay Updated on Industry Trends"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Software Architect Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to transition from a senior developer to a software architect, mastering system design, scalability, and leadership.
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
