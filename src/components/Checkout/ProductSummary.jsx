import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { urlHomeRoute } from "../../Service/UrlService";
import addressContext from "../../store/address-context";
import cartContext from "../../store/cart-context";

const ProductSummary = ({
  proceedToAddressHandler,
  AddressActiveHandler,
  addresses,
}) => {
  const fileRef = useRef();
  let history = useHistory();
  const cartCtx = useContext(cartContext);
  const ctxAddress = useContext(addressContext);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const getCtxAddressActiveType = ctxAddress.getActiveType;

  const findActiveAddress = addresses.find(
    (item) => item.Type === getCtxAddressActiveType.type
  );
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
  const setSelectedFileHandler = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const fileUploaderHandler = () => {
    fileRef.current.click();
  };
  const imageRemoverhandler = () => {
    setPreview("");
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

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
              <th>Amount</th>
              <th class="action">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartCtxModal.Items.map((item) => (
              <tr>
                <td class="cart_product">
                  <a href>
                    <img
                      src="/Contents/assets/image/pditals.jpg"
                      alt="Product"
                    />
                  </a>
                </td>
                <td class="cart_description">
                  <p class="product-name">
                    <a href>{item.Nm}</a>
                  </p>
                  <small class="cart_ref">Type : {item.category}</small>
                  <br />
                  <small class="cart_ref">Strength: {item.strength} </small>
                  <br />
                  <small>Company: {item.suplier} </small>
                </td>
                <td class="price" style={{ textAlign: "center", width: "15%" }}>
                  {item.Ds > 0 && item.Ds !== null ? (
                    <span>
                      ৳ {(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
                    </span>
                  ) : (
                    <span>৳ {item.MRP}</span>
                  )}
                </td>
                <td class="qty">
                  <div class="pro_qty">
                    <a href onClick={qtyIncHandler.bind(this, item)}>
                      <i class="fa fa-caret-up"></i>
                    </a>
                    <input
                      class="form-control input-sm"
                      type="text"
                      value={item.quantity}
                      onChange={qtyChangeHandler.bind(null, item)}
                      onBlur={blurHandler.bind(null, item)}
                    />

                    <a href onClick={qtyDecHandler.bind(this, item)}>
                      <i class="fa fa-caret-down"></i>
                    </a>
                  </div>
                </td>
                <td class="price" style={{ textAlign: "center", width: "18%" }}>
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

        {findActiveAddress !== undefined && findActiveAddress?.Name !== null && (
          <div class="shaping-address-saveing-row">
            <div class="shapping-address-inner-content">
              <div class="location-ad-icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div class="saving-address-content">
                <small>{findActiveAddress && findActiveAddress?.Name}</small>
                <small>{findActiveAddress && findActiveAddress?.Mobile}</small>
                <span>
                  <aside>{findActiveAddress && findActiveAddress?.Type}</aside>
                </span>
                <span>{findActiveAddress && findActiveAddress?.Email}</span>
                &nbsp;
                <span>
                  {findActiveAddress &&
                    findActiveAddress?.Province +
                      "-" +
                      findActiveAddress?.District +
                      "-" +
                      findActiveAddress?.Upazila +
                      "-" +
                      findActiveAddress?.Remarks}
                </span>
              </div>
            </div>
            <div class="saving-ad-btn" onClick={AddressActiveHandler}>
              <button>Change</button>
            </div>
          </div>
        )}
        {/* <div>
          <p class="OrderNotice" style={{ marginTop: "50px" }}>
            *** সকাল ১০ টা থেকে ৭ টার মধ্যে অর্ডার করলে ২৪ থেকে ৪৮ ঘন্টার মধ্যে
            ডেলিভারি। <br />
            ***শুক্রবারে সকল ডেলিভারি কার্যক্রম বন্ধ থাকে।
          </p>
        </div> */}
        <div className="upload-Handler">
          {preview && (
            <div className="image_preview_container">
              <div className="image_previewer">
                <div className="image_prev">
                  <img src={preview} alt="img" srcset="" />
                  <p
                    style={{
                      color: "red",
                      textAlign: "center",
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                    onClick={imageRemoverhandler}
                  >
                    Remove
                  </p>
                </div>
              </div>

              <div
                className="plus_icon_container"
                onClick={fileUploaderHandler}
              >
                <p className="plus_icon">+</p>
              </div>
            </div>
          )}
          <div className="prescription_order_section">
            <div className="file_uploader" style={{ maxWidth: "33.33%" }}>
              <label htmlFor="">Upload Prescription</label>
              <input
                type="file"
                name=""
                id=""
                ref={fileRef}
                onChange={setSelectedFileHandler}
              />
            </div>
            {/* <div className="prescription_order_section__note">
            <label htmlFor="">Note</label>
            <input type="text" onChange={noteOnChangeHandler} />
          </div> */}
            {/* <div
            className="prescription_order_section__order-button"
            onClick={submittedButtonHandler}
          >
            Save & Order
          </div> */}
          </div>
        </div>
        <div className="auto-order-container">
          <p>Auto Order</p>
          <div className="order-group">
            <input
              type="checkbox"
              name="select_order"
              id=""
              style={{
                width: "auto",
                display: "inline",
                position: "relative",
                outline: "currentcolor none 0px",
              }}
            />
            <p>Auto Order after 28 days</p>
          </div>
        </div>

        <div class="row" style={{ margin: "auto" }}>
          <div class="cart_navigation">
            <Link class="prev-btn" to={urlHomeRoute()}>
              Continue shopping
            </Link>
            <a onClick={proceedToAddressHandler} class="next-btn" href>
              Proceed to checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
