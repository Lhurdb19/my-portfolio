import React, { useState, useEffect } from "react";
import ProjectFile from "../../Libs/projectFile";
import { SiCreatereactapp } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectCard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating loading time
  }, []);

  return (
    <>
      <div className="my-selection">
        <h3>
          <SiCreatereactapp className="create-icon" />
          <p> CREATIONS</p>
        </h3>
        <h2>My Selected Works</h2>
        <div className="project-container">
          {ProjectFile.map((project) => (
            <a
              key={project.id}
              href={getLink(project.id)}
              className="project-info"
              target="_blank"
              rel="noreferrer"
              data-aos="fade-up"
            >
              <div className="card-info">
                {loading ? (
                  <div className="skeleton-box">
                    <Skeleton height={250} width={350} />
                    <Skeleton height={50} width= {350} />
                  </div>
                ) : (
                  <>
                    <img src={project.imageUrl} alt={project.title} />
                    <p>{project.title}</p>
                  </>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

function getLink(id) {
  switch (String(id)) {
    case "1":
      return "https://supermarket-ebon.vercel.app/";
    case "2":
      return "https://nitroflix.vercel.app/";
    case "3":
      return "https://food-fun-three.vercel.app/";
    case "4":
      return "https://todoapp-navy-nine.vercel.app/";
    case "5":
      return "https://honeymeal.vercel.app/";
    case "6":
      return "https://sweetbundle.vercel.app/";
    case "7":
      return "https://browleeboutique-l6bs.vercel.app/";
    case "8":
      return "https://olymaxsolution.vercel.app/";
    default:
      return "/";
  }
}

export default ProjectCard;
