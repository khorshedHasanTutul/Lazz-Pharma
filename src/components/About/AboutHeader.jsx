import React from "react";
import { Link } from "react-router-dom";
import { urlHomeRoute } from "../../Service/UrlService";

const AboutHeader = () => {
  return (
    <div id="columns" class="container">
      <div class="breadcrumb clearfix">
        <Link class="home" title="Return to Home" to={urlHomeRoute()}>
          Home
        </Link>
        <span class="navigation-pipe"> </span>
        <a href>About Us</a>
      </div>
    </div>
  );
};

export default AboutHeader;
