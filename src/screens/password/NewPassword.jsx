import React, { useState } from "react";
import "./Style.css";
import img from "../../assets/images/newpassword.png";
import logo from "../../assets/images/Logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const NewPassword = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  
    const initialValues = {
      password: "",
      rePassword: "",
    };
  
    const validationSchema = Yup.object({
      password: Yup.string().required("Required"),
      rePassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    });
  
    const onSubmit = (values) => {
      console.log("Form data", values);
      // Assume login is successful
      navigate("/otp");
    };
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return (
        <>
         <div className="container">
      <div className="row">
        <div className="left">
          <img src={img} alt="New Password" />
        </div>
        <div className="right">
          <div className="right-header">
            <img src={logo} alt="soc-logo" className="logo" />
            <h1>Create New Password</h1>
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
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                  <span onClick={toggleShowPassword} className="password-toggle">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-group">
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="rePassword"
                    name="rePassword"
                    placeholder="Re-enter Password"
                    className="form-control"
                  />
                  <span onClick={toggleShowPassword} className="password-toggle">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <ErrorMessage
                    name="rePassword"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="btn-group">
                  <button type="submit" className="btn">Set Password</button>
                  <Link to="/forgotpassword" className="back-btn">
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
        </>
    );
};

export default NewPassword;