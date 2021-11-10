import React from "react";
import "../assets/css/Home.css";
import img from "../assets/img/me.jpg";

export default function Home() {
  return (
    <section>
      <div className="main-card">
        <div className="nested">
          <div className="home-img">
            <img src={img} alt="Charlie smiling" className="splash-img animate__animated animate__fadeIn" />
          </div>
          <div className="home-text">
            <p>
              Full-stack Web Developer using a background in mixed-media art,
              event coordinating, commercial fishing and a love for DIY to build
              engaging and polished projects from front to back. Recent graduate
              of Northwestern’s Full Stack program.
            </p>
            <p></p>
             <p> <span style={{ fontWeight: "bold" }}> Toolkit: </span>
              React.js, Node.js, Javascript, JQuery, SQL, MongoDB, CSS and more
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}
