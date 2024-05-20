import "./CarouselIndicators.css";
import React from "react";

const CarouselIndicators = (props: {
  numImages: number;
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleClick = (imageNumber: number) => {
    props.setCurrentImage(imageNumber);
  };

  let indicators: JSX.Element[] = [];

  for (let i: number = 0; i < props.numImages; i++) {
    indicators.push(
      <div
        key={i}
        style={{
          backgroundColor:
            i == props.currentImage
              ? "rgba(230, 230, 230, 1)"
              : "rgba(230, 230, 230, 0.6)",
        }}
        className="carousel-indicator"
        onClick={() => {
          handleClick(i);
        }}
      ></div>
    );
  }

  return <>{indicators}</>;
};

export default CarouselIndicators;
