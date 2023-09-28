import React from "react";
import ProductCard from "../../components/features/products/ProductCard";
import { filterProductByType } from "../../utils/helper/products/productHelper";
import useProductData from "../../hooks/useProductData";
import useLoadMoreProducts from "../../hooks/useLoadMoreProducts";
import LoadMoreButton from "../../components/controls/pagination/LoadMoreButton";
import useProductTitleFilter from "../../hooks/useProductTitleFilter";
import { womenButtonCategories } from "../../utils/constants/products";
import FilterProductTitle from "../../components/controls/filterButton/FilterProductTitle";
import Dropdown from "../../components/controls/dropdown/DropDown";
import useProductPriceFilter from "../../hooks/useProductPriceFilter";
import useLoading from "../../hooks/useLoading";
import LoaderContainer from "../../components/common/loaderbar/LoaderContainer";
const WomenPage = () => {
  const allProducts = useProductData();
  const { hasLoad } = useLoading();
  const womenProducts = filterProductByType(allProducts, "women");
  const { visibleProducts, loadMore, hasLoading, allDataLoaded } =
    useLoadMoreProducts(womenProducts.length);

  const { selectedProductTitle, handleCategoryButtonClick, filteredProducts } =
    useProductTitleFilter("All", womenProducts);

  const { sortProductPrice, handleForPriceFilter } =
    useProductPriceFilter(filteredProducts);
  // const allProducts = useSelector((state) => state.productsData);
  // const womenProducts = allProducts.filter((product) => product.type === "women");

  return (
    <>
      {hasLoad ? (
        <span>
          <LoaderContainer />
        </span>
      ) : (
        <div className="container mt-3">
          <div className="d-flex justify-content-between">
            <div>
              {womenButtonCategories?.map((title, index) => (
                <FilterProductTitle //used for filtered data with button
                  key={index}
                  {...{
                    title,
                    handleCategoryButtonClick,
                    selectedProductTitle,
                  }}
                />
              ))}
            </div>

            <Dropdown {...{ sortProductPrice, handleForPriceFilter }} />
          </div>
          <div className="container">
            <div className="row">
              {filteredProducts?.slice(0, visibleProducts).map((products) => {
                return <ProductCard products={products} key={products.id} />;
              })}
            </div>
          </div>
          {selectedProductTitle === "All" && (
            <LoadMoreButton {...{ hasLoading, allDataLoaded, loadMore }} />
          )}
        </div>
      )}
    </>
  );
};

export default WomenPage;
