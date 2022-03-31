import React from "react";

const ContentCart = ({openCart}) => {
  return (
    <div class="cart-box-view" >
      <div class="cart-box-inner-view">
        <div class="cart-header row no_margin">
          <div class="col-xs-8">
            <img
              class="header-bag"
              src="./Contents/assets/image/add-cart.png"
              alt="img"
            />
            <strong class="car-box-title SearchFont">
              <span>0</span>
              <span> Item</span>
            </strong>
          </div>
          <div class="col-xs-4" onClick={openCart}>
            <img
              class="pull-right cart-cross-btn"
              src="./Contents/assets/image/x-button.png"
              alt="cross-button"
            />
          </div>
        </div>
        <div class="cart-body text-center">
          <div class="cart-table-wrap">
            <span>Happy Shopping!! </span>
            <table
              style={{ width: "100%", fontSize: "11px" }}
              class="cart-table"
            >
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div class="cart-footer">
          <button
            id="checkout-button"
            style={{ borderRadius: "6px 0 0 6px" }}
            class="btn btn-success pull-left"
          >
            Order Now
          </button>
          <span
            style={{ borderRadius: "0 6px 6px 0" }}
            class="btn btn-info cart-amount-span"
          >
            ৳ <span>0</span>
          </span>
          <a href style={{ color: "#ddd", verticalAlign: "middle" }}>
            &nbsp;&nbsp;&nbsp; <span></span>
            <a id="empty_cart_button" href="https://www.lazzpharma.com/#">
              <i
                style={{ color: "#ffffff", marginRight: "15px" }}
                class="fa fa-shopping-cart fa-2x pull-right"
              ></i>
            </a>
            <div class="clearfix"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentCart;
