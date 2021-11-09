import React from "react";
import "../assets/css/Home.css";
import img from "../assets/img/icecream1.jpg";

export default function Home() {
  return (
    <section>
      <div className="main-card">
        <div className="nested">
          <div className="home-img">
            <img src={img} alt="bowl of pink ice cream" className="splash-img"/>
          </div>
          <div className="home-text">
          Full-stack Web Developer using a varied background as a mixed media artist, writer,
commercial fisherman, welder and event coordinator to build engaging and polished projects
from front to back. Recent graduate of Northwestern’s Full Stack program. Known as an
effective communicator and team leader in high-stress situations. Lifelong learner that thrives in
collaborative problem-solving, and aims to create impactful web applications with accessible
mobile-first design.
          </div>
        </div>
      </div>
    </section>
  );
}
