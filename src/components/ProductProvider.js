import React, { useState } from "react";
import ProductContext from "../contexts/ProductContext";
import data from "../data";

export default function ProductProvider(props) {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = item => {
    setCart(cart.filter(element => element.id != item));
  };

  return (
    <ProductContext.Provider value={{ products, cart, addItem, removeItem }}>{props.children}</ProductContext.Provider>
  );
}
