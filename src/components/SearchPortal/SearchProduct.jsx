import React, { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import { SEARCH_PRODUCT } from "../../lib/endpoints";
import { tranformQuery } from "../../lib/utilities";
import { http } from "../../Service/httpService";
import appContext from "../../store/app-context";
import SearchPortal from "./SearchPortal";

const SearchProduct = ({ searchValue, closeSearchHandler }) => {
  const appCtx = useContext(appContext);

  const [searchedProduct, setSearchProduct] = useState([]);
  const [inputTimeout, setInputTimeout] = useState(null);
  const [isGetting, setIsGetting] = useState(false);

  const getSearchProducts = useCallback((searchQuery) => {
    if (searchQuery.trim().length === 0) {
      setIsGetting(false);
      return false;
    }
    http.post({
      url: SEARCH_PRODUCT,
      payload: {
        PageNumber: 1,
        PageSize: 50,
        Query: tranformQuery(searchQuery),
      },
      before: () => {
        setIsGetting(true);
        appCtx.searchQuery.storeSearchQuery(searchQuery);
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
    searchHandler(searchValue);
  }, [searchHandler, searchValue]);

  useEffect(() => () => clearTimeout(inputTimeout), [inputTimeout]);

  const lowerSearchvalue = searchValue.toLowerCase();
  const data =
    searchedProduct.length > 5 ? searchedProduct.slice(0, 5) : searchedProduct;

  return (
    <SearchPortal
      data={data}
      closeSearchHandler={closeSearchHandler}
      lowerSearchvalue={lowerSearchvalue}
      totalData={searchedProduct}
      isGetting={isGetting}
    />
  );
};

export default SearchProduct;
