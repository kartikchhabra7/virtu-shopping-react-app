import React from "react";
import Button from "../../common/button/Button";
import "./FilterProductTitle.css";
const FilterProductTitle = ({
  title,
  selectedProductTitle,
  handleCategoryButtonClick,
}) => {
  return (
    <>
      <Button
        className={`button btn mx-1 ${
          selectedProductTitle === title ? "active" : ""
        }`}
        onClick={() => handleCategoryButtonClick(title)}
        label={title}
      />
    </>
  );
};

export default FilterProductTitle;
