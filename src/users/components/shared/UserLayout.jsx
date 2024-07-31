import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../admin/components/shared/sidebar/SideBar';
// import Navbar from '../../../admin/components/shared/navbar/NavBar';
import './UserLayout.css';

const UserLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="UserLayout-Container User-layout">
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        toggleSidebar={toggleSidebar}
      >
        <Sidebar />
      </div>
      <div className="UserLayout-Box content">
        {/* <Navbar toggleSidebar={toggleSidebar} /> */}
        <div className="UserLayout-Outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
