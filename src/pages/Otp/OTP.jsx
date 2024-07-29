import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './OTP.css';

import Logo from "../../assets/images/Logo.png";
import Img from "../../assets/images/otp.png";
import { IoArrowBack } from "react-icons/io5";


const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assume OTP is verified successfully
    navigate('/layout');
  };

  return (
    <div className="otp-container">
      <div className="box-area">
        <div className="left-box">
          <img src={Img} alt="OTP Illustration" />
        </div>
        <div className="otp-form">
          <img src={Logo} alt="Logo" className="logo" />
          <h2>OTP Verification</h2>
          <p>Enter your details below</p>
          <form onSubmit={handleSubmit}>
            <div className="otp-inputs">
              {otp.map((data, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>
            <p className="resend-code">Resend OTP?</p>
            <button type="submit" className="submit-btn">
              Verified
            </button>
            <Link to="/" type="submit" className="back-btn">
              <IoArrowBack size={25} />
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
