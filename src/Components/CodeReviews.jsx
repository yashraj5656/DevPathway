import React from "react";
import "./Frontend.css";

export default function CodeReviews() {
  const bestPractices = [
    {
      step: "Step 1: Review for Readability and Clarity",
      items: [
        "Ensure Code is Clean, Well-Formatted, and Easy to Read",
        "Use Meaningful Variable and Function Names",
        "Break Large Functions into Smaller, Reusable Pieces",
        "Remove Unused Code and Comments"
      ]
    },
    {
      step: "Step 2: Check for Correctness",
      items: [
        "Verify that the Code Solves the Intended Problem",
        "Test Different Scenarios Including Edge Cases",
        "Ensure Proper Error Handling is in Place",
        "Check API Responses, Validation, and Data Types"
      ]
    },
    {
      step: "Step 3: Validate Performance and Efficiency",
      items: [
        "Ensure Loops, Queries, and Algorithms are Optimized",
        "Look for Opportunities to Reduce API Calls or DB Queries",
        "Verify that Large Data Sets are Paginated and Cached"
      ]
    },
    {
      step: "Step 4: Verify Security Practices",
      items: [
        "Ensure Sensitive Data is Not Hard-Coded",
        "Check for Proper Authentication and Authorization",
        "Prevent Injection Vulnerabilities (SQL, XSS)",
        "Secure API Endpoints and Environment Variables"
      ]
    },
    {
      step: "Step 5: Ensure Consistency with Project Standards",
      items: [
        "Follow the Team’s Coding Style and Conventions",
        "Ensure the Code Matches the Existing Architecture",
        "Use the Correct Folder/Module Structure"
      ]
    },
    {
      step: "Step 6: Automated Tests and Linting",
      items: [
        "Check that Unit and Integration Tests are Included",
        "Ensure Tests Cover Important Scenarios",
        "Verify that Linting and Static Analysis Tools Pass"
      ]
    },
    {
      step: "Step 7: Provide Constructive Feedback",
      items: [
        "Explain the 'Why' Behind Suggested Changes",
        "Be Respectful and Collaborative in Comments",
        "Balance Between Suggesting Improvements and Blocking Progress",
        "Recognize Well-Written Code and Improvements"
      ]
    },
    {
      step: "Step 8: Final Review Before Merging",
      items: [
        "Ensure No Debugging Code is Left (console.log, TODOs)",
        "Check that Documentation (README, API Docs) is Updated",
        "Confirm that the PR Description Explains the Changes Clearly"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Code Review Best Practices</h1>
      <p className="frontend-description">
        Use these practices to maintain clean, maintainable, and secure code in your projects.
      </p>

      {bestPractices.map((section, index) => (
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
