import React, { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { SlScreenDesktop } from "react-icons/sl";
import { IoIosLaptop } from "react-icons/io";
import { RiUserStarLine } from "react-icons/ri";
import ProjectCard from "../Projects/project";
import Experience from "../Experiences/experience";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import About from "../About/about";
import Contact from "../Contact/contact";
import Hero from "../Hero/hero";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="home-component">
        <div className="hero-con">
                <Hero/>
         </div>
      </div>

      <About/>

      <div className="creation-container">
        <div className="selected-work-con">
          {/* <Hero/> */}
          <ProjectCard />
        </div>
        <Experience />
      </div>
      <Contact/>
    </>
  );
}

export default Home;
