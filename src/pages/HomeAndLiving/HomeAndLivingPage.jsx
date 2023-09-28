import React from "react";
import { filterProductByType } from "../../utils/helper/products/productHelper";
import ProductCard from "../../components/features/products/ProductCard";
import useProductData from "../../hooks/useProductData";
import useLoadMoreProducts from "../../hooks/useLoadMoreProducts";
import LoadMoreButton from "../../components/controls/pagination/LoadMoreButton";
import useProductPriceFilter from "../../hooks/useProductPriceFilter";
import useProductTitleFilter from "../../hooks/useProductTitleFilter";
import Dropdown from "../../components/controls/dropdown/DropDown";
import FilterProductTitle from "../../components/controls/filterButton/FilterProductTitle";
import { homeLivingButtonCategories } from "../../utils/constants/products";
import useLoading from "../../hooks/useLoading";
import LoaderContainer from "../../components/common/loaderbar/LoaderContainer";

const HomeAndLivingPage = () => {
  const allProducts = useProductData();
  const { hasLoad } = useLoading();
  const homeAndLiving = filterProductByType(allProducts, "homeandliving");
  const { visibleProducts, loadMore, hasLoading, allDataLoaded } =
    useLoadMoreProducts(homeAndLiving.length);
  const { selectedProductTitle, handleCategoryButtonClick, filteredProducts } =
    useProductTitleFilter("All", homeAndLiving);

  const { sortProductPrice, handleForPriceFilter } =
    useProductPriceFilter(filteredProducts);
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
              {homeLivingButtonCategories?.map((title, index) => (
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
                return <ProductCard key={products.id} products={products} />;
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

export default HomeAndLivingPage;
