import React from "react";
import "./Frontend.css";

export default function NodeJSQuestions() {
  const questionSets = [
    {
      title: "Basic Node.js Questions",
      items: [
        "What is Node.js and why is it used?",
        "Explain the difference between Node.js and JavaScript in the browser.",
        "What are CommonJS and ES Modules?",
        "What is the use of the package.json file?",
        "Explain the concept of event-driven programming in Node.js.",
      ],
    },
    {
      title: "Intermediate Node.js Questions",
      items: [
        "What is the difference between process.nextTick(), setImmediate(), and setTimeout()?",
        "Explain how the Event Loop works in Node.js.",
        "What is middleware in Express.js?",
        "How do you handle asynchronous operations in Node.js?",
        "What are streams in Node.js? Explain their types.",
      ],
    },
    {
      title: "Advanced Node.js Questions",
      items: [
        "Explain the cluster module and how it helps with scalability.",
        "What are worker threads and when would you use them?",
        "Describe how you would secure a Node.js application.",
        "How do you handle memory leaks in a Node.js application?",
        "Explain how error handling works in asynchronous code.",
      ],
    },
    {
      title: "Node.js Tools & Libraries",
      items: [
        "What is Express.js? What are its alternatives?",
        "Explain the difference between Nodemon and PM2.",
        "What is dotenv and how do you use it?",
        "How do you manage environment variables in Node.js?",
        "What is CORS and how do you enable it in a Node.js application?"
      ],
    },
    {
      title: "Common Coding Questions",
      items: [
        "Create a basic Express.js server.",
        "Write an API endpoint that returns JSON data.",
        "Connect to a MongoDB database using Mongoose.",
        "Handle file uploads using Multer.",
        "Implement JWT authentication in Node.js."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Node.js Interview Questions</h1>
      <p className="frontend-description">
        Explore essential Node.js interview questions from beginner to advanced levels.
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
