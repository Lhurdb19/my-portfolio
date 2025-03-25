import React from "react";
import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>I am Basheer Ejiwumi</h3>
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Crafting Digital Experiences with Precision & Creativity
        </motion.h1>

        {/* Dynamic Typing Effect */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I specialize in{" "}
          <Typed
            strings={[
              "Frontend Development.",
              "UI/UX Design.",
              "Web3 Solutions.",
              "Scalable Web Applications.",
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Building sleek, user-friendly, and scalable digital products.  
          Let's collaborate and turn your ideas into seamless experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <a href="/project" className="btn-primary">
            View My Work
          </a>
          <a href="/contact" className="btn-secondary">
            Let's Collaborate
          </a>
        </motion.div>
      </div>
      <div className="hero-image">
      <img
            src="https://res.cloudinary.com/damamkuye/image/upload/v1742315837/IMG_2733_k7kwy8.jpg"
            alt=""
          />
      </div>
    </section>
  );
};

export default Hero;
