import React, { useContext } from "react";
import { Product } from "./product";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

function Shop() {

      const { books } = useContext(ShopContext);
    
    return (
      <div className="products">
        {books.map((product) => (
          <Product  key={product._id} data={product} />
        ))}   
      </div>
  );
}

export default Shop;
