import React from "react";

const Image = ({ src, alt, onClick, style, className }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        style={style}
        className={className}
      />
    </>
  );
};

export default Image;
