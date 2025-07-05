import React from "react";
import "./Frontend.css";

export default function RustRoadmap() {
  const steps = [
    {
      step: "Step 1: Setup and Basics",
      items: [
        "Install Rust using rustup",
        "Learn Cargo (Rust’s package manager and build tool)",
        "Understand Rust Syntax, Variables, and Data Types",
        "Write Basic Programs with Functions, Loops, and Conditionals"
      ]
    },
    {
      step: "Step 2: Ownership and Borrowing",
      items: [
        "Master Rust's Ownership Model",
        "Understand Borrowing and References",
        "Handle Lifetimes and Mutability Safely",
        "Practice with the Borrow Checker"
      ]
    },
    {
      step: "Step 3: Data Structures and Collections",
      items: [
        "Work with Structs, Enums, and Pattern Matching",
        "Use Collections: Vectors, HashMaps, Strings",
        "Handle Option and Result Types for Error Handling"
      ]
    },
    {
      step: "Step 4: Concurrency and Multithreading",
      items: [
        "Use Threads and Channels",
        "Explore async/await for Asynchronous Programming",
        "Work with the Tokio or async-std Runtime"
      ]
    },
    {
      step: "Step 5: File I/O and Networking",
      items: [
        "Read and Write Files using std::fs",
        "Handle JSON, CSV, and YAML",
        "Build Simple HTTP Clients and Servers"
      ]
    },
    {
      step: "Step 6: Build CLI Tools and Libraries",
      items: [
        "Create CLI Tools using clap or structopt",
        "Write Reusable Libraries (crates)",
        "Publish Packages to crates.io"
      ]
    },
    {
      step: "Step 7: Web Development",
      items: [
        "Use Rocket or Actix-web to Build Web Servers",
        "Create RESTful APIs",
        "Integrate with Databases using Diesel or SQLx",
        "Handle Authentication and Middleware"
      ]
    },
    {
      step: "Step 8: Testing and Best Practices",
      items: [
        "Write Unit and Integration Tests",
        "Use rustfmt and clippy for Linting and Formatting",
        "Understand Error Handling Best Practices"
      ]
    },
    {
      step: "Step 9: Deployment and DevOps",
      items: [
        "Build Static Binaries for Cross-platform Deployment",
        "Containerize Apps Using Docker",
        "Deploy to Cloud Services (AWS Lambda, DigitalOcean, Heroku)",
        "Automate CI/CD with GitHub Actions"
      ]
    },
    {
      step: "Step 10: Advanced Rust Topics",
      items: [
        "Explore Unsafe Rust and FFI (Foreign Function Interface)",
        "Learn About Macros and Procedural Macros",
        "Work with Embedded Rust (microcontrollers)",
        "Contribute to Rust Open Source Projects"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Rust Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master Rust for building safe, fast, and concurrent systems and web applications.
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
