import React from "react";
import "./Frontend.css";

export default function JavaScriptRoadmap() {
  const steps = [
    {
      step: "Step 1: Master JavaScript Basics",
      items: [
        "Learn Syntax, Variables (let, const, var)",
        "Understand Data Types and Type Conversion",
        "Master Operators and Control Flow (if, for, while)",
        "Learn Functions, Scope, and Hoisting",
        "Understand Arrays and Objects"
      ]
    },
    {
      step: "Step 2: Deep Dive into Functions",
      items: [
        "Learn Arrow Functions and Function Expressions",
        "Master Callback Functions and Higher-Order Functions",
        "Understand Closures and the Call Stack",
        "Practice IIFE (Immediately Invoked Function Expressions)"
      ]
    },
    {
      step: "Step 3: Master the DOM and Events",
      items: [
        "Learn DOM Selection (querySelector, getElementById)",
        "Manipulate DOM Elements Dynamically",
        "Handle Events: click, input, keydown, etc.",
        "Understand Event Delegation and Bubbling"
      ]
    },
    {
      step: "Step 4: Work with Asynchronous JavaScript",
      items: [
        "Understand Callbacks, Promises, and Async/Await",
        "Make HTTP Requests using fetch() and Axios",
        "Handle API Responses and Errors",
        "Work with JSON Data"
      ]
    },
    {
      step: "Step 5: Learn Object-Oriented Programming (OOP)",
      items: [
        "Understand Prototypes and Inheritance",
        "Master Classes, Constructors, and Instances",
        "Use Encapsulation, Polymorphism, and Abstraction in JS"
      ]
    },
    {
      step: "Step 6: Explore JavaScript ES6+ Features",
      items: [
        "Learn Destructuring, Spread/Rest Operators",
        "Master Template Literals and Default Parameters",
        "Use Modules (import/export)",
        "Understand Map, Set, and Symbol"
      ]
    },
    {
      step: "Step 7: Error Handling and Debugging",
      items: [
        "Use try...catch Blocks",
        "Handle Errors Gracefully in Async Code",
        "Debug Code Using Browser DevTools",
        "Understand Common JavaScript Errors"
      ]
    },
    {
      step: "Step 8: Build Projects to Strengthen Skills",
      items: [
        "Build To-Do Apps, Calculators, or Quiz Games",
        "Work on Weather Apps using APIs",
        "Create Interactive Forms and Single Page Applications (SPA)"
      ]
    },
    {
      step: "Step 9: Learn Advanced JavaScript Concepts",
      items: [
        "Master Event Loop and Concurrency Model",
        "Understand Closures, Currying, and Memoization",
        "Study Functional Programming Concepts in JS",
        "Explore Proxy, Reflect, and Typed Arrays"
      ]
    },
    {
      step: "Step 10: Keep Practicing and Stay Updated",
      items: [
        "Solve Challenges on CodeWars, LeetCode, or HackerRank",
        "Follow Modern JavaScript Updates (ES2020+)",
        "Join JS Communities and Read Blogs",
        "Explore TypeScript for Strong Typing"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">JavaScript Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master JavaScript and build dynamic, interactive web applications.
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
