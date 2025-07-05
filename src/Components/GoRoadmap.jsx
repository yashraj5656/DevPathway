import React from "react";
import "./Frontend.css";

export default function GoRoadmap() {
  const steps = [
    {
      step: "Step 1: Setup and Basics",
      items: [
        "Install Go and Set Up GOPATH",
        "Understand Go CLI (go run, go build, go mod)",
        "Learn Go Syntax, Variables, and Data Types",
        "Work with Loops, Conditionals, and Functions"
      ]
    },
    {
      step: "Step 2: Master Go Fundamentals",
      items: [
        "Understand Structs and Interfaces",
        "Work with Arrays, Slices, and Maps",
        "Learn Pointers and Memory Management",
        "Handle Errors Effectively"
      ]
    },
    {
      step: "Step 3: Concurrency in Go",
      items: [
        "Learn Goroutines for Lightweight Threads",
        "Use Channels for Communication",
        "Understand Buffered vs Unbuffered Channels",
        "Explore WaitGroups and Mutexes"
      ]
    },
    {
      step: "Step 4: Build CLI Tools and Basic Applications",
      items: [
        "Create CLI Tools Using the 'flag' and 'cobra' Libraries",
        "Read and Write JSON, CSV, and YAML Files",
        "Work with Environment Variables and Configuration"
      ]
    },
    {
      step: "Step 5: Develop RESTful APIs",
      items: [
        "Use net/http Package for Basic Servers",
        "Build RESTful APIs with gorilla/mux or chi Routers",
        "Handle Middleware and Route Grouping",
        "Parse and Return JSON Responses"
      ]
    },
    {
      step: "Step 6: Database Integration",
      items: [
        "Connect to PostgreSQL/MySQL with sqlx or GORM",
        "Perform CRUD Operations",
        "Manage Migrations with golang-migrate"
      ]
    },
    {
      step: "Step 7: Authentication and Security",
      items: [
        "Implement JWT Authentication",
        "Use Middleware for Role-Based Authorization",
        "Secure APIs Against Common Vulnerabilities"
      ]
    },
    {
      step: "Step 8: Testing and Debugging",
      items: [
        "Write Unit Tests with go test",
        "Use Benchmarking and Profiling Tools",
        "Debug Using Delve (dlv)"
      ]
    },
    {
      step: "Step 9: Deploy Go Applications",
      items: [
        "Build Executables for Different Platforms",
        "Containerize Go Apps Using Docker",
        "Deploy to AWS, GCP, or DigitalOcean",
        "Automate CI/CD with GitHub Actions"
      ]
    },
    {
      step: "Step 10: Advanced Topics",
      items: [
        "Explore Microservices with gRPC",
        "Implement Caching with Redis",
        "Optimize Performance and Memory Usage",
        "Contribute to Open Source Go Projects"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Golang Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master Go for building scalable, concurrent web services, CLI tools, and microservices.
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
