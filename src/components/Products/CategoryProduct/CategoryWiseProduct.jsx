import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GET_CATEGORY_WISE_PRODUCT } from "../../../lib/endpoints";
import { gotoTop } from "../../../lib/utilities";
import { http } from "../../../Service/httpService";
import { urlHomeRoute } from "../../../Service/UrlService";
import Paginator from "../../Paginators/Paginators";
import Suspense from "../../Suspense/Suspense";
import ProductsInfoModel from "../ProductsInfoModel";

const CategoryWiseProduct = () => {
  const { id } = useParams();
  const [isGetting, setIsGetting] = useState(true);
  const [categoryProducts, setCategoryProducts] = useState({
    items: [],
    totalCount: 0,
    count: 0,
  });
  const [params, setParams] = useState({
    filter: [
      {
        field: "CategoryId",
        value: "",
        Operation: 0,
      },
    ],
    pageNumber: 1,
    pageSize: 20,
  });
  const pageChangeHandler = (page) => {
    setParams((prevState) => ({ ...prevState, pageNumber: page }));
  };
  const getCategoryProduct = useCallback((params) => {
    http.post({
      url: GET_CATEGORY_WISE_PRODUCT,
      payload: params,
      before: () => {
        setIsGetting(true);
        gotoTop();
      },
      successed: (res) => {
        setCategoryProducts({
          items: res.Data.Data,
          totalCount: res.Data.Total,
          count: res.Data.Data?.length ?? 0,
        });
        setIsGetting(false);
        
      },
      failed: () => {},
      always: () => {
        setIsGetting(false);
      },
    });
  }, []);

  useEffect(() => {
    params.filter[0].value = id;
    getCategoryProduct(params);
  }, [getCategoryProduct, id, params]);

  return (
    <>
      {!isGetting && (
        <>
          <div id="body_content">
            <div class="columns-container">
              <div id="columns" class="container">
                <div class="breadcrumb clearfix">
                  <Link class="home" title="Return to Home" to={urlHomeRoute()}>
                    Home
                  </Link>
                  <span class="navigation-pipe"> </span>
                  <a href>Category</a>
                  <span class="navigation-pipe"> </span>
                  <a href>Medicine</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div id="view-product-list" style={{ padding: "0px 20px" }}>
                <ul>
                  {categoryProducts.items.map((item) => (
                    // col-xs-6 col-sm-2 col-md-2
                    <li class="">
                      {/* <ProductModelCategoryWise /> */}
                      <ProductsInfoModel item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="paginator-pagination">
            <Paginator
              items={categoryProducts.totalCount}
              pageItems={params.pageSize}
              startPage={params.pageNumber}
              onPageChange={pageChangeHandler}
            />
          </div>
        </>
      )}
      {isGetting && <Suspense />}
    </>
  );
};

export default CategoryWiseProduct;
