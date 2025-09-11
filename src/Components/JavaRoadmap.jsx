import React from "react";
import "./Frontend.css";

export default function JavaRoadmap() {
  const steps = [
    {
      step: "Step 1: Learn Java Basics",
      items: [
        "Install Java Development Kit (JDK) and IDE (IntelliJ IDEA or Eclipse)",
        "Understand Syntax, Variables, and Data Types",
        "Learn Conditional Statements and Loops",
        "Work with Arrays and Strings",
        "Understand Functions and Method Overloading"
      ]
    },
    {
      step: "Step 2: Master Object-Oriented Programming (OOP)",
      items: [
        "Understand Classes and Objects",
        "Work with Inheritance, Polymorphism, Abstraction, and Encapsulation",
        "Learn Interfaces and Abstract Classes",
        "Understand Constructors and Static Methods"
      ]
    },
    {
      step: "Step 3: Collections and Generics",
      items: [
        "Use Collections: List, Set, Map",
        "Learn Iterators and Streams API",
        "Understand Generics and Type Safety",
        "Practice Sorting and Searching Algorithms"
      ]
    },
    {
      step: "Step 4: Exception Handling and File I/O",
      items: [
        "Learn Try-Catch-Finally and Custom Exceptions",
        "Work with File Reading and Writing",
        "Handle Serialization and Deserialization"
      ]
    },
    {
      step: "Step 5: Multithreading and Concurrency",
      items: [
        "Understand Threads and Runnable Interface",
        "Use Executors and Thread Pools",
        "Handle Synchronization and Concurrency Utilities"
      ]
    },
    {
      step: "Step 6: Build Java Applications",
      items: [
        "Create Console Applications",
        "Learn Swing/JavaFX for Desktop GUIs (optional)",
        "Build CLI Tools and Small Utilities"
      ]
    },
    {
      step: "Step 7: Java Web Development (Spring Framework)",
      items: [
        "Learn Spring Core, Spring Boot Basics",
        "Create RESTful APIs using Spring Boot",
        "Integrate Databases using Spring Data JPA",
        "Secure Applications with Spring Security"
      ]
    },
    {
      step: "Step 8: Testing and Best Practices",
      items: [
        "Write Unit Tests with JUnit and Mockito",
        "Follow SOLID Principles and Clean Code Practices",
        "Understand Build Tools: Maven, Gradle",
        "Use Logging Libraries like Log4j and SLF4J"
      ]
    },
    {
      step: "Step 9: Deployment and DevOps",
      items: [
        "Package Applications as JAR/WAR",
        "Deploy to Tomcat, AWS Elastic Beanstalk, or Docker",
        "Automate CI/CD with Jenkins or GitHub Actions"
      ]
    },
    {
      step: "Step 10: Advanced Java Topics",
      items: [
        "Master JVM Internals and Garbage Collection",
        "Explore Reactive Programming with Spring WebFlux",
        "Work with Microservices Architecture",
        "Contribute to Open-source Java Libraries"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Java Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master Java for backend development, web applications, and enterprise systems.
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
