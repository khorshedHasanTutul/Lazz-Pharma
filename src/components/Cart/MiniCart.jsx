import React, { useContext } from "react";
import cartContext from "../../store/cart-context";

const MiniCart = ({ closeCart }) => {
  const cartCtx = useContext(cartContext);
  const cartCtxModal = cartCtx.getCartModel;
  return (
    <div class="cart-box" onClick={closeCart}>
      <div class="cart-items text-center">
        <span class="cart-count">{cartCtxModal.TotalItems}</span>
        <span>&nbsp;Items</span>
      </div>
      <div class="cart-bag text-center">
        <img
          src="/Contents/assets/image/cartlogo.svg"
          style={{ height: "43px", width: "50px" }}
          alt="img"
        />
      </div>
      <div class="cart-amount">
        <span>৳ </span>
        <span class="cart-amount-span">
          {cartCtxModal.TotalAmmount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default MiniCart;
