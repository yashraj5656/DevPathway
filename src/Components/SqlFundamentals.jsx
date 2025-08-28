import React from 'react';
import './ProductDescription.css'; // Reuse the same CSS file for consistency

const SqlFundamentals = () => {
  return (
    <div className="frontend-container">
      <h1 className="frontend-title">📖 SQL Fundamentals</h1>

      {/* Product Description */}
      <section className="frontend-description">
        <p>
          <span className="font-bold">“SQL Fundamentals”</span> is a beginner-friendly guide designed to help you master the essentials of <span className="font-medium">SQL</span>, the standard language for managing and querying relational databases. This book covers the <span className="font-medium">core concepts</span>—database structures, basic queries, joins, and data manipulation—while introducing practical skills for working with databases like MySQL, PostgreSQL, and SQLite.
        </p>
        <p className="mt-4">
          The content follows a <span className="font-medium">clear, step-by-step learning path</span>, combining straightforward explanations, hands-on examples, and best practices. Whether you’re aiming to manage data, build applications, or prepare for roles in data analysis or backend development, this book provides a solid foundation for <span className="font-medium">effective and efficient</span> database management.
        </p>
      </section>

      {/* Summary of Contents */}
      <section className="mt-8">
        <h2 className="frontend-title text-2xl">📌 Summary of Contents</h2>
        <p className="frontend-description mb-4">The book is divided into <span className="font-bold">14 major sections</span>, including:</p>
        <ul className="frontend-list">
          <li><span className="font-medium">Introduction to SQL</span> – History, relational databases, SQL vs. NoSQL, setup (MySQL, PostgreSQL).</li>
          <li><span className="font-medium">Database Basics</span> – Tables, schemas, primary and foreign keys, normalization.</li>
          <li><span className="font-medium">Basic Queries</span> – SELECT, WHERE, ORDER BY, LIMIT/OFFSET.</li>
          <li><span className="font-medium">Data Manipulation</span> – INSERT, UPDATE, DELETE statements.</li>
          <li><span className="font-medium">Filtering & Sorting</span> – LIKE, IN, BETWEEN, sorting techniques.</li>
          <li><span className="font-medium">Joins</span> – INNER JOIN, LEFT/RIGHT JOIN, FULL OUTER JOIN, self-joins.</li>
          <li><span className="font-medium">Aggregate Functions</span> – COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING.</li>
          <li><span className="font-medium">Subqueries</span> – Nested queries, correlated subqueries, EXISTS.</li>
          <li><span className="font-medium">Indexes & Performance</span> – Creating indexes, query optimization, EXPLAIN plans.</li>
          <li><span className="font-medium">Views & Stored Procedures</span> – Creating views, writing stored procedures, triggers.</li>
          <li><span className="font-medium">Transactions</span> – ACID properties, COMMIT, ROLLBACK, savepoints.</li>
          <li><span className="font-medium">Database Security</span> – User roles, permissions, preventing SQL injection.</li>
          <li><span className="font-medium">Working with Tools</span> – SQL clients, ORMs (e.g., SQLAlchemy, Sequelize), database GUIs.</li>
          <li><span className="font-medium">Best Practices</span> – Query readability, naming conventions, backup strategies.</li>
        </ul>
      </section>

      {/* In Short */}
      <section className="mt-8">
        <h2 className="frontend-title text-2xl">✅ In Short</h2>
        <p className="frontend-description">
          <span className="font-bold">“SQL Fundamentals”</span> is your essential guide to mastering SQL for relational database management. It equips beginners with the <span className="font-medium">core skills</span> to write efficient queries and manage data, laying the groundwork for <span className="font-medium">data analysis, backend development, and database administration</span>.
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

export default SqlFundamentals;