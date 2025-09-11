import React from "react";
import "./Frontend.css";

export default function ReactNative() {
  const steps = [
    {
      title: "Step 1: JavaScript & React Basics",
      items: [
        "Master JavaScript fundamentals (ES6+ syntax, functions, promises, etc.)",
        "Learn core React concepts: components, props, state, hooks, JSX",
        "Understand React component lifecycles and virtual DOM",
        "Practice building simple React web apps"
      ],
    },
    {
      title: "Step 2: React Native Essentials",
      items: [
        "Set up the React Native development environment (Expo CLI or React Native CLI)",
        "Learn React Native core components (View, Text, Button, Image, FlatList, etc.)",
        "Style components using StyleSheet and Flexbox",
        "Understand the difference between Expo-managed and bare workflows"
      ],
    },
    {
      title: "Step 3: Navigation & State Management",
      items: [
        "Use React Navigation for handling multi-screen navigation",
        "Learn about different navigators: Stack, Tab, Drawer",
        "Manage app-wide state using Context API or Redux Toolkit",
        "Persist state using libraries like AsyncStorage or MMKV"
      ],
    },
    {
      title: "Step 4: API Integration & Native Features",
      items: [
        "Integrate RESTful APIs using fetch or axios",
        "Work with device features: Camera, Geolocation, Notifications, etc.",
        "Use third-party libraries for charts, forms, etc.",
        "Handle app permissions on Android and iOS"
      ],
    },
    {
      title: "Step 5: Testing & Deployment",
      items: [
        "Write unit and component tests using Jest and React Native Testing Library",
        "Optimize app performance",
        "Build and publish apps to Google Play Store and Apple App Store",
        "Monitor crashes and performance using tools like Sentry or Firebase Crashlytics"
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">React Native Roadmap</h1>
      <p className="frontend-description">
        Follow this roadmap to build cross-platform mobile apps using React Native efficiently.
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
