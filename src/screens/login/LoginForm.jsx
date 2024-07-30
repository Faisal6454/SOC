import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./LoginForm.css";
import LoginImg from "../../assets/images/Login.png"; // Ensure the image path is correct
import Logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleLogin = (e) => {
    e.preventDefault();
    // Assume login is successful
    navigate('/otp');
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
            <h1>SOC Login</h1>
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
                <div className="input-group">
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
                      <a href="/forgotpassword">Forgot password?</a>
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
