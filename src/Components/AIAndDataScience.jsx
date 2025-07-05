import React from "react";
import "./Frontend.css"; // Reuse the same CSS

export default function AIAndDataScience() {
  const steps = [
    {
      step: "Step 1: Build a Strong Foundation",
      items: [
        "Learn Python programming thoroughly",
        "Familiarize with essential libraries: NumPy, pandas, Matplotlib",
        "Understand Git & Version Control",
        "Work on basic coding skills & problem-solving"
      ]
    },
    {
      step: "Step 2: Master Mathematics for AI/DS",
      items: [
        "Linear Algebra: Matrices, Vectors, Eigenvalues",
        "Probability and Statistics",
        "Calculus: Derivatives, Gradients (for optimization)",
        "Discrete Math Basics"
      ]
    },
    {
      step: "Step 3: Learn Data Analysis & Preprocessing",
      items: [
        "Data Cleaning and Preparation",
        "Exploratory Data Analysis (EDA)",
        "Data Transformation and Feature Engineering",
        "Work with Real-world Datasets (CSV, APIs, Databases)"
      ]
    },
    {
      step: "Step 4: Study Machine Learning",
      items: [
        "Supervised and Unsupervised Learning",
        "Algorithms: Linear Regression, KNN, Decision Trees, SVM, Clustering",
        "Scikit-learn for ML Implementation",
        "Model Evaluation and Validation"
      ]
    },
    {
      step: "Step 5: Explore Deep Learning",
      items: [
        "Neural Networks and Backpropagation",
        "Frameworks: TensorFlow and PyTorch",
        "CNNs, RNNs, and Transformers",
        "Computer Vision and NLP Basics"
      ]
    },
    {
      step: "Step 6: Understand Data Science Workflow",
      items: [
        "Business Problem Understanding",
        "Data Gathering & Preparation",
        "Model Building, Evaluation & Deployment",
        "Insight Communication"
      ]
    },
    {
      step: "Step 7: Learn About Big Data Tools (Optional)",
      items: [
        "Apache Spark Basics",
        "Data Lakes and Warehousing (AWS S3, Redshift)",
        "ETL Pipelines and Data Pipelines"
      ]
    },
    {
      step: "Step 8: Model Deployment & MLOps",
      items: [
        "Deploy Models using Flask / FastAPI",
        "Containerize with Docker",
        "CI/CD for ML using MLflow, GitHub Actions",
        "Cloud Deployment on AWS, GCP, Azure"
      ]
    },
    {
      step: "Step 9: Advanced Topics",
      items: [
        "Generative AI (GANs, Diffusion Models)",
        "Reinforcement Learning Basics",
        "Large Language Models (GPT, LLaMA, Claude)"
      ]
    },
    {
      step: "Step 10: Continuous Learning & Practice",
      items: [
        "Participate in Kaggle Competitions",
        "Work on Open Source AI/DS Projects",
        "Read AI Research Papers (arXiv, Medium, Towards Data Science)",
        "Stay Updated on AI/ML Developments"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">AI and Data Science Roadmap</h1>
      <p className="frontend-description">
        A structured path to learn Artificial Intelligence and Data Science, from foundations to advanced deployment.
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
