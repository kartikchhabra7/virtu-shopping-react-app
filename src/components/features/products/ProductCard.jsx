//old working code
import React, { useRef } from "react";
import "./ProductCard.css";
import {
  priceIncrease,
  productTitle,
} from "../../../utils/helper/products/productHelper";

import { FaRupeeSign } from "react-icons/fa6";
import { addToCart, incrementCart } from "../../../store/reducer/cartSlicer";
import { useDispatch } from "react-redux";
// import useLocalStorage from "../../../services/storage/useLocalStorage";

import { showSuccessNotification } from "../../notifications/notificationService";
import useCartData from "../../../hooks/useCartData";
import { quantityConfirmation } from "../../notifications/quantityConfirmation";

const ProductCard = ({ products }) => {
  // const { isValueStored, updateValue } = useLocalStorage(
  //   `added ${products.id}`,
  //   false
  // );
  const cartItems = useCartData();
  const isItemInCart = cartItems.some((item) => item.id === products.id);

  const altTitle = "image not found";
  const dispatch = useDispatch();
  const refElement = useRef();
  const addTocart = (products) => {
    if (!isItemInCart) {
      // Only add to cart if the item is not already in the cart
      dispatch(addToCart(products));
      showSuccessNotification("Added to Cart");
    } else {
      quantityConfirmation(() => dispatch(incrementCart(products.id)));
    }
  };
  // useEffect(() => {
  //   if (isValueStored) {
  //     refElement.current.innerText = "Added";
  //     refElement.current.disabled = true;
  //   }
  // }, [isValueStored]);
  return (
    <>
      <div
        className={`col-xl-3 col-lg-4 col-md-6 col-sm-12 my-5 shadow-lg-5 mb-5         }`}
      >
        <div className="card">
          <img
            className="card-img-top"
            src={products.image}
            alt={altTitle}
            height={"300px"}
          />
          <div className="card-footer">
            <p className="card-title">
              {productTitle(products, 0, 24)} {products.id} D-
              {products.discount}
            </p>
            <p className="card-text">
              <strong>Brand:</strong> {products.brand}
            </p>
            <p className="card-title text-center">
              <FaRupeeSign /> <strong>{priceIncrease(products, 22)}</strong>
            </p>
          </div>
          <div className="card">
            <button
              ref={refElement}
              className="btn myBtn"
              onClick={() => addTocart(products)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
