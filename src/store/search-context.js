import React, { useState } from "react";

export const SearchContext = React.createContext({
  hide: () => {},
  show: () => {},
  isVisible: false,
});

export const SearchContextProvider = (props) => {
  const [isResultVisible, setIsResultVisible] = useState(false);

  const showSearchResult = () => {
    if (window.innerWidth < 800) {
      document.querySelector("body").style.position = "fixed";
    }
    setIsResultVisible(true);
  };

  const hideSearchResult = () => {
    if (window.innerWidth < 800) {
      document.querySelector("body").style.position = "unset";
    }
    setIsResultVisible(false);
  };

  return (
    <SearchContext.Provider
      value={{
        hide: hideSearchResult,
        show: showSearchResult,
        isVisible: isResultVisible,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
