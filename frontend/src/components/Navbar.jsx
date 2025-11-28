import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        width: "100%",
        padding: "1rem 2rem",
        position: "fixed",
        top: 0,
        left: 0,
        background: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>MySite</h1>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <button onClick={() => scrollToSection("hero-section")}>Home</button>
        <button onClick={() => scrollToSection("about-section")}>About</button>
        <button onClick={() => scrollToSection("skills-section")}>Skills</button>
        <button onClick={() => scrollToSection("contact-section")}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
