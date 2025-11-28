import React from "react";
import { FaJava, FaPython, FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiSpringboot, SiCplusplus, SiQt, SiTailwindcss, SiJavascript, SiBraintree } from "react-icons/si";
import { BiSolidBrain } from "react-icons/bi";

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
    <div
      style={{
        padding: "60px 20px",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        My Skills
      </h2>
   <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "1rem",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
              }}
            >
              {skill.icon}
              <span style={{ marginTop: "10px" }}>{skill.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;