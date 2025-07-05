import React from "react";
import "./Frontend.css";

export default function VueRoadmap() {
  const steps = [
    {
      step: "Step 1: Prerequisites",
      items: [
        "Master HTML, CSS, and JavaScript (ES6+)",
        "Understand DOM Manipulation",
        "Learn Git and GitHub Basics",
        "Familiarize Yourself with Node.js & npm"
      ]
    },
    {
      step: "Step 2: Learn Vue Basics",
      items: [
        "Understand the Vue Instance and Virtual DOM",
        "Learn Templates, Directives (v-if, v-for), and Data Binding",
        "Handle Events and Methods",
        "Work with Computed Properties and Watchers"
      ]
    },
    {
      step: "Step 3: Master Vue Components",
      items: [
        "Create and Use Single-File Components (.vue)",
        "Pass Data with Props and Emit Events",
        "Understand Slots and Dynamic Components",
        "Learn Component Communication Patterns"
      ]
    },
    {
      step: "Step 4: Routing in Vue",
      items: [
        "Install and Use Vue Router",
        "Create Routes and Nested Routes",
        "Implement Dynamic Route Matching",
        "Manage Navigation Guards"
      ]
    },
    {
      step: "Step 5: Styling in Vue",
      items: [
        "Use Scoped CSS in .vue Files",
        "Apply Global Styles and CSS Frameworks (Tailwind, Bootstrap)",
        "Understand CSS Modules and Preprocessors (SCSS, LESS)"
      ]
    },
    {
      step: "Step 6: State Management with Vuex or Pinia",
      items: [
        "Understand Global State and Store Concepts",
        "Use Vuex for State, Mutations, Actions, and Getters",
        "Practice Centralized State Management with Pinia",
        "Persist State with Plugins"
      ]
    },
    {
      step: "Step 7: Connect to APIs",
      items: [
        "Use fetch() or Axios for API Calls",
        "Work with RESTful APIs and CRUD Operations",
        "Handle Error States and Loading Indicators",
        "Practice Asynchronous Operations with Async/Await"
      ]
    },
    {
      step: "Step 8: Composition API & Modern Vue",
      items: [
        "Learn the Composition API (setup(), ref, reactive)",
        "Use provide/inject for Dependency Injection",
        "Understand Vue 3’s Reactivity System",
        "Explore Vue 3's Teleport, Fragments, and Suspense"
      ]
    },
    {
      step: "Step 9: Optimize and Test Vue Apps",
      items: [
        "Optimize with Lazy Loading and Code Splitting",
        "Use Vue DevTools for Debugging",
        "Write Unit Tests with Jest and Vue Testing Library",
        "Perform End-to-End Testing with Cypress"
      ]
    },
    {
      step: "Step 10: Build Real-world Projects & Deployment",
      items: [
        "Build Dashboards, Blogs, and E-commerce Sites",
        "Use Vite or Vue CLI for Project Setup",
        "Deploy on Netlify, Vercel, or Firebase",
        "Explore Nuxt.js for Server-Side Rendering"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Vue.js Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master Vue.js and build interactive, modern web applications.
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
