import React from "react";
import "./Frontend.css";

export default function ComputerScience() {
  const steps = [
    {
      step: "Step 1: Learn Programming Fundamentals",
      items: [
        "Choose a Programming Language (Python, Java, C++)",
        "Understand Variables, Data Types, and Operators",
        "Practice Control Structures (if-else, loops)",
        "Learn Functions, Recursion, and Exception Handling"
      ]
    },
    {
      step: "Step 2: Master Data Structures & Algorithms",
      items: [
        "Learn Arrays, Linked Lists, Stacks, Queues",
        "Understand Trees, Graphs, Hash Tables",
        "Practice Sorting, Searching, and Recursion",
        "Solve DSA Problems on LeetCode, HackerRank, and Codeforces"
      ]
    },
    {
      step: "Step 3: Understand Computer Architecture & OS Basics",
      items: [
        "Learn How Computers Work: CPU, Memory, Storage",
        "Understand Operating Systems Concepts: Processes, Threads, Scheduling",
        "Study File Systems, Memory Management, and Virtualization",
        "Explore Computer Networks and Protocols (TCP/IP, HTTP)"
      ]
    },
    {
      step: "Step 4: Learn Databases and SQL",
      items: [
        "Understand Relational Databases and SQL Basics",
        "Practice Data Modeling and Normalization",
        "Learn Basic NoSQL Concepts (MongoDB, Redis)",
        "Write SQL Queries and Manage Databases"
      ]
    },
    {
      step: "Step 5: Master Object-Oriented Programming",
      items: [
        "Understand Classes, Objects, and Inheritance",
        "Learn Encapsulation, Polymorphism, and Abstraction",
        "Design Reusable and Maintainable Code"
      ]
    },
    {
      step: "Step 6: Learn Software Engineering Principles",
      items: [
        "Understand Version Control (Git, GitHub)",
        "Study Software Development Life Cycle (SDLC)",
        "Learn Agile, Scrum, and DevOps Basics",
        "Practice Code Reviews, Testing, and Debugging"
      ]
    },
    {
      step: "Step 7: Explore Web Development Basics",
      items: [
        "Learn HTML, CSS, JavaScript Basics",
        "Understand Client-Server Architecture",
        "Build Basic Web Pages and REST APIs"
      ]
    },
    {
      step: "Step 8: Understand System Design Fundamentals",
      items: [
        "Learn Scalability, Reliability, and Availability Concepts",
        "Understand Load Balancing, Caching, and Database Sharding",
        "Study Distributed Systems and Microservices Architecture"
      ]
    },
    {
      step: "Step 9: Explore Specializations",
      items: [
        "AI & Machine Learning",
        "Cybersecurity",
        "Game Development",
        "Mobile Development",
        "Cloud Computing"
      ]
    },
    {
      step: "Step 10: Continuous Learning and Real-World Projects",
      items: [
        "Build Real-World Projects and Solve Practical Problems",
        "Contribute to Open Source",
        "Stay Updated with New Technologies",
        "Practice Coding Interviews and Prepare for Jobs"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Computer Science Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to build a strong foundation in Computer Science and become a versatile software engineer.
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
