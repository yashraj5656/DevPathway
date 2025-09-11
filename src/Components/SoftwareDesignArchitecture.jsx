import React from "react";
import "./Frontend.css";

export default function SoftwareDesignArchitecture() {
  const steps = [
    {
      step: "Step 1: Understand Software Design Principles",
      items: [
        "Learn SOLID Principles",
        "Understand DRY, KISS, and YAGNI Principles",
        "Practice Separation of Concerns and Single Responsibility Principle",
        "Familiarize with Design Patterns (Factory, Singleton, Strategy, etc.)"
      ]
    },
    {
      step: "Step 2: Learn Software Architecture Basics",
      items: [
        "Understand the Differences Between Monolithic, Microservices, and Serverless Architectures",
        "Learn About Layered Architecture (Presentation, Business, Data Layers)",
        "Explore MVC, MVVM, and Clean Architecture Patterns",
        "Study Hexagonal (Ports and Adapters) Architecture"
      ]
    },
    {
      step: "Step 3: Master System Design Concepts",
      items: [
        "Learn High-Level System Design Approaches",
        "Study Databases, Caching, and Message Queues",
        "Understand Load Balancers, API Gateways, and CDN",
        "Design Scalable and Fault-Tolerant Systems"
      ]
    },
    {
      step: "Step 4: Dive Into Design Patterns in Practice",
      items: [
        "Apply Creational Patterns (Builder, Factory)",
        "Use Structural Patterns (Adapter, Decorator, Facade)",
        "Implement Behavioral Patterns (Observer, Command, State)"
      ]
    },
    {
      step: "Step 5: Architectural Styles",
      items: [
        "Understand REST and GraphQL Architectures",
        "Explore Event-Driven Architecture (EDA)",
        "Learn Microservices Communication (REST, gRPC, Message Brokers)",
        "Study Domain-Driven Design (DDD) Fundamentals"
      ]
    },
    {
      step: "Step 6: Documentation and Diagrams",
      items: [
        "Create UML Class and Sequence Diagrams",
        "Use C4 Model for System Architecture Visualization",
        "Document APIs with OpenAPI/Swagger",
        "Document System Design Decisions with ADRs"
      ]
    },
    {
      step: "Step 7: Deployment and Scalability",
      items: [
        "Deploy with CI/CD Pipelines",
        "Design for Horizontal and Vertical Scaling",
        "Understand Distributed Systems Challenges (CAP Theorem, Eventual Consistency)"
      ]
    },
    {
      step: "Step 8: Performance, Monitoring, and Security",
      items: [
        "Optimize API and Database Performance",
        "Add Logging, Monitoring (Prometheus, ELK Stack)",
        "Secure Architectures Against Common Threats",
        "Handle Secrets Management and Encryption"
      ]
    },
    {
      step: "Step 9: Cloud Architecture Concepts",
      items: [
        "Design Cloud-Native Applications (AWS, Azure, GCP)",
        "Understand Infrastructure as Code (Terraform, CloudFormation)",
        "Design for High Availability and Disaster Recovery"
      ]
    },
    {
      step: "Step 10: Practice and Real-World Experience",
      items: [
        "Solve System Design Interview Questions",
        "Build and Document Personal Architecture Projects",
        "Review Open Source Architectures",
        "Continuously Refactor and Improve Designs"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Software Design & Architecture Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master software design principles, architecture patterns, and build scalable, maintainable systems.
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
