import React from "react";
import CarouselContainer from "../../components/common/carousel/CarouselContainer";
import { ThreeCircles } from "react-loader-spinner";
import useLoading from "../../hooks/useLoading";

const Home = () => {
  const { hasLoad } = useLoading(2000);
  if (hasLoad) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <ThreeCircles
          height="100"
          width="100"
          color="#00afef"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#ef6500"
          innerCircleColor="#001f3f"
          middleCircleColor="#474973"
        />
      </div>
    );
  }
  return (
    <>
      <CarouselContainer />
    </>
  );
};

export default Home;
