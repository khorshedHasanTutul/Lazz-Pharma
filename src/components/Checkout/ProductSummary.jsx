import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import cartContext from "../../store/cart-context";

const ProductSummary = ({proceedToAddressHandler}) => {
  let history = useHistory();
  const cartCtx = useContext(cartContext);
  const [qty, setQty] = useState("");
  const cartCtxModal = cartCtx.getCartModel;

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

  const cartItemRemoverHandler = (item) => {
    cartCtx.singleItemRemover(item);
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
      alert("Quantity can't be less than 1.");
      cartCtx.updateEditableQuantity(item, 1);
      setQty(1);
    }
  };

  useEffect(() => {
    if (cartCtxModal.Items.length === 0) {
      history.push("/");
    }
  }, [cartCtxModal.Items.length, history]);

  return (
    <div class="tab_content">
      <div class="heading-counter warning">
        Your shopping cart contains:
        <span> {cartCtxModal.TotalItems} Product</span>
      </div>

      <div class="order-detail-content">
        <table class="table table-bordered table-responsive cart_summary">
          <thead>
            <tr>
              <th class="cart_product">Product</th>
              <th>Description</th>
              <th>Unit price</th>
              <th>Qty</th>
              <th>Total</th>
              <th class="action"></th>
            </tr>
          </thead>
          <tbody>
            {cartCtxModal.Items.map((item) => (
              <tr>
                <td class="cart_product">
                  <a href>
                    <img
                      src="CheckoutLazz%20Pharma%20Limited_files/med.jpg"
                      alt="Product"
                    />
                  </a>
                </td>
                <td class="cart_description">
                  <p class="product-name">
                    <a href>{item.name}</a>
                  </p>
                  <small class="cart_ref">Type : {item.category}</small>
                  <br />
                  <small class="cart_ref">Strength: {item.strength} </small>
                  <br />
                  <small>Company: {item.suplier} </small>
                </td>
                <td class="price" style={{ textAlign: "center" }}>
                  {item.Ds > 0 && item.Ds !== null ? (
                    <span>
                      ৳ {(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
                    </span>
                  ) : (
                    <span>৳ {item.MRP}</span>
                  )}
                </td>
                <td class="qty">
                  <input
                    class="form-control input-sm"
                    type="text"
                    value={item.quantity}
                    onChange={qtyChangeHandler.bind(null, item)}
                    onBlur={blurHandler.bind(null, item)}
                  />
                  <a href onClick={qtyIncHandler.bind(this, item)}>
                    <i class="fa fa-caret-up"></i>
                  </a>
                  <a href onClick={qtyDecHandler.bind(this, item)}>
                    <i class="fa fa-caret-down"></i>
                  </a>
                </td>
                <td class="price" style={{ textAlign: "center" }}>
                  {item.Ds === 0 && item.Ds !== null && (
                    <span>৳ {item.MRP * item.quantity.toFixed(2)}</span>
                  )}
                  {item.Ds > 0 && (
                    <span>
                      ৳
                      {(
                        (item.MRP - (item.MRP * item.Ds) / 100) *
                        item.quantity
                      ).toFixed(2)}
                    </span>
                  )}
                </td>
                <td
                  class="action"
                  onClick={cartItemRemoverHandler.bind(null, item)}
                >
                  <a
                    className="icon-remove"
                    href
                    style={{ fontSize: "1.5rem", color: "red" }}
                  >
                    <i class="fa fa-remove" aria-hidden="true"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            {/* <tr>
              <td colspan="2" rowspan="2"></td>
              <td colspan="3">Total Amount (tax incl.)</td>
              <td colspan="2">
                ৳ <span>3, 430.09</span>
              </td>
            </tr>
            <tr>
              <td colspan="3">Delivery Charge</td>
              <td colspan="2">
                ৳ <span>0</span>
              </td>
            </tr> */}
            <tr>
              <td colspan="4">
                <strong>Total</strong>
              </td>
              <td colspan="2" style={{ textAlign: "center" }}>
                <strong>
                  ৳ <span>{cartCtxModal.TotalAmmount.toFixed(2)}</span>
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>
        {/* <div class="row" style={{ margin: "auto" }}>
          <div class="col-md-6 box-border">
            <label class="Method_Selector">
              <input type="radio" name="radio_5" id="radio_button_7" />
              Inside Dhaka
            </label>
          </div>
          <div class="col-md-6 box-border">
            <label class="Method_Selector">
              <input type="radio" name="radio_5" id="radio_button_8" />
              Outside Dhaka
            </label>
          </div>
        </div> */}
        <div class="shaping-address-saveing-row">
          <div class=" shapping-address-inner-content">
            <div class="location-ad-icon" style={{ fontSize: "3rem" }}>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div class="saving-address-content">
              <small>Khorshed Hasan Tutul</small>
              <small>01704247162</small>
              <span>
                <aside>Office</aside>
              </span>
              <span>jakma@outlook.com</span>
              <span>Dhaka-Dhaka-Mirpur-Mirpur Block C Road 12</span>
            </div>
          </div>
          <div class="saving-ad-btn">
            <button>Change</button>
          </div>
        </div>
        {/* <div>
          <p class="OrderNotice" style={{ marginTop: "50px" }}>
            *** সকাল ১০ টা থেকে ৭ টার মধ্যে অর্ডার করলে ২৪ থেকে ৪৮ ঘন্টার মধ্যে
            ডেলিভারি। <br />
            ***শুক্রবারে সকল ডেলিভারি কার্যক্রম বন্ধ থাকে।
          </p>
        </div> */}
        <div class="row" style={{ margin: "auto" }}>
          <div class="cart_navigation">
            <a class="prev-btn" href="https://www.lazzpharma.com/">
              Continue shopping
            </a>
            <a onClick={proceedToAddressHandler} class="next-btn" href>Proceed to checkout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
