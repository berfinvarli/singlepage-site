import React from "react";
import { FaJava, FaPython, FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiSpringboot, SiCplusplus, SiQt, SiTailwindcss, SiJavascript } from "react-icons/si";
import { BiSolidBrain } from "react-icons/bi";
import styles from "./Skills.module.css";

const skills = [
  { name: "React", icon: <FaReact size={40} color="#61DAFB" />, link: "https://reactjs.org/" },
  { name: "Spring Boot", icon: <SiSpringboot size={40} color="#6DB33F" />, link: "https://spring.io/projects/spring-boot" },
  { name: "Java", icon: <FaJava size={40} color="#007396" />, link: "https://www.java.com/" },
  { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#1572B6" />, link: "https://tailwindcss.com/" },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Python", icon: <FaPython size={40} color="#3776AB" />, link: "https://www.python.org/" },
  { name: "C/C++", icon: <SiCplusplus size={40} color="#00599C" />, link: "https://isocpp.org/" },
  { name: "Qt/QML", icon: <SiQt size={40} color="#41CD52" />, link: "https://www.qt.io/" },
  { name: "ML", icon: <BiSolidBrain size={40} color="#F7931E" />, link: "https://en.wikipedia.org/wiki/Machine_learning" },
];

const Skills = () => {
  return (
    <div className={styles.section} id="skills-section">
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <a key={skill.name} href={skill.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className={styles.card}>
              {skill.icon}
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
