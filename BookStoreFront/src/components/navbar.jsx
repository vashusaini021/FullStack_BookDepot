import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const totalItems = Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);

  return (
    <div className="navbar">
      <div className="shopTitle">
        <h1>Book Store</h1>
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/login"> Login </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
        <ShoppingCart size={32} />
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </div>
  );
};
