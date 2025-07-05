import React from "react";
import "./Frontend.css";

export default function AngularRoadmap() {
  const steps = [
    {
      step: "Step 1: Prerequisites",
      items: [
        "Master HTML, CSS, and JavaScript (ES6+)",
        "Understand TypeScript Basics (Angular is built with TypeScript)",
        "Familiarize Yourself with Node.js & npm",
        "Learn Git and GitHub Basics"
      ]
    },
    {
      step: "Step 2: Get Started with Angular",
      items: [
        "Install Angular CLI",
        "Create a New Angular Project",
        "Understand the Angular File Structure",
        "Run and Build Your First Angular Application"
      ]
    },
    {
      step: "Step 3: Learn Core Angular Concepts",
      items: [
        "Master Components, Modules, and Templates",
        "Understand Data Binding: Interpolation, Property, and Event Binding",
        "Work with Directives (ngIf, ngFor, Custom Directives)",
        "Use Pipes to Transform Data in Templates"
      ]
    },
    {
      step: "Step 4: Manage Application State and Services",
      items: [
        "Create and Inject Services",
        "Understand Dependency Injection in Angular",
        "Manage State Using RxJS Observables and Subjects"
      ]
    },
    {
      step: "Step 5: Routing and Navigation",
      items: [
        "Configure Angular Router",
        "Set Up Nested Routes and Lazy Loading",
        "Manage Route Guards for Authentication",
        "Handle Route Parameters and Query Params"
      ]
    },
    {
      step: "Step 6: Work with Forms",
      items: [
        "Build Template-driven Forms",
        "Build Reactive Forms",
        "Validate Forms and Show Error Messages",
        "Handle Form Submission"
      ]
    },
    {
      step: "Step 7: Consume RESTful APIs",
      items: [
        "Use HttpClient Module to Make HTTP Requests",
        "Handle API Responses, Errors, and Retry Logic",
        "Work with Interceptors for Authentication Tokens"
      ]
    },
    {
      step: "Step 8: Optimize and Test Angular Apps",
      items: [
        "Optimize Performance with Lazy Loading and Change Detection",
        "Test Components, Services, and Pipes with Jasmine & Karma",
        "Write End-to-End Tests with Protractor or Cypress",
        "Analyze and Optimize Bundle Size"
      ]
    },
    {
      step: "Step 9: Advanced Angular Concepts",
      items: [
        "Learn Lifecycle Hooks and Custom Decorators",
        "Understand Zones, Change Detection Strategies",
        "Build Angular Libraries and Reusable UI Components",
        "Explore Angular Universal for SSR (Server-Side Rendering)"
      ]
    },
    {
      step: "Step 10: Build & Deploy Real-world Projects",
      items: [
        "Build Dashboards, CMS, or E-commerce Applications",
        "Deploy on Firebase Hosting, Netlify, or Vercel",
        "Use Docker for Containerization",
        "Keep Learning from Angular Blogs and Communities"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Angular Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master Angular and build scalable front-end applications using TypeScript.
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
