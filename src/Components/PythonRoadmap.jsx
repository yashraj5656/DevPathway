import React from "react";
import "./Frontend.css";

export default function PythonRoadmap() {
  const steps = [
    {
      step: "Step 1: Python Basics",
      items: [
        "Install Python and Set Up the Environment",
        "Understand Syntax, Variables, and Data Types",
        "Learn Conditional Statements and Loops",
        "Practice Functions and Scope",
        "Work with Lists, Tuples, Sets, and Dictionaries"
      ]
    },
    {
      step: "Step 2: Master Object-Oriented Programming (OOP)",
      items: [
        "Understand Classes and Objects",
        "Use Inheritance, Encapsulation, and Polymorphism",
        "Learn Special Methods (__init__, __str__, etc.)",
        "Practice with Real-world OOP Examples"
      ]
    },
    {
      step: "Step 3: Work with File Systems and Exceptions",
      items: [
        "Read and Write Files",
        "Handle Exceptions using try/except",
        "Work with JSON and CSV Files",
        "Practice with File Automation Tasks"
      ]
    },
    {
      step: "Step 4: Python Standard Libraries & Modules",
      items: [
        "Master os, sys, datetime, random, math Libraries",
        "Use itertools, collections, and functools",
        "Understand Module Imports and Virtual Environments"
      ]
    },
    {
      step: "Step 5: Data Handling and Libraries",
      items: [
        "Learn NumPy for Numerical Computations",
        "Work with Pandas for Data Analysis",
        "Visualize Data with Matplotlib and Seaborn",
        "Practice with Real-world DataSets"
      ]
    },
    {
      step: "Step 6: Web Development with Python",
      items: [
        "Learn Flask or Django for Web Frameworks",
        "Build REST APIs and Serve Dynamic Web Pages",
        "Work with Databases (SQLite, PostgreSQL)",
        "Handle Authentication and Middleware"
      ]
    },
    {
      step: "Step 7: Automate Tasks and Web Scraping",
      items: [
        "Automate Repetitive Tasks using Scripts",
        "Scrape Websites using BeautifulSoup and Scrapy",
        "Work with APIs using requests Library",
        "Build CLI Tools with argparse and click"
      ]
    },
    {
      step: "Step 8: Testing and Debugging",
      items: [
        "Write Unit Tests with unittest or pytest",
        "Debug Applications using pdb",
        "Use Logging for Application Monitoring"
      ]
    },
    {
      step: "Step 9: Advanced Topics",
      items: [
        "Understand Generators and Decorators",
        "Work with Context Managers",
        "Master Asynchronous Programming with asyncio",
        "Explore Type Hinting and Static Typing"
      ]
    },
    {
      step: "Step 10: Build & Deploy Python Applications",
      items: [
        "Build Real-world Apps: Web Apps, APIs, Scripts",
        "Deploy on Heroku, Vercel, or AWS Lambda",
        "Package Apps using pip, setuptools, and Docker",
        "Contribute to Open-source Python Projects"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Python Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master Python and build applications in web development, automation, and data science.
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
