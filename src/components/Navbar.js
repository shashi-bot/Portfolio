import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
    
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
          Projects
        </Link>
        <Link to="certifications" smooth={true} duration={500} onClick={toggleMenu}>
          Certifications
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
          Contact
        </Link>
        <a href="https://drive.google.com/file/d/16uymLIsBkGdJ7ZU2PFPXjkkUEtU_2tVg/view?usp=sharing" className="resume-btn" download>
          Resume
        </a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
