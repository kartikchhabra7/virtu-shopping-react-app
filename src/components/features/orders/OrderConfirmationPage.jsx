import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./OrderConfirmation.css";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../../utils/constants/routerPathVariable";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="order-confirmation-container">
        <div className="order-confirmation">
          <div className="confirmation-icon">
            <FaCheckCircle />
          </div>

          <h1>Thank You for Your Order!</h1>
          <p>
            Your order has been successfully delievered within 4-5 working days.
          </p>
          <p>An email with the order details will be sent to you shortly.</p>

          <div className="about-me">
            <p>
              About Me: I am a skilled front-end developer and dedicated
              freelancer. I take pride in delivering high-quality projects that
              exceed expectations. If you are impressed by this project and
              would like to collaborate, feel free to connect with me.
            </p>
          </div>

          <p className="contact-support">
            Contact me:{" "}
            <span className="text-danger fw-bolder fs-6">
              kartikchhabra026@gmail.com
            </span>{" "}
          </p>
        </div>
      </section>
      <div className="text-center">
        <button
          className="btn home-button fs-4 "
          onClick={() => navigate(HOME)}
        >
          Go To Home
        </button>
      </div>
    </>
  );
};

export default OrderConfirmation;
