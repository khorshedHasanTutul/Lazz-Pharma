import React from "react";
import CheckoutHeader from "../Checkout/CheckoutHeader";
import ProductSummary from "../Checkout/ProductSummary";

const Checkout = () => {

  return (
    <div id="body_parent">
      <div id="body_content">
        <div class="columns-container">
          <div id="columns" class="container">
            <CheckoutHeader />
            <h2 class="page-heading">
              <span class="page-heading-title2">Checkout</span>
            </h2>
            <div class="page-content page-order">
              <ul class="step">
                <li class="checkoutPage current-step">
                  <span>01. Summary</span>
                </li>
                <li class="checkoutPage">
                  <span>02. Address</span>
                </li>
                <li class="checkoutPage">
                  <span>03. Payment</span>
                </li>
              </ul>

              <ProductSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
