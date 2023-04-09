import React, { useContext } from "react";
import { Product } from "./product";
import { ShopContext } from "../../context/shop-context";
import Label from "./label";

import "./shop.css";

function Shop() {
  const { books, featuredBooks, bestSellers, searchString } = useContext(ShopContext);
    return (
      <div>
        {!searchString ? (
          <>
            <Label
              title="Featured Books" />
            <div className="products">
              {featuredBooks.map((product) => (
                <Product key={product._id} data={product} />
              ))} 
            </div>


            <Label
              title="Best Sellers" />
            <div className="products">
              {bestSellers.map((product) => (
                <Product key={product._id} data={product} />
              ))}
            </div>
          </>
        ) : null}
        <Label
          title="All Books" />
      <div className="products">
        {books.map((product) => (
          <Product  key={product._id} data={product} />
        ))}   
      </div>
      </div>

  );
}

export default Shop;
