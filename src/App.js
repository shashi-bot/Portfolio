import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="App">
    <Navbar/>
    
        <Hero />
        <Skills />
      
      <About />
      <Projects />
      <Certifications/>
      
      <Contact />

    </div>
  );
}

export default App;
