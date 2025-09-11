import React from "react";
import "./Frontend.css";

export default function FullStackQuestions() {
  const questionSets = [
    {
      title: "General Full-Stack Concepts",
      items: [
        "What is a full-stack developer?",
        "Explain the difference between front-end and back-end development.",
        "What are some common full-stack tech stacks (e.g., MERN, MEAN)?",
        "What is the role of REST APIs in full-stack development?",
        "Explain how you handle authentication in a full-stack application."
      ],
    },
    {
      title: "Frontend-Specific Questions",
      items: [
        "What are the most important performance optimization techniques in frontend development?",
        "Explain the Virtual DOM in React and why it matters.",
        "How do you manage state in a React application?",
        "Explain how routing works in single-page applications.",
        "How do you consume APIs in a frontend application?"
      ],
    },
    {
      title: "Backend-Specific Questions",
      items: [
        "Explain how to create a REST API using Node.js and Express.",
        "How do you manage environment variables securely?",
        "What are ORMs (Object Relational Mappers)? Provide examples.",
        "How do you handle errors in a backend API?",
        "Explain the concept of middleware in Express.js."
      ],
    },
    {
      title: "Database & Deployment",
      items: [
        "Difference between SQL and NoSQL databases.",
        "Explain how to structure a database for a full-stack application.",
        "What are migrations and why are they important?",
        "How do you deploy a full-stack application on platforms like Heroku or Vercel?",
        "Explain CI/CD pipelines and their importance in deployment."
      ],
    },
    {
      title: "Practical Scenarios",
      items: [
        "Design a full-stack project to manage a library system.",
        "How would you implement role-based access control (RBAC)?",
        "Describe the flow of user registration and login in a full-stack app.",
        "How do you optimize a full-stack app for SEO?",
        "Explain how you would troubleshoot performance issues in a full-stack app."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Full-Stack Interview Questions</h1>
      <p className="frontend-description">
        Common full-stack interview questions covering frontend, backend, databases, and deployment.
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
