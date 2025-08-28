import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger button */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
      <div className="nav-logo">
        <Link to="/">DevPath</Link>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/roadmaps" onClick={() => setIsOpen(false)}>Roadmaps</Link>
        </li>
        <li>
          <Link to="/games" onClick={() => setIsOpen(false)}>Games</Link>
        </li>
        <li>
          <Link to="/ebooks" onClick={() => setIsOpen(false)}>eBooks</Link>
        </li>
      </ul>
    </nav>
  );
}