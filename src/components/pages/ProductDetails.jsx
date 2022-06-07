import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_RELATED_PRODUCTS } from "../../lib/endpoints";
import { searchItemsConvertObject } from "../../lib/utilities";
import { BASE_URL, http } from "../../Service/httpService";
import ProductDetailsContent from "../Products/ProductDetails/ProductDetailsContent";
import ProductDetailsHeader from "../Products/ProductDetails/ProductDetailsHeader";

const ProductDetails = () => {
  const { id } = useParams();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const getRelatedProducts = useCallback(() => {
    http.get({
      url: GET_RELATED_PRODUCTS + id,
      before: () => {},
      successed: (res) => {
        console.log(res);
        setRelatedProducts(res.Data);
      },
      failed: () => {},
      always: () => {},
    });
  }, []);
  useEffect(() => {
    getRelatedProducts();
  }, [getRelatedProducts]);
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
                  {relatedProducts.map((item) => {
                    const item2 = searchItemsConvertObject(item);
                    return (
                      <li>
                        <div class="products-block-left">
                          <a href>
                            <img
                              src={
                                BASE_URL +
                                "/Content/ImageData/Products/Small/" +
                                item2.image
                              }
                              alt="img"
                            />
                          </a>
                        </div>
                        <div class="products-block-right">
                          <p class="product-name">
                            <a href>
                              {item2.Nm} {item2.St}
                            </a>
                          </p>
                          <p class="product-Category">
                            <small>Category : {item2.category}</small>
                          </p>
                          <p class="product-Category">
                            <small>Supplier : {item2.supplier}</small>
                          </p>
                          <p class="product-price">৳ {item2.MRP}</p>
                          {/* <div class="product-star">
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                          </div> */}
                        </div>
                      </li>
                    );
                  })}
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
