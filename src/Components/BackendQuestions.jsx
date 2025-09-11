import React from "react";
import "./Frontend.css";

export default function BackendQuestions() {
  const questionSets = [
    {
      title: "Basic Backend Concepts",
      items: [
        "What is the role of a backend developer?",
        "What is the difference between server-side and client-side?",
        "Explain the concept of RESTful APIs.",
        "What is the difference between synchronous and asynchronous programming?",
        "What are HTTP methods? Explain GET, POST, PUT, DELETE."
      ],
    },
    {
      title: "Databases & Storage",
      items: [
        "Difference between SQL and NoSQL databases.",
        "Explain how database indexing works.",
        "What is connection pooling?",
        "How do you design relationships between tables?",
        "How do you handle database migrations?"
      ],
    },
    {
      title: "Authentication & Authorization",
      items: [
        "Explain the difference between authentication and authorization.",
        "What is JWT and how does it work?",
        "How do you implement OAuth 2.0?",
        "What are session-based authentication and token-based authentication?",
        "How do you secure sensitive data like passwords?"
      ],
    },
    {
      title: "Performance & Scalability",
      items: [
        "What is caching and how does it help performance?",
        "Explain load balancing and its importance.",
        "How do you design an API for scalability?",
        "What is rate limiting and why is it important?",
        "How do you handle background jobs and queues in a backend system?"
      ],
    },
    {
      title: "Practical Coding Questions",
      items: [
        "Build a simple RESTful API for a blog.",
        "Implement file uploads in your backend.",
        "Write a route that performs CRUD operations on a database.",
        "Create an API endpoint that returns paginated data.",
        "Set up a basic authentication system using JWT."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Backend Interview Questions</h1>
      <p className="frontend-description">
        Key backend interview questions covering databases, APIs, security, and system design.
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
