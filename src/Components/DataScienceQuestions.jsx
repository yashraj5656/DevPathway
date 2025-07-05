import React from "react";
import "./Frontend.css";

export default function DataScienceQuestions() {
  const questionSets = [
    {
      title: "Fundamental Concepts",
      items: [
        "What is data science and how does it differ from data analytics?",
        "Explain supervised vs unsupervised learning.",
        "What is overfitting and how can it be avoided?",
        "Describe the steps involved in a typical data science workflow.",
        "What are the most commonly used data science libraries in Python?"
      ],
    },
    {
      title: "Machine Learning & Algorithms",
      items: [
        "Explain how linear regression works.",
        "What is the difference between classification and regression?",
        "Explain K-means clustering and its applications.",
        "What is cross-validation and why is it important?",
        "How do you handle imbalanced datasets?"
      ],
    },
    {
      title: "Data Preprocessing & Feature Engineering",
      items: [
        "What techniques do you use to clean data?",
        "Explain the concept of feature scaling and normalization.",
        "How do you handle missing data?",
        "What is one-hot encoding?",
        "Explain PCA (Principal Component Analysis)."
      ],
    },
    {
      title: "Advanced Topics",
      items: [
        "What is deep learning and how is it different from traditional ML?",
        "Describe how neural networks work.",
        "What is natural language processing (NLP)?",
        "Explain the concept of time series analysis.",
        "What is the difference between batch and online learning?"
      ],
    },
    {
      title: "Practical Scenarios",
      items: [
        "How would you approach building a recommendation system?",
        "Describe a real-world project where you used machine learning.",
        "How do you communicate model performance to non-technical stakeholders?",
        "What tools do you use for model deployment in production?",
        "Explain the ethical considerations when working with data."
      ],
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Data Science Interview Questions</h1>
      <p className="frontend-description">
        Must-know data science interview questions covering machine learning, data preparation, and real-world applications.
      </p>

      {questionSets.map((section, index) => (
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
