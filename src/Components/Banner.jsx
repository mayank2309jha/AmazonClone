import React from "react";
import "../styles/Banner.css";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useState } from "react";
import {useEffect} from "react";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Banner = () => {
  const imageLinks = [
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
  ];
  let [index, setIndex] = useState(0);
  const lengthOfImageArray = imageLinks.length;

  const nextImage = () => {
    setIndex(index === lengthOfImageArray - 1 ? 0 : index + 1);
  };
  const prevImage = () => {
    setIndex(index === 0 ? lengthOfImageArray - 1 : index - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex(index === lengthOfImageArray - 1 ? 0 : index + 1);
    }, 5000);

    return () => clearInterval(interval);
  });


  return (
    <div className="carousel">
      <div className="banner">
        <FaArrowAltCircleLeft
          className="carousel-button prev"
          onClick={prevImage}
        />
        <img src = {imageLinks[index]} alt = "image" className = "image"/>
        <FaArrowAltCircleRight
          className="carousel-button next"
          onClick={nextImage}
        />
      </div>
    </div>
  );
};

export default Banner;