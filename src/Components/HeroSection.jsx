import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Starfield background
  useEffect(() => {
    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 120;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00cba9";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createStars();
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="hero">
      {/* Animated Background */}
      <canvas id="stars"></canvas>

      <div className="hero-content">
        <motion.h1
          className="ZyqentraH"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        >
          Welcome to <span>Zyqentra</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Empower your developer journey with structured roadmaps, real-world projects, 
          and <strong>interactive learning apps</strong> that make coding fun, practical, and engaging.  
          Whether you’re just starting out or sharpening advanced skills, Zyqentra guides you 
          step by step to mastery.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <Link to="/" className="btn-primary">
            🚀 Start Learning
          </Link>
          <Link to="https://www.instagram.com/zyqentra/" className="btn-secondary">
            🌐 Join Community
          </Link>
        </motion.div>
      </div>
      {/* Scroll Down Arrow 
      <motion.div 
        className="scroll-down"
        initial={{ opacity: 0, y: 1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <span></span>
      </motion.div>*/}
    </section>
  );
}