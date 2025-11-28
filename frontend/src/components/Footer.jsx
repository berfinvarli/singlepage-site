import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        padding: "40px 20px",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: "1.2rem", margin: 0 }}>
        Berfin VARLI
      </p>

      <div style={{ display: "flex", gap: "25px" }}>
        <a
          href="https://github.com/berfinvarli"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "1.8rem", transition: "0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#646cff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/berfinvarli/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0e76a8", fontSize: "1.8rem", transition: "0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#646cff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#0e76a8")}
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
