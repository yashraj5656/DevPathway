import React from "react";
import "./Frontend.css";

export default function AIRedTeaming() {
  const steps = [
    {
      title: "Step 1: Understand Red Teaming & AI Threats",
      items: [
        "Learn the basics of red teaming in cybersecurity: offensive security testing to improve defense.",
        "Understand unique threats in AI systems: prompt injection, model inversion, data poisoning, and adversarial examples.",
        "Explore threat modeling frameworks specific to AI, like MITRE ATLAS."
      ],
    },
    {
      title: "Step 2: Testing Large Language Models (LLMs)",
      items: [
        "Identify risks in LLMs: harmful outputs, jailbreaks, hallucination, and unauthorized data access.",
        "Perform prompt injection attacks and test guardrails.",
        "Use red teaming frameworks like OpenAI's Red Teaming Toolkit and Microsoft's PyRIT."
      ],
    },
    {
      title: "Step 3: Attacking ML Pipelines",
      items: [
        "Conduct data poisoning and evasion attacks against supervised models.",
        "Test the robustness of computer vision models with adversarial images (e.g., FGSM, DeepFool).",
        "Explore model stealing (copycat models) and membership inference attacks."
      ],
    },
    {
      title: "Step 4: Advanced Red Teaming Techniques",
      items: [
        "Simulate insider threats accessing model weights or sensitive datasets.",
        "Run black-box and white-box adversarial testing.",
        "Exploit AI supply chains (e.g., poisoned pretrained models from public repositories).",
        "Test AI-powered systems in production using ethical hacking techniques."
      ],
    },
    {
      title: "Step 5: Defenses, Monitoring & Reporting",
      items: [
        "Recommend defenses: adversarial training, model watermarking, and prompt filtering.",
        "Collaborate with blue teams to patch discovered vulnerabilities.",
        "Monitor AI system behavior for unusual patterns.",
        "Write comprehensive red teaming reports for AI systems with risk levels and mitigation plans."
      ],
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">AI Red Teaming Roadmap</h1>
      <p className="frontend-description">
        Explore how to ethically test and secure AI systems against adversarial threats through AI Red Teaming practices.
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
