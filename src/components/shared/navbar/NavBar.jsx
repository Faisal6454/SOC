import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { BsBellFill } from "react-icons/bs";
import { HiOutlineSearch } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

function NavBar({ toggleSidebar }) {
  const [activeLink, setActiveLink] = useState("/");
  const [isSidebarOpen] = useState(true);
  const location = useLocation();
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    let currentPage = pathParts[pathParts.length - 1] || "layout"; // default to "layout" if the path is empty
    if (location.pathname === "/layout") {
      currentPage = "dashboard";
    }
    setActiveLink(capitalize(currentPage));
  }, [location.pathname]);
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <h2>{activeLink}</h2>
      </div>
      <div className='navbar-right'>
        <div className="icon-container">
          <BsBellFill className="icon" />
          <span className="notification-dot"></span>
        </div>
        <div className="search-bar">
          <HiOutlineSearch fontSize={20} className="search-bar-icon" />
          <input
            type="text"
            placeholder="Search here"
            className="search-bar-input"
          />
        </div>
      </div>
      <div className='toggle-button' onClick={toggleSidebar}>
        &#9776; {/* Hamburger menu icon */}
      </div>
    </nav>
  );
}

export default NavBar;
