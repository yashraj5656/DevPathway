import React from "react";
import "./Footer.css";
//import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>DevPath</h2>
          <p>Empower Your Developer Journey with DevPath</p>
          <p>
            Discover meticulously crafted learning roadmaps, innovative project ideas, industry-best practices, and robust interview preparation resources tailored for every role and skill in the technology landscape. Whether you are an aspiring developer embarking on your career or a seasoned professional seeking to elevate your expertise, DevPath provides a structured, reliable guide to keep you aligned with your goals. Stay ahead in the ever-evolving tech world with our comprehensive tools and insights, designed to foster growth and success.
          </p>
          <ul className="footer-features">
            <li>- <strong>Learning Paths</strong>: Detailed roadmaps for roles such as Frontend, Backend, DevOps, AI Engineering, and more.</li>
            <li>- <strong>Project Inspiration</strong>: Practical project ideas to build your portfolio and hands-on skills.</li>
            <li>- <strong>Best Practices</strong>: Expert guidance on performance optimization, security, and code quality.</li>
            <li>- <strong>Interview Prep</strong>: Curated questions and strategies to excel in technical interviews.</li>
            <li>- <strong>Community Support</strong>: Engage with a network of learners and professionals (coming soon).</li>
          </ul>
        </div>
        {/*
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/frontend">Frontend</Link></li>
            <li><Link to="/backend">Backend</Link></li>
            <li><Link to="/devops">DevOps</Link></li>
            <li><Link to="/fullstack">Full Stack</Link></li>
          </ul>
        </div>
        */}
        {/*
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a><br />
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
        </div>
        */}
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} DevPath. All rights reserved. |{" "}
          <a href="mailto:support@devpath.com">Contact Us</a> |{" "}
          <a href="https://devpath.com/privacy">Privacy Policy</a> |{" "}
          <a href="https://devpath.com/terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}