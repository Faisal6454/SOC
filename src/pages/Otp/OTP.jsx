import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTP.css';

import Logo from "../../assets/images/LoginLogo.png";
import Img from "../../assets/images/img.png";

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
      <div className="otp-form">
        <img src={Logo} alt="Logo" className="logo" />
        <h2>Enter Code</h2>
        <form onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {otp.map((data, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              );
            })}
          </div>
          <button type="submit" className="submit-btn">Submit</button>
          <p className="resend-code">Resend Code</p>
        </form>
      </div>
      <div className="otp-image">
        <img src={Img} alt="OTP Illustration" />
      </div>
    </div>
  );
};

export default Otp;
