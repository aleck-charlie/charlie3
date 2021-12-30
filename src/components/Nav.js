import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Nav.css";

export default function Nav() {
  return (
    <section>
      <nav className="nav-container">
        <Link to="/" className="nav-link">
          <h1 className="title">Charlie Aleck</h1>
        </Link>
        <ul className="nav-list">
          <li>
          <Link to="/projects" className="nav-link">
                Projects
            </Link>
          </li>
          <li>
            <Link to="/art" className="nav-link">
                Illustration
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
                About
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
