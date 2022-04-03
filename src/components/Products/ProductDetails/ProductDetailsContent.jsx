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
                    src="/Contents/assets/image/pditals.jpg"
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
            <div className="generic-name" style={{ lineHeight: "20px" }}>
              <p><span>Generic Name</span> : Mask</p>
            </div>
            <div class="info-orther" style={{ lineHeight: "20px" }}>
              <p><span>Item Code</span> : N/A</p>
            </div>
            <div class="product-desc">
              <p>S3 Meltblown 99% Surgical Mask SGS CE DGDA Certified</p>
            </div>
            <div class="form-option">
              <p class="form-option-title">Quantity:</p>
              <div class="new-attributes attributes input-group bootstrap-touchspin">
                <button
                  class="vertical-up btn btn-default bootstrap-touchspin-up"
                  type="button"
                >
                <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
                <input
                  name="qty"
                  value="1"
                  class="vertical-qty form-control"
                  style={{ display: "block" }}
                  type="text"
                />
                <button
                  class="vertical-down btn btn-default bootstrap-touchspin-down"
                  type="button"
                >
                 <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="form-action">
              <div class="button-group btn-add-cart-container">
                <a class="btn-add-cart btn-add-cart-lazz" href>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"></path></svg>
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
