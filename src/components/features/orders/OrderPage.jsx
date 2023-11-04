import React from "react";
import ShippingForm from "./ShippingForm";

const OrderPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* Proceed to payment */}
          <ShippingForm />
        </div>
      </div>
    </>
  );
};

export default OrderPage;
