import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRupeeSign } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useProductData from "../../../hooks/useProductData";
import createUrlOfImages from "../../../utils/constants/homeCarousel";

const SecondCarousel = () => {
  const allProductsData = useProductData();
  const dataStartFrom = allProductsData.slice(20);
  const productsSliced = dataStartFrom.slice(0, 10);
  const altTitle = "image not found";
  const navigate = useNavigate();
  const urlOfImages = createUrlOfImages(navigate);
  const pages = [MEN, WOMEN, BEAUTY, KIDS];

  const handleExploreClick = () => {
    const randomPage = pages[parseInt(Math.random() * pages.length)];
    navigate(`/${randomPage}`);
  };
  
  return (
    <div style={{ cursor: "pointer" }} className="mt-5 second-carousel">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 2000,
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {productsSliced.map((products, index) => {
          return (
            <SwiperSlide
              key={products.id}
              onClick={urlOfImages[index].imageUrl}
            >
              <div className="product-card">
                <img
                  className="product-image"
                  src={products.image}
                  alt={altTitle}
                />
                <div className="product-details">
                  <p className="product-title">{products.title}</p>
                  <p className="product-brand">
                    <strong>Brand:</strong> {products.brand}
                  </p>
                  <p className="product-price">
                    <FaRupeeSign /> <b>{products.price * 22}</b>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="text-center">
        <button
          onClick={handleExploreClick}
          className="btn mt-4 mb-4 explore-btn"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default SecondCarousel;

const MEN = "men";
const WOMEN = "women";
const KIDS = "kids";
const BEAUTY = "beauty";
