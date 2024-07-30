import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SideBar.css";

// icons
import Logo from "../../../../assets/images/Logo.png";
import DashboardIcon from "../../../../assets/icons/dashboard.svg";
import CompanyIcon from "../../../../assets/icons/company.svg";
import ToolsIcon from "../../../../assets/icons/tools.svg";
import { RiUserFill } from "react-icons/ri";
import LogoutIcon from "../../../../assets/icons/Logout.png";

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
            className={activeLink === "/admin" ? "active" : ""}
            onClick={() => handleLinkClick("/admin")}
          >
            <img src={DashboardIcon} alt="Dashboard" />
            <NavLink to="/admin">Dashboard</NavLink>
          </li>
          <li
            className={activeLink === "/admin/company" ? "active" : ""}
            onClick={() => handleLinkClick("/admin/company")}
          >
            <img src={CompanyIcon} alt="Company" />
            <NavLink to="/admin/company">Company</NavLink>
          </li>
          <li
            className={activeLink === "/admin/tools" ? "active" : ""}
            onClick={() => handleLinkClick("/admin/tools")}
          >
            <img src={ToolsIcon} alt="Tools" />
            <NavLink to="/admin/tools">Tools</NavLink>
          </li>
        </ul>
      </div>
      <ul className="sidebar-footer">
        <li
          className={`manage-profile ${activeLink === "/manage-profile" ? "active-manage-profile" : ""}`}
          onClick={() => handleLinkClick("/manage-profile")}
        >
          <RiUserFill size={25} />
          <NavLink to="/manage-profile">Manage Profile</NavLink>
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

export default Sidebar;
