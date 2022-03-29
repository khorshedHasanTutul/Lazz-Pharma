import React from "react";

const ReviewHeader = () => {
  return (
    <div class="columns-container">
      <div id="columns" class="container">
        <div class="breadcrumb clearfix">
          <a class="home" title="Return to Home">
            Home
          </a>
          <span class="navigation-pipe"> </span>
          <a href="#">Review</a>
        </div>
      </div>
    </div>
  );
};

export default ReviewHeader;
