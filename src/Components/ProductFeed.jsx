import React from "react";
import Product from "./Product";
import "../styles/ProductFeed.css";

const ProductFeed = ({ products }) => {
  return (
    <div className="product-feed">
      <div className="products one">
        {products
          .slice(0, 4)
          .map(({ id, title, price, description, category, image, rating }) => (
            <div>
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description.substring(0,100)}
                category={category}
                image={image}
                rating={rating}
              />
            </div>
          ))}
      </div>
      <img className="picture" src="https://links.papareact.com/dyz" />
      <div className="products two">
        {products
          .slice(4, products.length)
          .map(({ id, title, price, description, category, image, rating }) => (
            <div>
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description.slice(0,100)}
                category={category}
                image={image}
                rating={rating}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductFeed;
