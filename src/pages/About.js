import React from "react";
import "../assets/css/Home.css";

export default function About() {
  return (
    <section>
      <div className="main-card">
        <div className="nested">
          <p className="home-text">
            Charlie Aleck (they/them) is a Seattle-born and
            Chicago-based artist, writer, and web developer with a background
            that spans illustration, community art, event coordinating,
            welding, and commercial fishing in Alaska.
            <br />
            <br />
            A recent graduate of Northwestern University's Full Stack
            program, they continue to create applications with a focus on clean
            coding practices and user-intuitive design. Their portfolio
            currently highlights projects built with React.js, Node.js,
            Javascript, CSS3, HTML5, jQuery, Express.js, SQL, MongoDB, and
            GraphQL. They are currently deepening their skills in Python, SCSS, UI/UX design and more.
            <br />
            <br />
            As an enrolled member of Tla-o-qui-aht First Nations, they are actively involved in Indigenous language revitalization and seek to uplift Indigenous culture and communities in art, writing and mutual aid.
            <br />
            <br />
            They find they create their best work while tinkering with new
            tools, finding shared stories and trusting their instinct.
            <br />
            <br />
            <a href="https://docs.google.com/document/d/1zssz-r2Og18BkP3a6k8Wp2i1cd3qWnCoMf9ByB3kINM/edit?usp=sharing">Resume</a> | <a href="mailto:aleckcharlie@gmail.com">Contact</a>
          </p>
        </div>
      </div>
    </section>
  );
}
