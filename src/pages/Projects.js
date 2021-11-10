import React from "react";
import "../assets/css/Projects.css";
import projects from "../data/projects";

export default function Project() {
  return (
    <div>
      <div className="main-card">
        <div className="nested">
          <div className="grid-container animate__animated animate__fadeIn">
            {projects.map(({ id, image, title, desc, tools, url, git }) => (
              <div className="grid-item" key={id}>
                <a href={url}>
                  <img src={image} alt=""/>
                  </a>
                  <h1>{title}</h1>
                  <p>{desc} using {tools}</p>
                  <p><a href={url}>Deployed App</a> | <a href={git}>Github</a></p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
