import React from 'react';
import './ProductDescription.css'; // Reuse the same CSS file for consistency

const NodejsEssentials = () => {
  return (
    <div className="frontend-container">
      <h1 className="frontend-title">📖 Node.js Essentials</h1>

      {/* Product Description */}
      <section className="frontend-description">
        <p>
          <span className="font-bold">“Node.js Essentials”</span> is a practical guide for developers looking to master <span className="font-medium">Node.js</span>, the powerful JavaScript runtime for building scalable server-side applications. This book covers the <span className="font-medium">core concepts</span>—event-driven architecture, modules, and asynchronous programming—while guiding you through building RESTful APIs, handling databases, and deploying applications. It’s ideal for beginners and intermediate developers transitioning to backend development with JavaScript.
        </p>
        <p className="mt-4">
          The content is designed as a <span className="font-medium">hands-on learning journey</span>, blending clear explanations, real-world examples, and best practices. Whether you’re building web servers, APIs, or microservices, this book equips you with the skills to create <span className="font-medium">fast, efficient, and maintainable</span> Node.js applications.
        </p>
      </section>

      {/* Summary of Contents */}
      <section className="mt-8">
        <h2 className="frontend-title text-2xl">📌 Summary of Contents</h2>
        <p className="frontend-description mb-4">The book is divided into <span className="font-bold">16 major sections</span>, including:</p>
        <ul className="frontend-list">
          <li><span className="font-medium">Introduction to Node.js</span> – History, setup, npm, running Node.js scripts.</li>
          <li><span className="font-medium">Node.js Architecture</span> – Event loop, non-blocking I/O, single-threaded model.</li>
          <li><span className="font-medium">Modules & Packages</span> – CommonJS, ES modules, npm, package.json.</li>
          <li><span className="font-medium">File System</span> – Reading/writing files, streams, file operations.</li>
          <li><span className="font-medium">Asynchronous Programming</span> – Callbacks, promises, async/await.</li>
          <li><span className="font-medium">HTTP Module</span> – Creating servers, handling requests/responses.</li>
          <li><span className="font-medium">Express.js Basics</span> – Setting up Express, routing, middleware.</li>
          <li><span className="font-medium">RESTful APIs</span> – Designing APIs, CRUD operations, status codes.</li>
          <li><span className="font-medium">Error Handling</span> – Try…catch, error middleware, logging errors.</li>
          <li><span className="font-medium">Database Integration</span> – Connecting to MongoDB, PostgreSQL, ORMs (e.g., Mongoose, Sequelize).</li>
          <li><span className="font-medium">Authentication</span> – JWT, OAuth, user sessions, password hashing.</li>
          <li><span className="font-medium">Testing Node.js</span> – Unit testing with Jest, Mocha, API testing.</li>
          <li><span className="font-medium">Performance Optimization</span> – Clustering, worker threads, caching strategies.</li>
          <li><span className="font-medium">Security Best Practices</span> – Preventing XSS, CSRF, securing APIs.</li>
          <li><span className="font-medium">Deployment</span> – PM2, Docker, hosting on AWS, Heroku, Vercel.</li>
          <li><span className="font-medium">Best Practices</span> – Code structure, logging, environment variables, scalability.</li>
        </ul>
      </section>

      {/* In Short */}
      <section className="mt-8">
        <h2 className="frontend-title text-2xl">✅ In Short</h2>
        <p className="frontend-description">
          <span className="font-bold">“Node.js Essentials”</span> is your go-to resource for mastering server-side JavaScript with Node.js. It provides a <span className="font-medium">complete guide</span> to building robust backend applications, equipping you with the <span className="font-medium">practical skills</span> to create <span className="font-medium">scalable, secure, and high-performance</span> APIs and services.
        </p>
      </section>

      {/* Buy Button */}
      <div className="mt-8 text-center">
        <a
          href="#replace-with-actual-link" // Replace with your purchase link
          className="buy-button"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default NodejsEssentials;