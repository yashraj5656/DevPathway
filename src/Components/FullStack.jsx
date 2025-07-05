import React from "react";
import "./Frontend.css"; // Reusing the same styles

export default function FullStack() {
  const steps = [
    {
      step: "Step 1: Master Frontend Basics",
      items: [
        "HTML, CSS — Build & Style Webpages",
        "Responsive Design & Accessibility",
        "JavaScript Fundamentals (ES6+)",
        "Version Control with Git & GitHub"
      ]
    },
    {
      step: "Step 2: Learn a Frontend Framework",
      items: [
        "React.js (Recommended), Vue.js, or Angular",
        "Component-based Architecture",
        "Routing (React Router, Vue Router)",
        "State Management (Redux, Pinia, NgRx)"
      ]
    },
    {
      step: "Step 3: Build the Backend",
      items: [
        "Choose a Language: Node.js (JavaScript), Python, Java, or Go",
        "Frameworks: Express.js, Django, Spring Boot",
        "Build RESTful APIs or GraphQL APIs",
        "Implement Authentication & Authorization (JWT, OAuth)"
      ]
    },
    {
      step: "Step 4: Work with Databases",
      items: [
        "SQL Databases: PostgreSQL, MySQL",
        "NoSQL Databases: MongoDB",
        "ORMs (Prisma, Sequelize, Mongoose, TypeORM)"
      ]
    },
    {
      step: "Step 5: Manage Backend Infrastructure",
      items: [
        "Environment Variables (.env)",
        "Error Handling & Logging",
        "Process Managers like PM2"
      ]
    },
    {
      step: "Step 6: Understand DevOps Basics",
      items: [
        "Deploy using Vercel, Netlify, Railway, or AWS",
        "Basic CI/CD Pipelines (GitHub Actions)",
        "Use Docker for Containerization"
      ]
    },
    {
      step: "Step 7: Master API Communication",
      items: [
        "REST API Integration in Frontend",
        "Async/Await and API Error Handling",
        "WebSockets (optional)"
      ]
    },
    {
      step: "Step 8: Testing",
      items: [
        "Frontend: Jest, React Testing Library",
        "Backend: Supertest, Jest",
        "Integration & E2E Testing (Cypress, Playwright)"
      ]
    },
    {
      step: "Step 9: Optimize Performance",
      items: [
        "Frontend: Lazy Loading, Code Splitting",
        "Backend: Caching (Redis), Rate Limiting"
      ]
    },
    {
      step: "Step 10: Continuous Learning",
      items: [
        "Learn System Design",
        "Build Real-world Full Stack Projects",
        "Stay Updated with New Tools & Frameworks"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Full Stack Development Roadmap</h1>
      <p className="frontend-description">
        This roadmap guides you through mastering both frontend and backend development as a Full Stack Developer.
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
