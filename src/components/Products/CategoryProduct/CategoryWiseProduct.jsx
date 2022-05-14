import React from "react";
import { Link } from "react-router-dom";
import appData from "../../../Service/DataSource/appData";
import { urlHomeRoute } from "../../../Service/UrlService";
import ProductsInfoModel from "../ProductsInfoModel";

const CategoryWiseProduct = () => {
  return (
    <div id="body_content">
      <div class="columns-container">
        <div id="columns" class="container">
          <div class="breadcrumb clearfix">
            <Link class="home" title="Return to Home" to={urlHomeRoute()}>
              Home
            </Link>
            <span class="navigation-pipe"> </span>
            <a href>Category</a>
            <span class="navigation-pipe"> </span>
            <a href>Medicine</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div id="view-product-list" style={{padding:"0px 20px"}}>
          <ul>
            {appData.categoryProducts.map((item) => (
              // col-xs-6 col-sm-2 col-md-2
              <li class="">
                {/* <ProductModelCategoryWise /> */}
                <ProductsInfoModel item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseProduct;
