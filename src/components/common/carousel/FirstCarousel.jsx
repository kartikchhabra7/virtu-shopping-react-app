import React from "react";
import Image from "../image/Images";
import { useNavigate } from "react-router-dom";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FirstCarousel = () => {
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
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper first-carousel"
      >
        {urlOfImage.map((imageInfo, imageIndex) => {
          return (
            <SwiperSlide key={imageIndex}>
              {/* <button onClick={imageInfo.route} style={{ border: "none" }}> */}
              <Image
                src={imageInfo.imageUrl}
                alt={sliderAlt}
                onClick={imageInfo.route}
                style={{ cursor: "pointer" }}
              />
              {/* </button> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default FirstCarousel;
