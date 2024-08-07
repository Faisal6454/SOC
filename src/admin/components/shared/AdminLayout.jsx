import React, { useState } from "react";
import "./AdminLayout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/SideBar";
import Navbar from "./navbar/NavBar";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="AdminLayout-Container admin-layout">
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <Sidebar />
      </div>
      <div className="AdminLayout-Box content">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="AdminLayout-Outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
