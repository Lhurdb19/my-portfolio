import React from 'react'

function About() {
  return (
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
  )
}

export default About;
