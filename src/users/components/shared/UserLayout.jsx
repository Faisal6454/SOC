import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../admin/components/shared/sidebar/SideBar';
import Navbar from '../../../admin/components/shared/navbar/NavBar';
import './UserLayout.css';

const UserLayout = ({ toggleSidebar }) => {
  return (
    <div className="user-layout">
      <Sidebar />
      <div className="content">
        <Navbar toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
