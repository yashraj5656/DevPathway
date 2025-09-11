import React from "react";
import "./Frontend.css";

export default function AspNetCoreRoadmap() {
  const steps = [
    {
      step: "Step 1: Prerequisites",
      items: [
        "Understand C# Basics (Variables, OOP, LINQ)",
        "Learn the .NET Ecosystem & CLI",
        "Set up Visual Studio or VS Code",
        "Familiarize Yourself with HTTP Basics & RESTful APIs"
      ]
    },
    {
      step: "Step 2: Getting Started with ASP.NET Core",
      items: [
        "Create Your First ASP.NET Core Project",
        "Understand Project Structure and Configuration",
        "Learn Middleware, Routing, and Controllers",
        "Build Your First API Endpoint"
      ]
    },
    {
      step: "Step 3: Model-View-Controller (MVC) Pattern",
      items: [
        "Understand the MVC Architecture",
        "Create Models, Views, and Controllers",
        "Bind Data Between Views and Controllers",
        "Use View Models and Data Validation"
      ]
    },
    {
      step: "Step 4: Database Integration with Entity Framework Core",
      items: [
        "Learn ORM Concepts",
        "Configure Entity Framework Core",
        "Perform Migrations and Seeding",
        "Implement CRUD Operations"
      ]
    },
    {
      step: "Step 5: Dependency Injection and Configuration",
      items: [
        "Use Built-in Dependency Injection",
        "Register Services and Repositories",
        "Work with Configuration Files and Options Pattern"
      ]
    },
    {
      step: "Step 6: Authentication and Authorization",
      items: [
        "Implement JWT or Cookie-based Authentication",
        "Use ASP.NET Core Identity for User Management",
        "Apply Role-based and Policy-based Authorization",
        "Secure Endpoints and Sensitive Data"
      ]
    },
    {
      step: "Step 7: API Development Best Practices",
      items: [
        "Create RESTful APIs Following Best Practices",
        "Handle Errors and Responses Consistently",
        "Implement API Versioning and Pagination",
        "Enable CORS for Cross-origin Access"
      ]
    },
    {
      step: "Step 8: Testing and Debugging",
      items: [
        "Write Unit and Integration Tests with xUnit and Moq",
        "Debug Using Visual Studio Debugger",
        "Log Using Serilog or NLog"
      ]
    },
    {
      step: "Step 9: Deployment and CI/CD",
      items: [
        "Publish Apps to IIS, Azure, or Docker",
        "Configure CI/CD Pipelines using GitHub Actions, Azure DevOps, or Jenkins",
        "Handle Environment Variables and Secrets in Production"
      ]
    },
    {
      step: "Step 10: Advanced Topics",
      items: [
        "Use SignalR for Real-time Communication",
        "Optimize Performance with Caching and Compression",
        "Explore gRPC and Minimal APIs",
        "Understand Microservices with ASP.NET Core"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">ASP.NET Core Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master ASP.NET Core and build scalable, secure, and maintainable web applications.
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
