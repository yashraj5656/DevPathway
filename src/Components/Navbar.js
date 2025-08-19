// src/Components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">DevPath</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#roadmap">Roadmaps</a>
        </li>
        <li>
          <a href="#games">Games</a>
        </li>
        <li>
          <a href="#ebooks">eBooks</a>
        </li>
        <li>
            <div><br></br></div>
        </li>
      </ul>
    </nav>
  );
}
