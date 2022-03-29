import React from "react";

const RequestOrderHeader = () => {
  return (
    <>
      <div class="columns-container">
        <div id="columns" class="container">
          <div class="breadcrumb clearfix">
            <a class="home" title="Return to Home">
              Home
            </a>
            <span class="navigation-pipe"> </span>
            <a href="#">Order Us</a>
          </div>
        </div>
      </div>

      <div class="External_link">
        <div class="row">
          <div class="col-md-6 SearchFont SearchProductName">
            <div class="External_Block">
              <p class="External_Block_Title">
                You may request the products those
              </p>
              <p class="External_Block_Title">are not available here</p>
              <button class="External_Block_Button" type="button">
                REQUEST ORDER
              </button>
            </div>
          </div>
          <div class="col-md-6 SearchFont SearchProductName">
            <div class="External_Block">
              <p class="External_Block_Title">Do not Know How to Order ?</p>
              <p class="External_Block_Title">Watch Here</p>
              <button class="External_Block_Button" type="button">
                HOW TO ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestOrderHeader;
