import React from "react";
import "./Frontend.css";

export default function SpringBootRoadmap() {
  const steps = [
    {
      step: "Step 1: Prerequisites",
      items: [
        "Learn Core Java & OOP Concepts",
        "Understand Basic SQL and Relational Databases",
        "Familiarize Yourself with Maven or Gradle Build Tools",
        "Know How to Use an IDE like IntelliJ IDEA or Eclipse"
      ]
    },
    {
      step: "Step 2: Learn Spring Core Concepts",
      items: [
        "Understand Inversion of Control (IoC) & Dependency Injection",
        "Learn About Beans, Application Context, and Configuration",
        "Use Annotations (@Component, @Autowired, etc.)"
      ]
    },
    {
      step: "Step 3: Master Spring Boot Basics",
      items: [
        "Create Spring Boot Applications Using Spring Initializr",
        "Understand Project Structure and Auto Configuration",
        "Work with application.properties / application.yml Files",
        "Run and Test Your First Spring Boot App"
      ]
    },
    {
      step: "Step 4: Build RESTful APIs",
      items: [
        "Create REST Endpoints with @RestController and @RequestMapping",
        "Handle HTTP Methods: GET, POST, PUT, DELETE",
        "Parse Request Parameters and JSON Bodies",
        "Return JSON Responses"
      ]
    },
    {
      step: "Step 5: Integrate with Databases",
      items: [
        "Use Spring Data JPA with Hibernate",
        "Configure DataSources and JPA Repositories",
        "Write Entity Classes and Perform CRUD Operations",
        "Run Migrations Using Liquibase or Flyway"
      ]
    },
    {
      step: "Step 6: Add Security",
      items: [
        "Implement Spring Security Basics",
        "Configure JWT or OAuth2 Authentication",
        "Manage Roles and Permissions",
        "Secure REST Endpoints"
      ]
    },
    {
      step: "Step 7: Handle Business Logic & Errors",
      items: [
        "Structure Services and Repositories",
        "Use @Service, @Repository, and DTO Patterns",
        "Handle Exceptions with @ControllerAdvice and Custom Error Responses"
      ]
    },
    {
      step: "Step 8: Test Your Applications",
      items: [
        "Write Unit Tests with JUnit and Mockito",
        "Perform Integration Tests with MockMvc",
        "Use Testcontainers for Database Testing"
      ]
    },
    {
      step: "Step 9: Deploy Spring Boot Apps",
      items: [
        "Build Executable JARs",
        "Deploy to AWS, Heroku, or DigitalOcean",
        "Run in Docker Containers",
        "Set Up CI/CD Pipelines (GitHub Actions, Jenkins, etc.)"
      ]
    },
    {
      step: "Step 10: Explore Advanced Spring Boot Topics",
      items: [
        "Work with Spring Boot Actuator for Monitoring",
        "Implement Microservices using Spring Cloud",
        "Use Async Programming with CompletableFuture",
        "Explore GraphQL with Spring Boot"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Spring Boot Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master Spring Boot for building robust, scalable, and secure web applications and microservices.
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
