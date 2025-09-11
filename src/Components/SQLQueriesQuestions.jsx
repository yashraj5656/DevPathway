import React from "react";
import "./Frontend.css";

export default function SQLQueriesQuestions() {
  const questionSets = [
    {
      title: "Basic SQL Queries",
      items: [
        "Write a query to select all records from a table.",
        "How do you filter rows using the WHERE clause?",
        "What is the difference between DISTINCT and GROUP BY?",
        "Write a query to order results by a specific column.",
        "How do you use LIMIT or TOP to restrict results?"
      ],
    },
    {
      title: "Intermediate SQL Queries",
      items: [
        "Write a query to find the second highest salary in a table.",
        "How do you join two tables? Explain INNER JOIN and LEFT JOIN.",
        "Write a query to count the number of rows in a table.",
        "How do you update a record in SQL?",
        "Write a query to delete duplicate rows."
      ],
    },
    {
      title: "Advanced SQL Queries",
      items: [
        "Explain subqueries and write an example.",
        "How do you use window functions like RANK() or ROW_NUMBER()?",
        "Write a query using CASE WHEN for conditional selections.",
        "Explain how Common Table Expressions (CTE) work and provide an example.",
        "Write a recursive SQL query to represent hierarchical data."
      ],
    },
    {
      title: "Database Design & Optimization",
      items: [
        "Explain indexes and their impact on queries.",
        "What are the differences between clustered and non-clustered indexes?",
        "How do you optimize slow SQL queries?",
        "Explain normalization and denormalization.",
        "How do you enforce data integrity in SQL databases?"
      ],
    },
    {
      title: "Practical Challenges",
      items: [
        "Find customers who made purchases in the last 30 days.",
        "Get the total sales amount per product category.",
        "Find employees who have no manager assigned.",
        "List the top 5 most sold products.",
        "Write a query to pivot data rows into columns."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">SQL Queries Interview Questions</h1>
      <p className="frontend-description">
        Practice SQL queries covering selection, filtering, joins, aggregation, and optimization.
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
