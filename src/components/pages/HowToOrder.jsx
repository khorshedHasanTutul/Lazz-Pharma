import React from "react";
import { Link } from "react-router-dom";
import { urlHomeRoute } from "../../Service/UrlService";

const HowToOrder = () => {
  return (
    <div id="body_content">
      <div class="columns-container">
        <div id="columns" class="container">
          <div class="breadcrumb clearfix">
            <Link class="home" title="Return to Home" to={urlHomeRoute()}>
              Home
            </Link>
            <span class="navigation-pipe"> </span>
            <a href>How To Order</a>
          </div>
        </div>
      </div>
      <div class="request_product">
        <div class="row">
          <div class="col-md-6">
            <div class="center_order_text">
              <h2>To buy Product or Medicine follow the steps:</h2>
              <p>1. Search product from search option</p>
              <p>2. Press Add to cart</p>
              <p>3. Check out the after all product added to chart</p>
              <p>
                4. Provide delivery address, picture of prescription and payment
                info
              </p>
              <p>
                5. After order submit you will get order number from Email and
                SMS
              </p>
              <p>6. LP agent will call you to confirm your order</p>
              <p>7. LP will deliver your ordered product</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="container_vid">
              <iframe
                class="responsive_iframe"
                src="https://www.youtube.com/embed/jDU08QWWWh8"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                width="560"
                height="315"
                frameborder="0"
                title="Order Video Lazzpharma"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;
