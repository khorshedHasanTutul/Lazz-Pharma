import React, { useState } from "react";
import AuthenticationModalBody from "../Authentication/AuthenticationModalBody";
import LoginModal from "../Authentication/LoginModal";
import ContentCart from "./ContentCart";
import MiniCart from "./MiniCart";

const ShoppingCart = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOrderNowPressed, setIsOrderNowPressed] = useState(false);
  const [isVisibleLoginMOdal, setIsVisibleLoginModal] = useState(false);

  const toggleCartHandler = () => {
    console.log("hey hey");
    setIsOpenCart((prevState) => !prevState);
  };
  const closeAuthModalHandler = () => {
    setIsVisibleLoginModal((prevState) => !prevState);
  };

  return (
    <>
      <div class="cart_box_container cart_info">
        {isOpenCart && (
          <ContentCart
            openCart={toggleCartHandler}
            setIsOrderNowPressed={setIsOrderNowPressed}
            closeAuthModalHandler={closeAuthModalHandler}
          />
        )}
        {!isOpenCart && <MiniCart closeCart={toggleCartHandler} />}
      </div>
      {isVisibleLoginMOdal && (
        <AuthenticationModalBody
          Template={LoginModal}
          closeModal={closeAuthModalHandler}
          isOrderNowPressed={isOrderNowPressed}
        />
      )}
    </>
  );
};

export default ShoppingCart;
