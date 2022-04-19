import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlProductDetails } from "../../Service/UrlService";
import cartContext from "../../store/cart-context";

const ProductsInfoModel = ({ item }) => {
  const [qty, setQty] = useState("");

  const getCartContext = useContext(cartContext);
  const [visibleCartBox, setVisibleCartBox] = useState(false);
  const getCartCtxItems = getCartContext.getCartModel.Items;
  const findItem = getCartCtxItems.find((item2) => item2.id === item.id);

  const storeCartHandler = (item, e) => {
    e.preventDefault();
    getCartContext.storeCartItems(item);
  };

  const qtyIncHandler = (e) => {
    e.preventDefault();
    let quantity = findItem.quantity + 1;
    getCartContext.updateQuantity(findItem, quantity);
  };

  const qtyDecHandler = (e) => {
    e.preventDefault();
    let quantity = findItem.quantity - 1;
    getCartContext.updateQuantity(findItem, quantity);
    if (findItem.quantity === 0) {
      setVisibleCartBox(false);
    }
  };

  const qtyChangeHandler = (item, { target }) => {
    if (target.value === "") {
      setQty(0);
    } else {
      setQty(target.value);
    }
    getCartContext.updateEditableQuantity(item, target.value);
  };

  const blurHandler = (item) => {
    if (qty === 0) {
      // setQtyAlert(true);
      alert("Quantity Can't be less than 1");
      getCartContext.updateEditableQuantity(item, 1);
      setQty(1);
    }
  };

  useEffect(() => {
    if (findItem) {
      setVisibleCartBox(true);
    } else {
      setVisibleCartBox(false);
    }
  }, [findItem]);

  return (
    <div class="inner-product-main-flex slide-single splide__slide">
      <a href>
        {item.Ds > 0 && (
          <div class="group-price-drag">
            <span class="product-new-drag">
              {item.Ds > 0 ? item.Ds : ""}
              {item.Ds > 0 ? "%" : null}
            </span>
          </div>
        )}
        <Link to={urlProductDetails() + item.id}>
          <div class="product-top-area">
            <div class="product-img">
              <img src="/Contents/assets/image/koko.jpeg" alt="product" />
            </div>
            <div class="product-content">
              <div className="product_heading_info">
                <h3>{item.Nm} &nbsp; </h3>

                <span>{item.St} Tab</span>
              </div>
              <span>Vitamin C</span>

              <div class="basket-add">
                {item.Ds === 0 && (
                  <span class="item__price item__price--now">৳{item.MRP}</span>
                )}

                {item.Ds > 0 && (
                  <>
                    <span class="item__price item__price--now">
                      ৳{(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
                    </span>
                    <span class="price product-price">
                      <del class="cross_price"> ৳{item.MRP}</del>
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>

        {!visibleCartBox && (
          <div
            class="add-to-cart d-flex al-center j-center"
            onClick={storeCartHandler.bind(this, item)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
            </svg>
            <span>Add to Bag</span>
          </div>
        )}
        {visibleCartBox && (
          <div class="wishlist-btn">
            <div class="add-tocart-overlay d-flex al-center j-center">
              <div class="inner-card-flex">
                <div class="qty-holder2">
                  <span
                    onClick={qtyDecHandler}
                    class="qty-dec-btn2"
                    title="Dec"
                  >
                    -
                  </span>
                  <aside>
                    <input
                      type="text"
                      name="qty"
                      id="qty"
                      value={findItem?.quantity}
                      onChange={qtyChangeHandler.bind(null, item)}
                      onBlur={blurHandler.bind(null, item)}
                    />
                  </aside>
                  <span
                    onClick={qtyIncHandler}
                    class="qty-inc-btn2"
                    title="Inc"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </a>
    </div>
  );
};

export default ProductsInfoModel;
