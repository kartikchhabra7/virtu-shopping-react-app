import { useSelector } from "react-redux";

const useCartData = () => {
  return useSelector((state) => state.cartData);
};

export default useCartData;
