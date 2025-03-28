import React from "react";
import "../styles/Projects.css";

const projectData = [
  {
    title: "BingeMates – Streaming and Chatting App",
    techStack: ["Python (Flask)", "JavaScript", "HTML", "CSS", "WebSockets", "MongoDB"],
    description: [
      "Developed a real-time streaming and chatting web application enabling users to create and join virtual rooms for synchronized video playback.",
      "Implemented WebSockets using Flask-SocketIO for real-time chat functionality, ensuring seamless user interactions.",
      "Designed and built a responsive UI using HTML, CSS, and JavaScript to enhance user experience.",
      "Optimized server-side handling in Flask to manage multiple concurrent rooms efficiently.",
    ],
    github: "https://github.com/shashi-bot/BingeMates",
  },
  {
    title: "GetDoctor – Doctor Appointment Booking Platform",
    techStack: ["React", "Redux Toolkit", "CSS", "Node.js", "MongoDB", "Antd"],
    description: [
      "Developed a role-based doctor appointment booking platform for users, doctors, and admins.",
      "Integrated real-time notifications for booking confirmations and cancellations.",
      "Designed an interactive doctor dashboard to manage schedules, patient appointments, and availability.",
    ],
    github: "https://github.com/shashi-bot/getDoctor",
  },
  {
    title: "Shopdaily – E-commerce Grocery Store",
    techStack: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    description: [
      "Built a full-stack e-commerce grocery store enabling users to browse and purchase items.",
      "Integrated secure payment processing using Stripe for seamless transactions.",
      "Developed an admin panel for order tracking and automated inventory management.",
    ],
    github: "https://github.com/shashi-bot/shopdaily",
  },
  {
    title: "Keeper – Notes-Keeping Web Application",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    description: [
      "Created a modern notes-keeping web application similar to Google Keep.",
      "Implemented CRUD operations to efficiently create, edit, and delete notes.",
      "Used React Hooks & MongoDB for smooth state management and persistent storage.",
    ],
    github: "https://github.com/shashi-bot/keeper",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Some Things I’ve Built</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
