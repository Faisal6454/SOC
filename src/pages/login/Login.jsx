// src/Pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/images/LoginLogo.png';
import characters from '../../assets/images/img.png';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Assume login is successful
      navigate('/otp');
    };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={logo} alt="Logo" className="login-logo" />
        <h1 className="login-title">SOC Login</h1>
        <p className="login-subtitle">Please fill your details to access your account.</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="soc.login@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" name="remember" />
              <label for="remember">Remember me</label>
            </div>
            <a href="/" className="forgot-password">Forgot Password ?</a>
          </div>
          <button type="submit" className="login-button">Sign in</button>
        </form>
        <p className="signup-option">Don’t have an account ? <a href="/">Sign up</a></p>
      </div>
      <div className="login-right">
        <img src={characters} alt="Characters" className="login-characters" />
      </div>
    </div>
  );
};

export default Login;
