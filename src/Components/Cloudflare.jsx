import React from "react";
import "./Frontend.css";

export default function Cloudflare() {
  const steps = [
    {
      title: "Step 1: Cloudflare Fundamentals",
      items: [
        "Understand what Cloudflare is: CDN, DNS, and security provider.",
        "Learn how Cloudflare sits between your users and your servers (reverse proxy).",
        "Create a Cloudflare account and add your first domain.",
        "Configure DNS management and understand DNS propagation."
      ],
    },
    {
      title: "Step 2: Performance Optimization",
      items: [
        "Enable the Cloudflare Content Delivery Network (CDN).",
        "Use caching strategies to reduce server load.",
        "Enable Brotli compression and Auto Minify for HTML, CSS, JS.",
        "Optimize website load time with Image Resizing and Polish features."
      ],
    },
    {
      title: "Step 3: Security Features",
      items: [
        "Set up SSL/TLS encryption (Flexible, Full, Strict modes).",
        "Configure the Web Application Firewall (WAF) to block common attacks.",
        "Use DDoS Protection and Rate Limiting to defend your site.",
        "Enable Bot Management and Threat Control for advanced protection."
      ],
    },
    {
      title: "Step 4: Workers & Serverless",
      items: [
        "Learn Cloudflare Workers to run serverless functions at the edge.",
        "Create APIs and dynamic content delivery using Workers KV storage.",
        "Understand Durable Objects for stateful serverless applications.",
        "Deploy production-ready serverless apps at global scale."
      ],
    },
    {
      title: "Step 5: Advanced Cloudflare Tools",
      items: [
        "Use Cloudflare Pages for static site hosting with CI/CD.",
        "Manage Access policies and secure internal apps with Zero Trust.",
        "Monitor performance with Analytics and Logs.",
        "Integrate with third-party services through Cloudflare Apps and API Gateway.",
        "Explore the Cloudflare Developer Platform ecosystem."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Cloudflare Roadmap</h1>
      <p className="frontend-description">
        Learn how to use Cloudflare for CDN, DNS, security, and serverless edge computing to improve your application’s performance and reliability.
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
