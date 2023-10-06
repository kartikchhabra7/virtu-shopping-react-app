import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaContainer = () => {
  return (
    <>
      <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
    </>
  );
};

export default CaptchaContainer;
