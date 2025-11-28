import React from 'react';

const Hero = () => {
  return (
    <div
      style={{
        height: "60vh",
        width: "100%",
        background: "linear-gradient(135deg, #4f46e5, #6366f1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        color: "#fff",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          maxWidth: "700px",
        }}
      >
        Welcome to My Single Page Website
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "1.2rem",
          opacity: 0.9,
          maxWidth: "500px",
        }}
      >
        A simple and elegant site built with React & Spring Boot.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          color: "#4f46e5",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
          border: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          transition: "0.2s",
        }}
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
