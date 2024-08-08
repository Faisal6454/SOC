import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { BsBellFill } from "react-icons/bs";
import { HiOutlineSearch } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import { RiArrowLeftSLine } from "react-icons/ri";

function NavBar({ toggleSidebar }) {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    let currentPage = pathParts[pathParts.length - 1] || "layout"; // default to "layout" if the path is empty
    if (location.pathname === "/layout") {
      currentPage = "dashboard";
    }
    setActiveLink(capitalize(currentPage));
  }, [location.pathname]);

  // Define the form routes
  const formRoutes = ["/admin/company", "/admin/tools"]; // Adjust these routes to match your form routes

  // Determine if the current page is a form page
  const isFormPage = formRoutes.includes(location.pathname);

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        {isFormPage && (
          <div className="back-arrow">
            <Link onClick={() => navigate(-1)}> {/* Go back to the previous page */}
              <RiArrowLeftSLine size={25} color="white" />
            </Link>
          </div>
        )}
        <h2>{activeLink === 'Dashboard' ? "Welcome to SOC" : ''} {activeLink}</h2>
      </div>
      <div className='navbar-right'>
        <div className="search-bar">
          <HiOutlineSearch fontSize={20} className="search-bar-icon" />
          <input
            type="text"
            placeholder="Search here"
            className="search-bar-input"
          />
        </div>
        <div className="icon-container">
          <BsBellFill className="icon" />
          <span className="notification-dot"></span>
        </div>
        <DropdownMenu /> {/* Include the DropdownMenu component */}
      </div>
      <div className='toggle-button' onClick={toggleSidebar}>
        &#9776; {/* Hamburger menu icon */}
      </div>
    </nav>
  );
}

export default NavBar;
