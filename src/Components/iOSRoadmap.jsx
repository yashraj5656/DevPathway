import React from "react";
import "./Frontend.css";

export default function iOSRoadmap() {
  const steps = [
    {
      step: "Step 1: Setup and Fundamentals",
      items: [
        "Install Xcode and Set Up the iOS Development Environment",
        "Learn Swift Programming Language Basics",
        "Understand Xcode IDE, Interface Builder, and Simulators",
        "Build Simple iOS Apps Using UIKit or SwiftUI"
      ]
    },
    {
      step: "Step 2: Learn Core iOS Concepts",
      items: [
        "Understand the MVC, MVVM, and VIPER Architectures",
        "Master Auto Layout and Responsive Design",
        "Work with Storyboards and Programmatic UI",
        "Handle Navigation with NavigationController and TabBarController"
      ]
    },
    {
      step: "Step 3: Data Management",
      items: [
        "Use UserDefaults for Simple Data Storage",
        "Work with CoreData for Persistent Storage",
        "Make Network Requests Using URLSession",
        "Parse JSON and Integrate RESTful APIs"
      ]
    },
    {
      step: "Step 4: Advanced Topics",
      items: [
        "Implement Combine or RxSwift for Reactive Programming",
        "Handle Background Tasks and Push Notifications",
        "Optimize for Performance and Memory Management (ARC)"
      ]
    },
    {
      step: "Step 5: SwiftUI (Modern UI Framework)",
      items: [
        "Build Declarative UIs with SwiftUI",
        "Integrate Animations and Transitions",
        "Use State, Binding, and Environment in SwiftUI"
      ]
    },
    {
      step: "Step 6: App Security and Best Practices",
      items: [
        "Manage Keychain for Secure Data Storage",
        "Handle App Permissions (Location, Camera, etc.)",
        "Secure Network Calls Using HTTPS and Certificate Pinning"
      ]
    },
    {
      step: "Step 7: Testing and Debugging",
      items: [
        "Write Unit Tests and UI Tests in Xcode",
        "Use Instruments for Performance Profiling",
        "Debug Crashes with Xcode's Debug Navigator"
      ]
    },
    {
      step: "Step 8: Deployment and Distribution",
      items: [
        "Create App Store Developer Account",
        "Test on Physical Devices and Beta Test Using TestFlight",
        "Submit the App to the App Store and Handle App Review"
      ]
    },
    {
      step: "Step 9: Continuous Learning",
      items: [
        "Stay Updated with New iOS Versions and APIs",
        "Participate in WWDC Sessions and iOS Developer Forums",
        "Explore Open Source iOS Libraries on GitHub"
      ]
    },
    {
      step: "Step 10: Build Real-World Projects",
      items: [
        "Create Portfolio Apps: Weather App, ToDo List, Chat App",
        "Clone Popular Apps to Practice Architecture",
        "Contribute to iOS Open Source Projects"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">iOS Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master iOS app development using Swift, SwiftUI, and modern iOS frameworks.
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
