import React from "react";
import "./Frontend.css"; // Reuse your dark-themed styles

export default function QA() {
  const steps = [
    {
      step: "Step 1: Understand Software Testing Basics",
      items: [
        "Learn the Software Development Life Cycle (SDLC)",
        "Understand Testing Types: Manual, Automation, Functional, Non-functional",
        "Learn QA Methodologies: Agile, Waterfall, Scrum",
        "Familiarize with the Defect Life Cycle"
      ]
    },
    {
      step: "Step 2: Master Manual Testing",
      items: [
        "Write Test Cases and Test Scenarios",
        "Perform Smoke, Regression, and Integration Testing",
        "Execute Black-box & White-box Testing",
        "Use Tools like Jira, TestRail for Test Management"
      ]
    },
    {
      step: "Step 3: Learn Basic SQL & API Testing",
      items: [
        "Write Simple SQL Queries to Validate Backend Data",
        "Understand API Basics (REST, SOAP)",
        "Test APIs using Postman or REST Assured"
      ]
    },
    {
      step: "Step 4: Start with Automation Testing",
      items: [
        "Learn Selenium WebDriver (Java or Python)",
        "Understand XPath, CSS Selectors, Waits",
        "Write Automated Test Scripts",
        "Maintain Automation Test Suites"
      ]
    },
    {
      step: "Step 5: Learn Testing Frameworks & Tools",
      items: [
        "JUnit/TestNG for Java, PyTest for Python",
        "Use CI/CD Tools: Jenkins, GitHub Actions",
        "Learn Version Control with Git"
      ]
    },
    {
      step: "Step 6: Explore Advanced Automation",
      items: [
        "Behavior-Driven Development (BDD) with Cucumber",
        "Page Object Model (POM) Design Pattern",
        "Parallel Test Execution",
        "Headless Browser Testing"
      ]
    },
    {
      step: "Step 7: Dive into Performance Testing",
      items: [
        "Use JMeter for Load & Stress Testing",
        "Learn Locust or k6 for Modern Load Testing",
        "Analyze Performance Bottlenecks"
      ]
    },
    {
      step: "Step 8: Security & Accessibility Testing Basics",
      items: [
        "Understand Security Testing Concepts",
        "Use OWASP ZAP for Basic Security Checks",
        "Learn Accessibility Testing Guidelines (WCAG)",
        "Test with Tools like axe DevTools"
      ]
    },
    {
      step: "Step 9: Test Automation in DevOps",
      items: [
        "Integrate Automated Tests in CI/CD Pipelines",
        "Use Docker Containers for Test Environments",
        "Implement Test Reporting Dashboards"
      ]
    },
    {
      step: "Step 10: Continuous Learning",
      items: [
        "Explore Mobile Testing (Appium)",
        "Learn About Cloud Testing Platforms (BrowserStack, Sauce Labs)",
        "Stay Updated on QA Trends & Tools",
        "Contribute to Open Source Testing Frameworks"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">QA (Quality Assurance) Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to become a skilled QA engineer, covering manual testing, automation, and DevOps testing practices.
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
