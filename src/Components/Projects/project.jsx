import fetchProjectFile from '../../Libs/projectFile'
import React from "react";

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
    <div className="project-container">
      {fetchProjectFile.map((project) => (
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
  );

  function getLink(id) {
    switch (id) {
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
      default:
        return "/";
    }
  }
};

export default ProjectCard;