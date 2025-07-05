import React from "react";
import "./Frontend.css";

export default function PromptEngineering() {
  const steps = [
    {
      title: "Step 1: Basics of Language Models",
      items: [
        "Understand what Large Language Models (LLMs) are and how they work.",
        "Learn the difference between models like GPT, Claude, LLaMA, and Mistral.",
        "Understand tokenization and context length in LLMs.",
        "Familiarize with OpenAI API, Anthropic API, and Hugging Face Transformers."
      ],
    },
    {
      title: "Step 2: Core Prompt Engineering Concepts",
      items: [
        "Learn the anatomy of a prompt: instructions, context, examples.",
        "Use clear, explicit instructions for better responses.",
        "Understand zero-shot, one-shot, and few-shot prompting.",
        "Experiment with prompt variations to optimize results."
      ],
    },
    {
      title: "Step 3: Advanced Prompt Techniques",
      items: [
        "Chain of Thought (CoT) prompting to improve reasoning.",
        "Self-consistency prompting for better factual outputs.",
        "Role-based prompting (e.g., 'Act as a...') for guided behaviors.",
        "System messages vs user prompts in chat models."
      ],
    },
    {
      title: "Step 4: Tools and Frameworks",
      items: [
        "Use LangChain or LlamaIndex to build LLM-powered apps.",
        "Integrate prompts in your backend with Python, Node.js, or Go.",
        "Explore prompt optimization tools like PromptLayer or OpenAI Playground.",
        "Use evaluation tools to measure prompt effectiveness and costs."
      ],
    },
    {
      title: "Step 5: Best Practices & Trends",
      items: [
        "Design safe and ethical prompts to avoid bias or harm.",
        "Handle API rate limits and error responses gracefully.",
        "Stay updated with advances in context windows and fine-tuning.",
        "Explore autonomous agents and multi-agent systems using prompts.",
        "Optimize prompts for cost-efficiency and latency in production apps."
      ],
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Prompt Engineering Roadmap</h1>
      <p className="frontend-description">
        Learn how to craft effective prompts to maximize the performance of AI language models in your applications.
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
