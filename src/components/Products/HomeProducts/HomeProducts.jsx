import React from "react";
import CategoryWiseProducts from "./CategoryWiseProducts";
import FeaturedProducts from "./FeaturedProducts";
import ShowCasegallery from "./ShowCase Gallery/ShowCasegallery";

const HomeProducts = () => {
  return (
    <div id="body_parent">
      {/* <NavHeader /> */}
      <div id="body_content">
        {/* <Banner /> */}
        <div class="content-page">
          <div class="tcontainer">
            <div class="ticker-wrap">
              <div class="ticker-move"></div>
            </div>
          </div>
          <CategoryWiseProducts />
        </div>

        <FeaturedProducts />

       <ShowCasegallery />
      </div>
      {/* here shopping cart  */}
    </div>
  );
};

export default HomeProducts;
