import { useState } from "react";

const useProductTitleFilter = (initialFilter,products) => {
  const [selectedProductTitle, setSelectedProductTitle] = useState(initialFilter);

  const handleCategoryButtonClick = (title) => {
    setSelectedProductTitle(title);
  };

  const filteredProducts =
    selectedProductTitle === "All"
      ? products
      : products.filter((product) =>
          product.title
            .toLowerCase()
            .includes(selectedProductTitle.toLowerCase())
        );
  return {
    selectedProductTitle,
    handleCategoryButtonClick,
    filteredProducts
  };
};

export default useProductTitleFilter;
