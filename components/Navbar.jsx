import React from "react";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
const Navbar = () => {
  const {showCart,setShowCart,totalQuantities}=useStateContext()
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">SastaBazar</Link>
      </p>
      <div className="nav_searchbaar">
            <input
            className="input"
              type="text"
              name=""
              // onChange={(e) => getText(e.target.value)}
              placeholder="Search Your Fruits here....."
            />
            <div className="search_icon">
              <i className="fas fa-search" id="search"></i>
              <AiOutlineSearch id="search" />
            </div>
            </div>
      <button type="button" className="cart-icon" onClick={()=>setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}    
    </div>
  );
};

export default Navbar;
