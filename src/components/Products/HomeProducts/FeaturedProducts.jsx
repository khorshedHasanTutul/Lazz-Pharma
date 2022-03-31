import React from "react";
import { getProducts, productTypes } from "../../../Service/DataService";
import ProductsInfoModel from "../ProductsInfoModel";

const FeaturedProducts = () => {
  const getFeaturedProducts = getProducts(productTypes.featured);
  return (
    <div class="content-page">
      <div class="container-fluid">
        <div class="category-featured electronic">
          <nav class="navbar nav-menu show-brand">
            <div class="container-fluid">
              <div class="collapse navbar-collapse">
                <ul id="sale_tab_button" class="nav navbar-nav">
                  <li class="active">
                    <a href="https://www.lazzpharma.com/#">Featured Product</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="product-featured clearfix">
            <div class="row">
              <div class="col-sm-12 col-right-tab col-right-tabxxx">
                <div class="product-featured-tab-content">
                  <div id="sale_tab_container" class="tab-container">
                    <div class="tab-panel active">
                      <div class="">
                        <ul class="product-list row">
                          {getFeaturedProducts.map((item) => (
                            <ProductsInfoModel item={item} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
