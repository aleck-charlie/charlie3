import React from "react";
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom";
import "../assets/css/Projects.css";
import projects from "../data/projects";

export default function Project() {
  return (
    <div>
      <div className="main-card">
        <div className="nested">
          <div className="grid-container">
          <LazyLoad height={480} >
            {projects.map(({ id, image, title, desc, tools, url, git }) => (
              <div className="grid-item" key={id}>
                  <img src={image} alt=""/>
                  <h1>{title}</h1>
                  <p>{desc} using {tools}</p>
                  <p><Link to={url}>Deployed</Link></p>
                  <p><Link to={git}>Git</Link></p>
                </div>
            ))}
                </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
}
