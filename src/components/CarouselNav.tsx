import "./CarouselNav.css";
import CarouselIndicators from "./CarouselIndicators";
import React, { useState, useEffect } from "react";

const CarouselNav = (props: {
  handleClickLeft: () => void;
  handleClickRight: () => void;
  numImages: number;
  currentImage: number;
  imageWidth: number | undefined;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div style={{ width: props.imageWidth }} className="carousel-nav-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        onClick={props.handleClickLeft}
        className="carousel-nav-button"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.9597 22.7904C47.1801 24.0108 47.1801 25.9894 45.9597 27.2098L35.6694 37.5001L45.9597 47.7904C47.1801 49.0108 47.1801 50.9894 45.9597 52.2098C44.7393 53.4302 42.7607 53.4302 41.5403 52.2098L29.0403 39.7098C27.8199 38.4894 27.8199 36.5108 29.0403 35.2904L41.5403 22.7904C42.7607 21.57 44.7393 21.57 45.9597 22.7904Z"
          fill="white"
        />
      </svg>
      <div className="flex gap-2.5">
        <CarouselIndicators
          numImages={props.numImages}
          currentImage={props.currentImage}
          setCurrentImage={props.setCurrentImage}
        ></CarouselIndicators>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        onClick={props.handleClickRight}
        className="carousel-nav-button"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.0403 22.7904C30.2607 21.57 32.2393 21.57 33.4597 22.7904L45.9597 35.2904C47.1801 36.5108 47.1801 38.4894 45.9597 39.7098L33.4597 52.2098C32.2393 53.4302 30.2607 53.4302 29.0403 52.2098C27.8199 50.9894 27.8199 49.0108 29.0403 47.7904L39.3306 37.5001L29.0403 27.2098C27.8199 25.9894 27.8199 24.0108 29.0403 22.7904Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default CarouselNav;
