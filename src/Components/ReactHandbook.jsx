import React from 'react';
import './ProductDescription.css'; // Reuse the same CSS file for consistency

const ReactHandbook = () => {
  return (
    <div className="frontend-container">
      <h1 className="frontend-title">📖 React Handbook</h1>

      {/* Product Description */}
      <section className="frontend-description">
        <p>
          <span className="font-bold">“React Handbook”</span> is a comprehensive guide for developers looking to master <span className="font-medium">React</span>, the popular JavaScript library for building user interfaces. This book covers everything from <span className="font-medium">core concepts</span>—components, JSX, and state—to advanced topics like hooks, state management, and performance optimization. It’s designed for beginners new to React and intermediate developers aiming to build scalable, modern web applications.
        </p>
        <p className="mt-4">
          The content is structured in a <span className="font-medium">practical, hands-on learning path</span>, combining clear explanations, real-world examples, and best practices. Whether you’re creating single-page applications or integrating React into larger projects, this book equips you with the skills to build <span className="font-medium">dynamic, efficient, and maintainable</span> user interfaces.
        </p>
      </section>

      {/* Summary of Contents */}
      <section className="mt-8">
        <h2 className="frontend-title text-2xl">📌 Summary of Contents</h2>
        <p className="frontend-description mb-4">The book is divided into <span className="font-bold">18 major sections</span>, including:</p>
        <ul className="frontend-list">
          <li><span className="font-medium">Introduction to React</span> – History, setup, create-react-app, React ecosystem.</li>
          <li><span className="font-medium">JSX & Components</span> – Syntax, functional vs. class components, props.</li>
          <li><span className="font-medium">State & Lifecycle</span> – useState, useEffect, component lifecycle methods.</li>
          <li><span className="font-medium">Event Handling</span> – Handling user inputs, synthetic events, event binding.</li>
          <li><span className="font-medium">Lists & Keys</span> – Rendering lists, using keys, map function.</li>
          <li><span className="font-medium">Hooks Basics</span> – useState, useEffect, useContext, custom hooks.</li>
          <li><span className="font-medium">Advanced Hooks</span> – useReducer, useMemo, useCallback, useRef.</li>
          <li><span className="font-medium">State Management</span> – Context API, Redux, Zustand basics.</li>
          <li><span className="font-medium">Routing</span> – React Router, navigation, dynamic routes.</li>
          <li><span className="font-medium">Forms in React</span> – Controlled vs. uncontrolled components, form validation.</li>
          <li><span className="font-medium">API Integration</span> – Fetching data, async/await, handling API errors.</li>
          <li><span className="font-medium">Styling in React</span> – CSS modules, styled-components, Tailwind CSS.</li>
          <li><span className="font-medium">Performance Optimization</span> – Memoization, lazy loading, code splitting.</li>
          <li><span className="font-medium">Testing in React</span> – Jest, React Testing Library, unit and integration tests.</li>
          <li><span className="font-medium">React Patterns</span> – Component composition, higher-order components, render props.</li>
          <li><span className="font-medium">React with TypeScript</span> – Type checking, interfaces, props typing.</li>
          <li><span className="font-medium">Deployment</span> – Building for production, hosting on Netlify, Vercel.</li>
          <li><span className="font-medium">Best Practices</span> – Code organization, accessibility, SEO in React apps.</li>
        </ul>
      </section>

      {/* In Short */}
      <section className="mt-8">
        <h2 className="frontend-title text-2xl">✅ In Short</h2>
        <p className="frontend-description">
          <span className="font-bold">“React Handbook”</span> is your go-to resource for mastering React, offering a <span className="font-medium">complete guide</span> to building modern web applications. It provides both <span className="font-medium">foundational knowledge and practical techniques</span>, empowering you to create <span className="font-medium">dynamic, scalable, and performant</span> React applications.
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

export default ReactHandbook;