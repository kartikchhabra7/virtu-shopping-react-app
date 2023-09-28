import React from "react";

import { filterProductByType } from "../../utils/helper/products/productHelper";
import ProductCard from "../../components/features/products/ProductCard";
import useProductData from "../../hooks/useProductData";
import useLoadMoreProducts from "../../hooks/useLoadMoreProducts";
import LoadMoreButton from "../../components/controls/pagination/LoadMoreButton";
import { kidsButtonCategories } from "../../utils/constants/products";
import useProductPriceFilter from "../../hooks/useProductPriceFilter";
import useProductTitleFilter from "../../hooks/useProductTitleFilter";
import FilterProductTitle from "../../components/controls/filterButton/FilterProductTitle";
import Dropdown from "../../components/controls/dropdown/DropDown";
import useLoading from "../../hooks/useLoading";
import LoaderContainer from "../../components/common/loaderbar/LoaderContainer";

const KidsPage = () => {
  const allProducts = useProductData();
  const { hasLoad } = useLoading();
  const kidsProducts = filterProductByType(allProducts, "kids");
  const { visibleProducts, loadMore, hasLoading, allDataLoaded } =
    useLoadMoreProducts(kidsProducts.length);
  const { selectedProductTitle, handleCategoryButtonClick, filteredProducts } =
    useProductTitleFilter("All", kidsProducts);

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
              {kidsButtonCategories?.map((title, index) => (
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

export default KidsPage;
