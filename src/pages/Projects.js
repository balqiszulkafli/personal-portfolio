import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList.js";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Project</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => (
          <ProjectItem
            key={project.id || index}
            id={index}
            name={project.name}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
