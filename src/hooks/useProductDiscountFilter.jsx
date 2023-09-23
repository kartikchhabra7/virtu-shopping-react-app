import { useState } from "react";

const useProductDiscountFilter = (products) => {
  const [sortProductByDiscount, setSortProductByDiscount] = useState("");

  const handleForDiscountFilter = (event) => {
    setSortProductByDiscount(event);
  };

  const filteredProductByDiscount = products
  .filter((product) => {
    if (sortProductByDiscount === "0-10") {
      return product.discount > 0 && product.discount <= 10;
    } else if (sortProductByDiscount === "11-20") {
      return product.discount > 10 && product.discount <= 20;
    } else if (sortProductByDiscount === "20+") {
      return product.discount > 20;
    }
    return true; // Return true for no filter selected
  })
  .sort((a, b) => {
    return a.discount - b.discount; // You can adjust sorting criteria here
  });

  return {
    handleForDiscountFilter,
    filteredProductByDiscount,
  };
};

export default useProductDiscountFilter;
