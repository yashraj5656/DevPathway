import React from "react";
import "./Frontend.css"; // Reusing the same CSS for styling

export default function Backend() {
  const steps = [
    {
      step: "Step 1: Learn the Basics of Backend",
      items: [
        "How the Web Works (Client-Server Architecture, HTTP/HTTPS)",
        "Basic Terminal/Command Line Usage",
        "Version Control with Git & GitHub"
      ]
    },
    {
      step: "Step 2: Choose a Programming Language",
      items: [
        "Node.js (JavaScript) — Recommended for beginners",
        "Python (Flask, Django)",
        "Java (Spring Boot)",
        "Go, Ruby, PHP, or C#"
      ]
    },
    {
      step: "Step 3: Understand Package Managers",
      items: [
        "npm / yarn for Node.js",
        "pip for Python",
        "Maven / Gradle for Java"
      ]
    },
    {
      step: "Step 4: Master Databases",
      items: [
        "SQL Databases: MySQL, PostgreSQL",
        "NoSQL Databases: MongoDB, Redis",
        "Basic Database Design & Relationships",
        "Writing Queries & Joins"
      ]
    },
    {
      step: "Step 5: Learn about REST APIs & CRUD",
      items: [
        "Build APIs with Express.js / Django / Spring Boot",
        "CRUD Operations (Create, Read, Update, Delete)",
        "HTTP Methods: GET, POST, PUT, DELETE",
        "Status Codes and API Responses"
      ]
    },
    {
      step: "Step 6: Authentication & Authorization",
      items: [
        "User Authentication (JWT, OAuth 2.0, Sessions)",
        "Role-based Access Control"
      ]
    },
    {
      step: "Step 7: Advanced Backend Concepts",
      items: [
        "Middleware, Error Handling",
        "Async Programming, Background Jobs",
        "API Rate Limiting, Caching (Redis)"
      ]
    },
    {
      step: "Step 8: Deployment & Hosting",
      items: [
        "Deploying Apps on Vercel, Railway, Render, Heroku, AWS, DigitalOcean",
        "Environment Variables & Secrets",
        "Process Management (PM2 for Node.js)"
      ]
    },
    {
      step: "Step 9: Learn about APIs & Tools",
      items: [
        "GraphQL (Optional)",
        "API Documentation: Swagger, Postman",
        "Logging, Monitoring, Health Checks"
      ]
    },
    {
      step: "Step 10: Continuous Learning",
      items: [
        "System Design Basics",
        "Docker & Containerization",
        "Message Brokers (RabbitMQ, Kafka)",
        "Build Personal Projects"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Backend Development Roadmap</h1>
      <p className="frontend-description">
        Follow these steps in order to master backend development and build scalable server-side applications.
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
