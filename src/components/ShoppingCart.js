import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = props => {
  const { cart } = useContext(ProductContext);
  console.log("cart", cart);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map((item, index) => (
        <Item key={index} {...item} />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
