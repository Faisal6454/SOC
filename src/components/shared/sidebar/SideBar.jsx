import React, { useState, useEffect } from "react";
import { NavLink,useLocation } from "react-router-dom";
import "./SideBar.css";

// icons
import Logo from "../../../assets/images/Logo.png";
import DashboardIcon from "../../../assets/icons/dashboard.svg";
import CompanyIcon from "../../../assets/icons/company.svg";
import ToolsIcon from "../../../assets/icons/tools.svg";
import LogoutIcon from "../../../assets/images/Logout.svg";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const [isSidebarOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log("ocation.pathname",location.pathname)
    setActiveLink(location.pathname);
  }, [location.pathname]);


  const handleLinkClick = (link) => {
    // setActiveLink(link);
  };



  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div>
        <div className="sidebar-head">
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <ul>
          <li className={activeLink === "/layout" ? "active" : ""} onClick={() => handleLinkClick("/")}>
            <img src={DashboardIcon} alt="Dashboard" />
            <NavLink to="/layout">
              Dashboard
            </NavLink>
          </li>
          <li className={activeLink === "/layout/company" ? "active" : ""} onClick={() => handleLinkClick("/company")}>
            <img src={CompanyIcon} alt="Company" />
            <NavLink to="/layout/company">
              Company
            </NavLink>
          </li>
          <li className={activeLink === "/layout/tools" ? "active" : ""} onClick={() => handleLinkClick("/tools")}>
            <img src={ToolsIcon} alt="tools" />
            <NavLink to="/layout/tools">
              Tools
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <div
          className={`logout ${activeLink === "/layout/logout" ? "active-logout" : ""}`}
          onClick={() => handleLinkClick("/logout")}
        >
          <img src={LogoutIcon} alt="Logout" />
          <NavLink to="/">Logout</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
