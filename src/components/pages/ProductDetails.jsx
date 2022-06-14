import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_RELATED_PRODUCTS, PRODUCT_DETAILS_GET } from "../../lib/endpoints";
import { searchItemsConvertObject } from "../../lib/utilities";
import { BASE_URL, http } from "../../Service/httpService";
import ProductDetailsContent from "../Products/ProductDetails/ProductDetailsContent";
import ProductDetailsHeader from "../Products/ProductDetails/ProductDetailsHeader";
import Suspense from "../Suspense/Suspense";

const ProductDetails = () => {
  const { id } = useParams();
  const [isGetting, setIsGetting] = useState(true);
  const [productDetails, setProductDetails] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getProductDetails = useCallback((id) => {
    http.get({
      url: PRODUCT_DETAILS_GET + id,
      before: () => {
        setIsGetting(true);
      },
      successed: (res) => {
        res.Id = id;
        setProductDetails(searchItemsConvertObject(res));
        getRelatedProducts(id);
      },
      failed: () => {
        setIsGetting(false);
      },
      always: () => {},
    });
  }, []);

  const getRelatedProducts = useCallback((id) => {
    http.get({
      url: GET_RELATED_PRODUCTS + id,
      before: () => {
        setIsGetting(true);
      },
      successed: (res) => {
        setRelatedProducts(res.Data);
        setIsGetting(false);
      },
      failed: () => {},
      always: () => {
        setIsGetting(false);
      },
    });
  }, []);

  useEffect(() => {
    getProductDetails(id);
  }, [getProductDetails, id]);

  return (
    <>
      {!isGetting && (
        <div id="body_content">
          <div class="columns-container">
            <div id="columns" class="container">
              <ProductDetailsHeader />
              <ProductDetailsContent
                productDetails={productDetails}
                isGetting={isGetting}
              />
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
      )}
      {isGetting && <Suspense />}
    </>
  );
};

export default ProductDetails;
