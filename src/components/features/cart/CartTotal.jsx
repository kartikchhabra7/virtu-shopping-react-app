import React, { useState, useEffect } from "react";
import { COUPON_CODE_KART10 } from "../../../utils/constants/constants";

const CartTotal = ({
  totalQuantity,
  totalPriceAfterDiscount,
  applyCouponCode,
}) => {
  /* */

  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    applyCouponCode(couponCode);
  }, [couponCode, applyCouponCode]);

  return (
    <>
      <div className="card w-25 mx-auto">
        <div className="card-body">
          <h5 className="card-title">Total</h5>
          <p className="card-text">
            TotalAmount:&nbsp;{totalPriceAfterDiscount.toFixed(0)}
          </p>
          <p className="card-text">TotalQuantity:{totalQuantity}&nbsp;</p>
          <label htmlFor="">Coupon Code : </label>{" "}
          <input type="text" onChange={(e) => setCouponCode(e.target.value)} />
          {couponCode && (
            <section className="mt-1 text-center">
              {couponCode === COUPON_CODE_KART10 ? (
                <span className="text-success">Coupon is valid</span>
              ) : (
                <span className="text-danger">Invalid Coupon</span>
              )}
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default CartTotal;
