import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

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
        <h1>
          Welcome to <span>Zyqentra</span>
        </h1>
        <p>
          Discover learning roadmaps, projects, and resources to accelerate your
          developer journey. Stay ahead with interactive guides and community
          support.
        </p>



        <div className="hero-buttons">
          <Link to="/roadmaps" className="btn-primary">
            🚀 Start Learning
          </Link>
          <Link to="/community" className="btn-secondary">
            🌐 Join Community
          </Link>
        </div>
      </div>
        {/* Scroll Down Arrow */}
      <div className="scroll-down">
          <span></span>
        </div>
    </section>
  );
}
