import React from "react";
import "./Frontend.css";

export default function AIAgents() {
  const steps = [
    {
      title: "Step 1: Basics of AI Agents",
      items: [
        "Understand what AI Agents are and how they differ from standard AI models.",
        "Learn about autonomous agents and the concept of agent-environment interaction.",
        "Familiarize with core components: perception, decision-making, and action.",
        "Explore basic agent types: reactive, deliberative, and hybrid agents."
      ],
    },
    {
      title: "Step 2: Building Blocks of AI Agents",
      items: [
        "Understand state management within agents.",
        "Learn about memory: short-term vs long-term memory.",
        "Handle multi-step task planning and action execution.",
        "Use message passing or shared memory for inter-agent communication."
      ],
    },
    {
      title: "Step 3: LLM-Powered Agents",
      items: [
        "Use Large Language Models (LLMs) as reasoning engines for agents.",
        "Explore popular frameworks: LangChain, AutoGPT, OpenAgents, MetaGPT.",
        "Design chain-of-thought prompting to enable step-by-step reasoning.",
        "Integrate APIs, databases, and other tools for broader task execution."
      ],
    },
    {
      title: "Step 4: Multi-Agent Systems",
      items: [
        "Build agent teams to solve complex problems collaboratively.",
        "Coordinate and assign roles within agent swarms.",
        "Handle conflict resolution and negotiation between agents.",
        "Optimize communication efficiency to reduce token usage and latency."
      ],
    },
    {
      title: "Step 5: Deployment, Safety & Future Trends",
      items: [
        "Deploy agents on serverless platforms or cloud VMs.",
        "Implement guardrails to ensure ethical and safe behavior.",
        "Monitor performance and prevent runaway loops.",
        "Explore emerging trends like embodied AI agents (robotics) and autonomous organizations.",
        "Keep up with advances in agentic AI research and open-source ecosystems."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">AI Agents Roadmap</h1>
      <p className="frontend-description">
        Learn how to build autonomous AI agents capable of completing complex, multi-step tasks using reasoning and external tools.
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
