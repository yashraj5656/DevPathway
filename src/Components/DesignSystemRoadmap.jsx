import React from "react";
import "./Frontend.css";

export default function DesignSystemRoadmap() {
  const steps = [
    {
      step: "Step 1: Understand the Fundamentals",
      items: [
        "Learn What a Design System Is and Why It's Important",
        "Understand Design Tokens, Components, and Patterns",
        "Study Atomic Design Principles (Atoms, Molecules, Organisms)"
      ]
    },
    {
      step: "Step 2: Plan Your Design System",
      items: [
        "Define Brand Guidelines: Colors, Typography, and Iconography",
        "Create a Component Inventory (Buttons, Forms, Cards, etc.)",
        "Document Design Principles (Accessibility, Consistency, Scalability)"
      ]
    },
    {
      step: "Step 3: Build UI Components",
      items: [
        "Build Reusable Components in React, Vue, or Angular",
        "Use Component Libraries like Storybook for Documentation",
        "Implement Accessible Components (ARIA, Focus Management)"
      ]
    },
    {
      step: "Step 4: Define Design Tokens",
      items: [
        "Create Tokens for Colors, Spacing, Font Sizes, etc.",
        "Store Tokens in JSON or CSS Variables",
        "Use Tools Like Style Dictionary to Manage Tokens"
      ]
    },
    {
      step: "Step 5: Document the Design System",
      items: [
        "Use Storybook or Zeroheight for Component Documentation",
        "Include Usage Guidelines, Do's and Don'ts",
        "Write Developer and Designer Collaboration Notes"
      ]
    },
    {
      step: "Step 6: Build Design System Infrastructure",
      items: [
        "Set Up a Monorepo with Lerna or Nx",
        "Publish Components as NPM Packages",
        "Use CI/CD to Automate Builds and Deployment"
      ]
    },
    {
      step: "Step 7: Integrate in Applications",
      items: [
        "Consume Components in Frontend Projects",
        "Standardize Styles Across Apps",
        "Handle Versioning and Backward Compatibility"
      ]
    },
    {
      step: "Step 8: Ensure Accessibility and Responsiveness",
      items: [
        "Test Components with Accessibility Tools",
        "Ensure Mobile Responsiveness and Adaptive Layouts",
        "Follow WCAG Guidelines"
      ]
    },
    {
      step: "Step 9: Scale and Maintain the System",
      items: [
        "Manage Contributions from Multiple Teams",
        "Create Governance and Contribution Guidelines",
        "Continuously Evolve with New Patterns and Components"
      ]
    },
    {
      step: "Step 10: Explore Advanced Topics",
      items: [
        "Implement Theming and Dark Mode Support",
        "Use Figma Tokens and Design-to-Code Workflows",
        "Integrate Analytics for Component Usage Tracking"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Design System Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to create scalable, consistent, and reusable design systems for your products and teams.
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
