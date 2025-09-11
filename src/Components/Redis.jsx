import React from "react";
import "./Frontend.css";

export default function Redis() {
  const steps = [
    {
      title: "Step 1: Redis Fundamentals",
      items: [
        "Understand what Redis is and when to use it.",
        "Learn the Redis data model: key-value store.",
        "Install Redis locally and use Redis CLI.",
        "Understand persistence options: RDB, AOF, and no persistence modes.",
      ],
    },
    {
      title: "Step 2: Core Data Types",
      items: [
        "Strings: set, get, increment counters, expire keys.",
        "Lists: push, pop, range queries.",
        "Hashes: store and retrieve objects.",
        "Sets & Sorted Sets: uniqueness, ranking, and leaderboard use cases.",
        "Bitmaps, HyperLogLog, and Streams (advanced use cases)."
      ],
    },
    {
      title: "Step 3: Redis as a Cache",
      items: [
        "Configure Redis as an in-memory cache.",
        "Understand TTLs and eviction policies (LRU, LFU, etc.).",
        "Use caching patterns: Cache Aside, Read-Through, Write-Through.",
        "Prevent cache stampedes and thundering herd problems."
      ],
    },
    {
      title: "Step 4: Pub/Sub and Messaging",
      items: [
        "Learn how to use Redis Pub/Sub for real-time messaging.",
        "Understand when to use Redis Streams over Pub/Sub.",
        "Integrate Redis with Node.js, Python, or Java applications for real-time events."
      ],
    },
    {
      title: "Step 5: Deployment, Security & Scaling",
      items: [
        "Deploy Redis in production: standalone, cluster, and sentinel modes.",
        "Secure Redis with authentication, firewall rules, and encryption.",
        "Monitor performance with Redis Monitor and slowlog.",
        "Scale Redis using clustering and replication.",
        "Use managed Redis services like AWS ElastiCache and Azure Redis Cache."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Redis Roadmap</h1>
      <p className="frontend-description">
        Learn Redis fundamentals and advanced features to build high-performance distributed applications.
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
