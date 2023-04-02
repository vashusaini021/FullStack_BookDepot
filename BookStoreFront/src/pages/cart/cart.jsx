import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";


function Cart() {

  const { cartItems, getTotalCartAmount, checkout,books } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();


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