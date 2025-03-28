import React from "react";
import "../styles/Certifications.css"; // Make sure to create this CSS file

const certifications = [
  {
    title: "JavaScript Algorithms and Data Structures Certification",
    provider: "freeCodeCamp",
    date: "2025",
  },
  {
    title: "Software Engineering Virtual Experience Program",
    provider: "Electronic Arts (Forage)",
    date: "2025",
  },
  {
    title: "BCG GenAI Job Simulation ",
    provider: "BCG (Forage)",
    date: "2025",
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    provider: "Udemy",
    date: "2025",
  },
];

const Certifications = () => {
  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>
            <h3>{cert.title}</h3>
            <p>{cert.provider} - {cert.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
