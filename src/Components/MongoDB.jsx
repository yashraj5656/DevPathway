import React from "react";
import "./Frontend.css";

export default function MongoDB() {
  const steps = [
    {
      title: "Step 1: MongoDB Fundamentals",
      items: [
        "Understand what NoSQL databases are and how MongoDB fits in.",
        "Learn about MongoDB architecture: databases, collections, and documents.",
        "Install MongoDB locally and set up MongoDB Atlas for cloud databases.",
        "Use the MongoDB shell (mongosh) and MongoDB Compass GUI.",
        "Understand BSON and how MongoDB stores data."
      ],
    },
    {
      title: "Step 2: CRUD Operations",
      items: [
        "Create, Read, Update, and Delete documents using MongoDB shell and drivers.",
        "Learn basic queries with find(), insertOne(), updateOne(), deleteOne().",
        "Use operators like $gt, $lt, $in, $or, and $and in queries.",
        "Perform bulk operations with insertMany(), updateMany()."
      ],
    },
    {
      title: "Step 3: Data Modeling & Aggregation",
      items: [
        "Understand schema design for NoSQL databases.",
        "Normalize vs Denormalize your data depending on use cases.",
        "Master the Aggregation Framework: $match, $group, $sort, $project, and pipelines.",
        "Handle relationships between documents using references and embedding."
      ],
    },
    {
      title: "Step 4: Indexing & Performance",
      items: [
        "Learn to create and manage indexes to optimize query performance.",
        "Understand types of indexes: Single Field, Compound, Text, and Geospatial.",
        "Monitor and analyze query performance with explain().",
        "Optimize data access patterns and schema for read/write efficiency."
      ],
    },
    {
      title: "Step 5: Security, Deployment, & Tools",
      items: [
        "Implement authentication and role-based authorization (RBAC).",
        "Secure your MongoDB instance with network rules and encrypted connections.",
        "Backup and restore databases using mongodump and mongorestore.",
        "Deploy production-ready MongoDB on cloud platforms and Kubernetes.",
        "Use ODM libraries like Mongoose (Node.js) or PyMongo (Python)."
      ],
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">MongoDB Roadmap</h1>
      <p className="frontend-description">
        A step-by-step roadmap to learn MongoDB from basics to advanced topics for real-world applications.
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
