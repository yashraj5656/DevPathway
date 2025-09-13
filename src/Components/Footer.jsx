import React from "react";
import "./Footer.css";
import "./PrivacyPolicy";
import "./TermsOfService";
import "./ContactUs";
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Zyqentra</h2>
          <p>Empower Your Developer Journey with Zyqentra</p>
          <p>
            Explore curated learning roadmaps, project ideas, industry best practices,
            and interview prep for every tech role. Whether you're starting out or
            advancing your career, Zyqentra provides structured guidance to help you
            stay ahead in the ever-evolving tech world.
          </p>
          <ul className="footer-features">
            <li>- <strong>Learning Paths</strong>: Roadmaps for Frontend, Backend, DevOps, AI, and more.</li>
            <li>- <strong>Project Inspiration</strong>: Hands-on ideas to enhance your portfolio.</li>
            <li>- <strong>Best Practices</strong>: Performance, security, and code quality guidance.</li>
            <li>- <strong>Interview Prep</strong>: Curated questions and strategies to excel.</li>
            <li>- <strong>Community Support</strong>: Engage with learners and professionals (coming soon).</li>
            <li>- <strong>Interactive Challenges</strong>: Participate in coding challenges and quizzes.</li>
          </ul>
        </div>

        {/* Quick Links 
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/frontend">Frontend</Link></li>
            <li><Link to="/backend">Backend</Link></li>
            <li><Link to="/devops">DevOps</Link></li>
            <li><Link to="/mongodb">MongoDB</Link></li>
            <li><Link to="/linux">Linux</Link></li>
          </ul>
        </div>*/}

        {/* Social Links */}
        <div className="footer-social" style={{marginRight:"44rem"}}>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://discord.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Zyqentra. All rights reserved. |{" "}
          <a href="/contact">Contact Us</a> |{" "}
          <a href="/privacy">Privacy Policy</a> |{" "}
          <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
