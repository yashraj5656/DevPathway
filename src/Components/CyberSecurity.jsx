import React from "react";
import "./Frontend.css";

export default function CyberSecurity() {
  const steps = [
    {
      step: "Step 1: Understand Cyber Security Fundamentals",
      items: [
        "Learn About the CIA Triad: Confidentiality, Integrity, Availability",
        "Understand Common Threats (Malware, Phishing, Ransomware)",
        "Know the Types of Hackers: White Hat, Black Hat, Gray Hat",
        "Familiarize with Basic Networking Concepts"
      ]
    },
    {
      step: "Step 2: Master Networking and Protocols",
      items: [
        "Study TCP/IP, HTTP, HTTPS, FTP, and DNS",
        "Understand Firewalls, VPNs, and Proxies",
        "Use Network Analysis Tools like Wireshark",
        "Learn About Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS)"
      ]
    },
    {
      step: "Step 3: Learn System Security",
      items: [
        "Harden Windows and Linux Systems",
        "Study File System Permissions and User Privileges",
        "Understand Logs & Auditing",
        "Practice Secure Configuration of Servers"
      ]
    },
    {
      step: "Step 4: Understand Web Application Security",
      items: [
        "Learn OWASP Top 10 Vulnerabilities",
        "Perform Vulnerability Scanning & Penetration Testing",
        "Study Secure Authentication & Authorization Practices",
        "Practice Input Validation & Secure API Development"
      ]
    },
    {
      step: "Step 5: Explore Cryptography",
      items: [
        "Understand Encryption (AES, RSA, ECC)",
        "Learn Hashing Algorithms (SHA, MD5)",
        "Use Public Key Infrastructure (PKI) and Certificates",
        "Study Secure Communication Protocols (TLS, SSL)"
      ]
    },
    {
      step: "Step 6: Work with Security Tools",
      items: [
        "Practice with Kali Linux & Parrot OS",
        "Use Metasploit, Nmap, Burp Suite, and John the Ripper",
        "Perform Password Cracking, Vulnerability Assessment, and Exploitation",
        "Try Capture the Flag (CTF) Challenges"
      ]
    },
    {
      step: "Step 7: Focus on Cloud & DevSecOps Security",
      items: [
        "Understand Cloud Security Basics (AWS, Azure, GCP)",
        "Learn Container Security (Docker, Kubernetes)",
        "Integrate Security in CI/CD Pipelines (DevSecOps)",
        "Manage IAM Policies and Security Groups"
      ]
    },
    {
      step: "Step 8: Study Compliance & Governance",
      items: [
        "Understand GDPR, HIPAA, PCI DSS, ISO 27001",
        "Implement Risk Assessment & Mitigation Strategies",
        "Prepare for Security Audits and Incident Response",
        "Document Security Policies and Procedures"
      ]
    },
    {
      step: "Step 9: Specialize in Security Domains",
      items: [
        "Penetration Testing / Ethical Hacking",
        "Network Security / SOC Analyst",
        "Cloud Security",
        "Application Security / Secure Coding"
      ]
    },
    {
      step: "Step 10: Continuous Learning & Certifications",
      items: [
        "Earn Certifications: CEH, CompTIA Security+, CISSP, OSCP",
        "Stay Updated with Security News & CVEs",
        "Join Cyber Security Communities and Forums",
        "Participate in Hackathons & Bug Bounty Programs"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Cyber Security Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to build a career in cyber security, covering core concepts, hands-on skills, and advanced protection techniques.
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
