import React from "react";
import "./Frontend.css"; // Reusing your common CSS

export default function PostgreSQL() {
  const steps = [
    {
      step: "Step 1: Learn Database Fundamentals",
      items: [
        "Understand What Relational Databases Are",
        "Understand Tables, Rows, Columns, and Relationships",
        "Learn Primary & Foreign Keys",
        "Understand SQL Basics"
      ]
    },
    {
      step: "Step 2: Install and Configure PostgreSQL",
      items: [
        "Install PostgreSQL on Local Machine (Windows/Mac/Linux)",
        "Use pgAdmin or DBeaver for GUI Access",
        "Understand PostgreSQL Service & Authentication",
        "Learn Basic CLI Commands (psql)"
      ]
    },
    {
      step: "Step 3: Master SQL with PostgreSQL",
      items: [
        "Write CRUD Queries (SELECT, INSERT, UPDATE, DELETE)",
        "Filtering with WHERE, LIMIT, and ORDER BY",
        "Aggregate Functions (COUNT, SUM, AVG)",
        "JOINs: INNER, LEFT, RIGHT, FULL"
      ]
    },
    {
      step: "Step 4: Schema Design & Normalization",
      items: [
        "Design Efficient Table Structures",
        "Understand Normalization (1NF, 2NF, 3NF)",
        "Indexes & Constraints",
        "Create Views & Materialized Views"
      ]
    },
    {
      step: "Step 5: Advanced PostgreSQL Features",
      items: [
        "Stored Procedures & Functions",
        "Triggers & Event-driven Programming",
        "Common Table Expressions (CTEs)",
        "Window Functions"
      ]
    },
    {
      step: "Step 6: Security & User Management",
      items: [
        "Manage Roles, Permissions, and GRANTs",
        "Configure SSL Connections",
        "Backups & Restores (pg_dump, pg_restore)"
      ]
    },
    {
      step: "Step 7: Performance Tuning",
      items: [
        "Understand Query Planning with EXPLAIN",
        "Optimize Index Usage",
        "Connection Pooling (PgBouncer)",
        "Vacuum & Analyze Tables"
      ]
    },
    {
      step: "Step 8: Working with JSON & Advanced Types",
      items: [
        "Store & Query JSON Data",
        "Use Arrays, UUIDs, and Custom Types",
        "Full-text Search in PostgreSQL"
      ]
    },
    {
      step: "Step 9: PostgreSQL in Production",
      items: [
        "Database Backups and High Availability",
        "Streaming Replication Basics",
        "Monitoring with pg_stat_statements and Prometheus",
        "Cloud-hosted PostgreSQL (AWS RDS, Azure, GCP Cloud SQL)"
      ]
    },
    {
      step: "Step 10: Continuous Learning",
      items: [
        "Explore Extensions (PostGIS, TimescaleDB)",
        "Contribute to PostgreSQL Open Source",
        "Read the Official PostgreSQL Docs",
        "Stay Updated on New Releases"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">PostgreSQL Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master PostgreSQL and become skilled in relational databases and advanced data querying.
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
