import React from "react";
import ProductDetailsContent from "../Products/ProductDetails/ProductDetailsContent";
import ProductDetailsHeader from "../Products/ProductDetails/ProductDetailsHeader";

const ProductDetails = () => {
  

  return (
    <div id="body_content">
      <div class="columns-container">
        <div id="columns" class="container">
          <ProductDetailsHeader />
          <ProductDetailsContent />
          <div id="left_column" class="column col-xs-12 col-sm-3">
            <div class="block left-module">
              <p class="title_block">RELATED PRODUCTS</p>
              <div class="block_content">
                <ul class="products-block best-sell">
                  <li>
                    <div class="products-block-left">
                      <a href>
                        <img
                          src="Lazz%20Pharma%20Limited_files/product-100x122.jpg"
                          alt="SPECIAL PRODUCTS"
                        />
                      </a>
                    </div>
                    <div class="products-block-right">
                      <p class="product-name">
                        <a href>NAGANO SLEEPING MASK 30G</a>
                      </p>
                      <p class="product-Category">
                        <small>Type : Toiletries</small>
                      </p>
                      <p class="product-price">৳ 1, 460.00</p>
                      <div class="product-star">
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="products-block-left">
                      <a href>
                        <img
                          src="Lazz%20Pharma%20Limited_files/product-100x122.jpg"
                          alt="SPECIAL PRODUCTS"
                        />
                      </a>
                    </div>
                    <div class="products-block-right">
                      <p class="product-name">
                        <a href>FACE MASK (S3) 1</a>
                      </p>
                      <p class="product-Category">
                        <small>Type : SURGICAL</small>
                      </p>
                      <p class="product-price">৳ 8.00</p>
                      <div class="product-star">
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="products-block-left">
                      <a href>
                        <img
                          src="Lazz%20Pharma%20Limited_files/f4a4e79f-39f7-41e7-bfff-2b43d484f082IMG_20210518_203441_002.jpg"
                          alt="SPECIAL PRODUCTS"
                        />
                      </a>
                    </div>
                    <div class="products-block-right">
                      <p class="product-name">
                        <a href>FACE MASK (S3) 50 PCS BOX</a>
                      </p>
                      <p class="product-Category">
                        <small>Type : SURGICAL</small>
                      </p>
                      <p class="product-price">৳ 8.00</p>
                      <div class="product-star">
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="products-block-left">
                      <a href>
                        <img
                          src="Lazz%20Pharma%20Limited_files/product-100x122.jpg"
                          alt="SPECIAL PRODUCTS"
                        />
                      </a>
                    </div>
                    <div class="products-block-right">
                      <p class="product-name">
                        <a href>GARNIER SERUM MASK 1 PCS</a>
                      </p>
                      <p class="product-Category">
                        <small>Type : Toiletries</small>
                      </p>
                      <p class="product-price">৳ 135.00</p>
                      <div class="product-star">
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="products-block-left">
                      <a href>
                        <img
                          src="Lazz%20Pharma%20Limited_files/product-100x122.jpg"
                          alt="SPECIAL PRODUCTS"
                        />
                      </a>
                    </div>
                    <div class="products-block-right">
                      <p class="product-name">
                        <a href>YC MASK 100 ML</a>
                      </p>
                      <p class="product-Category">
                        <small>Type : Toiletries</small>
                      </p>
                      <p class="product-price">৳ 280.00</p>
                      <div class="product-star">
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <ReturnPolicyProduct /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
