import React from "react";
import "./Frontend.css";

export default function TechnicalWriter() {
  const steps = [
    {
      step: "Step 1: Understand the Role of a Technical Writer",
      items: [
        "Learn What Technical Writers Do",
        "Understand the Difference Between Technical Writing and Copywriting",
        "Identify Different Types of Technical Documents (User Guides, API Docs, Whitepapers, etc.)",
        "Know the Target Audience for Each Document"
      ]
    },
    {
      step: "Step 2: Master Writing and Communication Skills",
      items: [
        "Practice Clear and Concise Writing",
        "Learn to Write for Technical and Non-Technical Audiences",
        "Study Grammar, Punctuation, and Technical Style Guides (Microsoft Manual, Google Style Guide)",
        "Learn Simplified Technical English for Global Audiences"
      ]
    },
    {
      step: "Step 3: Learn Documentation Tools & Technologies",
      items: [
        "Master Markdown, HTML, and CSS Basics",
        "Use Documentation Tools: Google Docs, Microsoft Word, Notion",
        "Learn Static Site Generators like Docusaurus, MkDocs, or Jekyll",
        "Explore API Documentation Tools: Swagger, Postman, Redoc"
      ]
    },
    {
      step: "Step 4: Understand Technical Domains",
      items: [
        "Gain Basic Understanding of Software Development (Git, APIs, Databases)",
        "Learn about Cloud Platforms (AWS, Azure, GCP)",
        "Familiarize with DevOps, Security, and Networking Concepts",
        "Explore Emerging Tech Topics (AI, Blockchain, etc.)"
      ]
    },
    {
      step: "Step 5: Practice Documentation Writing",
      items: [
        "Create User Manuals and Installation Guides",
        "Document RESTful APIs and SDKs",
        "Write Internal Knowledge Base Articles",
        "Develop Tutorials and Getting Started Guides"
      ]
    },
    {
      step: "Step 6: Improve Visual Communication",
      items: [
        "Use Diagrams (Lucidchart, draw.io) to Explain Architecture",
        "Create Flowcharts and Wireframes",
        "Understand Basic UX for Documentation",
        "Design Accessible Documentation"
      ]
    },
    {
      step: "Step 7: Learn Version Control for Documentation",
      items: [
        "Use Git to Manage Documentation Versions",
        "Collaborate with Developers on Documentation Repositories",
        "Work with Docs-as-Code Workflows",
        "Automate Documentation Builds and Deployment"
      ]
    },
    {
      step: "Step 8: Build a Technical Writing Portfolio",
      items: [
        "Publish Your Documentation on GitHub Pages or Netlify",
        "Create Case Studies Showcasing Your Writing Process",
        "Contribute to Open Source Project Documentation",
        "Write Blog Posts on Technical Writing Topics"
      ]
    },
    {
      step: "Step 9: Get Feedback and Iterate",
      items: [
        "Gather Feedback from Developers and Users",
        "Refine Your Documentation for Clarity and Usefulness",
        "Keep Documentation Updated with Product Changes",
        "Improve Based on Real-World Use Cases"
      ]
    },
    {
      step: "Step 10: Continuous Learning & Career Growth",
      items: [
        "Join Technical Writing Communities (Write the Docs, TechWhirl)",
        "Earn Certifications: Technical Communication, UX Writing, API Documentation",
        "Stay Updated with Industry Trends",
        "Mentor New Technical Writers or Speak at Meetups"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Technical Writer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to become a Technical Writer and create clear, helpful, and structured documentation for technical products.
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
