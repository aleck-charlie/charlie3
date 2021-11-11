import React from "react";
import "../assets/css/Home.css";
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  return (
    <section>
      <div className="main-card">
        <div className="nested">
          <div className="home-img">
            <img src="https://res.cloudinary.com/dvhx34ziw/image/upload/v1636650153/IMG_8160_ocai7i.jpg" alt="Charlie smiling" className="splash-img animate__animated animate__fadeIn" />
          </div>
          <div className="home-text">
            <p>
              Full-stack Web Developer using a background in mixed-media art,
              event coordinating, commercial fishing and a love for DIY to build
              engaging and polished projects from front to back. Recent graduate
              of Northwestern’s Full Stack program.
            </p>
            <br />
             <p> <span style={{ fontWeight: "bold" }}> Toolkit: </span>
              React.js, Node.js, Javascript, JQuery, SQL, MongoDB, CSS and more
              </p>
            <br />
            <span className="social">
            <SocialIcon url="https://linkedin.com/in/charliealeck"  bgColor="#831c5a" />
            <SocialIcon url="https://github.com/aleck-charlie" bgColor="#831c5a"  />
            <SocialIcon url="mailto: aleckcharlie@gmail.com" bgColor="#831c5a" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
