import React from "react";
import ProductCard from "../../components/features/products/ProductCard";
import { filterProductByType } from "../../utils/helper/products/productHelper";
import LoadMoreButton from "../../components/controls/pagination/LoadMoreButton";
import useLoadMoreProducts from "../../hooks/useLoadMoreProducts";
import useProductData from "../../hooks/useProductData";
import useProductTitleFilter from "../../hooks/useProductTitleFilter";
import FilterProductTitle from "../../components/controls/filterButton/FilterProductTitle";
import Dropdown from "../../components/controls/dropdown/DropDown";
import useProductPriceFilter from "../../hooks/useProductPriceFilter";
import { menButtonCategories } from "../../utils/constants/products";

const MenPage = () => {
  const allProducts = useProductData();
  const menProducts = filterProductByType(allProducts, "men");

  const { visibleProducts, loadMore, hasLoading, allDataLoaded } =
    useLoadMoreProducts(menProducts.length);

  const { selectedProductTitle, handleCategoryButtonClick, filteredProducts } =
    useProductTitleFilter("All", menProducts);

  const { sortProductPrice, handleForPriceFilter } =
    useProductPriceFilter(filteredProducts);

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between">
        <div>
          {menButtonCategories.map((title, index) => (
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
          {filteredProducts?.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
        </div>
      </div>

      {selectedProductTitle === "All" && (
        <LoadMoreButton {...{ hasLoading, allDataLoaded, loadMore }} />
      )}
    </div>
  );
};

export default MenPage;

/*-------------------------------POINTS TO BE REMEMBEER------------------------------------ */

/*

1.useProduct data - > used data from store i saved all data for multiple pages in custom hooks
 so that i can easily reusable

2.filterProductByType -> basically that type is used for pages routes create one function as a
 helper for multiple pages to filtered data their type (like for men page type would be men,for women
  would be women,kids for kids and so on)

3.useLoadMoreproducts -> used pagination from custom hooks logic will be same for all files just
 changes the data with the help custom hooks its is usable for all pages because onloading page i
 dont want to show all data so i created one button "load more" if we click on this button then it wil
 our products via onclick

4.useProductTitleFilter -> filter data via product title also used custom hooks for reusable with the 
help of this hooks data is filtered by button like(shirt,tshirt,hoodie,jacket) that are button names

5.useProductPriceFilter -> filter data via product price also used custom hooks for reusable with the 
help of this hooks data is filtered by dropdown like(lowest,highest,A-Z,Z-A) that are button names


6.Controllers - > we can directly pass button instead of filterProductTitle
            <Button
            key={index}
            label={title}
            className={`btn btn-outline-primary mx-1 ${
              selectedProductTitle === title ? "active" : ""
            }`}
            onClick={() => handleCategoryButtonClick(title)}
          />

but it is not a good approach because I used the button component as a normal button.
And in this button, I used many functionality,and I used the button self-closing tag, 
so I think if I will pass directly button 
then, it will create lots of confusion.


*/
