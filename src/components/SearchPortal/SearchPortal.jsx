import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useOutsideAlerter } from "../../hooks/useOutSideClickedHandler";
import { urlSearchProducts } from "../../Service/UrlService";
import { SearchContext } from "../../store/search-context";
import SearchTemplate from "./SearchTemplate";

const SearchPortal = ({
  data,
  closeSearchHandler,
  lowerSearchvalue,
  totalData,
  isGetting,
  onClick,
}) => {
  let history = useHistory();
  const ref = useRef(null);

  const viewAllProductHandler = (evt) => {
    evt.preventDefault();
    history.push(`${urlSearchProducts()}?query=${lowerSearchvalue}`);
    closeSearchHandler();
  };

  return (
    <div class="search-result" id="search-result" ref={ref}>
      {isGetting && (
        <div class="search-result__no-product-message">
          <strong>Product Finding 😁!</strong>
        </div>
      )}
      {data.length === 0 && !isGetting && (
        <div class="search-result__no-product-message">
          <strong>No Product Found 😭!</strong>
        </div>
      )}
      {data.length > 0 &&
        !isGetting &&
        data.map((item) => (
          <SearchTemplate
            item={item}
            closeSearch={closeSearchHandler}
            lowerSearchvalue={lowerSearchvalue}
            onClick={onClick}
          />
        ))}
      {data.length >= 5 && !isGetting && (
        <div class="search-result__view-more" onClick={viewAllProductHandler}>
          <button>View All Result</button>
        </div>
      )}
    </div>
  );
};

export default SearchPortal;
