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
            {projects.map(({ id, image, title, desc, tools, url, git }) => (
              <div className="grid-item" key={id}>
                <a href={url}>
                  <img src={image} alt=""/>
                  </a>
                  <h1>{title}</h1>
                  <p>{desc} using {tools}</p>
                  <p><Link to={url}>Deployed App</Link> | <Link to={git}>Github</Link></p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
