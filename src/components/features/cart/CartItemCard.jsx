import React from "react";
import { FaRupeeSign } from "react-icons/fa6";

import {
  priceIncrease,
  productTitle,
} from "../../../utils/helper/products/productHelper";
import { removeCart } from "../../../store/reducer/cartSlicer";
import { deleteConfirmation } from "../../notifications/deleteConfirmation";
import { useDispatch } from "react-redux";
import {
  decrementDataFromCart,
  incrementDataFromCart,
} from "../../../utils/helper/cart/cartHelper";


const CartItemCard = ({ products }) => {
  const altTitle = "image not found";

  const dispatch = useDispatch();

  const handleDecrement = (products) => {
    decrementDataFromCart(dispatch, products);
  };

  const handleIncrement = (products) => {
    incrementDataFromCart(dispatch, products);
  };

  const { id, image, discount, brand, quantity } = products;
  return (
    <>
      <div
        key={products.id}
        className={`col-xl-3 col-lg-4 col-md-6 col-sm-12 my-5 shadow-lg-5 mb-5`}
      >
        <div className="card">
          <img
            className="card-img-top"
            src={image}
            alt={altTitle}
            height={"300px"}
          />
          <div className="card-footer">
            <p className="card-title">
              {productTitle(products, 0, 24)} {id} D-
              {discount}
            </p>
            <p className="card-text">
              <strong>Brand:</strong> {brand}
            </p>
            <p className="card-title text-center">
              <FaRupeeSign /> <strong>{priceIncrease(products, 22)}</strong>
            </p>
          </div>
          <hr />

          <div className="card-body">
            <div className="d-flex mx-auto mt-2 justify-content-between align-items-center">
              {quantity === 1 ? (
                <button
                  className="btn text-danger"
                  onClick={() =>
                    deleteConfirmation(() => dispatch(removeCart(products.id)))
                  }
                >
                  <h5>
                    <i
                      className="fa-solid fa-trash-can fa-beat-fade"
                      aria-hidden="true"
                    ></i>
                  </h5>
                </button>
              ) : (
                <button className="btn " onClick={()=>handleDecrement(id)}>
                  <h5>
                    <i
                      className="fa-solid fa-minus fa-beat-fade"
                      aria-hidden="true"
                    ></i>
                  </h5>
                </button>
              )}

              <h2 className="text-primary fw-bolder">{quantity}</h2>

              <button className="btn" onClick={() => handleIncrement(id)}>
                <h5>
                  {" "}
                  <i className="fa-solid fa-plus fa-beat-fade"></i>
                </h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemCard;
