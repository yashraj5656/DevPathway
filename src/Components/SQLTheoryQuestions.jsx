import React from "react";
import "./Frontend.css";

export default function SQLTheoryQuestions() {
  const questionSets = [
    {
      title: "Basic SQL Concepts",
      items: [
        "What is SQL and what are its main uses?",
        "Explain the difference between a database and a table.",
        "What are primary keys and foreign keys?",
        "What are the main SQL data types?",
        "Explain the difference between DDL, DML, and DCL."
      ],
    },
    {
      title: "Relational Database Concepts",
      items: [
        "What is normalization? Explain its different forms (1NF, 2NF, 3NF).",
        "What is denormalization and when would you use it?",
        "Explain ACID properties in database transactions.",
        "What are joins in SQL? Explain INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
        "What is the difference between UNION and UNION ALL?"
      ],
    },
    {
      title: "Indexes and Performance",
      items: [
        "What is an index and how does it improve performance?",
        "Explain the difference between clustered and non-clustered indexes.",
        "What are the drawbacks of using too many indexes?",
        "How do you optimize queries in SQL databases?",
        "Explain what an execution plan is."
      ],
    },
    {
      title: "Security and Integrity",
      items: [
        "What are constraints in SQL? Explain UNIQUE, NOT NULL, CHECK, and DEFAULT.",
        "How do you implement user roles and permissions in a database?",
        "Explain SQL injection and how to prevent it.",
        "What is a view and how is it used to secure data?",
        "What are stored procedures and why are they useful?"
      ],
    },
    {
      title: "Advanced Topics",
      items: [
        "What is a transaction? How do COMMIT and ROLLBACK work?",
        "Explain triggers and give a use case.",
        "What is a materialized view?",
        "Describe the difference between OLTP and OLAP databases.",
        "Explain replication and backup strategies in databases."
      ],
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">SQL Theory Interview Questions</h1>
      <p className="frontend-description">
        Important theoretical SQL questions covering database design, optimization, security, and advanced concepts.
      </p>

      {questionSets.map((section, index) => (
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
