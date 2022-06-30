import React, { useCallback, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GET_ALL_SEARCHED_PRODUCT,
  SEARCH_PRODUCT,
} from "../../../lib/endpoints";
import {
  searchItemsConvertObject,
  tranformQuery,
} from "../../../lib/utilities";
import { http } from "../../../Service/httpService";
import { urlHomeRoute } from "../../../Service/UrlService";
import appContext from "../../../store/app-context";
import Suspense from "../../Suspense/Suspense";
import ProductsInfoModel from "../ProductsInfoModel";

const SearchAllProduct = () => {
  const { searchQuery: searchCtx } = useContext(appContext);
  const [isGetting, setIsGetting] = useState(false);
  const [searchedProduct, setSearchProduct] = useState([]);
  const [inputTimeout, setInputTimeout] = useState(null);
  const { searchQuery } = searchCtx;

  const getSearchProducts = useCallback((searchQuery) => {
    if (searchQuery.trim().length === 0) {
      setIsGetting(false);
      return false;
    }
    http.post({
      url: GET_ALL_SEARCHED_PRODUCT,
      payload: {
        PageNumber: 1,
        PageSize: 50,
        Query: tranformQuery(searchQuery),
      },
      before: () => {
        setIsGetting(true);
      },
      successed: (res) => {
        setIsGetting(false);
        setSearchProduct(res.Data);
      },
      failed: () => {
        setIsGetting(false);
      },
      always: () => {},
    });
  }, []);

  const searchHandler = useCallback(
    (searchQuery) => {
      setIsGetting(true);
      if (inputTimeout) clearTimeout(inputTimeout);

      setInputTimeout(
        setTimeout(() => {
          getSearchProducts(searchQuery);
        }, 1000)
      );
    },
    [getSearchProducts]
  );

  useEffect(() => {
    searchHandler(searchQuery);
  }, [searchHandler, searchQuery]);

  useEffect(() => () => clearTimeout(inputTimeout), [inputTimeout]);
  console.log({ searchedProduct });

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
                  <a href>Search</a>
                  <span class="navigation-pipe"> </span>
                  <a href>{searchQuery}</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div id="view-product-list" style={{ padding: "0px 20px" }}>
                <ul>
                  {searchedProduct.map((item) => {
                    let converItem = searchItemsConvertObject(item);
                    return (
                      <li class="">
                        <ProductsInfoModel item={converItem} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="paginator-pagination">
            {/* <Paginator
              items={categoryProducts.totalCount}
              pageItems={params.pageSize}
              startPage={params.pageNumber}
              onPageChange={pageChangeHandler}
            /> */}
          </div>
        </>
      )}
      {isGetting && <Suspense />}
    </>
  );
};

export default SearchAllProduct;
