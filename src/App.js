import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ProductFeed from "./Components/ProductFeed";
import Checkout from "./Components/Checkout.jsx";

import { useState, useEffect } from "react";


function App() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ProductFeed products={item} />
    </div>
  );
}

export default App;
