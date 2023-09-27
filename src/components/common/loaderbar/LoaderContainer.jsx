import React from "react";
import { ColorRing } from "react-loader-spinner";
const LoaderContainer = () => {
  return (
    <>
      <div style={{minHeight:"100vh",display:"grid",placeItems:"center"}}>
        <ColorRing
          visible={true}
          height={150}
          width={150}
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    </>
  );
};

export default LoaderContainer;
