import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./LoginForm.css";
import LoginImg from "../../assets/images/LoginForm.png"; // Ensure the image path is correct
import Logo from "../../assets/images/Logo.png";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="container">
      <div className="box-area">
        <div className="left-box">
          <img src={LoginImg} alt="Featured" />
        </div>
        <div className="right-box">
          <div className="header-text">
            <img src={Logo} alt="logo" className="logo" />
            <h2>SOC Login</h2>
            <p>Enter your details below</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form>
                <div className="input-group">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-group">
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                  <i
                    onClick={togglePasswordVisibility}
                    className="password-toggle"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </i>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-group">
                  <button type="submit" className="btn btn-primary">
                    Log in
                  </button>
                </div>
                <div className="check-group">
                  <div className="form-check">
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      name="rememberMe"
                    />
                    <label htmlFor="rememberMe" className="form-check-label">
                      Remember
                    </label>
                  </div>
                  <div className="forgot">
                    <small>
                      <a href="/forgot-password">Forgot password?</a>
                    </small>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
