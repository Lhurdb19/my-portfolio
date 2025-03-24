import React from 'react';
import { FaXTwitter, FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import './About.css';
import Getintouch from '../Contact/getintouch';

function About() {
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
    <div className="about-container">
        <div className="about-image">
          <img
            src="https://res.cloudinary.com/damamkuye/image/upload/v1742315837/IMG_2733_k7kwy8.jpg"
            alt=""
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
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
            <h3>My Stacks</h3>
            <div className="stack-box">
              <span>HTML
                <div className="html-percent">
                  95%
                </div>
              </span>
              <span>CSS
              <div className="css-percent">89%</div>
              </span>
              <span>JavaScript
              <div className="java-percent">77%</div>

              </span>
              <span>React
              <div className="react-percent">65%</div>
              </span>
            </div>
            {/* <h4>HTML / CSS / JavaScript / React / Github </h4> */}
          </div>

          <div className="resume-link-con">
          <button onClick={handleDownload} className="download-btn">
            <p>Download Resume</p> <LiaDownloadSolid className="down-icon" style={{color: 'ebc9a0'}}/>
          </button>
          <div className="my-link">
            <a href="https://web.facebook.com/hejidev/" ><FaFacebookF /></a>
            <a href="https://x.com/hejidev" ><FaXTwitter /></a>
            <a href="wa.me/2348130693571" ><FaWhatsapp /></a>
            <a href="" ><FaLinkedinIn /></a>
            <a href="/" ><FaInstagram /></a>
            <a href="https://github.com/Lhurdb19" ><FaGithub /></a>
          </div>
          </div>
        </div>
      </div>
        <Getintouch/>
      </>
  )
}

export default About;
