import React from "react";
import ShowCaseGalleryTemplate from "./ShowCaseGalleryTemplate";

const ShowCasegallery = () => {
  return (
    <div id="content-wrap">
      <div class="container-fluid">
        <h2 class="page-heading">
          <span class="page-heading-title">Lazz Polli Resort</span>
        </h2>
        <div class="row">
          <div class="banner-boder-zoom">
            <div class="col-md-12">
                <ShowCaseGalleryTemplate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCasegallery;
