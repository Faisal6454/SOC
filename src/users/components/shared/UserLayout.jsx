import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/sidebar/UserSidebar';
import Navbar from '../shared/navbar/UserNavbar';
import './UserLayout.css';

const UserLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="UserLayout-Container User-layout">
      <div
        className={`user-sidebar ${isSidebarOpen ? "open" : ""}`}
        toggleSidebar={toggleSidebar}
      >
        <Sidebar />
      </div>
      <div className="UserLayout-Box user-content">
        <Navbar className="User-Navbar" toggleSidebar={toggleSidebar} />
        <div className="UserLayout-Outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
