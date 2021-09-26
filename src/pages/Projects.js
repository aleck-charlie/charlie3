import React from "react";
import "../assets/css/Projects.css";
import projects from "../data/projects";

export default function Project() {
  return (
    <div>
      <div className="main-card">
        <div className="nested">
          <div className="grid-container">
            {projects.map(({ id, image, title, url, git }) => (
              <div className="grid-item" key={id}>
                  <img src={image} alt=""/>
                  <p>{title}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
