import React from "react";

const MiniCart = ({closeCart}) => {
  return (
    <div class="cart-box" onClick={closeCart}>
      <div class="cart-items text-center">
        <span class="cart-count">0</span>
        <span>&nbsp;Items</span>
      </div>
      <div class="cart-bag text-center">
        <img
          src="./Contents/assets/image/cartLogo.jpg"
          style={{ height: "43px", width: "50px" }}
          alt="img"
        />
      </div>
      <div class="cart-amount">
        <span>৳ </span>
        <span class="cart-amount-span">0</span>
      </div>
    </div>
  );
};

export default MiniCart;
