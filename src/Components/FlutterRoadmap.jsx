import React from "react";
import "./Frontend.css";

export default function FlutterRoadmap() {
  const steps = [
    {
      step: "Step 1: Setup and Fundamentals",
      items: [
        "Install Flutter SDK and Dart",
        "Set up IDE (Android Studio, VS Code)",
        "Run Your First Flutter App on Emulator/Device",
        "Understand Flutter Project Structure"
      ]
    },
    {
      step: "Step 2: Learn Dart Programming",
      items: [
        "Understand Dart Syntax and Variables",
        "Learn Functions, Classes, and OOP Concepts",
        "Work with Lists, Maps, and Collections",
        "Master Null Safety and Futures/Streams"
      ]
    },
    {
      step: "Step 3: Build UI with Flutter Widgets",
      items: [
        "Understand Stateless and Stateful Widgets",
        "Work with Layouts: Row, Column, Stack, Grid",
        "Style UI with Container, Padding, and Margin",
        "Use Material Design Components"
      ]
    },
    {
      step: "Step 4: Navigation and Routing",
      items: [
        "Implement Named and Anonymous Routes",
        "Pass Data Between Screens",
        "Handle Nested Navigation with Navigator 2.0"
      ]
    },
    {
      step: "Step 5: State Management",
      items: [
        "Learn setState and Lifting State Up",
        "Use Provider for Simple State Management",
        "Explore Riverpod, BLoC, or GetX for Complex Apps"
      ]
    },
    {
      step: "Step 6: API Integration and Data Persistence",
      items: [
        "Fetch Data using HTTP or Dio",
        "Parse JSON Data into Dart Models",
        "Store Data with SharedPreferences or Hive",
        "Use SQLite for Local Database Storage"
      ]
    },
    {
      step: "Step 7: Authentication and Security",
      items: [
        "Integrate Firebase Authentication",
        "Secure API Keys and Tokens",
        "Implement OAuth, Google, and Facebook Login"
      ]
    },
    {
      step: "Step 8: Animations and UI Polish",
      items: [
        "Add Basic Animations using AnimationController",
        "Use Implicit Animations (AnimatedContainer, etc.)",
        "Build Beautiful Transitions and Hero Animations"
      ]
    },
    {
      step: "Step 9: Testing and Debugging",
      items: [
        "Write Unit and Widget Tests",
        "Use Flutter DevTools for Debugging",
        "Handle Crash Reporting with Firebase Crashlytics"
      ]
    },
    {
      step: "Step 10: Deployment and Publishing",
      items: [
        "Build APKs and iOS Builds",
        "Publish Apps on Google Play and App Store",
        "Set Up CI/CD with Codemagic or GitHub Actions"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Flutter Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to build cross-platform apps for Android, iOS, web, and desktop using Flutter.
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
