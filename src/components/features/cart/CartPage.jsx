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
import useAuthentication from "../../../hooks/useAuthentication";
import UserNotAuthenticated from "../userDetails/UserNotAuthenticated";
import { PROCEED_TO_PAYMENT } from "../../../utils/constants/routerPathVariable";

const CartPage = () => {
  const cartProducts = useCartData();
  const navigate = useNavigate();
  function proceedToPayment() {
    navigate(PROCEED_TO_PAYMENT);
  }

  const total = calculateQuantityOfProducts(cartProducts);
  const totalPrice = calculateTotalOfProducts(cartProducts);
  const { user, isAuthenticated } = useAuthentication();

  if (!isAuthenticated) {
    return <UserNotAuthenticated />;
  }
  return (
    <>
      {cartProducts.length >= 1 ? (
        <h1 className="text-center mt-3">
          <span>{user?.nickname?.charAt(0)?.toLocaleUpperCase()}</span>
          <span>{user?.nickname?.slice(1)}</span>
          <span>'s</span>
          <span> Bag</span> {/**add dynamically user login name */}
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
