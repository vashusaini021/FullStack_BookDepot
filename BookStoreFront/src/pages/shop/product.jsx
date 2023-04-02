import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link, Routes, Route } from "react-router-dom";
import { BookDetails } from "../bookDetails/bookDetails";

export const Product = (props) => {
  const { _id, title, price, thumbnailUrl } = props.data;
  const { addToCart, cartItems, bookDetails } = useContext(ShopContext);
  
  const cartItemCount = cartItems[_id];
  const bookDetailsUrl = `/details`;
  return (
    <div className="product">
      <Link to={`/bookDetails/${_id}`}>
        <img src={thumbnailUrl} alt={title} />
      </Link>
      <div className="description">
        <p>
          <Link>
            <b>{title}</b>
          </Link>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(_id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};



