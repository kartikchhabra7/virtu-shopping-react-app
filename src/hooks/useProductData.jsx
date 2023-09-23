import { useSelector } from "react-redux";

const useProductData = () => {
  return useSelector((state) => state.productsData);
};

export default useProductData;
