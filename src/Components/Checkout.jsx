import React from "react";
import "../styles/Checkout.css";
import Navbar from "./Navbar";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      {/* We will create 2 divs one of them will be on the left side and other will be on the right side 
    only when the screen width exeeds a particular threshold. In the mobile screen the two divs will be on top of each other.*/}
      <main className="main">
        <div className="left-side">
          <img src="http://links.papareact.com/ikj" alt = "more good days ahead" className="checkout-image" />
          <div className="shopping-basket">
            <h1>Your Shopping Basket</h1>
          </div>
        </div>
        <div className="right-side">Pay here</div>
      </main>
    </div>
  );
};

export default Checkout;
