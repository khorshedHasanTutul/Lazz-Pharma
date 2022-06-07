import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GET_CURRENT_INFO, POST_PRESCRIPTION } from "../../lib/endpoints";
import { http } from "../../Service/httpService";
import { urlHomeRoute } from "../../Service/UrlService";
import addressContext from "../../store/address-context";
import cartContext from "../../store/cart-context";

const ProductSummary = ({
  proceedToAddressHandler,
  AddressActiveHandler,
  addresses,
  setPrescriptionsHis,
}) => {
  const fileRef = useRef();
  let history = useHistory();
  const cartCtx = useContext(cartContext);
  const ctxAddress = useContext(addressContext);
  const cartCtxModal = cartCtx.getCartModel;
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState([]);
  const [currentInfo, setCurrentInfo] = useState([]);
  const getCtxAddressActiveType = ctxAddress.getActiveType;
  const products = [];
  cartCtxModal.Items.map((item) => products.push(item.id));
  const [files, setFiles] = useState([]);
  const [imageIsInvalid, setImageIsInvalid] = useState(false);
  const findActiveAddress = addresses.find(
    (item) => item.Type === getCtxAddressActiveType.type
  );
  const [checked, setIsChecked] = useState(false);
  const [qty, setQty] = useState("");
  // cartCtx.updateProductsPrice(currentInfo);

  const qtyDecHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = findItem.quantity - 1;
    cartCtx.updateQuantity(findItem, quantity);
  };
  const clickedAutoOrderHandler = () => {
    setIsChecked((prevState) => !prevState);
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

  const proceedAddressHandler = () => {
    proceedToAddressHandler();
  };

  const setSelectedFileHandler = ({ target }) => {
    const file = target.files[0];
    if (!file) return;
    const allowedExtensions = ["jpg", "jpeg", "png", "pdf", "doc", "docx"];

    const subs = file.name.toLowerCase().split(".");

    if (!allowedExtensions.includes(subs[subs.length - 1])) {
      setImageIsInvalid(true);
      target.value = "";
      return false;
    } else setImageIsInvalid(false);

    if (!target.files || target.files.length === 0) {
      setSelectedFile();
      return;
    }
    setSelectedFile(target.files[0]);
    const objectUrl = URL.createObjectURL(target.files[0]);
    setPreview((prevState) => [...prevState, { objectUrl: objectUrl }]);
    postPrescription(file);
    target.value = "";
  };

  const fileUploaderHandler = () => {
    fileRef.current.click();
  };
  const imageRemoverhandler = () => {
    setPreview("");
  };

  const postPrescription = useCallback((file) => {
    http.file({
      url: POST_PRESCRIPTION,
      payload: {
        Img: file,
        From: "Upload Prescription",
        Description: "",
        activityId: "00000000-0000-0000-0000-000000000000",
      },
      before: () => {},
      successed: (res) => {
        setFiles((prevState) => [...prevState, { image: file, id: res.Id }]);
      },
      failed: () => {},
      always: () => {},
      map: (res) => {
        return res;
      },
    });
  }, []);

  useEffect(() => {
    if (cartCtxModal.Items.length === 0) {
      history.push("/");
    }
  }, [cartCtxModal.Items.length, history]);

  const getCurrentInfo = () => {
    http.post({
      url: GET_CURRENT_INFO,
      payload: {
        productIds: products,
      },
      before: () => {},
      successed: (res) => {
        setCurrentInfo(res.Data);
        cartCtx.updateProductsPrice(res.Data);
      },
      failed: () => {},
      always: () => {},
    });
  };

  useEffect(() => {
    getCurrentInfo();
  }, []);
  useEffect(() => {
    setPrescriptionsHis({
      id: files.map((item) => item.id),
      check: checked,
    });
  }, [checked, files, setPrescriptionsHis]);

  console.log({currentInfo})

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
            {cartCtxModal.Items.map((item, index) => (
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
                  {currentInfo[index]?.Discount > 0 &&
                  currentInfo[index]?.Discount !== null ? (
                    <span>
                      ৳{" "}
                      {(
                        currentInfo[index]?.UnitSalePrice -
                        (currentInfo[index]?.UnitSalePrice *
                          currentInfo[index]?.Discount) /
                          100
                      ).toFixed(2)}
                    </span>
                  ) : (
                    <span>৳ {currentInfo[index]?.UnitSalePrice}</span>
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
                  {currentInfo[index]?.Discount === 0 &&
                    currentInfo[index]?.Discount !== null && (
                      <span>
                        ৳{" "}
                        {(
                          currentInfo[index]?.UnitSalePrice * item.quantity
                        ).toFixed(2)}
                      </span>
                    )}
                  {currentInfo[index]?.Discount > 0 && (
                    <span>
                      ৳
                      {(
                        (currentInfo[index]?.UnitSalePrice -
                          (currentInfo[index]?.UnitSalePrice *
                            currentInfo[index]?.Discount) /
                            100) *
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

        <div className="upload-Handler">
          {files.length > 0 && (
            <div className="image_preview_container">
              {files?.length > 0 && (
                <>
                  <div className="image_previewer">
                    {/* single item */}
                    {preview.map((file) => (
                      <div className="image_prev">
                        <img src={file.objectUrl} alt="img" srcset="" />
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
                    ))}
                  </div>
                </>
              )}

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
              onClick={clickedAutoOrderHandler}
            />
            <p>Auto Order after 28 days</p>
          </div>
        </div>

        <div class="row" style={{ margin: "auto" }}>
          <div class="cart_navigation">
            <Link class="prev-btn" to={urlHomeRoute()}>
              Continue shopping
            </Link>
            <a onClick={proceedAddressHandler} class="next-btn" href>
              Proceed to checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
