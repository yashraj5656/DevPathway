import React from "react";
import "./Frontend.css"; // Reusing the same dark theme styles

export default function AIEngineer() {
  const steps = [
    {
      step: "Step 1: Build Strong Programming Fundamentals",
      items: [
        "Learn Python (preferred language for AI/ML)",
        "Master Python Libraries: NumPy, Pandas, Matplotlib",
        "Understand Object-Oriented Programming (OOP)"
      ]
    },
    {
      step: "Step 2: Master Math for AI",
      items: [
        "Linear Algebra — Vectors, Matrices, Eigenvalues",
        "Probability & Statistics — Bayes Theorem, Distributions",
        "Calculus — Derivatives, Gradients (for optimization)"
      ]
    },
    {
      step: "Step 3: Learn Machine Learning",
      items: [
        "Supervised, Unsupervised & Reinforcement Learning",
        "Algorithms: Linear Regression, Decision Trees, SVM, Clustering",
        "Machine Learning Libraries: Scikit-learn, XGBoost"
      ]
    },
    {
      step: "Step 4: Get Hands-on with Deep Learning",
      items: [
        "Neural Networks & Backpropagation",
        "Frameworks: TensorFlow, PyTorch",
        "Build CNNs, RNNs, Transformers"
      ]
    },
    {
      step: "Step 5: Data Engineering & Pipelines",
      items: [
        "Data Collection & Cleaning",
        "Working with Databases (SQL, MongoDB)",
        "Building ETL Pipelines"
      ]
    },
    {
      step: "Step 6: Model Deployment",
      items: [
        "Deploy ML Models using Flask or FastAPI",
        "Serve Models with TensorFlow Serving / TorchServe",
        "Deploy on Cloud (AWS SageMaker, GCP AI Platform)"
      ]
    },
    {
      step: "Step 7: AI Tools & Libraries",
      items: [
        "Natural Language Processing (NLP): NLTK, spaCy",
        "Computer Vision: OpenCV",
        "Reinforcement Learning: OpenAI Gym"
      ]
    },
    {
      step: "Step 8: MLOps & CI/CD for ML",
      items: [
        "Use MLflow / Weights & Biases for Model Tracking",
        "Containerize Models using Docker",
        "Automate Deployment with CI/CD"
      ]
    },
    {
      step: "Step 9: Explore Advanced Topics",
      items: [
        "Generative AI (GANs, Diffusion Models)",
        "Large Language Models (GPT, LLaMA, etc.)",
        "Graph Neural Networks (GNN)"
      ]
    },
    {
      step: "Step 10: Keep Building & Learning",
      items: [
        "Contribute to Open Source AI Projects",
        "Participate in Kaggle Competitions",
        "Stay Updated with Latest Research Papers"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">AI Engineer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to become an AI Engineer capable of building intelligent systems and deploying machine learning models.
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
