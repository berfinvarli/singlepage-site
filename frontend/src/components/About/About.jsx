import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about-section" className={styles.about}>
      <h2 className={styles.title}>About This Website</h2>
      <p className={styles.subtitle}>
        This is a simple single-page website built using React for the frontend
        and Spring Boot for the backend. It includes modern UI elements,
        smooth scrolling, and responsive design.
      </p>
    </div>
  );
};

export default About;
