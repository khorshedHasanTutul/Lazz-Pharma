import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { urlTermsConditionRoute } from "../../Service/UrlService";
import PopAlert from "../utilities/alert/PopAlert";
import RequestOrderTable from "./requestOrdertable/RequestOrderTable";
import RequestProductAlert from "./RequestProductAlert/RequestProductAlert";
import RequestProductForm from "./RequestProductForm/RequestProductForm";

const RequestProduct = () => {
  const fileRef = useRef();
  const inputFieldsRef = useRef();
  const inputRefFocus = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const [product, setProduct] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [openAlert , setOpenAlert] = useState(false);

  const checkedHandler = () => {
    setIsChecked((prevState) => !prevState);
  };

  const addToProductHandler = (product) => {
    setProduct((prevState) => [...prevState, product]);
  };

  const productRemoverHandler = (product_id) => {
    setProduct(product.filter((item) => item.id !== product_id));
  };
  const fileUploaderHandler = () => {
    fileRef.current.click();
  };
  const removeButtonHandler=()=>{
    setOpenAlert(prevState => !prevState);
  }
  const setSelectedFileHandler = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const imageRemoverhandler = () => {
    setPreview("");
  };

  const submitButtonHandler = () => {
    !isChecked &&
      alert("Please agree with out terms and condition to request the order");
    if (isChecked && product.length === 0) {
      console.log(inputFieldsRef.current);
      alert("Please add product names and quantity to request");
      inputFieldsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
      console.log(inputFieldsRef.current.children[0]);
    }

    if (isChecked && product.length > 0) {
      //api request goes here
      setOpenAlert(true)
    }
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

  return (
    <div class="request_product">
      <div class="notice">
        <h4 class="SearchFont SearchPrice">
          Note: Product availability &amp; price will be confirmed over
          Phone/E-mail/Whatsapp. Delivery Charge within Dhaka City 80TK &amp;
          outside Dhaka 120TK.
        </h4>
      </div>

      <RequestProductForm
        addToProduct={addToProductHandler}
        ref={inputFieldsRef}
        inputRefFocus={inputRefFocus}
      />
      <RequestOrderTable
        product={product}
        productRemoverHandler={productRemoverHandler}
      />

      <div className="prscription_card" style={{ boxShadow: "none" }}>
        <div className="image_preview_container">
          {preview && (
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
              {/* <div className="image_prev">
              <img
                src="/Contents/assets/image/banner2.jpg"
                alt="img"
                srcset=""
              />
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Remove
              </p>
            </div>
            <div className="image_prev">
              <img
                src="/Contents/assets/image/banner2.jpg"
                alt="img"
                srcset=""
              />
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Remove
              </p>
            </div> */}
            </div>
          )}

          <div className="plus_icon_container" onClick={fileUploaderHandler}>
            <p className="plus_icon">+</p>
          </div>
        </div>

        <div className="prescription_order_section">
          <div className="file_uploader">
            <label htmlFor="">Upload Prescription</label>
            <input
              type="file"
              name=""
              id=""
              ref={fileRef}
              onChange={setSelectedFileHandler}
            />
          </div>
          {/* <div className="prescription_order_section__order-button">
            Save & Order
          </div> */}
        </div>
      </div>
      <div className="prescription_description">
        <label htmlFor="description">Description</label>
        <textarea name="pres_description" id="" cols="5" rows="5"></textarea>
      </div>

      <div
        class="terms-condition-checked"
        style={{ textAlign: "center", margin: "15px" }}
      >
        <label>
          <input type="checkbox" onClick={checkedHandler} /> I have read and
          agreed to the
          <Link
            to={urlTermsConditionRoute()}
            style={{ color: "red", marginLeft: "10px" }}
          >
            Terms and conditions
          </Link>
        </label>
      </div>
      <div class="text-center formFooter FooterFormMenu">
        <button
          class="btn btn-success btn-default btn-round"
          type="button"
          style={{ marginBottom: "15px" }}
          onClick={submitButtonHandler}
        >
          <span class=""></span> Send Product Request
        </button>
      </div>
      {
        openAlert && (
          <RequestProductAlert removeButtonHandler={removeButtonHandler}/>
        )
      }
    </div>
  );
};

export default RequestProduct;
