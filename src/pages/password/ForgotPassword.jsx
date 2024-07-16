import React from "react";
import "./Style.css";
import img from "../../assets/images/forgotpassword.png";
import logo from "../../assets/images/Logo.png";
import { IoArrowBack } from "react-icons/io5";

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="left">
          <img src={img} alt="Forgot Password" />
        </div>
        <div className="right">
          <img src={logo} alt="soc-logo" />
          <h1>Forgot Password</h1>
          <p>Enter your details below</p>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <button className="btn">Send OTP</button>
          <button type="submit" className="btn back-btn">
            <IoArrowBack size={25} />
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
