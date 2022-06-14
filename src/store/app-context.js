import { createContext } from "react";

const appContext = createContext({
  searchQuery: {
    storeSearchQuery: (text = "") => {},
    searchQuery: "",
  },
  orderCreated: {
    orderStatus: (isChecked) => {},
    currentOrderStatus: false,
  },
});

export default appContext;
