import React from 'react';
import "./UserNavbar.css";
import { BsBellFill } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";


const Navbar = ({toggleSidebar}) => {
  return (
    <>
       <header className="dashboard-header">
            <div className="dashboard-header-left">
              <h2>Hello, Alec Austin</h2>
              <h1>Welcome to SOC Dashboard</h1>
            </div>
            <div className="dashboard-header-right">
              <div className="user-search-bar">
                <div className="user-search-icon">
                  <HiMiniMagnifyingGlass size={25} />    
                </div>      
                <input type="text" placeholder="Search here..." />
              </div>
              <div className="user-icons">
                <div className="user-icon bell-icon">
                  <BsBellFill size={25} />      
                  <span className="user-notification-dot"></span>
                </div>
                <div className="user-icon profile-icon"></div>
              </div>
        </div>
        <div className='toggle-button' onClick={toggleSidebar}>
        &#9776; {/* Hamburger menu icon */}
      </div>
          </header>
    </>
  );
};

export default Navbar;