import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";

import Shop from './pages/shop/shop'

// import { Shop } from "./pages/shop/shop";
import { Login } from "./pages/login/login";
import { Contact } from "./pages/contact";
import Cart  from "./pages/cart/cart";
import { SignUp } from "./pages/signup/signup";
import BookDetails from "./pages/bookDetails/bookDetails";
// import { Checkout } from "./pages/checkout/checkout"
import { ShopContextProvider} from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/bookDetails/:id" element={<BookDetails />}/>
            {/* <Route path="/checkout" element={<Checkout />} /> */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;