import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">DevPath</Link>
      </div>

      {/* Hamburger button */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <a href="#roadmap" onClick={() => setIsOpen(false)}>Roadmaps</a>
        </li>
        <li>
          <a href="#games" onClick={() => setIsOpen(false)}>Games</a>
        </li>
        <li>
          <a href="#ebooks" onClick={() => setIsOpen(false)}>eBooks</a>
        </li>
        <li><br></br></li>
      </ul>
    </nav>
  );
}
