import React, { Suspense } from "react";
import "../assets/css/Art.css";
import gallery from "../data/gallery";

export default function Art() {

  return (
    <section>
      <div className="main-card">
        <div className="nested">
          <div className="grid-gallery">
          <Suspense fallback={<div>Loading...</div>}>
            {gallery.map(({ id, src }) => (
              <div className="grid-item" key={id}>
                <img src={src} alt="" className="gallery-img" />
              </div>
            ))}
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
