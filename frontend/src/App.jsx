import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About"
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AdminSection from "./components/AdminSection/AdminSection";

function App() {
  return (
<div style={{ overflowX: "hidden", fontFamily: "sans-serif" }}> 
      <Navbar />

     <div style={{ paddingTop: "100px" }}> 
        <section id="hero-section"><Hero /></section>
        <section id="about-section"><About /></section>
        <section id="skills-section"><Skills /></section>
        <section id="contact-section"><Contact /></section>
        <section id="admin-section"><AdminSection /></section>
        <section id="footer-section"><Footer /></section>
      </div>
    </div>
  );
}

export default App;
