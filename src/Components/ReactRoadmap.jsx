import React from "react";
import "./Frontend.css";

export default function ReactRoadmap() {
  const steps = [
    {
      step: "Step 1: Prerequisites",
      items: [
        "Master HTML, CSS, and JavaScript ES6+",
        "Understand DOM Manipulation and Events",
        "Learn Git and GitHub Basics",
        "Familiarize Yourself with Node.js & npm"
      ]
    },
    {
      step: "Step 2: Learn React Basics",
      items: [
        "Understand Components, JSX, and Props",
        "Learn State and useState Hook",
        "Practice Event Handling",
        "Understand Conditional Rendering and Lists"
      ]
    },
    {
      step: "Step 3: Master Core React Concepts",
      items: [
        "Use useEffect and useRef Hooks",
        "Understand Component Lifecycle",
        "Learn Controlled & Uncontrolled Components",
        "Practice Component Reusability and Composition"
      ]
    },
    {
      step: "Step 4: Routing and Navigation",
      items: [
        "Install and Use react-router-dom",
        "Create Routes, Links, and Navigate between Pages",
        "Use Nested Routing and Route Parameters"
      ]
    },
    {
      step: "Step 5: Styling in React",
      items: [
        "Learn Inline Styling and CSS Modules",
        "Use Styled Components or Tailwind CSS",
        "Understand Theming and Responsive Design"
      ]
    },
    {
      step: "Step 6: Manage Application State",
      items: [
        "Use Context API for State Management",
        "Learn Redux Toolkit or Zustand for Large Apps",
        "Practice Global State Sharing and Middleware"
      ]
    },
    {
      step: "Step 7: Connect to APIs",
      items: [
        "Use fetch() or Axios to Make HTTP Requests",
        "Understand REST APIs and CRUD Operations",
        "Handle API Errors and Loading States",
        "Work with Async/Await and Promises"
      ]
    },
    {
      step: "Step 8: Optimize and Test React Apps",
      items: [
        "Optimize Component Rendering with React.memo()",
        "Code Split with React.lazy() and Suspense",
        "Write Unit Tests with Jest and React Testing Library",
        "Measure Performance with React DevTools"
      ]
    },
    {
      step: "Step 9: Learn Advanced Patterns",
      items: [
        "Understand Custom Hooks and Render Props",
        "Explore HOCs (Higher Order Components)",
        "Learn Portals, Error Boundaries, and Context Customization"
      ]
    },
    {
      step: "Step 10: Build Real-world Projects & Learn Ecosystem Tools",
      items: [
        "Build Responsive Dashboards, Blogs, or E-commerce Sites",
        "Use Vite or Create React App for Project Setup",
        "Learn Next.js for Server-Side Rendering",
        "Deploy with Netlify, Vercel, or Firebase"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">React Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master React and build scalable front-end applications efficiently.
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
