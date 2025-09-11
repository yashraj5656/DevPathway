import React from "react";
import "./Frontend.css";

export default function TypeScriptRoadmap() {
  const steps = [
    {
      step: "Step 1: Understand the Basics of JavaScript",
      items: [
        "Master ES6+ JavaScript (functions, arrays, objects)",
        "Understand the DOM and Browser APIs",
        "Learn how modules (import/export) work",
        "Practice building small JS projects"
      ]
    },
    {
      step: "Step 2: TypeScript Fundamentals",
      items: [
        "Install TypeScript and Configure tsconfig.json",
        "Learn Static Typing in TypeScript",
        "Understand Basic Types: string, number, boolean, array, tuple, enum",
        "Use Type Aliases and Interfaces"
      ]
    },
    {
      step: "Step 3: Advanced TypeScript Types",
      items: [
        "Master Union, Intersection, and Literal Types",
        "Use Optional Properties and Readonly",
        "Handle Unknown, Any, Never, and Void Types",
        "Work with Type Guards and Type Assertions"
      ]
    },
    {
      step: "Step 4: Functions and Classes in TypeScript",
      items: [
        "Add Types to Function Parameters and Return Values",
        "Work with Default and Optional Parameters",
        "Understand Classes, Constructors, Inheritance",
        "Use Access Modifiers: public, private, protected"
      ]
    },
    {
      step: "Step 5: TypeScript Generics",
      items: [
        "Create Reusable Generic Functions and Classes",
        "Use Generic Constraints",
        "Understand Utility Types (Partial, Pick, Omit, Record)"
      ]
    },
    {
      step: "Step 6: Modules and Namespaces",
      items: [
        "Split Code into Modules (import/export)",
        "Understand Namespaces (legacy feature, rarely used now)",
        "Organize Large Codebases Effectively"
      ]
    },
    {
      step: "Step 7: Working with Third-party Libraries",
      items: [
        "Use DefinitelyTyped and @types Packages",
        "Write Type Declarations for Un-typed Libraries",
        "Handle Type Compatibility Issues"
      ]
    },
    {
      step: "Step 8: Integrate TypeScript in Projects",
      items: [
        "Add TypeScript to Node.js or Express.js Backends",
        "Use TypeScript with React, Angular, or Vue",
        "Configure Webpack or Vite for TypeScript",
        "Use ESLint and Prettier with TypeScript"
      ]
    },
    {
      step: "Step 9: Testing and Best Practices",
      items: [
        "Write Type-safe Unit Tests with Jest",
        "Use ts-jest or swc for Testing TypeScript",
        "Follow Code Quality Best Practices",
        "Enable Strict Mode in tsconfig.json"
      ]
    },
    {
      step: "Step 10: Build & Deploy TypeScript Projects",
      items: [
        "Build Full-stack Projects using TypeScript",
        "Compile to JavaScript for Production",
        "Deploy Apps to Vercel, Netlify, or Cloud Platforms",
        "Keep Learning Advanced TypeScript Patterns"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">TypeScript Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master TypeScript and build scalable, type-safe applications.
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
