import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero} id="hero-section">
      <h1 className={styles.title}>Welcome to My Single Page Website</h1>
      <p className={styles.subtitle}>
        A simple and elegant site built with React & Spring Boot.
      </p>
      <button
        className={styles.button}
        onMouseOver={(e) => (e.target.style.opacity = "0.85")}
        onMouseOut={(e) => (e.target.style.opacity = "1")}
        onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
      >
        Explore ↓
      </button>
    </div>
  );
};

export default Hero;
