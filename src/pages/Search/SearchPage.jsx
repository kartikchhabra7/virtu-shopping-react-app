import React, { useEffect, useRef, useState } from "react";
import "./SearchPage.css";
import { useKeyboardShortcut } from "../../utils/helper/layout/searchHelpers";
import useProductData from "../../hooks/useProductData";
import ProductCard from "../../components/features/products/ProductCard";
import Input from "../../components/common/input/Input";
import usePlaceholder from "../../hooks/usePlaceHolder";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [inputClicked, setInputClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const hotKeysInputRef = useRef(null);
  const allProducts = useProductData();
  const placeholder = usePlaceholder();

  const SearchProducts = () => {
    const filterProducts = allProducts?.filter((products) => {
      return searchQuery
        ? products.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
    });

    const storeProducts = filterProducts?.map((products) => {
      return <ProductCard key={products.id} products={products} />;
    });

    return (
      <>
        {storeProducts?.length > 0 ? (
          storeProducts
        ) : (
          <h1
            className="product-not-found"
          >
            Product not found
          </h1>
        )}
      </>
    );
  };

  useEffect(() => {
    hotKeysInputRef.current.focus();
  }, []);

  useKeyboardShortcut("/", () => {
    hotKeysInputRef.current.focus();
    setInputClicked(false);
  });

  useKeyboardShortcut("ctrl+k", () => {
    hotKeysInputRef.current.focus();
    setInputClicked(false);
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center">
              <Input
                className="form-control me-2"
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                ref={hotKeysInputRef}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search"
                style={{ maxWidth: "950px" }}
              />
              {!searchQuery ? (
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              ) : (
                <button
                  className="btn btn-warning"
                  onClick={() => setSearchQuery("")}
                >
                  Cancel
                </button>
              )}
            </div>

            <div>
              <button className="btn btn-primary" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/*  */}
      {searchQuery && (
        <div className="container">
          <div className="row">
            <SearchProducts />
          </div>
        </div>
      )}
      {!inputClicked && !searchQuery && (
        <div className="search-anything">
          <ul>
            <li>S</li>
            <li>E</li>
            <li>A</li>
            <li>R</li>
            <li>C</li>
            <li>H</li>
            <li>&nbsp;</li>
            <li>A</li>
            <li>N</li>
            <li>Y</li>
            <li>T</li>
            <li>H</li>
            <li>I</li>
            <li>N</li>
            <li>G</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchPage;

/*
I can also directly pass this function in the Header file.
but I passed with a helper function so that duplication will
be avoided for multiple purposes.

useHotkeys("/", (reload) => {
    reload.preventDefault();
    hotKeysInputRef.current.focus();
  });


  */
