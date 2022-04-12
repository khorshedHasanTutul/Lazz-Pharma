import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlCheckoutRoute } from "../../Service/UrlService";
import cartContext from "../../store/cart-context";

const ContentCart = ({ openCart }) => {
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
  };

  const blurHandler = (item) => {
    if (qty === 0) {
      // setQtyAlert(true);
      alert("Quantity can't be less than 1.");
      cartCtx.updateEditableQuantity(item, 1);
      setQty(1);
    }
  };

  const orderNowButtonPressedHandler = () => {
    history.push(urlCheckoutRoute());
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
            <img
              class="pull-right cart-cross-btn"
              src="/Contents/assets/image/x-button.png"
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
                          {item.name}
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
                        ৳ {(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
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
                              {(
                                (item.MRP - (item.MRP * item.Ds) / 100) *
                                item.quantity
                              ).toFixed(2)}
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
        <div class="cart-footer">
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
        </div>
      </div>
    </div>
  );
};

export default ContentCart;
