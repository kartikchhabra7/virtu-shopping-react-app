import React from "react";
import { useNavigate } from "react-router-dom";
import useCartData from "../../../hooks/useCartData";
import CartItemCard from "./CartItemCard";
import Button from "../../common/button/Button";
import CartTotal from "./CartTotal";
import {
  calculateQuantityOfProducts,
  calculateTotalOfProducts,
} from "../../../utils/helper/cart/cartHelper";

const CartPage = () => {
  const cartProducts = useCartData();

  const navigate = useNavigate();
  function proceedToPayment() {
    navigate("/proceed-to-payment");
  }

  const total = calculateQuantityOfProducts(cartProducts);
  const totalPrice = calculateTotalOfProducts(cartProducts);

  return (
    <>
      {cartProducts.length >= 1 ? (
        <h1 className="text-center mt-3">
          My Bag {/**add dynamically user login name */}
        </h1>
      ) : (
        <h1 className="text-center mt-3">Oh No! My Cart is Empty,☹️</h1>
      )}
      <div className="container">
        <div className="row">
          {cartProducts.map((products) => {
            return <CartItemCard key={products.id} products={products} />;
          })}
        </div>
      </div>

      {cartProducts.length >= 1 && <CartTotal {...{ total, totalPrice }} />}

      {cartProducts.length >= 1 && (
        <div className="d-flex justify-content-center align-items-center mt-4">
          <Button
            label="Proceed to Payment"
            className="btn btn-success mb-5"
            onClick={proceedToPayment}
          />
        </div>
      )}
    </>
  );
};

export default CartPage;
