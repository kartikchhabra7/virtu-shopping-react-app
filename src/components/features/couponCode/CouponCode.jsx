import React, { useState } from 'react';
import './CouponCode.css';
import { COUPON_CODE_KART10 } from '../../../utils/constants/constants';

const CouponCodeHeader = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <>
      {!isClosed && (
        <div className="coupon-code-header-container">
          <div className="coupon-code-header">
            <span className="coupon-code">USE CODE: {COUPON_CODE_KART10}</span>
            <span className="alert-message">🌟 Enjoy 10% Discount on Your Purchase! 🌟</span>
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CouponCodeHeader;
