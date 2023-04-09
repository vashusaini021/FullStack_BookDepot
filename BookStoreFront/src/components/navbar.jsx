import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import { Product } from "../pages/allbooks/product.jsx"
import "./navbar.css";

function Navbar()  {
  const { cartItems, setSearchString } = useContext(ShopContext);
  const totalItems = Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);

  const searchBook = (searchTerm) => {
    setSearchString(searchTerm);
  }

  return (
    <div className="navbar">
      <div className="shopTitle">
        <h1>Book Store</h1>
      </div>
      <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                size="100"
                                className="search-input"
                                placeholder="Search book by title.."
                                onChange={(e) => {
                                  console.log("Search input:", e.target.value);
                                  searchBook(e.target.value);
                                } 
                                }
                            />
                        </label>
        </div>
        {/* {search(books).slice(0, visible).map(<Product />)} */}

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

export default Navbar;
