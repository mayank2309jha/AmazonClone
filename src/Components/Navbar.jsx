import React from "react";
import "../styles/Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { Outlet, Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="nav-bar">
      <div className="upper-nav">
        {/**Logo */}
        <Link to="/">
          <img className="logo" src="https://links.papareact.com/f90" />
        </Link>
        {/**Search bar */}
        <div className="search-bar">
          <input
            type="text"
            className="search-box"
            placeholder="Search Amazon.in"
          />
          {/**Search Icon */}
          <AiOutlineSearch className="search-icon" />
        </div>
        <div id="right-nav" className="right-nav">
          <div className="right-nav-item">
            <p className=" text">Hello, Mayank</p>
            <p className="bold-text text">Account & Lists</p>
          </div>
          <div className="right-nav-item">
            <p className=" text">Return</p>
            <p className="bold-text text">& Orders</p>
          </div>
          <div className="right-nav-item" text>
            <div className="cart">
              <HiOutlineShoppingCart className="cart-logo" />
              <Link className="cart-text" to={"checkout"}>
                Cart
              </Link>
              <div className="cart-size">{5}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Nav Bar */}
      <div className="lower-nav">
        <div className="one all-link">
          <GiHamburgerMenu className="lower-nav-icon" />
          <p className="all-link">All</p>
        </div>
        <p className="one">Baby</p>
        <p className="one">Gift Ideas</p>
        <p className="one">Fresh</p>
        <p className="three">Home Improvement</p>

        <p className="three">Amazon Pay</p>
        <p className="three">Buy Again</p>
        <p className="three">Gift Cards</p>
        <p className="three">Health, Household & Personal Care</p>

        <p className="four">Books</p>
        <p className="four">Coupons</p>
      </div>
    </div>
  );
};

export default Navbar;
