import React from "react";
import "./Frontend.css";

export default function PHP() {
  const steps = [
    {
      title: "Step 1: PHP Basics",
      items: [
        "Understand what PHP is and its role in server-side web development.",
        "Install PHP and set up a local development environment (XAMPP, MAMP, or built-in server).",
        "Learn PHP syntax: variables, data types, and operators.",
        "Write basic scripts with control structures (if, else, switch) and loops (for, while, foreach)."
      ],
    },
    {
      title: "Step 2: Core PHP Concepts",
      items: [
        "Work with functions, arrays, and string manipulation.",
        "Handle forms and user input with $_GET, $_POST, and $_REQUEST.",
        "Manage sessions and cookies for user state management.",
        "Learn error handling using try-catch blocks and error reporting."
      ],
    },
    {
      title: "Step 3: Working with Databases",
      items: [
        "Connect to MySQL databases using MySQLi and PDO.",
        "Perform CRUD operations (Create, Read, Update, Delete) with SQL queries.",
        "Prevent SQL injection using prepared statements.",
        "Learn basic database schema design and normalization."
      ],
    },
    {
      title: "Step 4: Advanced PHP & Security",
      items: [
        "Understand object-oriented PHP: classes, inheritance, interfaces, and traits.",
        "Use Composer for dependency management.",
        "Secure your PHP applications from common vulnerabilities (XSS, CSRF, SQL Injection).",
        "Implement authentication and authorization (sessions, tokens, OAuth)."
      ],
    },
    {
      title: "Step 5: Frameworks & Deployment",
      items: [
        "Learn popular frameworks like Laravel, Symfony, or CodeIgniter.",
        "Build RESTful APIs using Laravel.",
        "Deploy PHP applications to cloud platforms like AWS EC2 or Heroku.",
        "Optimize performance with caching (Redis, Memcached) and opcode caching (OPcache).",
        "Prepare for PHP certifications (optional)."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">PHP Roadmap</h1>
      <p className="frontend-description">
        Follow this roadmap to learn PHP for building dynamic websites and powerful web applications.
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
