import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { _id, title, price, thumbnailUrl } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[_id];
  return (
    <div className="product">
      <Link to={`/bookDetails/${_id}`}>
        <img src={thumbnailUrl} alt={title} />
      </Link>
      <div className="description">
        <p>
          <Link to={`/bookDetails/${_id}`}>
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



