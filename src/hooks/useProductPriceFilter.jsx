import { useState } from "react";

const useProductPriceFilter = (products) => {
  const [sortProductPrice, setSortProductPrice] = useState(products);
  const handleForPriceFilter = (event) => {
    setSortProductPrice(event);
  };
  const sortedProducts = products.sort((a, b) => {
    if (sortProductPrice === "lowestToHighest") {
      return a.price - b.price;
    } else if (sortProductPrice === "highestToLowest") {
      return b.price - a.price;
    } else if (sortProductPrice === "Name (A - Z)") {
      return a.title.localeCompare(b.title);
    } else if (sortProductPrice === "Name (Z - A)") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });
  return {
    sortProductPrice,
    sortedProducts,
    handleForPriceFilter
  };
};

export default useProductPriceFilter;
