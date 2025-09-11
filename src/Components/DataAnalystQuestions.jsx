import React from "react";
import "./Frontend.css";

export default function DataAnalystQuestions() {
  const questionSets = [
    {
      title: "Basic Data Analysis Concepts",
      items: [
        "What is the role of a data analyst?",
        "Explain the difference between data analysis and data science.",
        "What are the types of data (structured, unstructured, semi-structured)?",
        "What is data cleaning and why is it important?",
        "List common data analysis tools and software."
      ],
    },
    {
      title: "SQL & Databases",
      items: [
        "Write a SQL query to find duplicate records in a table.",
        "How do you perform joins in SQL? Explain different types of joins.",
        "What are aggregate functions in SQL? Provide examples.",
        "Explain the difference between WHERE and HAVING clauses.",
        "How do you optimize SQL queries for large datasets?"
      ],
    },
    {
      title: "Statistics & Data Interpretation",
      items: [
        "Explain mean, median, and mode.",
        "What is the difference between correlation and causation?",
        "Explain standard deviation and variance.",
        "What are confidence intervals and p-values?",
        "How do you handle outliers in data analysis?"
      ],
    },
    {
      title: "Tools & Visualization",
      items: [
        "What is Excel used for in data analysis?",
        "Explain how to create dashboards using Power BI or Tableau.",
        "What is the difference between a bar chart and a histogram?",
        "How do you communicate your data analysis findings to non-technical stakeholders?",
        "What is ETL and how does it fit into the data analysis process?"
      ],
    },
    {
      title: "Scenario-Based Questions",
      items: [
        "How would you handle missing data in a dataset?",
        "Describe how you would analyze sales data for trends.",
        "What steps would you take to validate your data analysis results?",
        "How do you prioritize data analysis tasks when given multiple projects?",
        "Give an example of a business decision you supported using data."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Data Analyst Interview Questions</h1>
      <p className="frontend-description">
        Essential questions covering SQL, statistics, data interpretation, and practical data analysis scenarios.
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
