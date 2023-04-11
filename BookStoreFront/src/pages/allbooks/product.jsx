import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import cartservices from "../../services/cartservices";

export const Product = (props) => {
  const { _id, title, price, thumbnailUrl } = props.data;
  const { addToCart, cartItems, user } = useContext(ShopContext);
  const cartItemCount = cartItems[_id];

  const addToCartAction = (id) => {

    if (user !== null) {
      console.log("user logged In")
      const userID = user._id

      const addToCartRequest = {
        "userId": userID,
        "bookId": id
      };

      cartservices.addToCart(addToCartRequest)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error.response.data.message);
        })
    } 
    addToCart(id)

  }

  return (
    <div className="product">
      <Link to={`/bookDetails/${_id}`}>
        <img src={thumbnailUrl} alt={title} />
      </Link>
      <div className="description">
          <Link to={`/bookDetails/${_id}`}>
            <b>{title}</b>
          </Link>
          <br/>
        ${price}
      </div>
      <button className="addToCartBttn" onClick={()=>addToCartAction(_id)}> Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};



