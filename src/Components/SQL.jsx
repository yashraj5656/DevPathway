import React from "react";
import "./Frontend.css";

export default function SQL() {
  const steps = [
    {
      step: "Step 1: Understand Database Basics",
      items: [
        "Learn What Databases Are and How They Work",
        "Understand the Difference Between Relational and NoSQL Databases",
        "Familiarize Yourself with Popular RDBMS like MySQL, PostgreSQL, SQL Server, Oracle"
      ]
    },
    {
      step: "Step 2: Learn SQL Basics",
      items: [
        "Master SELECT, FROM, WHERE Clauses",
        "Use ORDER BY, GROUP BY, and HAVING",
        "Practice Filtering, Sorting, and Limiting Results",
        "Understand DISTINCT, ALIAS, and CASE Statements"
      ]
    },
    {
      step: "Step 3: Understand Joins and Relationships",
      items: [
        "Learn INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN",
        "Work with Self Joins and Cross Joins",
        "Understand One-to-One, One-to-Many, and Many-to-Many Relationships",
        "Practice Writing Queries on Related Tables"
      ]
    },
    {
      step: "Step 4: Perform Data Manipulation",
      items: [
        "Use INSERT, UPDATE, DELETE Commands",
        "Handle Transactions with COMMIT and ROLLBACK",
        "Use SQL Functions like CONCAT, SUBSTRING, COALESCE, NULLIF"
      ]
    },
    {
      step: "Step 5: Master Database Design",
      items: [
        "Understand Normalization and Denormalization",
        "Design Tables with Primary Keys, Foreign Keys, and Indexes",
        "Learn Data Types and Constraints",
        "Optimize Table Structure for Performance"
      ]
    },
    {
      step: "Step 6: Learn Advanced SQL Concepts",
      items: [
        "Write Stored Procedures and Functions",
        "Work with Triggers and Views",
        "Understand Window Functions (ROW_NUMBER, RANK, PARTITION BY)",
        "Optimize Queries Using Indexing and EXPLAIN Plans"
      ]
    },
    {
      step: "Step 7: Explore Database Administration Basics",
      items: [
        "Perform Backups and Restores",
        "Manage User Access and Security",
        "Monitor Database Performance",
        "Learn Basic Troubleshooting"
      ]
    },
    {
      step: "Step 8: Practice with Real Datasets",
      items: [
        "Work on Public Datasets from Kaggle, Google BigQuery, etc.",
        "Analyze E-commerce, HR, or Financial Databases",
        "Build Analytical Queries and Reports",
        "Apply SQL in Data Analysis and BI Tools"
      ]
    },
    {
      step: "Step 9: Integrate SQL with Applications",
      items: [
        "Use SQL with Node.js, Python (SQLAlchemy), or Java (JDBC)",
        "Interact with Databases in Web and Desktop Apps",
        "Handle Database Connections, Query Execution, and Transactions"
      ]
    },
    {
      step: "Step 10: Continuous Practice & Learning",
      items: [
        "Solve SQL Challenges on LeetCode, Hackerrank, StrataScratch",
        "Learn NoSQL for Broader Understanding",
        "Stay Updated with SQL Standards and Performance Techniques",
        "Participate in Database Forums and Communities"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">SQL Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master SQL and work effectively with relational databases.
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
