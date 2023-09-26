import React from "react";

const Image = ({ src, alt, onClick, style }) => {
  return (
    <>
      <img src={src} alt={alt} onClick={onClick} style={style} />
    </>
  );
};

export default Image;
