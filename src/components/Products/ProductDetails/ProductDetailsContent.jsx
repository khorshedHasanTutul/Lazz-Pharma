import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_DETAILS_GET } from "../../../lib/endpoints";
import { searchItemsConvertObject } from "../../../lib/utilities";
import { BASE_URL, http } from "../../../Service/httpService";
import cartContext from "../../../store/cart-context";
import ProductInfoTabs from "./ProductInfoTabs";

const ProductDetailsContent = ({ productDetails, isGetting }) => {
  const { id } = useParams();
  const [qty, setQty] = useState("");
  const getCartContext = useContext(cartContext);
  const getCartCtxItems = getCartContext.getCartModel.Items;
  const findItem = getCartCtxItems.find((item2) => item2.id === id);
  const [clickedReviewHandler, setClickedReviewHandler] = useState(false);
  const [visibleCartBox, setVisibleCartBox] = useState(false);

  // const [count, setCount] = useState(1);

  const storeCartHandler = (item, e) => {
    e.preventDefault();
    getCartContext.storeCartItems(item);
  };

  const qtyDecHandler = (e) => {
    e.preventDefault();
    let quantity = findItem.quantity - 1;
    getCartContext.updateQuantity(findItem, quantity);
    if (findItem.quantity === 0) {
      setVisibleCartBox(false);
    }
  };

  const qtyIncHandler = (e) => {
    e.preventDefault();
    let quantity = findItem.quantity + 1;
    getCartContext.updateQuantity(findItem, quantity);
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

  const reviewClickedHandler = () => {
    setClickedReviewHandler((prevState) => !prevState);
  };

  useEffect(() => {
    if (findItem) {
      setVisibleCartBox(true);
    } else {
      setVisibleCartBox(false);
    }
  }, [findItem]);

  return (
    <div id="center_column" class="center_column col-xs-12 col-sm-9">
      <div id="product">
        <div class="primary-box row">
          <div class="pb-left-column col-xs-12 col-sm-6">
            <div class="product-image">
              <div class="product-full">
                <div class="product-image">
                  <img
                    src={
                      BASE_URL +
                      "/Content/ImageData/Products/Small/" +
                      productDetails?.image
                    }
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="pb-right-column col-xs-12 col-sm-6">
            <h1 class="product-name">{productDetails?.Nm}</h1>
            <div class="product-comments">
              {/* <div class="product-star">
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
              </div> */}
              <div class="comments-advices">
                {/* <a href>No Review</a> */}
                <a href onClick={reviewClickedHandler}>
                  <i class="fa fa-pencil"></i> write a review
                </a>
              </div>
            </div>
            <div class="product-price-group">
              <span class="price">৳ {productDetails?.MRP}</span>
            </div>
            <div className="generic-name" style={{ lineHeight: "20px" }}>
              <p>
                <span>Generic Name</span> : {productDetails?.GN}
              </p>
            </div>
            <div class="info-orther" style={{ lineHeight: "20px" }}>
              <p>
                <span>Supplier Name</span> : {productDetails?.supplier}
              </p>
            </div>
            {/* <div class="product-desc">
              <p>S3 Meltblown 99% Surgical Mask SGS CE DGDA Certified</p>
            </div> */}
            {!visibleCartBox && (
              <div
                class="add-to-cart d-flex al-center j-center"
                onClick={storeCartHandler.bind(this, productDetails)}
                style={{ width: "50%" }}
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
              <div class="wishlist-btn" style={{ width: "50%" }}>
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
                          onChange={qtyChangeHandler.bind(null, productDetails)}
                          onBlur={blurHandler.bind(null, productDetails)}
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
          </div>
        </div>
        <ProductInfoTabs
          clickedReviewHandler={clickedReviewHandler}
          reviewClickedHandler={reviewClickedHandler}
          productDetails={productDetails}
        />
      </div>
    </div>
  );
};

export default ProductDetailsContent;
