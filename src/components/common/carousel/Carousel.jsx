import React from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "../slider/Slider";
import Image from "../image/Images";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const sliderAlt = "image not found";
  const navigate = useNavigate();
  const urlOfImage = [
    {
      imageUrl: require("../../../assets/images/imageSlider1.jpg"),
      route: () => navigate("/men"),
    },
    {
      imageUrl: require("../../../assets/images/imageSlider2.jpg"),
      route: () => navigate("/men"),
    },
    {
      imageUrl: require("../../../assets/images/imageSlider3.jpg"),
      route: () => navigate("/bags"),
    },
    {
      imageUrl: require("../../../assets/images/imageSlider4.jpg"),
      route: () => navigate("/women"),
    },
  ];
  return (
    <>
      <Slider>
        {urlOfImage.map((imageInfo, imageIndex) => {
          return (
            <SwiperSlide key={imageIndex}>
              {/* <button onClick={imageInfo.route} style={{ border: "none" }}> */}
              <Image
                src={imageInfo.imageUrl}
                alt={sliderAlt}
                onClick={imageInfo.route}
                style={{cursor:'pointer'}}
              />
              {/* </button> */}
            </SwiperSlide>
          );
        })}
      </Slider>
    </>
  );
};

export default Carousel;
