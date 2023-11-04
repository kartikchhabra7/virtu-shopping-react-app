import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../common/button/Button";
import { validateschema } from "../../../utils/helper/validation/formValidation";
import { useNavigate } from "react-router-dom";
import CaptchaContainer from "../googleCaptcha/CaptchaContainer";

const ShippingForm = () => {
  const navigate = useNavigate();

  function goToConfirmedPage(values) {
    console.log(values);
    navigate("/order-confirmed");
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
          <h1 className="text-center">Create Form</h1>
          <div className="container create-container">
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
                  <CaptchaContainer/>
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
        </Form>
      </Formik>
    </>
  );
};

export default ShippingForm;
