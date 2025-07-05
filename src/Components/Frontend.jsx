import React from "react";
import "./Frontend.css";

export default function Frontend() {
  const steps = [
    {
      step: "Step 1: Learn the Basics",
      items: [
        "HTML — Build web page structure",
        "CSS — Style your pages (Flexbox, Grid, Media Queries)",
        "Basic SEO — Make your pages discoverable",
        "Basic Accessibility (a11y) — Make your pages usable for everyone"
      ]
    },
    {
      step: "Step 2: Master JavaScript",
      items: [
        "JavaScript Syntax & Fundamentals",
        "DOM Manipulation",
        "ES6+ Features (let, const, arrow functions, destructuring, etc.)",
        "Async JavaScript (Promises, async/await, fetch)"
      ]
    },
    {
      step: "Step 3: Version Control",
      items: [
        "Git Basics (clone, commit, push, pull)",
        "GitHub & Remote Repositories"
      ]
    },
    {
      step: "Step 4: Learn a Frontend Library",
      items: [
        "React.js (recommended) or Vue.js or Angular",
        "JSX, Components, Props, State, Hooks (if React)",
        "Routing (React Router, Vue Router, etc.)"
      ]
    },
    {
      step: "Step 5: Advanced Styling",
      items: [
        "Sass, Less, or PostCSS",
        "Component-based Styling (Styled Components, Emotion)",
        "Utility Frameworks (Tailwind CSS, Bootstrap)"
      ]
    },
    {
      step: "Step 6: API Integration",
      items: [
        "REST APIs using Fetch or Axios",
        "Working with GraphQL (optional)"
      ]
    },
    {
      step: "Step 7: Build & Optimize",
      items: [
        "Basic Build Tools: npm, webpack, vite",
        "Performance Optimization (lazy loading, code splitting)"
      ]
    },
    {
      step: "Step 8: Testing & Debugging",
      items: [
        "Chrome DevTools",
        "Unit Testing (Jest, Mocha)",
        "Component Testing (React Testing Library)"
      ]
    },
    {
      step: "Step 9: Deployment",
      items: [
        "Deploy on Vercel / Netlify / GitHub Pages",
        "CI/CD Basics (optional)"
      ]
    },
    {
      step: "Step 10: Continuous Learning",
      items: [
        "Contribute to Open Source",
        "Follow frontend best practices",
        "Build projects & stay updated"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Frontend Development Roadmap</h1>
      <p className="frontend-description">
        Follow these steps in order to become a skilled Frontend Developer.
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
