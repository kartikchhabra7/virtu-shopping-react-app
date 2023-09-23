import React from "react";

import { filterProductByType } from "../../utils/helper/products/productHelper";
import ProductCard from "../../components/features/products/ProductCard";
import useProductData from "../../hooks/useProductData";
import useLoadMoreProducts from "../../hooks/useLoadMoreProducts";
import LoadMoreButton from "../../components/controls/pagination/LoadMoreButton";
import useProductPriceFilter from "../../hooks/useProductPriceFilter";
import useProductTitleFilter from "../../hooks/useProductTitleFilter";
import { sportsButtonCategories } from "../../utils/constants/products";
import Dropdown from "../../components/controls/dropdown/DropDown";
import FilterProductTitle from "../../components/controls/filterButton/FilterProductTitle";
const SportsPage = () => {
  const allProducts = useProductData();
  const sportsProducts = filterProductByType(allProducts, "sports");
  const { visibleProducts, loadMore, hasLoading, allDataLoaded } =
    useLoadMoreProducts(sportsProducts.length);
  const { selectedProductTitle, handleCategoryButtonClick, filteredProducts } =
    useProductTitleFilter("All", sportsProducts);

  const { sortProductPrice, handleForPriceFilter } =
    useProductPriceFilter(filteredProducts);
  return (
    <>
      <div className="container mt-3">
        <div className="d-flex justify-content-between">

        <div>
        {sportsButtonCategories.map((title, index) => (
          <FilterProductTitle //used for filtered data with button
          key={index}
          {...{ title, handleCategoryButtonClick, selectedProductTitle }}
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
    </>
  );
};

export default SportsPage;
