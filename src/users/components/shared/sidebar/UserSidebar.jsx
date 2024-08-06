import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./UserSidebar.css";

// icons
import Logo from "../../../../assets/images/Logo.png";
import DashboardIcon from "../../../../assets/icons/dashboard.svg";
import ToolsIcon from "../../../../assets/icons/tools.svg";
import { RiUserFill } from "react-icons/ri";
import LogoutIcon from "../../../../assets/icons/Logout.png";

const UserSidebar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
    if (!location.pathname.startsWith("/user/usertools")) {
      setIsToolsDropdownOpen(false); // Close the dropdown when navigating to a different main link
    }
  }, [location.pathname]);

  const handleMainLinkClick = (link) => {
    setActiveLink(link);
    if (link !== "/user/usertools") {
      setIsToolsDropdownOpen(false); // Close the dropdown when a main link is clicked
    }
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  const handleDropdownLinkClick = (link) => {
    setActiveLink(link);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  const toggleToolsDropdown = () => {
    setIsToolsDropdownOpen(!isToolsDropdownOpen);
  };

  return (
    <div className={`user-sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div>
        <div className="user-sidebar-head">
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <ul>
          <li
            className={activeLink === "/user" ? "active" : ""}
            onClick={() => handleMainLinkClick("/user")}
          >
            <img src={DashboardIcon} alt="Dashboard" />
            <NavLink to="/user">Dashboard</NavLink>
          </li>
          <li
            className={activeLink === "/user/usertools" ? "active" : ""}
            onClick={() => {
              handleMainLinkClick("/user/usertools");
              toggleToolsDropdown();
            }}
          >
            <img src={ToolsIcon} alt="Tools" />
            <NavLink to="/user/usertools">Tools</NavLink>
          </li>
          {isToolsDropdownOpen && (
            <ul className="tools-dropdown">
              <li
                className={activeLink === "/user/mdmtool" ? "active" : ""}
                onClick={() => handleDropdownLinkClick("/user/mdmtool")}
              >
                <NavLink to="/user/mdmtool">MDM Tool</NavLink>
              </li>
              <li
                className={activeLink === "/user/abctool" ? "active" : ""}
                onClick={() => handleDropdownLinkClick("/user/abctool")}
              >
                <NavLink to="/user/abctool">ABC Tool</NavLink>
              </li>
              <li
                className={activeLink === "/user/axrtool" ? "active" : ""}
                onClick={() => handleDropdownLinkClick("/user/axrtool")}
              >
                <NavLink to="/user/axrtool">AXR Tool</NavLink>
              </li>
              <li
                className={activeLink === "/user/aefrtool" ? "active" : ""}
                onClick={() => handleDropdownLinkClick("/user/aefrtool")}
              >
                <NavLink to="/user/aefrtool">AEFR Tool</NavLink>
              </li>
              <li
                className={activeLink === "/user/wztool" ? "active" : ""}
                onClick={() => handleDropdownLinkClick("/user/wztool")}
              >
                <NavLink to="/user/wztool">WZ Tool</NavLink>
              </li>
            </ul>
          )}
        </ul>
      </div>
      <ul className="user-sidebar-footer">
        <li
          className={`manage-profile ${activeLink === "/manageprofile" ? "active-manage-profile" : ""}`}
          onClick={() => handleMainLinkClick("/manageprofile")}
        >
          <RiUserFill size={25} />
          <NavLink to="/manageprofile">Manage Profile</NavLink>
        </li>
        <li
          className={`logout ${activeLink === "/logout" ? "active-logout" : ""}`}
          onClick={() => handleMainLinkClick("/logout")}
        >
          <img src={LogoutIcon} alt="Logout" />
          <NavLink to="/">Log out</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
