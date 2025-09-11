import React from "react";
import "./Frontend.css";

export default function APIDesignRoadmap() {
  const steps = [
    {
      step: "Step 1: Understand API Basics",
      items: [
        "Learn What an API is and How it Works",
        "Understand RESTful API Principles",
        "Familiarize Yourself with HTTP Methods: GET, POST, PUT, DELETE, PATCH",
        "Understand Status Codes and Headers"
      ]
    },
    {
      step: "Step 2: Plan the API Architecture",
      items: [
        "Identify Resources and Define Clear Endpoints",
        "Follow Consistent URL Naming Conventions",
        "Design for Versioning from the Start (/v1/, /v2/)",
        "Decide Between REST, GraphQL, or gRPC based on Needs"
      ]
    },
    {
      step: "Step 3: Design the Request & Response Format",
      items: [
        "Use JSON as the Standard Response Format",
        "Structure Responses Consistently: Success & Error",
        "Include Metadata in Responses (Pagination, Count)",
        "Avoid Over-fetching and Under-fetching of Data"
      ]
    },
    {
      step: "Step 4: Implement Authentication & Authorization",
      items: [
        "Secure APIs with OAuth 2.0, JWT, or API Keys",
        "Handle Role-based Access Control (RBAC)",
        "Use HTTPS Everywhere",
        "Implement Rate Limiting and IP Whitelisting"
      ]
    },
    {
      step: "Step 5: Handle Error Responses Gracefully",
      items: [
        "Use Clear and Meaningful Status Codes (400, 401, 403, 404, 500)",
        "Provide Descriptive Error Messages",
        "Include an Error Code or Error Type for Developers",
        "Handle Edge Cases and Bad Requests Gracefully"
      ]
    },
    {
      step: "Step 6: Document the API",
      items: [
        "Write API Documentation with Swagger/OpenAPI",
        "Create Usage Examples for Each Endpoint",
        "Provide Authentication Instructions",
        "Use Postman Collections for API Testing"
      ]
    },
    {
      step: "Step 7: Test the API Thoroughly",
      items: [
        "Write Unit Tests for API Logic",
        "Create Integration Tests with Supertest, Jest, or Mocha",
        "Automate Tests in CI/CD Pipelines",
        "Use Mock Servers for Frontend-Backend Sync"
      ]
    },
    {
      step: "Step 8: Optimize for Performance & Scalability",
      items: [
        "Implement Caching with Redis or CDN",
        "Optimize Database Queries and Indexing",
        "Minimize API Latency and Payload Size",
        "Use Pagination and Filtering for Large Datasets"
      ]
    },
    {
      step: "Step 9: Monitor & Log API Usage",
      items: [
        "Log API Requests and Errors with Winston or Morgan",
        "Monitor Performance with Prometheus, Grafana, or New Relic",
        "Track API Usage Analytics"
      ]
    },
    {
      step: "Step 10: Deploy and Maintain the API",
      items: [
        "Deploy on Cloud Platforms: AWS, Azure, Google Cloud",
        "Use Docker for Containerization",
        "Set Up CI/CD for Continuous Deployment",
        "Plan for Backward Compatibility and Upgrades"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">API Design Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to design, build, secure, and maintain scalable and maintainable APIs.
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
