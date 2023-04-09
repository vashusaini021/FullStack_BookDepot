import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
import cartservices from "../../services/cartservices";


function Cart() {

  const { cartItems, getTotalCartAmount, checkout, books, user, setCartItems } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();


  useEffect(() => {
    if (user !== null) {
      console.log("user logged In")
      const userID = user._id

      cartservices.getCartItems(userID)
        .then(response => {
          var cartResponsebooks = response.data.Cart.books
          console.log(cartResponsebooks)

          let carItems = {}
          for (const index in cartResponsebooks) {
            const item = cartResponsebooks[index];
            carItems[item.book._id] = item.quantity
          }
          setCartItems(carItems)
        }
        )
        .catch(error => {
          console.log(error.response);
        })
    }

    //check if user exist data from api and set data to cart items just book ids

    //else only cart items

    //integrate first add to cart api

    //search api books

  }, []);



  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {books.map((book) => {
          if (cartItems[book._id]) {
            return <CartItem key={book._id} data={book} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("../../checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>

  );

}

// export const Cart = () => {

//   const { cartItems, getTotalCartAmount, checkout,books } = useContext(ShopContext);
//   const totalAmount = getTotalCartAmount();
//   const navigate = useNavigate();

//   return (
//       <div className="cart">
//        <div>
//         <h1>Your Cart Items</h1>
//       </div>
//       <div className="cart">
//         {books.map((book) => {
//             return <CartItem key={book.id} data={book} />;
//         })}
//       </div>
//       {totalAmount > 0 ? (
//         <div className="checkout">
//           <p> Subtotal: ${totalAmount} </p>
//           <button onClick={() => navigate("/")}> Continue Shopping </button>
//           <button
//             onClick={() => {
//               checkout();
//               navigate("../../checkout");
//             }}
//           >
//             {" "}
//             Checkout{" "}
//           </button>
//         </div>
//       ) : (
//         <h1> Your Shopping Cart is Empty</h1>
//       )}
//     </div>

//   );
// };

export default Cart;