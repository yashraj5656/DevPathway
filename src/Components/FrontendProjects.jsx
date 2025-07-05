import React from "react";
import "./Frontend.css";

export default function FrontendProjects() {
  const projectIdeas = [
    {
      title: "Beginner Projects",
      items: [
        "Personal Portfolio Website",
        "Responsive Landing Page",
        "To-Do List App",
        "Quiz App",
        "Weather Forecast App (Using OpenWeather API)",
        "Simple Blog Website (Static)"
      ]
    },
    {
      title: "Intermediate Projects",
      items: [
        "Movie Search App (Using TMDB API)",
        "E-commerce Product Page with Filters",
        "Markdown Previewer",
        "Authentication Flow (Login/Signup/Protected Routes)",
        "Recipe Finder App (Using Spoonacular API)",
        "Task Manager with Drag & Drop"
      ]
    },
    {
      title: "Advanced Projects",
      items: [
        "E-commerce Store (With Cart, Checkout, and API Integration)",
        "Chat Application (Socket.io or Firebase)",
        "Real-time Stock Market Dashboard",
        "Blog Platform with CMS (Using Headless CMS like Strapi)",
        "Online Code Editor (Like CodePen/JSFiddle)",
        "Expense Tracker with Charts (Chart.js/Recharts)"
      ]
    },
    {
      title: "UI/UX Focused Projects",
      items: [
        "Glassmorphism Landing Page",
        "Dark/Light Theme Toggle Site",
        "Animated Component Library",
        "Custom Design System or UI Kit"
      ]
    },
    {
      title: "API and Integration Projects",
      items: [
        "Weather, Crypto, or Sports News Dashboard",
        "Google Maps Integration App",
        "Spotify or YouTube Playlist Viewer",
        "GitHub Profile Explorer"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Frontend Project Ideas</h1>
      <p className="frontend-description">
        Explore these project ideas to practice your frontend skills and build an impressive portfolio.
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
