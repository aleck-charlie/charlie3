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
            As a full stack web developer and creative I strive to create
            projects that are engaging, responsive and exploratory-- in work and
            in life.
            <p /> From art school and film, to welding and working aboard
            commercial fishing vessels in Alaska, and now in front-to-backend
            development, I thrive in collaboration and creative problem solving.
            
            <p />My developer toolkit includes HTML, CSS, Javascript, JQuery, AJAX,
            Node.js, and experience in SQL and MongoDB databases, and REST and
            Graphql API's. 
            
            <p />Moving forward, I'm learning to build projects with Python,
            AWS, Java and C#, with an interest in focusing in on more in-depth
            CSS and SCSS capabilities.
          </div>
        </div>
      </div>
    </section>
  );
}
