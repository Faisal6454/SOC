import React, { useState } from "react";
import "./Style.css";
import img from "../../assets/images/forgotpassword.png";
import logo from "../../assets/images/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");

 

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),

  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Assume login is successful
    navigate("/newpassword");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="left">
          <img src={img} alt="Forgot Password" />
        </div>
        <div className="right">
          <div className="right-header">
            <img src={logo} alt="soc-logo" className="logo" />
            <h1>Forgot Password</h1>
            <p>Enter your details below</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form onSubmit={handleLogin}>
                <div className="input-group">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="btn-group">
                  <button className="btn">Send OTP</button>
                  <Link to="/" type="submit" className="back-btn">
                       <IoArrowBack size={25} />
                          Back
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
