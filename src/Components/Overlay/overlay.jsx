import React from "react";
import { FaHome, FaUser, FaBriefcase, FaArrowUp } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import "./Overlay.css";

const Overlay = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overlay-container">
        <a href="/" className="overlay-icon"><FaHome /></a>
      
      <a href="/about" className="overlay-icon"><FaUser /></a>
      
      <a href="/experience"className="overlay-icon"><FaBriefcase /></a>
      
      <a href="/contact" className="overlay-icon"><MdContactPage /></a>
      
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="overlay-icon">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Overlay;
