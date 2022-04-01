import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, PRODUCT_DETAILS } from "../../lib/endpoints";

const ProductDetailsContent = () => {
  const { id } = useParams();
  const axios = require("axios").default;

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(BASE_URL + PRODUCT_DETAILS, {
        params: { id: id },
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  return (
    <div id="center_column" class="center_column col-xs-12 col-sm-9">
      <div id="product">
        <div class="primary-box row">
          <div class="pb-left-column col-xs-12 col-sm-6">
            <div class="product-image">
              <div class="product-full">
                <div class="product-image">
                  <img
                    src="Lazz%20Pharma%20Limited_files/f4a4e79f-39f7-41e7-bfff-2b43d484f082IMG_20210518_203441.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="pb-right-column col-xs-12 col-sm-6">
            <h1 class="product-name">FACE MASK (S3) 50 PCS BOX, SURGICAL</h1>
            <div class="product-comments">
              <div class="product-star">
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <div class="comments-advices">
                <a href>No Review</a>
                <a href="#reviews">
                  <i class="fa fa-pencil"></i> write a review
                </a>
              </div>
            </div>
            <div class="product-price-group">
              <span class="price">৳ 8.00 </span>
            </div>
            <div style={{ lineHeight: "20px" }}>
              <p>Generic Name: Mask</p>
            </div>
            <div class="info-orther" style={{ lineHeight: "20px" }}>
              <p>Item Code: N/A</p>
            </div>
            <div class="product-desc">
              <p>S3 Meltblown 99% Surgical Mask SGS CE DGDA Certified</p>
            </div>
            <div class="form-option">
              <p class="form-option-title">Quantity:</p>
              <div class="attributes input-group bootstrap-touchspin">
                <input
                  name="qty"
                  value="1"
                  class="vertical-qty form-control"
                  style={{ display: "block" }}
                  type="text"
                />
                <button
                  class="vertical-up btn btn-default bootstrap-touchspin-up"
                  type="button"
                >
                  <i class="glyphicon glyphicon-chevron-up"></i>
                </button>
                <button
                  class="vertical-down btn btn-default bootstrap-touchspin-down"
                  type="button"
                >
                  <i class="glyphicon glyphicon-chevron-down"></i>
                </button>
              </div>
            </div>
            <div class="form-action">
              <div class="button-group btn-add-cart-container">
                <a class="btn-add-cart" href>
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="product-tab">
          <ul class="nav-tab">
            <li class="active">
              <a href data-toggle="tab">
                Product Details
              </a>
            </li>
            <li class="">
              <a href data-toggle="tab">
                Information
              </a>
            </li>
            <li class="">
              <a href data-toggle="tab">
                Reviews
              </a>
            </li>
          </ul>
          <div class="tab-container">
            <div class="tab-panel active">
              <p>N/A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContent;
