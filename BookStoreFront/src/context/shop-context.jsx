import React, { createContext, useState, useEffect } from "react";
import { BookDetails } from "../pages/bookDetails/bookDetails";

export const ShopContext = createContext(null);



export const ShopContextProvider = (props) => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books/")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => console.log(error));
  }, []);


  const [cartItems, setCartItems] = useState({});

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        let itemInfo = books.find((b) => b._id === item);
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    console.log(totalAmount)
    return totalAmount;
  };



  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId]) {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      } else {
        return { ...prev, [itemId]: 1 };
      }
    });
  };



  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
        if (prev[itemId] > 1) {
          return { ...prev, [itemId]: prev[itemId] - 1 };
        } else {
          const { [itemId]: removedItem, ...updatedItems } = prev;
          return updatedItems;
        }
    });
  };


  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems({});
  };

  const bookDetails = (itemId) => {


    console.log("ddedekdjei")

console.log(itemId)

        // fetch('http://localhost:3000/books/')
        //     .then(response => response.json() )
        //     .then(data => {
        //       console.log(data)
        //       setBooks(data)
        //     })
        //     .catch(error => console.log(error));



    // console.log("itemId:", itemId);
    // const itemInfo = books.find((b) => b.id === itemId);
    // if (itemInfo) {
    //   return <BookDetails data={itemInfo} />;
    // } else {
    //   console.error(`Book with ID ${itemId} not found`);
    //   return null;
    // }
  };
  
  
  const contextValue = {
    cartItems,
    books,
    addToCart,
    bookDetails,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
