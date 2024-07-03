import React, { useState } from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/SideBar';
import Navbar from './navbar/NavBar';



export default function Layout() {
	
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
	  setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="Layout-Container">
			<div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
               <Sidebar />
            </div>
			<div className="Layout-Box">
				<Navbar toggleSidebar={toggleSidebar} />
				<div className="Layout-Outlet">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
