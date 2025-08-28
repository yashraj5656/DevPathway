import React from 'react';
import './ProductDescription.css'; // Import the CSS file

const ProductDescription = () => {
  return (
    <div className="frontend-container">
      <h1 className="frontend-title">📖 Mastering JavaScript</h1>

      {/* Product Description */}
      <section className="frontend-description">
        <p>
          <span className="font-bold">“Mastering JavaScript”</span> is a comprehensive guidebook designed for learners and professionals who want to gain deep knowledge of JavaScript. The book starts from the <span className="font-medium">basics</span>—history, syntax, variables, and operators—and gradually moves into <span className="font-medium">advanced topics</span> like asynchronous programming, modules, security, testing, and optimization. It covers both <span className="font-medium">client-side (browser)</span> and <span className="font-medium">server-side (Node.js)</span> JavaScript, along with modern ECMAScript features (up to ES2023+).
        </p>
        <p className="mt-4">
          The content is structured in a progressive learning path, beginning with foundations and building up to expert-level concepts. It blends <span className="font-medium">theory, practical examples, and best practices</span>, making it suitable for beginners, intermediate developers, and even advanced coders who want to refine their skills.
        </p>
      </section>

      {/* Summary of Contents */}
      <section className="mt-8">
        <h2 className="frontend-title text-2xl">📌 Summary of Contents</h2>
        <p className="frontend-description mb-4">The book is divided into <span className="font-bold">28 major sections</span>, including:</p>
        <ul className="frontend-list">
          <li><span className="font-medium">Introduction & Basics</span> – JavaScript history, engines (V8, SpiderMonkey), ECMAScript standards, running JavaScript, script inclusion.</li>
          <li><span className="font-medium">Syntax & Fundamentals</span> – statements, expressions, semicolons, strict mode, hoisting.</li>
          <li><span className="font-medium">Data Types & Variables</span> – primitives, reference types, var/let/const, type coercion.</li>
          <li><span className="font-medium">Operators & Control Flow</span> – arithmetic, comparison, logical, loops, and conditionals.</li>
          <li><span className="font-medium">Functions</span> – declarations, expressions, arrow functions, closures, recursion, generators.</li>
          <li><span className="font-medium">Objects & Prototypes</span> – inheritance, `this`, object methods, Proxy, Reflect.</li>
          <li><span className="font-medium">Arrays & Strings</span> – methods, iteration, regex, template literals.</li>
          <li><span className="font-medium">Asynchronous Programming</span> – callbacks, promises, async/await, event loop.</li>
          <li><span className="font-medium">Error Handling & Debugging</span> – try…catch, error objects, debugging techniques.</li>
          <li><span className="font-medium">Modules</span> – ES modules, CommonJS, dynamic imports.</li>
          <li><span className="font-medium">Advanced ES Features</span> – classes, destructuring, symbols, iterators, BigInt, private fields.</li>
          <li><span className="font-medium">Built-in Objects & APIs</span> – Math, Date, JSON, Intl, URL.</li>
          <li><span className="font-medium">DOM & Events</span> – element selection, manipulation, event listeners, bubbling/capturing.</li>
          <li><span className="font-medium">Browser APIs</span> – storage, cookies, Canvas, WebSockets, WebRTC, Service Workers, etc.</li>
          <li><span className="font-medium">Forms & Validation</span> – input handling, file uploads, client-side validation.</li>
          <li><span className="font-medium">Node.js Environment</span> – file system, streams, HTTP, Express basics, asynchronous I/O.</li>
          <li><span className="font-medium">Performance & Security</span> – optimization, memory management, XSS, CSRF, CORS.</li>
          <li><span className="font-medium">Testing & Debugging</span> – unit/integration testing, tools like Jest, Mocha, Cypress.</li>
          <li><span className="font-medium">Best Practices & Patterns</span> – design patterns, accessibility, SEO, code style.</li>
          <li><span className="font-medium">JavaScript Ecosystem</span> – Babel, Webpack, TypeScript, modern frameworks (React, Vue, Angular, Svelte).</li>
        </ul>
      </section>

      {/* In Short */}
      <section className="mt-8">
        <h2 className="frontend-title text-2xl">✅ In Short</h2>
        <p className="frontend-description">
          <span className="font-bold">“Mastering JavaScript”</span> is not just a beginner’s tutorial but a <span className="font-bold">complete reference manual</span> for becoming proficient in JavaScript. It equips readers with both <span className="font-medium">theoretical understanding and practical coding skills</span>, covering everything from <span className="font-medium">fundamentals</span> to <span className="font-medium">advanced real-world applications</span> in web, backend, and modern app development.
        </p>
      </section>

      {/* Buy Button */}
      <div className="mt-8 text-center">
        <a
          href="https://yashraj44.gumroad.com/l/ogkzjuo?wanted=true" // Replace this with your purchase link
          className="buy-button"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductDescription;