import React from "react";
import "./Frontend.css";

export default function FrontendQuestions() {
  const questionSets = [
    {
      title: "HTML & CSS",
      items: [
        "What are semantic HTML elements? Give examples.",
        "Explain the difference between 'id' and 'class' in HTML.",
        "How does the CSS box model work?",
        "What is the difference between relative, absolute, and fixed positioning in CSS?",
        "How do you make a website responsive?"
      ],
    },
    {
      title: "JavaScript",
      items: [
        "Explain event bubbling and event delegation.",
        "What is the difference between '==' and '===' in JavaScript?",
        "What are closures in JavaScript?",
        "Explain promises and async/await in JavaScript.",
        "What is hoisting in JavaScript?"
      ],
    },
    {
      title: "Frontend Frameworks",
      items: [
        "What is React? Why is it popular?",
        "How does the Virtual DOM work?",
        "Explain component lifecycle methods in React.",
        "What are hooks in React? Name a few commonly used ones.",
        "How do you manage state in large React applications?"
      ],
    },
    {
      title: "Performance & Optimization",
      items: [
        "How do you optimize a web page for fast loading?",
        "What are lazy loading and code splitting?",
        "Explain how to improve website accessibility.",
        "What is a Content Delivery Network (CDN) and why is it used?",
        "How do you reduce render-blocking resources?"
      ],
    },
    {
      title: "Practical Scenarios",
      items: [
        "Build a responsive navigation bar using HTML, CSS, and JavaScript.",
        "Implement a form validation in React.",
        "How would you debug a cross-browser issue?",
        "Describe how you would implement dark mode on a website.",
        "Explain the difference between SSR, CSR, and SSG."
      ],
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Frontend Interview Questions</h1>
      <p className="frontend-description">
        Common frontend interview questions covering HTML, CSS, JavaScript, React, and performance optimization.
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
