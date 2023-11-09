import React from "react";
import "./CarouselContainer.css";
import FirstCarousel from "./FirstCarousel";
import SecondCarousel from "./SecondCarousel";
import ThirdSection from "./ThirdSection";

const CarouselContainer = () => {
  return (
    <>
      <FirstCarousel />
      <div className="mt-5">
        <h2 className="carousel-container">Trending Products</h2>
        <SecondCarousel />
      </div>
      <div className="mt-5">
        <h2 className="carousel-container">
          Paintings Will Come in the Future
        </h2>
        <ThirdSection />
      </div>
    </>
  );
};

export default CarouselContainer;
