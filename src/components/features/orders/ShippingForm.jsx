import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../common/button/Button";
import { validateschema } from "../../../utils/helper/validation/formValidation";
import { useNavigate } from "react-router-dom";
import CaptchaContainer from "../googleCaptcha/CaptchaContainer";
import barcode from "../../../assets/images/barcode.png";
import { ORDER_CONFIRMED } from "../../../utils/constants/routerPathVariable";
const ShippingForm = () => {
  const navigate = useNavigate();

  function goToConfirmedPage(values) {
    console.log(values);
    navigate(ORDER_CONFIRMED);
  }

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          contact: "",
          address: "",
        }}
        validationSchema={validateschema}
        onSubmit={goToConfirmedPage}
      >
        <Form>
          <h1 className="text-center">
            Hello ,User {/**Add dynamically user name */}
          </h1>
          <section className="d-flex justify-content-center mt-5">
            <div className="container create-container w-50">
              <div className="row mb-4">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field
                      id="name"
                      name="name"
                      className="form-control"
                      type="text"
                      placeholder="Enter name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      id="email"
                      name="email"
                      className="form-control"
                      type="text"
                      placeholder="Enter email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <Field
                      id="number"
                      name="contact"
                      className="form-control"
                      type="number"
                      placeholder="Enter Contact No."
                    />
                    <ErrorMessage
                      name="contact"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <Field
                      id="address"
                      name="address"
                      className="form-control"
                      type="text"
                      placeholder="Enter Your address"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-group">
                    <CaptchaContainer />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {
                    <Button
                      text="SUBMIT"
                      type="submit"
                      label="Confirm"
                      className="btn btn-outline-primary"
                    />
                  }
                </div>
              </div>
            </div>

            {/* payment container */}
            <PaymentContainer />
          </section>
        </Form>
      </Formik>
    </>
  );
};

export default ShippingForm;

function PaymentContainer() {
  return (
    <>
      <div className="mt-2">
        <div className="card text-center">
          <div className="card">
            <div className="card-header">
              <div className="card-header">
                <h1 className=" fw-bold">
                  <span style={{ color: "#00308F" }}>P</span>
                  <span style={{ color: "#00308F" }}>A</span>
                  <span style={{ color: "#00308F" }}>Y</span>
                  <span className="text-primary">T</span>
                  <span className="text-primary">M</span>
                </h1>
                <h6 className=" fw-bolder">Accepted Here</h6>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <img src={barcode} alt="barcode " />
            </h5>
            <h6 className="card-text">
              Make secure payments using our Paytm gateway. You can pay with
              confidence.
            </h6>
          </div>
          <div className="card-footer text-body-secondary">
            <h5>
              <span className="mx-1" style={{ color: "#00308F" }}>
                P
              </span>
              <span className="mx-1" style={{ color: "#00308F" }}>
                A
              </span>
              <span className="mx-1" style={{ color: "#00308F" }}>
                Y
              </span>
              <span className="text-primary mx-1">T</span>
              <span className="text-primary mx-1">M</span>
              &nbsp;&nbsp;<span className="text-dark">से</span>
              &nbsp;&nbsp;
              <span className="mx-1">U</span>
              <span className="mx-1">P</span>
              <span className="mx-1">I</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
