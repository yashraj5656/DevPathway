import React from "react";
import "./Frontend.css";

export default function APISecurity() {
  const bestPractices = [
    {
      step: "Step 1: Secure Authentication and Authorization",
      items: [
        "Use OAuth2, OpenID Connect, or JWT for Authentication",
        "Always Validate User Roles and Permissions (RBAC)",
        "Protect Endpoints with Proper Access Control",
        "Never Rely Solely on Client-Side Authorization"
      ]
    },
    {
      step: "Step 2: Validate Inputs and Outputs",
      items: [
        "Validate All User Inputs on the Server Side",
        "Sanitize Request Data to Prevent Injection Attacks",
        "Use JSON Schema Validation for API Payloads",
        "Avoid Exposing Sensitive Error Messages to Clients"
      ]
    },
    {
      step: "Step 3: Use HTTPS and Secure Headers",
      items: [
        "Enforce HTTPS with HSTS Headers",
        "Add Security Headers like Content Security Policy (CSP), X-Content-Type-Options, X-Frame-Options",
        "Use CORS Properly to Restrict Allowed Origins"
      ]
    },
    {
      step: "Step 4: Protect Against Common Vulnerabilities",
      items: [
        "Prevent SQL Injection, XSS, and CSRF Attacks",
        "Limit API Rate to Avoid DDoS (Use Rate Limiting & Throttling)",
        "Implement IP Whitelisting and Blacklisting When Necessary"
      ]
    },
    {
      step: "Step 5: Secure API Keys and Tokens",
      items: [
        "Store API Keys Securely (Environment Variables, Secrets Managers)",
        "Rotate API Keys and Tokens Regularly",
        "Restrict API Keys by IP, Usage Limits, and Scopes",
        "Never Expose Secrets in Frontend or Version Control"
      ]
    },
    {
      step: "Step 6: Logging and Monitoring",
      items: [
        "Log Authentication Attempts and Access Logs",
        "Monitor for Suspicious Activity and Rate Limit Violations",
        "Integrate with Security Tools for Alerting (e.g., Snyk, Datadog, AWS GuardDuty)"
      ]
    },
    {
      step: "Step 7: API Versioning and Deprecation",
      items: [
        "Maintain Proper API Versioning (v1, v2, etc.)",
        "Deprecate Old Versions Gracefully",
        "Communicate Breaking Changes to API Consumers"
      ]
    },
    {
      step: "Step 8: Continuous Security Testing",
      items: [
        "Use Automated Vulnerability Scanners on APIs (e.g., OWASP ZAP, Postman Security Scan)",
        "Conduct Regular Penetration Testing and Code Reviews",
        "Keep Dependencies Updated to Patch Known Vulnerabilities"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">API Security Best Practices</h1>
      <p className="frontend-description">
        Follow these practices to secure your APIs against unauthorized access, data breaches, and common vulnerabilities.
      </p>

      {bestPractices.map((section, index) => (
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
