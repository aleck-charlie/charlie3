import React from "react";
import { Document } from 'react-pdf'
import "../assets/css/Home.css";


export default function About() {
  
  return (
    <section>
      <div className="main-card">
        <div className="nested">
          <p className="home-text">
          <Document file="..." />
          

          </p>
        </div>
      </div>
    </section>
  );
}
