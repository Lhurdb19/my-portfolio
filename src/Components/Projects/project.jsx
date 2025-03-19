import ProjectFile from '../../Libs/projectFile'
import React from "react";
import { SiCreatereactapp } from "react-icons/si";

const ProjectCard = () => {
  
  // return(
  //     <div className="project-container">
  //         {
  //             ProjectFile.map((project) => {
  //                 const {id, imageUrl, title} = project;
  //                 return(
  //                     <div data-aos="zoom-in-up"
  //                     key={id} className="project-info">
  //                         <img src={imageUrl} alt="" />
  //                         <h4 data-aos="fade-down"
  //                     >{title}</h4>
  //                     </div>
  //                 )
  //             })
  //         }

  //     </div>
  // )

  return (
  <>
    <div className="my-selection">
      <h3><SiCreatereactapp className='create-icon'/><p> CREATIONS</p> </h3>
      <h2>My Selected Works</h2>
    <div className="project-container">
      {ProjectFile.map((project) => (
        <a
        key={project.id}
        href={getLink(project.id)}
          className="project-info"
          target="_blank"
          rel="noreferrer"
          >
          <div className="card-info">
            <img src={project.imageUrl} alt="" />
            <p>{project.title}</p>
          </div>
        </a>
      ))}
      </div>
    </div>
    </>
  );

  function getLink(id) {
    switch (String(id)) {  // Ensure id is treated as a string
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
  
};

export default ProjectCard;