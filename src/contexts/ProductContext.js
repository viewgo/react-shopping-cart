import React from "react";

const ProductContext = React.createContext({
  cart: [],
  products: [],
  addItem: () => {},
  removeItem: () => {}
});

export default ProductContext;
