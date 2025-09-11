import React from "react";
import "./Frontend.css";

export default function ReactQuestions() {
  const questionSets = [
    {
      title: "Basic React Questions",
      items: [
        "What is React and why is it used?",
        "What are components in React?",
        "What is the difference between functional and class components?",
        "Explain the concept of JSX.",
        "What are props in React?",
      ],
    },
    {
      title: "Intermediate React Questions",
      items: [
        "What is state in React and how is it used?",
        "Explain the useEffect Hook and its use cases.",
        "What are controlled and uncontrolled components?",
        "How do you lift state up in React?",
        "What is context in React and when should you use it?",
      ],
    },
    {
      title: "Advanced React Questions",
      items: [
        "What is React.memo and when should you use it?",
        "Explain the concept of reconciliation in React.",
        "How does React handle Virtual DOM updates?",
        "What are custom hooks and how do you create one?",
        "What are render props and higher-order components (HOCs)?",
      ],
    },
    {
      title: "React Performance Optimization",
      items: [
        "How do you optimize performance in a React application?",
        "Explain lazy loading and code splitting in React.",
        "What is the difference between useCallback and useMemo?",
        "How does React Profiler help in performance debugging?",
        "How do you prevent unnecessary re-renders in React components?",
      ],
    },
    {
      title: "Common Coding Questions",
      items: [
        "Build a counter app using React hooks.",
        "Create a form with validation using controlled components.",
        "Implement a simple to-do list in React.",
        "Use React Router to create multiple pages.",
        "Integrate a public API and display data in React."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">React Interview Questions</h1>
      <p className="frontend-description">
        Essential React interview questions covering fundamentals, hooks, performance, and practical coding.
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
