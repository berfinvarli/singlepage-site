import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>Berfin VARLI</p>
      <div className={styles.icons}>
        <a
          href="https://github.com/berfinvarli"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
          style={{ color: "#fff" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#646cff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/berfinvarli/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
          style={{ color: "#0e76a8" }}
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
