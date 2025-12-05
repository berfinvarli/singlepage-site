import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AdminSection from "./components/AdminSection/AdminSection";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>

      {!isAdminPage && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <div style={{ paddingTop: "10px" }}>
              <section id="hero-section"><Hero /></section>
              <section id="about-section"><About /></section>
              <section id="skills-section"><Skills /></section>
              <section id="contact-section"><Contact /></section>
              <section id="footer-section"><Footer /></section>
            </div>
          }
        />

        <Route
          path="/admin"
          element={
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <AdminSection />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
