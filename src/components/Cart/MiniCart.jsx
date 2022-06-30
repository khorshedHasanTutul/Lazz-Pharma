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
          src="/Contents/assets/image/cartLogo.jpg"
          style={{ height: "50px !important", width: "50px !important" }}
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
