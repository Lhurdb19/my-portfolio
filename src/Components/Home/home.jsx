import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { SlScreenDesktop } from "react-icons/sl";
import { IoIosLaptop } from "react-icons/io";
import { RiUserStarLine } from "react-icons/ri";
import { FaXTwitter, FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FcDownload } from "react-icons/fc";
import { SiCreatereactapp } from "react-icons/si";
import "./Home.css";
import ProjectCard from "../Projects/project";

function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://www.dropbox.com/scl/fi/z5akqnezotc27beig73cf/BASHEER_EJIWUMI_-MY-CV-2.pdf?rlkey=kj2sfo9indwmusld3jyeh6i13&st=s0o0keh2&dl=1";
    link.download = "Basheer_Ejiwumi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  };

  return (
    <>
      <div className="home-component">
        <div className="myself-container">
          <div className="my-image-text">
            <div className="my-image">
              <img
                src="https://res.cloudinary.com/damamkuye/image/upload/v1742315837/IMG_2733_k7kwy8.jpg"
                alt="EJIWUMI BASHEER"
              />
              <h5>HEJIDEV</h5>
            </div>
            <div className="my-text">
              <p>I'm Basheer Ejiwumi</p>
              <p>A front-end developer and Product Designer.</p>
              <h3>
                Innovative solutions for forward-thinking brands and projects
              </h3>
              <a href="/">
                <p>Explore My Works</p>
                <FiArrowUpRight className="icon1" />{" "}
                <FiArrowUpRight className="icon2" />
              </a>
            </div>
          </div>

          <div className="my-cv">
            <div className="my-cv-text">
              <h6>Welcome To HejiDev Portfolio</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="home-container">
        <div className="laptop-con">
          <img
            src="https://res.cloudinary.com/damamkuye/image/upload/v1742339788/mockup4_cuqrri.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/damamkuye/image/upload/v1742339787/mockup3_s32eqi.webp"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/damamkuye/image/upload/v1742339787/mockup5_iju4av.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/damamkuye/image/upload/v1742339787/morkup1_ewbazo.webp"
            alt=""
          />
        </div>
        <div className="lap-desk-text">
          <div className="top">
            <SlScreenDesktop className="icons" />{" "}
            <h3>Front-End Developer @hejiDev</h3>
          </div>
          <div className="top">
            <IoIosLaptop className="icons" /> <h3>One Year Of Experience</h3>
          </div>
          <div className="top">
            <RiUserStarLine className="icons" />{" "}
            <h3>77% Client Satisfaction</h3>
          </div>
        </div>
      </div>

      <div className="about-container">
        <div className="about-image">
          <img
            src="https://res.cloudinary.com/damamkuye/image/upload/v1742315837/IMG_2733_k7kwy8.jpg"
            alt=""
          />
        </div>
        <div className="about-text">
          <h2>ABOUT ME</h2>
          <p>
            I’m a Front-End Developer with a passion for turning ideas into
            interactive, user-friendly experiences. With a year of experience, I
            specialize in designing and developing intuitive interfaces that
            strike the perfect balance between aesthetics and functionality.
            Every project I build is driven by a deep focus on usability,
            innovation, and performance, ensuring that users don’t just navigate
            but truly connect with the digital world.
          </p>
          <div className="my-design">
            <h3>My Essential Principles of Design & Development</h3>
            <h4>HTML / CSS / JavaScript / React / Github / Postman / Firebase</h4>
          </div>

          <div className="resume-link-con">
          <button onClick={handleDownload} className="download-btn">
            <p>Download Resume</p> <FcDownload className="down-icon"/>
          </button>
          <div className="my-link">
            <a href="https://web.facebook.com/hejidev/"  style={{color: 'blue'}}><FaFacebookF /></a>
            <a href="https://x.com/hejidev" style={{color: 'black'}}><FaXTwitter /></a>
            <a href="wa.me/2348130693571"  style={{color: 'green'}}><FaWhatsapp /></a>
            <a href=""  style={{color: 'black'}}><FaLinkedinIn /></a>
            <a href="/"  style={{color: 'red'}}><FaInstagram /></a>
            <a href="https://github.com/Lhurdb19"  style={{color: 'black'}}><FaGithub /></a>
          </div>
          </div>
        </div>
      </div>

      <div className="creation-container">
        <h3><SiCreatereactapp /><p> CREATIONS</p> </h3>
        <h2>My Selected Works</h2>

        <div className="selected-work-con">
            <ProjectCard/>
        </div>
      </div>
    </>
  );
}

export default Home;
