import React from "react";
import "./Frontend.css";

export default function GolangQuestions() {
  const questionSets = [
    {
      title: "Basic Golang Questions",
      items: [
        "What is Go and why is it used?",
        "Explain the key features of Go.",
        "How do you declare variables in Go?",
        "What are Go routines?",
        "What is the purpose of the init() function in Go?",
      ],
    },
    {
      title: "Intermediate Golang Questions",
      items: [
        "Explain the difference between buffered and unbuffered channels.",
        "What is a struct in Go? How is it different from a class?",
        "Explain interfaces in Go with an example.",
        "How does Go handle error management?",
        "What is the purpose of the defer keyword?",
      ],
    },
    {
      title: "Advanced Golang Questions",
      items: [
        "Explain Go’s concurrency model and how it compares to multithreading.",
        "What are the common memory management strategies in Go?",
        "How does dependency management work in Go (Go modules)?",
        "Explain how to write unit tests in Go.",
        "Describe the garbage collection mechanism in Go.",
      ],
    },
    {
      title: "Go in Production",
      items: [
        "How do you build and deploy a Go application?",
        "What are the best practices for error handling in production Go code?",
        "How do you monitor and log Go applications?",
        "Explain how Go applications are packaged as Docker containers.",
        "What are the common Go frameworks for web development?",
      ],
    },
    {
      title: "Practical Challenges",
      items: [
        "Write a simple REST API using Go and Gin framework.",
        "Create a Go routine that processes jobs from a channel.",
        "Connect to a PostgreSQL database and query data.",
        "Implement a simple CLI application in Go.",
        "Write a concurrent program to process files in parallel."
      ],
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Golang Interview Questions</h1>
      <p className="frontend-description">
        Key Go interview questions covering concurrency, error handling, Go routines, interfaces, and practical use cases.
      </p>

      {questionSets.map((section, index) => (
        <div key={index} className="frontend-section">
          <h2 className="frontend-step-title">{section.title}</h2>
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
