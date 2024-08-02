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
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
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
            onClick={() => handleLinkClick("/user")}
          >
            <img src={DashboardIcon} alt="Dashboard" />
            <NavLink to="/user">Dashboard</NavLink>
          </li>
          <li
            className={activeLink === "/user/usertools" ? "active" : ""}
            onClick={() => handleLinkClick("/user/usertools")}
          >
            <img src={ToolsIcon} alt="Tools" />
            <NavLink to="/user/usertools">Tools</NavLink>
          </li>
        </ul>
      </div>
      <ul className="user-sidebar-footer">
        <li
          className={`manage-profile ${activeLink === "/manageprofile" ? "active-manage-profile" : ""}`}
          onClick={() => handleLinkClick("/manageprofile")}
        >
          <RiUserFill size={25} />
          <NavLink to="/manageprofile">Manage Profile</NavLink>
        </li>
        <li
          className={`logout ${activeLink === "/logout" ? "active-logout" : ""}`}
          onClick={() => handleLinkClick("/logout")}
        >
          <img src={LogoutIcon} alt="Logout" />
          <NavLink to="/">Log out</NavLink>
        </li>
      </ul>
    </div>
    );
};

export default UserSidebar;