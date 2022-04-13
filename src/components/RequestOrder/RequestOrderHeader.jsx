import React from "react";
import { Link } from "react-router-dom";
import { urlHomeRoute } from "../../Service/UrlService";

const RequestOrderHeader = () => {
  return (
    <div class="breadcrumb clearfix">
      <Link to={urlHomeRoute()} class="home" title="Return to Home">
        Home
      </Link>
      <span class="navigation-pipe"> </span>
      <a href>Request Order</a>
    </div>
  );
};

export default RequestOrderHeader;
