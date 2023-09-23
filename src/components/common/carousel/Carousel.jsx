import React from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "../slider/Slider";
import Image from "../image/Images";
import "./Carousel.css";

function Carousel() {
  const sliderAlt = "image not found";
  const urlOfImage = [
    require("../../../assets/images/imageSlider1.jpg"),
    require("../../../assets/images/imageSlider2.jpg"),
    require("../../../assets/images/imageSlider3.jpg"),
    require("../../../assets/images/imageSlider4.jpg"),
  ];
  return (
    <>
      <Slider>
        {urlOfImage.map((imageUrl, imageIndex) => {
          return (
            <SwiperSlide key={imageIndex}>
              <Image src={imageUrl} alt={sliderAlt} />
            </SwiperSlide>
          );
        })}
      </Slider>
    </>
  );
}

export default Carousel;
