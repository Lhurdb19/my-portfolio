import React, { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { SlScreenDesktop } from "react-icons/sl";
import { IoIosLaptop } from "react-icons/io";
import { RiUserStarLine } from "react-icons/ri";
import { FaXTwitter, FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FcDownload } from "react-icons/fc";
import ProjectCard from "../Projects/project";
import Experience from "../Experiences/experience";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
              <a href="/experience">
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

      <section className="home-container">
      {/* Image Gallery with AOS */}
      <div className="laptop-con">
        <img
          src="https://res.cloudinary.com/damamkuye/image/upload/v1742339788/mockup4_cuqrri.jpg"
          alt="Project Mockup"
          data-aos="fade-right"
        />
        <img
          src="https://res.cloudinary.com/damamkuye/image/upload/v1742339787/mockup3_s32eqi.webp"
          alt="Project Mockup"
          data-aos="fade-up"
        />
        <img
          src="https://res.cloudinary.com/damamkuye/image/upload/v1742339787/mockup5_iju4av.jpg"
          alt="Project Mockup"
          data-aos="fade-down"
        />
        <img
          src="https://res.cloudinary.com/damamkuye/image/upload/v1742339787/morkup1_ewbazo.webp"
          alt="Project Mockup"
          data-aos="fade-left"
        />
      </div>

      {/* Developer Information */}
      <div className="lap-desk-text">
        <div className="top" data-aos="fade-up">
          <SlScreenDesktop className="icons" />
          <h3>Front-End Developer @hejiDev</h3>
        </div>
        <div className="top" data-aos="fade-up" data-aos-delay="200">
          <IoIosLaptop className="icons" />
          <h3>One Year Of Experience</h3>
        </div>
        <div className="top" data-aos="fade-up" data-aos-delay="400">
          <RiUserStarLine className="icons" />
          <h3>77% Client Satisfaction</h3>
        </div>
      </div>
    </section>

      <div className="creation-container">

        <div className="selected-work-con">
        {/* <Hero/> */}
            <ProjectCard/>
        </div>
        <Experience/>
      </div>
      {/* <Getintouch/> */}
    </>
  );
}

export default Home;
