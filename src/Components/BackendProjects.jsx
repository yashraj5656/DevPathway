import React from "react";
import "./Frontend.css";

export default function BackendProjects() {
  const projectIdeas = [
    {
      title: "Beginner Projects",
      items: [
        "Basic RESTful API (CRUD Operations)",
        "Simple Authentication API (JWT-based Login/Signup)",
        "Notes API (With MongoDB/PostgreSQL)",
        "Weather API Proxy Server",
        "Contact Form Backend (Email Integration)",
        "Blog Post API (With Express.js or Django)"
      ]
    },
    {
      title: "Intermediate Projects",
      items: [
        "Real-time Chat Server (Using WebSockets or Socket.io)",
        "E-commerce API (Products, Cart, Orders, Payments)",
        "File Upload Service (With AWS S3 or Cloudinary)",
        "Payment Gateway Integration (Stripe/Razorpay)",
        "Multi-user Blogging API with Roles & Permissions",
        "RESTful API with Rate Limiting & Caching (Redis)"
      ]
    },
    {
      title: "Advanced Projects",
      items: [
        "Job Queue and Background Processing System",
        "Notification System (Email, SMS, Push Notifications)",
        "Social Media Backend (Posts, Likes, Comments, Follow System)",
        "GraphQL API for Analytics Dashboard",
        "Event-Driven Microservices with RabbitMQ or Kafka",
        "API Gateway with Rate Limiting and Service Discovery"
      ]
    },
    {
      title: "API and Integration Projects",
      items: [
        "Third-party API Integrations (GitHub, Spotify, Google OAuth)",
        "Stock Market or Crypto Price Tracking API",
        "Location-based Service with Google Maps API",
        "News Aggregator API (Scraping or Integrating News APIs)"
      ]
    },
    {
      title: "Infrastructure & DevOps Focused Projects",
      items: [
        "Dockerize a Node.js or Python API",
        "Build a CI/CD Pipeline (GitHub Actions/Bitbucket Pipelines)",
        "Logging & Monitoring with Prometheus & Grafana",
        "Cloud Deployment (AWS EC2, Heroku, Railway, etc.)"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Backend Project Ideas</h1>
      <p className="frontend-description">
        Work on these project ideas to build scalable, secure, and maintainable backend services.
      </p>

      {projectIdeas.map((section, index) => (
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
