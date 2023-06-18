import React from "react";
import Card from "./../../components/Card";

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="project image" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        {project.disableDemo ? null : (
          <a
            href={project.demo}
            className="btn sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
 {project.disableGit ? null : (
        <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
                )}

      </div>
    </Card>
  );
};

export default Project;