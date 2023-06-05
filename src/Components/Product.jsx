import React from "react";
import "../styles/Product.css";
import { AiFillStar } from "react-icons/ai";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {


  return (
    <div className="product-card">
      <p className="category">{category}</p>
      <p>{title}</p>
      <img src={image} className="product-image" />
      <div className="flex py-3">
        {Array(Math.ceil(rating.rate))
          .fill()
          .map((_, i) => (
            <AiFillStar className="star" />
          ))}
        <div className="description">{description}...</div>
        <div className="price">INR {price * 80}</div>
        <button className="button">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
