import {
  decrementCart,
  incrementCart,
} from "../../../store/reducer/cartSlicer";

const decrementDataFromCart = (dispatch, products) => {
  return dispatch(decrementCart(products));
};

const incrementDataFromCart = (dispatch, products) => {
  return dispatch(incrementCart(products));
};

const calculateQuantityOfProducts = (products) => {
  return products.reduce((accm, elm) => accm + elm.quantity, 0);
};

const calculateTotalOfProducts = (products) => {
  const priceIncrease=22
  return products.reduce((accm, elm) => accm + (elm.price*priceIncrease) * elm.quantity, 0);
};

export {
  decrementDataFromCart,
  incrementDataFromCart,
  calculateQuantityOfProducts,
  calculateTotalOfProducts,
};
