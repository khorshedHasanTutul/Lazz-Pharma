import React, { useRef, useState } from "react";

const ProductInfoTabs = () => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const toggleHandler = () => {};

  return (
    <div class="product-tab">
      <ul class="nav-tab" ref={ref}>
        <li>
          <a href data-toggle="tab" onClick={toggleHandler}>
            Product Details
          </a>
        </li>
        <li>
          <a href data-toggle="tab" onClick={toggleHandler}>
            Information
          </a>
        </li>
        <li>
          <a href data-toggle="tab" onClick={toggleHandler}>
            Reviews
          </a>
        </li>
      </ul>
      <div class="tab-container" style={{ position: "relative" }}>
        {!isActive && (
          <div class="tab-panel" style={{ position: "inherit" }}>
            <p>N/A</p>
          </div>
        )}
        {isActive && (
          <div class="tab-panel ">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td width="200">Company</td>
                  <td>ZUELLIG PHARMA</td>
                </tr>
                <tr>
                  <td>Generic Name</td>
                  <td> DEVICE </td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td> DEVICE </td>
                </tr>
                <tr>
                  <td>Strength</td>
                  <td> . </td>
                </tr>
                <tr>
                  <td>Unit Type</td>
                  <td> PCS </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* <div class="product-comments-block-tab">
          <div class="new_comment_container">
            <div class="row">
              <div class="col-md-8">
                <input
                  data-binding="Text"
                  class="input form-control"
                  placeholder="Post Your Review Here"
                  type="text"
                  data-type="string"
                  max=""
                  min=""
                />
              </div>
              <div class="col-md-4">
                <button
                  class="button form-control"
                  type="submit"
                  style={{ padding: "0px !important" }}
                >
                  {" "}
                  Post
                </button>
              </div>
            </div>
          </div>
          <p> </p>
          <div class="comment_container"></div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductInfoTabs;
