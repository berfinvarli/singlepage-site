import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.brand} onClick={() => scrollToSection("hero-section")}>
        MySite
      </h1>
      <div className={styles.navButtons}>
        <button onClick={() => scrollToSection("hero-section")} className={styles.navButton}>Home</button>
        <button onClick={() => scrollToSection("about-section")} className={styles.navButton}>About</button>
        <button onClick={() => scrollToSection("skills-section")} className={styles.navButton}>Skills</button>
        <button onClick={() => scrollToSection("contact-section")} className={styles.navButton}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
