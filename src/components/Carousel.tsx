import CarouselNav from "./CarouselNav";
import React, { useState, useRef } from "react";

const Carousel = (props: { images: string[]; isMobile: boolean }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const imageRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const imageWidth: number | undefined = imageRef.current?.clientWidth;

  const handleClickRight = () => {
    setCurrentImage((currentImage + 1) % props.images.length);
  };

  const handleClickLeft = () => {
    setCurrentImage(
      currentImage == 0 ? props.images.length - 1 : currentImage - 1
    );
  };

  return (
    <div
      className={`flex flex-col h-full relative ${
        props.isMobile ? "py-6" : "p-6"
      }`}
    >
      <div
        className="bg-center bg-no-repeat bg-cover flex-1"
        ref={imageRef}
        style={{
          backgroundImage: `url(${props.images[currentImage]})`,
        }}
      ></div>
      <CarouselNav
        handleClickLeft={handleClickLeft}
        handleClickRight={handleClickRight}
        numImages={props.images.length}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        imageWidth={imageWidth}
      ></CarouselNav>
    </div>
  );
};

export default Carousel;
