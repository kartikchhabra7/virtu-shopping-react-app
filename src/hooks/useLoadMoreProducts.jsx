import { useEffect, useState } from "react";
import {
  PRODUCTS_PER_LOAD,
  PRODUCTS_PER_PAGE,
} from "../utils/constants/products";

const useLoadMoreProducts = (totalNumberOfProducts) => {
  const [visibleProducts, setVisibleProducts] = useState(PRODUCTS_PER_PAGE);
  const [hasLoading, setHasLoading] = useState(false);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  const loadMore = () => {
    setHasLoading(true);
    setTimeout(() => {
      setVisibleProducts(
        (prevVisibleProducts) => prevVisibleProducts + PRODUCTS_PER_LOAD
      );
      setHasLoading(false);
    }, 1000);
  };

  useEffect(() => {
    //used this hook to hide the button when all data is loaded. If I don't write this useeffect and write the setalldataloaded function code in the loadmore function, then we will need to again use onclick to hide the button when all data is loaded already.
    setAllDataLoaded(visibleProducts >= totalNumberOfProducts);
  }, [visibleProducts, totalNumberOfProducts]);

  return {
    visibleProducts,
    loadMore,
    hasLoading,
    allDataLoaded,
  };
};

export default useLoadMoreProducts;
