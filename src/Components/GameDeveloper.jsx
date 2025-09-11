import React from "react";
import "./Frontend.css";

export default function GameDeveloper() {
  const steps = [
    {
      step: "Step 1: Understand Game Development Basics",
      items: [
        "Learn the Basics of How Games Work (Game Loop, Rendering, Physics)",
        "Understand Game Genres and Mechanics",
        "Study 2D and 3D Graphics Fundamentals",
        "Explore Game Design Principles"
      ]
    },
    {
      step: "Step 2: Master a Programming Language",
      items: [
        "Learn C# for Unity or C++ for Unreal Engine",
        "Understand Object-Oriented Programming (OOP)",
        "Practice Game-Specific Programming Concepts (Frame Rate, Event Systems)",
        "Study Scripting Basics in Game Engines"
      ]
    },
    {
      step: "Step 3: Learn a Game Engine",
      items: [
        "Master Unity (C#) or Unreal Engine (C++)",
        "Understand Scene Setup, Physics, and Animations",
        "Work with Audio, Lighting, and Particle Systems",
        "Explore Alternative Engines: Godot, Phaser, Cocos2d"
      ]
    },
    {
      step: "Step 4: Build Simple 2D Games",
      items: [
        "Create Platformers, Puzzles, and Arcade Games",
        "Learn Sprite Animation & 2D Physics",
        "Implement Basic UI and Sound Effects",
        "Practice Deploying to Web, PC, and Mobile"
      ]
    },
    {
      step: "Step 5: Advance to 3D Game Development",
      items: [
        "Learn 3D Modeling Basics (Blender, Maya)",
        "Integrate 3D Assets and Animations",
        "Work with Cameras, Colliders, and Raycasting",
        "Optimize Rendering Performance"
      ]
    },
    {
      step: "Step 6: Understand Multiplayer and Networking",
      items: [
        "Learn Client-Server Architecture for Games",
        "Implement Basic Multiplayer with Photon or Mirror (Unity)",
        "Understand Syncing Player States",
        "Explore Matchmaking and Lobby Systems"
      ]
    },
    {
      step: "Step 7: Polish Your Games",
      items: [
        "Focus on Game Feel and Player Experience",
        "Add Menus, HUD, and Pause Screens",
        "Optimize Asset Loading and Memory Usage",
        "Test and Debug Across Platforms"
      ]
    },
    {
      step: "Step 8: Explore Game Monetization & Publishing",
      items: [
        "Add Ads, In-App Purchases, or Paid Access",
        "Publish to Platforms like Steam, itch.io, Google Play, App Store",
        "Optimize Games for Mobile and Console",
        "Market Your Games to Build a Player Base"
      ]
    },
    {
      step: "Step 9: Learn Advanced Game Concepts",
      items: [
        "Study AI for Game Characters",
        "Implement Procedural Generation",
        "Explore Physics Engines and Particle Systems",
        "Learn VR/AR Game Development"
      ]
    },
    {
      step: "Step 10: Continuous Practice & Community Involvement",
      items: [
        "Participate in Game Jams (Ludum Dare, Global Game Jam)",
        "Contribute to Open Source Game Projects",
        "Stay Updated with New Engines & Tools",
        "Build a Portfolio and Share on GitHub or itch.io"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Game Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to become a Game Developer and build engaging 2D, 3D, and multiplayer games.
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
