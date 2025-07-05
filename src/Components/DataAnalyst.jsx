import React from "react";
import "./Frontend.css"; // Reusing your frontend style

export default function DataAnalyst() {
  const steps = [
    {
      step: "Step 1: Understand Data Analysis Basics",
      items: [
        "Learn the Role of a Data Analyst",
        "Understand the Data Lifecycle (Collect, Clean, Analyze, Report)",
        "Familiarize with Business Intelligence (BI) Concepts"
      ]
    },
    {
      step: "Step 2: Master Excel & Spreadsheets",
      items: [
        "Excel Functions: VLOOKUP, INDEX-MATCH, Pivot Tables",
        "Data Cleaning & Formatting",
        "Basic Charts & Dashboards"
      ]
    },
    {
      step: "Step 3: Learn SQL for Data Queries",
      items: [
        "Write Basic SQL Queries (SELECT, WHERE, JOIN)",
        "Aggregate Functions (SUM, COUNT, AVG)",
        "Subqueries and Window Functions",
        "Work with Databases: PostgreSQL, MySQL, SQLite"
      ]
    },
    {
      step: "Step 4: Learn a Data Analysis Programming Language",
      items: [
        "Python (pandas, NumPy, Matplotlib, Seaborn)",
        "OR R Programming for Statistics",
        "Work with APIs and CSV/Excel files"
      ]
    },
    {
      step: "Step 5: Data Cleaning & Wrangling",
      items: [
        "Handle Missing Values & Outliers",
        "Transform & Normalize Data",
        "Merge, Group, Filter Data"
      ]
    },
    {
      step: "Step 6: Data Visualization",
      items: [
        "Build Charts using Matplotlib / Seaborn / Plotly",
        "Create Dashboards (Power BI, Tableau, or Streamlit)",
        "Tell Stories with Data"
      ]
    },
    {
      step: "Step 7: Basic Statistics",
      items: [
        "Descriptive Statistics (Mean, Median, Mode)",
        "Probability, Distributions",
        "Hypothesis Testing & Correlation"
      ]
    },
    {
      step: "Step 8: Practice with Real Data",
      items: [
        "Work with Public Datasets (Kaggle, Data.gov)",
        "Analyze Sales, Marketing, Finance, or Healthcare Data",
        "Solve Business Problems"
      ]
    },
    {
      step: "Step 9: Reporting & Communication",
      items: [
        "Write Effective Reports",
        "Present Insights with Dashboards",
        "Explain Findings to Non-Technical Stakeholders"
      ]
    },
    {
      step: "Step 10: Continuous Improvement",
      items: [
        "Learn Advanced SQL & Python Libraries",
        "Explore Machine Learning Basics (Optional)",
        "Stay Updated on Analytics Trends"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Data Analyst Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to become a skilled Data Analyst who can extract insights and drive business decisions.
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
