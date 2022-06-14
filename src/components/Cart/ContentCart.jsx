import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlCheckoutRoute } from "../../Service/UrlService";
import authContext from "../../store/auth-context";
import cartContext from "../../store/cart-context";

const ContentCart = ({
  openCart,
  setIsOrderNowPressed,
  closeAuthModalHandler,
}) => {
  const authCtx = useContext(authContext);
  const cartCtx = useContext(cartContext);
  const [qty, setQty] = useState("");
  const history = useHistory();
  const cartCtxModal = cartCtx.getCartModel;

  const cartItemRemoverHandler = (item) => {
    cartCtx.singleItemRemover(item);
  };

  const clearCartHandler = (e) => {
    openCart();
    cartCtx.clearCart();
  };

  const qtyDecHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = findItem.quantity - 1;
    cartCtx.updateQuantity(findItem, quantity);
  };

  const qtyIncHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = findItem.quantity + 1;
    cartCtx.updateQuantity(findItem, quantity);
  };

  const qtyChangeHandler = (item, { target }) => {
    if (target.value === "") {
      setQty(0);
    } else {
      setQty(target.value);
    }
    cartCtx.updateEditableQuantity(item, target.value);
    console.log({ item });
  };

  const blurHandler = (item) => {
    if (qty === 0) {
      // setQtyAlert(true);
      alert("Quantity can't be less than 1.");
      cartCtx.updateEditableQuantity(item, 1);
      setQty(1);
    }
  };

  const orderNowButtonPressedHandler = (evt) => {
    if (cartCtxModal.Items.length === 0) {
      evt.preventDefault();
      alert("Please select at least one product");
      openCart();
      return false;
    }
    if (authCtx.isLoggedIn === false) {
      evt.preventDefault();
      closeAuthModalHandler();
      openCart();
      setIsOrderNowPressed(true);
      return false;
    }
    if (cartCtxModal.Items.length > 0 && authCtx.isLoggedIn === true) {
      history.push(urlCheckoutRoute());
    }
    openCart();
  };

  return (
    <div class="cart-box-view">
      <div class="cart-box-inner-view">
        <div class="cart-header row no_margin">
          <div class="col-xs-8 lazz-cart-item">
            <img
              class="header-bag"
              src="/Contents/assets/image/add-cart.png"
              alt="img"
            />
            <strong class="car-box-title SearchFont">
              <span>{cartCtxModal.TotalItems}</span>
              <span> Item</span>
            </strong>
          </div>
          <div class="col-xs-4" onClick={openCart}>
            {/* <img
              class="pull-right cart-cross-btn"
              src="/Contents/assets/image/x-button.png"
              alt="cross-button"
            /> */}
            <i
              class="fa fa-times pull-right cart-cross-btn"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div class="cart-body text-center">
          <div class="cart-table-wrap">
            <span>Happy Shopping!! </span>
            <table
              style={{ width: "100%", fontSize: "11px" }}
              class="cart-table"
            >
              <tbody>
                {cartCtxModal.Items.map((item) => (
                  <tr>
                    <td>
                      <img
                        src="/Contents/assets/image/cartLogo.jpg"
                        alt="img"
                      />
                    </td>
                    <td className="card-title-product">
                      <a href="/ProductArea/Product/Details/f8ccb3df-f11d-483b-8f8d-b5212e7c23c5">
                        <span class="SearchProductName SearchFont">
                          {item.Nm}
                        </span>
                      </a>
                      <br />
                      {item.Ds > 0 && item.Ds !== null && (
                        <del
                          class="SearchDelPrice"
                          style={{ fontSize: "14px", marginRight: "5px" }}
                        >
                          ৳ {item.MRP}
                        </del>
                      )}

                      <strong class="SearchPrice" style={{ fontSize: "15px" }}>
                        ৳ {(item.MRP - item.Ds).toFixed(2)}
                      </strong>
                    </td>
                    <td
                      className="cart-inc-dsc"
                      style={{
                        fontSize: "13px",
                        verticalAlign: "middle",
                        padding: "8px 0",
                      }}
                    >
                      <div class="attributes input-group bootstrap-touchspin">
                        <div class="qty-holder" style={{ width: "90px" }}>
                          <a
                            href
                            class="qty-dec-btn"
                            title="Dec"
                            style={{ width: "22px" }}
                            onClick={qtyDecHandler.bind(this, item)}
                          >
                            -
                          </a>
                          <input
                            style={{ width: "22px !important" }}
                            type="text"
                            name="product_qty"
                            id="product_qty"
                            class="qty-input"
                            value={item.quantity}
                            onChange={qtyChangeHandler.bind(null, item)}
                            onBlur={blurHandler.bind(null, item)}
                          />
                          <a
                            href
                            class="qty-inc-btn"
                            title="Inc"
                            style={{ width: "22px" }}
                            onClick={qtyIncHandler.bind(this, item)}
                          >
                            +
                          </a>
                        </div>
                      </div>
                    </td>
                    {item.Ds > 0 && item.Ds !== null && (
                      <td
                        className="dis-new-con"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {item.Ds > 0 && item.Ds !== null && (
                          <>
                            <span class="SearchFont SearchDelPrice">
                              <aside>৳</aside>
                            </span>
                            <del>{item.MRP * item.quantity}</del>
                            <br />
                            <span class="SearchFont SearchPrice">
                              {((item.MRP - item.Ds) * item.quantity).toFixed(
                                2
                              )}
                            </span>
                          </>
                        )}
                      </td>
                    )}
                    {item.Ds === 0 && (
                      <td style={{ verticalAlign: "middle" }}>
                        <span class="SearchFont SearchPrice">
                          {(item.MRP * item.quantity).toFixed(2)}
                        </span>
                      </td>
                    )}

                    <td>
                      <a href onClick={cartItemRemoverHandler.bind(null, item)}>
                        <i class="fa fa-times text-danger"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div class="cart-footer">
          <button
            id="checkout-button"
            style={{ borderRadius: "6px 0 0 6px" }}
            class="btn btn-success pull-left"
            onClick={orderNowButtonPressedHandler}
          >
            Order Now
          </button>
          <span
            style={{ borderRadius: "0 6px 6px 0" }}
            class="btn btn-info cart-amount-span"
          >
            ৳ <span>{cartCtxModal.TotalAmmount.toFixed(2)}</span>
          </span>
          <a
            href
            style={{ color: "#ddd", verticalAlign: "middle" }}
            onClick={clearCartHandler}
          >
            &nbsp;&nbsp;&nbsp; <span></span>
            <a id="empty_cart_button" href>
              <button
                id="checkout-button"
                style={{
                  color: "#ffffff",
                  borderRadius: "6px",
                  marginRight: "15px",
                }}
                class="btn btn-success pull-right"
              >
                Clear Cart
              </button>
            </a>
          </a>
        </div> */}
        <div className="product_items__count__container">
          <div className="cmn-class-items-calc total__items">
            <p>Total Items</p>
            <span>{cartCtxModal.TotalItems}</span>
          </div>
          <div className="cmn-class-items-calc total__ammount">
            <p>Total Ammount</p>
            <span>{cartCtxModal.TotalAmmount.toFixed(2)}tk</span>
          </div>
        </div>
        <div class="cart-footer">
          {/* <div class="card-footer-inner">
              <Link to={urlCheckoutRoute()}>
                <button class="cart-cmn-btn" onClick={orderNowHandler}>
                  Order Now
                </button>
              </Link>

              <span class="cart-cmn-btn cart-cmn-btn2">
                ৳ <span>{getCartContextModel.TotalAmmount.toFixed(2)}</span>
              </span>
            </div>

            <a href class="block-btn-card" onClick={clearCartHandler}>
              <button class="cart-cmn-btn">Clear Cart</button>
            </a> */}

          <div
            className="cart-footer__orderNow"
            onClick={orderNowButtonPressedHandler}
          >
            <a href>
              <p>
                <span>Order Now</span>
              </p>
            </a>
          </div>
          <div
            className="cart-footer__orderNow"
            style={{ background: "#E62D3F" }}
            onClick={clearCartHandler}
          >
            <p>Clear Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCart;
