import React from "react";
import "./Frontend.css";

export default function JavaScriptQuestions() {
  const questionSets = [
    {
      title: "Basic JavaScript Questions",
      items: [
        "What are var, let, and const? Explain the differences.",
        "Explain the concept of hoisting in JavaScript.",
        "What is the difference between == and ===?",
        "What are JavaScript data types?",
        "How does the event loop work in JavaScript?",
      ],
    },
    {
      title: "Intermediate JavaScript Questions",
      items: [
        "Explain closures and provide an example use case.",
        "What is the difference between synchronous and asynchronous code?",
        "Describe promises and async/await in JavaScript.",
        "Explain prototypal inheritance.",
        "What is the difference between call, apply, and bind?",
      ],
    },
    {
      title: "Advanced JavaScript Questions",
      items: [
        "Explain currying and how it works in JavaScript.",
        "What is a debounce function and how do you implement it?",
        "What are service workers and how do they help in PWA?",
        "How does JavaScript garbage collection work?",
        "Explain the concept of event delegation.",
      ],
    },
    {
      title: "JavaScript Concepts & Features",
      items: [
        "What are ES6 modules?",
        "Explain destructuring in JavaScript.",
        "What is the difference between map, filter, and reduce?",
        "Explain template literals and tagged templates.",
        "What are generators and iterators in JavaScript?",
      ],
    },
    {
      title: "Common Coding Questions",
      items: [
        "Reverse a string in JavaScript.",
        "Find the largest number in an array.",
        "Check if a string is a palindrome.",
        "Flatten a nested array.",
        "Write a deep clone function."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">JavaScript Interview Questions</h1>
      <p className="frontend-description">
        Here are some commonly asked JavaScript interview questions categorized by difficulty.
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
