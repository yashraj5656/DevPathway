import React from "react";
import "./Frontend.css";

export default function CodeReview() {
  const steps = [
    {
      title: "Step 1: Purpose of Code Reviews",
      items: [
        "Improve code quality and maintainability.",
        "Share knowledge among team members.",
        "Catch bugs and design flaws early.",
        "Ensure consistency with coding standards.",
        "Mentor junior developers and improve team skills."
      ],
    },
    {
      title: "Step 2: Code Review Checklist",
      items: [
        "Is the code easy to understand and follow?",
        "Are naming conventions and formatting consistent?",
        "Are all error cases and edge cases handled?",
        "Are functions and components small and single-purpose?",
        "Is there adequate test coverage for new features?"
      ],
    },
    {
      title: "Step 3: Communication Best Practices",
      items: [
        "Provide constructive and respectful feedback.",
        "Ask questions instead of making demands.",
        "Explain why changes are needed, not just what to change.",
        "Encourage discussion and collaboration.",
        "Thank the developer for their work and improvements."
      ],
    },
    {
      title: "Step 4: Tools for Code Review",
      items: [
        "GitHub Pull Requests",
        "GitLab Merge Requests",
        "Bitbucket Code Review",
        "Phabricator",
        "CodeClimate for automated checks"
      ],
    },
    {
      title: "Step 5: Post-Review Actions",
      items: [
        "Ensure all comments are addressed before merging.",
        "Re-test the code after suggested changes.",
        "Clean up commit history if needed (e.g., squash commits).",
        "Merge with a clear commit message.",
        "Monitor post-deployment for any missed issues."
      ],
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Code Review</h1>
      <p className="frontend-description">
        Follow these best practices to conduct effective, respectful, and valuable code reviews.
      </p>

      {steps.map((section, index) => (
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
