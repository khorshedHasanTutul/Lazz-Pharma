import React from "react";
import AboutBodyTemplate from "../About/AboutBodyTemplate";
import AboutHeader from "../About/AboutHeader";

const About = () => {
  return (
    <div id="body_content">
      <div class="columns-container">
        <AboutHeader />
      </div>
      <div class="container">
        <AboutBodyTemplate />
      </div>
    </div>
  );
};

export default About;
