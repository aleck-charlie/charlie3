import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Projects.css";
import projects from "../data/projects";

export default function Project() {
  return (
    <div>
      <div className="main-card">
        <div className="nested">
          <div className="grid-container">
            {projects.map(({ id, image, title, desc, url, git }) => (
              <div className="grid-item" key={id}>
                  <img src={image} alt=""/>
                  <p>{title}</p>
                  <p>{desc}</p>
                  <p><Link to={url}>Deployed</Link></p>
                  <p><Link to={git}>Git</Link></p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
