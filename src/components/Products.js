import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = props => {
  const { products } = useContext(ProductContext);
  console.log("products", products);

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <Product key={index} product={product} addItem={props.addItem} />
      ))}
    </div>
  );
};

export default Products;
