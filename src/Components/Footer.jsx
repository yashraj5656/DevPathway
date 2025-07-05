import React from "react";
import "./Footer.css";
//import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>DevPath</h2>
          <p>Your roadmap to becoming a better developer.</p>
          <p>Explore detailed learning paths, project ideas, best practices, and interview preparation for every role and skill in tech. Whether you're starting out or advancing your career, DevPath helps you stay on track.</p>
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
        </div>*/}
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DevPath. All rights reserved.</p>
      </div>
    </footer>
  );
}
