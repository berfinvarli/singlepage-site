import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ isAdmin, handleLogout }) => {
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

        {isAdmin ? (
          <>
            <button 
              onClick={() => scrollToSection("admin-section")}
              className={styles.navButton}
              style={{ color: 'white', fontWeight: 'bold', background: '#4CAF50' }}
            >
              Admin Panel
            </button>
            <button 
              onClick={handleLogout} 
              className={styles.navButton}
              style={{ color: 'white', fontWeight: 'bold', background: '#f44336' }}
            >
              Logout
            </button>
          </>
        ) : (
          <button 
            onClick={() => scrollToSection("admin-section")}
            className={styles.navButton}
            style={{ color: 'white', fontWeight: 'bold', background: '#2196F3' }}
          >
            Admin Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
