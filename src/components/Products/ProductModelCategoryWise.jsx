import React from "react";

const ProductModelCategoryWise = () => {
  return (
    <div class="product-container">
      <div class="left-block">
        <a href>
          <img
            class="search_product_image"
            src="https://www.lazzpharma.com/Content/ImageData/Products/Small/5b1285ff-52e2-45e3-85a6-44f078a1a5bc71LBdx5uLvL._SL1500_.jpg"
            alt="img"
          />
        </a>
      </div>
      <div class="right-block">
        <h3
          class="product-name"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <a href="https://www.lazzpharma.com/ProductArea/Product/Details?Id=ab16d242-495d-4230-a0b8-1df44c936170">
            LIBIDEX<span> 0</span>
          </a>
        </h3>
        <span>
          <div class="product_des">HAMDARD LABORATORIES (WAQF) LTD</div>
          <div class="product_gen">CAPSULE</div>
          <div class="unit_text">
            <span> Type - Cap</span>
          </div>
          <div class="content_price">
            <span class="price product-price">৳ 32.5</span>
            <span class="price old-price"></span>
          </div>
        </span>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ marginTop: "2%" }}>
          <a href class="btn_add_to_cart" title="Add to Cart">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModelCategoryWise;
