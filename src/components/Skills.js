import React, { useEffect, useState } from "react";
import "../styles/Skills.css"; // Ensure you have updated styles

function Skills() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector(".skills-container");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setShow(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="skills-section"> {/* Section to match other sections */}
      <div className={`skills-container ${show ? "show" : ""}`}>
        <h3 className="skills-title">Skills</h3>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>C++</li>
          <li>React</li>
          <li>Node js</li>
          <li>Python</li>
          <li>MongoDB</li>
          <li>Express js</li>
          <li>SQL</li>
          <li>Flask</li>
          <li>HTML</li>
          <li>CSS</li>
          
        </ul>
      </div>
    </section>
  );
}

export default Skills;
