import React from 'react';
import './ProductDescription.css'; // Reuse the same CSS file for consistency

const PythonBasics = () => {
  return (
    <div className="frontend-container">
      <h1 className="frontend-title">📖 Python Basics</h1>

      {/* Product Description */}
      <section className="frontend-description">
        <p>
          <span className="font-bold">“Python Basics”</span> is an beginner-friendly guidebook crafted for those new to programming or looking to master the fundamentals of Python. This book covers the <span className="font-medium">core concepts</span>—syntax, data types, control structures, and functions—while introducing practical applications like file handling and basic data analysis. It emphasizes Python’s <span className="font-medium">simplicity and versatility</span>, making it ideal for beginners and those transitioning from other languages.
        </p>
        <p className="mt-4">
          The content follows a <span className="font-medium">step-by-step learning path</span>, blending clear explanations, hands-on examples, and best practices. Whether you’re aiming to build scripts, automate tasks, or lay the foundation for advanced topics like data science or web development, this book provides a solid starting point.
        </p>
      </section>

      {/* Summary of Contents */}
      <section className="mt-8">
        <h2 className="frontend-title text-2xl">📌 Summary of Contents</h2>
        <p className="frontend-description mb-4">The book is divided into <span className="font-bold">15 major sections</span>, including:</p>
        <ul className="frontend-list">
          <li><span className="font-medium">Introduction to Python</span> – History, installation, Python interpreters, running scripts.</li>
          <li><span className="font-medium">Syntax & Structure</span> – Indentation, comments, variables, basic input/output.</li>
          <li><span className="font-medium">Data Types</span> – Integers, floats, strings, lists, tuples, dictionaries, sets.</li>
          <li><span className="font-medium">Operators</span> – Arithmetic, comparison, logical, and membership operators.</li>
          <li><span className="font-medium">Control Flow</span> – if statements, loops (for, while), break, continue.</li>
          <li><span className="font-medium">Functions</span> – Defining functions, arguments, return statements, lambda functions.</li>
          <li><span className="font-medium">Lists & List Comprehensions</span> – List methods, slicing, comprehensions.</li>
          <li><span className="font-medium">Strings & Formatting</span> – String methods, f-strings, formatting techniques.</li>
          <li><span className="font-medium">Error Handling</span> – try…except, raising exceptions, custom errors.</li>
          <li><span className="font-medium">File Handling</span> – Reading/writing files, CSV handling, basic I/O.</li>
          <li><span className="font-medium">Modules & Packages</span> – Importing modules, creating packages, pip, virtual environments.</li>
          <li><span className="font-medium">Basic Data Structures</span> – Stacks, queues, basic algorithms with lists.</li>
          <li><span className="font-medium">Introduction to Libraries</span> – Using math, random, datetime, and os libraries.</li>
          <li><span className="font-medium">Basic Data Analysis</span> – Introduction to NumPy and pandas for simple data tasks.</li>
          <li><span className="font-medium">Best Practices</span> – Code style (PEP 8), documentation, debugging tips.</li>
        </ul>
      </section>

      {/* In Short */}
      <section className="mt-8">
        <h2 className="frontend-title text-2xl">✅ In Short</h2>
        <p className="frontend-description">
          <span className="font-bold">“Python Basics”</span> is a concise yet comprehensive guide for mastering Python fundamentals. It equips beginners with the <span className="font-medium">essential skills</span> to write clean, efficient code and prepares them for advanced Python applications in <span className="font-medium">web development, data science, automation, and more</span>.
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

export default PythonBasics;