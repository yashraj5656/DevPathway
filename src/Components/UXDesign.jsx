import React from "react";
import "./Frontend.css";

export default function UXDesign() {
  const steps = [
    {
      step: "Step 1: Understand UX Design Basics",
      items: [
        "Learn What UX (User Experience) Design Is",
        "Differentiate Between UX and UI",
        "Understand Human-Centered Design Principles",
        "Study the Design Thinking Process"
      ]
    },
    {
      step: "Step 2: Study User Research Techniques",
      items: [
        "Learn to Conduct User Interviews & Surveys",
        "Understand Empathy Mapping & Personas",
        "Perform Competitor & Market Analysis",
        "Document User Stories and Use Cases"
      ]
    },
    {
      step: "Step 3: Learn Wireframing & Prototyping",
      items: [
        "Use Tools like Figma, Sketch, Adobe XD, or Balsamiq",
        "Create Wireframes and Low-Fidelity Prototypes",
        "Build Interactive Prototypes for Usability Testing",
        "Test Wireframes with Real Users"
      ]
    },
    {
      step: "Step 4: Master UI Design Basics",
      items: [
        "Understand Color Theory, Typography, and Layout Grids",
        "Study Design Systems and Style Guides",
        "Learn Responsive and Adaptive Design",
        "Follow Accessibility (WCAG) Guidelines"
      ]
    },
    {
      step: "Step 5: Practice Usability Testing",
      items: [
        "Conduct A/B Testing",
        "Analyze Heatmaps and Click Tracking",
        "Perform Remote and In-Person Usability Tests",
        "Iterate Designs Based on Feedback"
      ]
    },
    {
      step: "Step 6: Collaborate in Design Teams",
      items: [
        "Work with Product Managers, Developers, and Stakeholders",
        "Use Agile or Lean UX Methods",
        "Manage Design Feedback & Revisions",
        "Document UX Decisions Clearly"
      ]
    },
    {
      step: "Step 7: Explore Advanced UX Topics",
      items: [
        "Learn UX Writing and Microcopy",
        "Study Interaction Design & Motion Design",
        "Explore Voice UX & Conversational Interfaces",
        "Understand Design Ethics and Inclusive Design"
      ]
    },
    {
      step: "Step 8: Build a Portfolio",
      items: [
        "Create Case Studies for Each UX Project",
        "Show Process: Research → Design → Test → Iterate",
        "Publish on Behance, Dribbble, or Personal Website",
        "Explain Your Design Decisions Clearly"
      ]
    },
    {
      step: "Step 9: Stay Updated & Network",
      items: [
        "Follow UX Blogs and Thought Leaders",
        "Join UX Communities & Conferences",
        "Contribute to Open-Source Design Projects",
        "Learn About New Tools & Methods Regularly"
      ]
    },
    {
      step: "Step 10: Optional Specializations",
      items: [
        "Product Design",
        "UX Research",
        "Interaction Design",
        "Design Systems Specialist",
        "Accessibility Specialist"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">UX Design Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to become a UX Designer and create intuitive, user-centered digital experiences.
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
