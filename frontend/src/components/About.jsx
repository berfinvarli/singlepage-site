import React from "react";

const About = () => {
  return (
    <div
      id="about-section"
      style={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "60px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        About Me
      </h2>
      <p style={{ maxWidth: "700px", lineHeight: 1.6 }}>
        This is a simple single-page website built using React for the frontend
        and Spring Boot for the backend. It includes modern UI elements,
        smooth scrolling, and responsive design.
      </p>
    </div>
  );
};

export default About;
