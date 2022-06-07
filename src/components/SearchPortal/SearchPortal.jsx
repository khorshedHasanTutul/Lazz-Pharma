import React from "react";
import SearchTemplate from "./SearchTemplate";

const SearchPortal = ({
  data,
  closeSearchHandler,
  lowerSearchvalue,
  totalData,
  isGetting
}) => {
  return (
    <div class="search-result" id="search-result">
        {
            isGetting && (
                <div class="search-result__no-product-message">
          <strong>Product Finding 😁!</strong>
        </div>
            )
        }
      {data.length === 0 && !isGetting && (
        <div class="search-result__no-product-message">
          <strong>No Product Found 😭!</strong>
        </div>
      )}
      {data.length > 0 && !isGetting &&
        data.map((item) => (
          <SearchTemplate
            item={item}
            closeSearch={closeSearchHandler}
            lowerSearchvalue={lowerSearchvalue}
          />
        ))}
      {data.length === 5 && !isGetting && (
        <div class="search-result__view-more">
          <button>View All Result</button>
        </div>
      )}
    </div>
  );
};

export default SearchPortal;
