import React from "react";
import "./Frontend.css";

export default function CppRoadmap() {
  const steps = [
    {
      step: "Step 1: Learn the Basics",
      items: [
        "Install a Compiler (GCC/Clang) and IDE (VS Code, CLion)",
        "Understand Syntax, Variables, and Data Types",
        "Learn Conditional Statements and Loops",
        "Practice with Arrays and Strings",
        "Understand Functions and Parameter Passing"
      ]
    },
    {
      step: "Step 2: Master Object-Oriented Programming",
      items: [
        "Understand Classes and Objects",
        "Work with Inheritance, Polymorphism, Encapsulation, Abstraction",
        "Learn Constructors, Destructors, and Operator Overloading",
        "Practice with Real-world OOP Examples"
      ]
    },
    {
      step: "Step 3: Work with Standard Template Library (STL)",
      items: [
        "Learn Containers: Vector, Map, Set, List",
        "Understand Iterators and Algorithms",
        "Practice Sorting, Searching, and Custom Comparators"
      ]
    },
    {
      step: "Step 4: Memory Management and Pointers",
      items: [
        "Understand Pointers, References, and Dynamic Memory Allocation",
        "Use Smart Pointers (unique_ptr, shared_ptr)",
        "Avoid Memory Leaks and Use Valgrind"
      ]
    },
    {
      step: "Step 5: Exception Handling and File I/O",
      items: [
        "Use try, catch, and throw for Error Handling",
        "Work with File Streams for Reading and Writing Files",
        "Handle Binary and Text Files"
      ]
    },
    {
      step: "Step 6: Advanced C++ Concepts",
      items: [
        "Learn Templates and Generic Programming",
        "Understand Lambda Functions and Functors",
        "Work with Namespaces and Inline Functions",
        "Practice Multithreading with std::thread"
      ]
    },
    {
      step: "Step 7: Build Projects",
      items: [
        "Create Console Applications and CLI Tools",
        "Build Simple Games (Tic-Tac-Toe, Snake)",
        "Work on Algorithmic Challenges (HackerRank, LeetCode)"
      ]
    },
    {
      step: "Step 8: Master Design Patterns",
      items: [
        "Learn Creational Patterns (Singleton, Factory)",
        "Understand Structural and Behavioral Patterns",
        "Implement Patterns in C++ Projects"
      ]
    },
    {
      step: "Step 9: Explore System Programming & Embedded",
      items: [
        "Learn Linux System Programming Basics",
        "Understand File Descriptors, Sockets, and Processes",
        "Explore Embedded C++ for Microcontrollers (Arduino, ESP32)"
      ]
    },
    {
      step: "Step 10: Deployment & Optimization",
      items: [
        "Compile with Makefiles or CMake",
        "Optimize Code for Performance (Profiling, Compiler Flags)",
        "Deploy C++ Apps in Production (Optional Docker or Containers)"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">C++ Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master C++ for systems programming, competitive programming, and application development.
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
