import React from "react";
import "./Frontend.css";

export default function GitGitHub() {
  const steps = [
    {
      title: "Step 1: Git Basics",
      items: [
        "Understand what version control is and why it's important.",
        "Install Git and configure user details (name, email).",
        "Learn basic commands: git init, git add, git commit, git status, git log.",
        "Understand how Git stores snapshots of your code changes.",
      ],
    },
    {
      title: "Step 2: Branching & Merging",
      items: [
        "Create and switch between branches (git branch, git checkout).",
        "Merge branches using git merge and resolve merge conflicts.",
        "Use git rebase for linear commit history.",
        "Learn about HEAD and detached HEAD states.",
      ],
    },
    {
      title: "Step 3: Working with Remote Repositories",
      items: [
        "Create a GitHub account and a new repository.",
        "Connect your local repo to GitHub using git remote add origin.",
        "Push and pull changes with git push and git pull.",
        "Clone repositories using git clone.",
      ],
    },
    {
      title: "Step 4: Collaboration & Workflows",
      items: [
        "Understand forks, pull requests (PRs), and code reviews on GitHub.",
        "Use branching strategies: GitFlow, GitHub Flow.",
        "Collaborate using issues, milestones, and project boards.",
        "Manage conflicts in collaborative environments.",
      ],
    },
    {
      title: "Step 5: Advanced Git & GitHub Features",
      items: [
        "Use .gitignore and .gitattributes files to manage your repo.",
        "Learn about Git tags and releases.",
        "Automate workflows using GitHub Actions.",
        "Manage access control with GitHub Teams & Organizations.",
        "Secure your repositories with branch protection rules and secret scanning.",
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Git & GitHub Roadmap</h1>
      <p className="frontend-description">
        Follow this roadmap to master Git for version control and GitHub for collaborative development.
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
