import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlProductDetails } from "../../Service/UrlService";
import cartContext from "../../store/cart-context";

const ProductsInfoModel = ({ item }) => {
  const [qty, setQty] = useState("");
  const [visibleCartBox, setVisibleCartBox] = useState(false);
  const cartCtx = useContext(cartContext);
  const cartCtxModal = cartCtx.getCartModel;
  const findItem = cartCtxModal.Items.find((item2) => item2.id === item.id);

  const addToCartHandler = (item, e) => {
    e.preventDefault();
    if (cartCtxModal.Items.find((itemInner) => itemInner.id === item.id)) {
      alert("Product already exist in cart.");
    } else {
      cartCtx.storeCartItems(item);
    }
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
      alert("Quantity Can't be less than 1");
      cartCtx.updateEditableQuantity(item, 1);
      setQty(1);
    }
  };

  const qtyDecHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = (findItem.quantity) - 1;
    cartCtx.updateQuantity(findItem, parseInt(quantity));
  };

  const qtyIncHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = parseInt(findItem.quantity) + 1;
    cartCtx.updateQuantity(findItem, parseInt(quantity));
  };

  useEffect(() => {
    if (findItem) {
      setVisibleCartBox(true);
    } else {
      setVisibleCartBox(false);
    }
  }, [findItem]);

  return (
    <li class="col-sm-2 col-md-2 col-xs-6 main_dispaly_container">
      <div class="main_dispaly">
        <div class="left-block">
          <Link to={urlProductDetails() + item.id}>
            <img
              class="img-responsive"
              alt="product"
              src={
                "https://www.lazzpharma.com/Content/ImageData/Products/Small/" +
                item.imagePath
              }
              style={{ maxHeight: "205px" }}
            />
          </Link>
        </div>
        {item.Ds !== null && item.Ds > 0 && (
          <div class="group-price">
            <span class="product-new">{item.Ds.toFixed(2)}% </span>
          </div>
        )}

        <div class="right-block">
          <h5 class="product-name" title={item.name}>
            <Link to={urlProductDetails() + item.id}>{item.name}</Link>
          </h5>
          {item.Ds !== null && item.Ds > 0 && (
            <div class="content_price">
              <span class="price product-price">
                ৳ {(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
              </span>
              <span class="price product-price">
                <del class="cross_price">৳ {item.MRP}</del>
              </span>
            </div>
          )}
          {item.Ds === 0 && (
            <div class="content_price">
              <span class="price product-price">
                ৳ {(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
              </span>
            </div>
          )}
        </div>
       
          <div style={{ textAlign: "center" }}>
            {!visibleCartBox && (
              <div class="btn_cart" onClick={addToCartHandler.bind(this, item)}>
                <a class="btn_add_to_cart" title="Add to Cart" href>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"></path>
                  </svg>
                  Add to Cart
                </a>
              </div>
            )}
            {visibleCartBox && (
              <div className="btn_cart">
                <div class="input-group-buttons product_qty">
                  <span
                    class="input-group-buttons"
                    onClick={qtyDecHandler.bind(this, findItem)}
                  >
                    <button class="btn btn-white btn-minus" type="button">
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                  </span>
                  <input
                    type="text"
                    class="form-control no-padding add-color text-center height-25"
                    maxlength="5"
                    value={findItem?.quantity}
                    onChange={qtyChangeHandler.bind(null, item)}
                    onBlur={blurHandler.bind(null, item)}
                  />
                  <span
                    class="input-group-buttons"
                    onClick={qtyIncHandler.bind(this, findItem)}
                  >
                    <button class="btn btn-red btn-plus" type="button">
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </div>
            )}
          </div>
        
      </div>
    </li>
  );
};

export default ProductsInfoModel;
