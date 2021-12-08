import React from "react";
import "../assets/css/Projects.css";
import gallery from "../data/gallery";

export default function Art() {
  return (
    <section>
      <div className="main-card">
        <div className="nested">
          <div className="grid-container">
            {gallery.map(({ id, src }) => (
              <div className="grid-item" key={id}>
                <img src={src} alt="" className="project-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
