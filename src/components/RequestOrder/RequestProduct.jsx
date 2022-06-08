import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  POST_PRESCRIPTION,
  POST_REQUEST_ORDER,
  REMOVE_PRESCRIPTION,
} from "../../lib/endpoints";
import { sumAProperty } from "../../lib/utilities";
import { http } from "../../Service/httpService";
import { urlTermsConditionRoute } from "../../Service/UrlService";
import Suspense from "../Suspense/Suspense";
import PopAlert from "../utilities/alert/PopAlert";
import RequestOrderTable from "./requestOrdertable/RequestOrderTable";
import RequestProductAlert from "./RequestProductAlert/RequestProductAlert";
import RequestProductForm from "./RequestProductForm/RequestProductForm";

const RequestProduct = () => {
  const fileRef = useRef();
  const [files, setFiles] = useState([]);
  const inputFieldsRef = useRef();
  const inputRefFocus = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const [product, setProduct] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [imageIsInvalid, setImageIsInvalid] = useState(false);
  const [description, setDescription] = useState("");
  const [isGetting, setIsGetting] = useState(false);

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
  const descriptionChangeHandler = ({ target }) => {
    setDescription(target.value);
  };
  const removeButtonHandler = () => {
    setOpenAlert((prevState) => !prevState);
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
    setSelectedFile(file);

    postPrescription(file);

    target.value = "";
  };

  const imageRemoverhandler = (file) => {
    http.post({
      url: REMOVE_PRESCRIPTION + file.id,
      before: () => {},
      successed: () => {
        setPreview((prevState) =>
          prevState.filter((item) => item.id !== file.id)
        );
      },
      failed: () => {},
      always: () => {},
    });
  };

  const postPrescription = useCallback((file) => {
    const objectUrl = URL.createObjectURL(file);

    http.file({
      url: POST_PRESCRIPTION,
      payload: {
        Img: file,
        From: "Upload Prescription",
        Description: "",
        activityId: "00000000-0000-0000-0000-000000000000",
      },
      before: () => {
        setIsGetting(true);
      },
      successed: (res) => {
        setFiles((prevState) => [...prevState, { image: file, id: res.Id }]);
        setPreview((prevState) => [
          ...prevState,
          { objectUrl: objectUrl, id: res.Id },
        ]);
        setIsGetting(false);
      },
      failed: () => {},
      always: () => {
        setIsGetting(false);
      },
      map: (res) => {
        return res;
      },
    });
  }, []);

  const postOrder = useCallback((files, products, description) => {
    http.post({
      url: POST_REQUEST_ORDER,
      payload: {
        TotalItem: products.length,
        TotalQuantity: sumAProperty(products, "quantity"),
        Items: products.map((product, i) => ({
          Name: product.name,
          Strength: product.strength,
          Quantity: product.quantity,
          Position: i + 1,
        })),
        ImgId: files.map((file) => file.id),
        ActivityId: "00000000-0000-0000-0000-000000000000",
        Remarks: description,
      },
      before: () => {},
      successed: (res) => {
        setOpenAlert(true);
        setDescription("");
        setProduct([]);
        setFiles([]);
      },
      failed: () => {},
      always: () => {},
    });
  }, []);

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
      postOrder(files, product, description);
    }
  };

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
                      onClick={imageRemoverhandler.bind(null, file)}
                    >
                      Remove
                    </p>
                  </div>
                ))}
              </div>
            </>
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
            {imageIsInvalid && (
              <div class="alert alert-error">
                Only JPG JPEG PNG format acceptable.
              </div>
            )}
          </div>
          {/* <div className="prescription_order_section__order-button">
            Save & Order
          </div> */}
        </div>
        {isGetting && <Suspense />}
      </div>
      <div className="prescription_description">
        <label htmlFor="description">Description</label>
        <textarea
          name="pres_description"
          id=""
          cols="5"
          rows="5"
          style={{ height: "auto" }}
          value={description}
          onChange={descriptionChangeHandler}
        ></textarea>
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
      {openAlert && (
        <RequestProductAlert removeButtonHandler={removeButtonHandler} />
      )}
    </div>
  );
};

export default RequestProduct;
