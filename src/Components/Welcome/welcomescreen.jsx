import React, { useState, useEffect } from "react";
import './Wlcomescreen.css'

const WelcomeScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onComplete(); // Hide welcome screen after animation
      }, 1000);
    }, 3000); // Show welcome screen for 3 seconds
  }, [onComplete]);

  return (
    <div className={`welcome-screen ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="welcome-text">Welcome to HEJIDEV Portfolio</h1>
      <p className="sub-text">Innovative Solutions for Forward-thinking Brands</p>
    </div>
  );
};

export default WelcomeScreen;
