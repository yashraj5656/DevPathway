import React from "react";
import "./Frontend.css";

export default function NodejsRoadmap() {
  const steps = [
    {
      step: "Step 1: Prerequisites",
      items: [
        "Master JavaScript (ES6+)",
        "Understand the Event Loop and Asynchronous Programming",
        "Learn Basic HTTP and REST APIs",
        "Familiarize Yourself with JSON and API Communication"
      ]
    },
    {
      step: "Step 2: Setup Node.js Environment",
      items: [
        "Install Node.js and npm",
        "Understand the Node.js Execution Model",
        "Learn how to Use the REPL",
        "Understand package.json and npm Scripts"
      ]
    },
    {
      step: "Step 3: Learn Core Node.js Modules",
      items: [
        "Work with File System (fs), Path, and OS Modules",
        "Understand Events and Streams",
        "Use HTTP Module to Create a Basic Server",
        "Learn Process and Child Process Modules"
      ]
    },
    {
      step: "Step 4: Build Servers with Express.js",
      items: [
        "Install and Use Express.js",
        "Set Up Routing and Middleware",
        "Serve Static Files",
        "Handle Errors and 404 Pages"
      ]
    },
    {
      step: "Step 5: Connect to Databases",
      items: [
        "Learn MongoDB with Mongoose",
        "Work with SQL Databases using Sequelize or Prisma",
        "Understand CRUD Operations in Databases",
        "Use Environment Variables for Database Configuration"
      ]
    },
    {
      step: "Step 6: API Development",
      items: [
        "Build RESTful APIs",
        "Understand API Authentication (JWT, OAuth)",
        "Handle API Versioning",
        "Learn about CORS and Rate Limiting"
      ]
    },
    {
      step: "Step 7: Testing and Debugging",
      items: [
        "Write Unit Tests with Jest or Mocha",
        "Use Supertest for API Testing",
        "Debug Applications using Node Inspector",
        "Lint and Format Code with ESLint and Prettier"
      ]
    },
    {
      step: "Step 8: Advanced Node.js Topics",
      items: [
        "Learn about Clustering and Worker Threads",
        "Explore Streams and Buffer",
        "Handle Async Errors Gracefully",
        "Understand Event Emitters Deeply"
      ]
    },
    {
      step: "Step 9: Optimize and Secure Node.js Apps",
      items: [
        "Implement Rate Limiting and Helmet.js for Security",
        "Optimize Performance and Memory Usage",
        "Log with Winston or Morgan",
        "Handle Unexpected Errors and Graceful Shutdown"
      ]
    },
    {
      step: "Step 10: Build Real-world Projects & Deploy",
      items: [
        "Create Complete CRUD Apps and RESTful APIs",
        "Deploy Apps on Heroku, Render, or DigitalOcean",
        "Use Docker for Containerization",
        "Implement CI/CD with GitHub Actions or Jenkins"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Node.js Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to become a proficient Node.js backend developer and build scalable server-side applications.
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
