import React from "react";
import { Link } from "react-router-dom";
import { urlProductDetails } from "../../Service/UrlService";

const ProductsInfoModel = ({ item }) => {
  return (
    <li class="col-sm-2 col-md-2 col-xs-6 main_dispaly_container">
      <div class="main_dispaly">
        <div class="left-block">
          <Link to={urlProductDetails() + item.id}>
            <img
              class="img-responsive"
              alt="product"
              src={
                "https://www.lazzpharma.com/Content/ImageData/Products/Small/" +
                item.imagePath
              }
              style={{ maxHeight: "205px" }}
            />
          </Link>
        </div>
        {item.Ds !== null && item.Ds > 0 && (
          <div class="group-price">
            <span class="product-new">{item.Ds.toFixed(2)}% </span>
          </div>
        )}

        <div class="right-block">
          <h5 class="product-name" title={item.name}>
            <Link to={urlProductDetails() + item.id}>{item.name}</Link>
          </h5>
          {item.Ds !== null && item.Ds > 0 && (
            <div class="content_price">
              <span class="price product-price">
                ৳ {(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
              </span>
              <span class="price product-price">
                <del class="cross_price">৳ {item.MRP}</del>
              </span>
            </div>
          )}
          {item.Ds === 0 && (
            <div class="content_price">
              <span class="price product-price">
                ৳ {(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
              </span>
            </div>
          )}
        </div>
        <div>
          <div style={{ textAlign: "center" }}>
            <div class="btn_cart">
              <a class="btn_add_to_cart" title="Add to Cart" href>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"></path>
                </svg>
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductsInfoModel;
