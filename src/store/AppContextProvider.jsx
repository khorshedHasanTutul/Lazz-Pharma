import React, { useReducer } from "react";
import appContext from "./app-context";

const initialSearchQuery = {
  searchQuery: "",
};
const initialOrder = {
  orderStatus: false,
};

const productAnimeReducer = (state, action) => {
  if (action.type === "STORE_SEARCH_QUERY") {
    return {
      searchQuery: action.searchQuery,
    };
  }
  return initialSearchQuery();
};

const orderReducer = (state, action) => {
  if (action.type === "STATUS_CHANGED_ORDER") {
    return {
      orderStatus: action.isChecked,
    };
  }
  return initialOrder;
};

const AppContextProvider = ({ children }) => {
  const [searchQueryState, dispatchSearchQuery] = useReducer(
    productAnimeReducer,
    initialSearchQuery
  );

  const [orderStatusState, dispatchOrderStatus] = useReducer(
    orderReducer,
    initialOrder
  );

  const storeSearchQuery = (text) => {
    dispatchSearchQuery({ type: "STORE_SEARCH_QUERY", searchQuery: text });
  };
  const orderStatusFunction = (isChecked) => {
    dispatchOrderStatus({ type: "STATUS_CHANGED_ORDER", isChecked: isChecked });
  };

  const searchQuery = {
    storeSearchQuery,
    searchQuery: searchQueryState.searchQuery,
  };

  const orderCreated = {
    orderStatus: orderStatusFunction,
    currentOrderStatus: orderStatusState.orderStatus,
  };

  const context = {
    searchQuery: { ...searchQuery },
    orderCreated: { ...orderCreated },
  };

  return <appContext.Provider value={context}>{children}</appContext.Provider>;
};

export default AppContextProvider;
