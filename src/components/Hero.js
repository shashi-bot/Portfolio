import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="intro-text">Hi, my name is</p>
        <h1 className="hero-title">Shashi Ranjan Kumar.</h1>
        <h2 className="hero-subtitle">I build things for the web.</h2>
        <p className="hero-description">
          I'm a Full Stack Developer specializing in building digital
          experiences. Currently, I'm focused on creating accessible,
          human-centered products.
        </p>
        <a href="#projects" className="cta-button">Check out my work</a>
      </div>
    </section>
  );
};

export default Hero;
