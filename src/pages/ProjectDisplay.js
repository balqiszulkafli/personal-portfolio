import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <div className="video-container">
        {project.demo ? (
          <video width="560" height="315" controls>
            <source src={project.demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img width="560" height="315" src={project.image} alt="Project"></img>
        )}
      </div>
      <div className="centered-text">
        <p>
          <b>Language:</b> {project.language}
        </p>
        <p>
          <b>Tools:</b> {project.tools}
        </p>
        <p>
          <b>Description:</b> {project.desc}
        </p>
      </div>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
