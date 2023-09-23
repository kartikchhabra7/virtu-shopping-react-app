import React from "react";

const CartTotal = ({total,totalPrice}) => {
  return (
    <>
      <div className="card w-25 mx-auto">
        <div className="card-body">
          <h5 className="card-title">Total</h5>
          <p className="card-text">TotalAmount:&nbsp;{totalPrice}</p>
          <p className="card-text">TotalQuantity:{total}&nbsp;</p>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
