import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SideBar.css";

// icons
import Logo from "../../../assets/images/Logo.png";
import DashboardIcon from "../../../assets/icons/dashboard.svg";
import CompanyIcon from "../../../assets/icons/company.svg";
import ToolsIcon from "../../../assets/icons/tools.svg";
import LogoutIcon from "../../../assets/icons/Logout.png";

const Sidebar = () => {
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
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div>
        <div className="sidebar-head">
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <ul>
          <li
            className={activeLink === "/layout" ? "active" : ""}
            onClick={() => handleLinkClick("/layout")}
          >
            <img src={DashboardIcon} alt="Dashboard" />
            <NavLink to="/layout">Dashboard</NavLink>
          </li>
          <li
            className={activeLink === "/layout/company" ? "active" : ""}
            onClick={() => handleLinkClick("/layout/company")}
          >
            <img src={CompanyIcon} alt="Company" />
            <NavLink to="/layout/company">Company</NavLink>
          </li>
          <li
            className={activeLink === "/layout/tools" ? "active" : ""}
            onClick={() => handleLinkClick("/layout/tools")}
          >
            <img src={ToolsIcon} alt="Tools" />
            <NavLink to="/layout/tools">Tools</NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <div
          className={`logout ${activeLink === "/logout" ? "active-logout" : ""}`}
          onClick={() => handleLinkClick("/logout")}
        >
          <img src={LogoutIcon} alt="Logout" />
          <NavLink to="/">Log out</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
