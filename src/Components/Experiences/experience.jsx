import React from "react";
import { FaReact, FaCode, FaGithub } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import Getintouch from "../Contact/getintouch";

const Experience = () => {
  const experiences = [
    {
      role: "Front-End Developer",
      company: "HejiDev",
      duration: "2024 - Present",
      description: [
        "Developed NitroFlix, a movie streaming platform using React & TMDb API.",
        "Built NationMeal, a meal recipe web app with TheMealDB API.",
        "Designed and implemented a decentralized NFT dashboard with MetaMask integration.",
        "Created a sports event & player search tool using TheSportsDB API.",
        "Optimized UI/UX across projects using Tailwind CSS, Framer Motion, and Figma.",
        "Developed CryptoTracker, a responsive cryptocurrency tracking web app using React and the CoinGecko API to fetch and display real-time market data. Integrated a 7-day interactive price chart using Chart.js, dynamically rendered on coin selection for better user insight."
      ],
      icon: <FaReact className="exp-icon" style={{color: 'white'}}/>,
    },
    {
      role: "Freelance Front-End Developer",
      company: "Self-Employed",
      duration: "2023 - Present",
      description: [
        "Developed custom landing pages and portfolios for clients.",
        "Enhanced SEO and reduced website load times by 30% through optimization.",
        "Integrated Firebase authentication and real-time database for secure login.",
      ],
      icon: <FaCode className="exp-icon" style={{color: 'white'}}/>,
    },
    {
      role: "Open Source & Hackathons",
      company: "GitHub & Hackathons",
      duration: "Ongoing",
      description: [
        "Contributed to open-source projects, improving UI consistency and fixing bugs.",
        "Participated in frontend-focused hackathons, building React-based projects in 48 hours.",
      ],
      icon: <FaGithub className="exp-icon" style={{color: 'white'}} />,
    },
  ];

  return (
    <>
    <section className="experience-container">
        <span>
        <FaDraftingCompass />
        <h4>DESIGN EVOLUTION</h4>
        </span>
      <h2>My Experience</h2>
          <div className="exp-component">
      <div className="work-experience">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-wrap">
            <div className="experience-box">
              {exp.icon}
              <div className="exp-heading">
                <h3 >{exp.role}- </h3> 
                <p >{exp.company} • {exp.duration}</p>
              </div>
            </div>
            <ul className="exp-workdone">
              {exp.description.map((point, i) => (
                <li key={i} className="flex">
                  <span className="text-green-400" style={{color: 'white'}}>✔</span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="exp-image">
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742339787/mockup5_iju4av.jpg" alt="" />
      </div>
        </div>
    </section>
        {/* <Getintouch/> */}
        </>
  );
};

export default Experience;
