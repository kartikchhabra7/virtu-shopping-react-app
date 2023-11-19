import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaContainer = () => {
  const siteKey = process.env.REACT_APP_SITE_KEY;
  return (
    <>
      <ReCAPTCHA sitekey={siteKey} />
    </>
  );
};

export default CaptchaContainer;
