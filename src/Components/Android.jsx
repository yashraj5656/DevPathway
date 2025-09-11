import React from "react";
import "./Frontend.css"; // Reuse your common styles

export default function Android() {
  const steps = [
    {
      step: "Step 1: Understand Programming Basics",
      items: [
        "Learn Java or Kotlin (Kotlin Recommended)",
        "Understand OOP (Object-Oriented Programming)",
        "Version Control with Git & GitHub"
      ]
    },
    {
      step: "Step 2: Set Up Development Environment",
      items: [
        "Install Android Studio",
        "Understand the Android Emulator & Device Testing",
        "Configure SDK, Gradle, and AVDs"
      ]
    },
    {
      step: "Step 3: Master Android Fundamentals",
      items: [
        "Activities, Fragments, and Intents",
        "ViewModels & Lifecycle Awareness",
        "Layouts (XML) and Views",
        "Handling User Input"
      ]
    },
    {
      step: "Step 4: Learn UI/UX Design for Android",
      items: [
        "Material Design Principles",
        "Custom Views & Themes",
        "RecyclerView, ViewPager",
        "Animations & Transitions"
      ]
    },
    {
      step: "Step 5: Work with Data",
      items: [
        "SQLite & Room Database",
        "SharedPreferences",
        "Content Providers",
        "REST API Integration using Retrofit or Volley"
      ]
    },
    {
      step: "Step 6: Dependency Injection & Architecture",
      items: [
        "Learn MVVM Architecture",
        "Dependency Injection with Dagger/Hilt",
        "Data Binding & LiveData"
      ]
    },
    {
      step: "Step 7: Enhance App Quality",
      items: [
        "Error Handling & Debugging",
        "Unit Testing with JUnit & Espresso",
        "Performance Optimization"
      ]
    },
    {
      step: "Step 8: Advanced Android Development",
      items: [
        "Jetpack Compose (Modern UI Toolkit)",
        "WorkManager, JobScheduler",
        "Push Notifications with Firebase Cloud Messaging (FCM)",
        "Location Services & Google Maps Integration"
      ]
    },
    {
      step: "Step 9: Deployment & Distribution",
      items: [
        "Create a Signed APK / AAB",
        "Publish on Google Play Store",
        "Follow Google Play Console Guidelines"
      ]
    },
    {
      step: "Step 10: Keep Learning & Building",
      items: [
        "Explore Kotlin Coroutines & Flow",
        "Experiment with ML Kit & ARCore",
        "Contribute to Open Source",
        "Stay Updated on Android SDK Updates"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Android Development Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to become a professional Android developer using modern tools and best practices.
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
