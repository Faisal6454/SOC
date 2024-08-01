import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/Context';
import AdminLayout from './admin/components/shared/AdminLayout';
import UserLayout from './users/components/shared/UserLayout';
import LoginForm from './screens/login/LoginForm';
import Otp from './screens/otp/OTP';
import ForgotPassword from './screens/password/ForgotPassword';
import Dashboard from './admin/pages/dashboard/Dashboard';
import Company from './admin/pages/company/Company';
import Tools from './admin/pages/tools/Tools';
import UserDashboard from './users/pages/dashboard/UserDashboard';
import UserTools from './users/pages/tools/UserTools';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`App ${sidebarVisible ? 'sidebar-visible' : ''}`}>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout toggleSidebar={toggleSidebar} />}>
              <Route index element={<Dashboard />} />
              <Route path="company" element={<Company />} />
              <Route path="tools" element={<Tools />} />
            </Route>

            {/* User Routes */}
            <Route path="/user" element={<UserLayout toggleSidebar={toggleSidebar} />}>
              <Route index element={<UserDashboard />} />
              <Route path="usertools" element={<UserTools/>} />
              {/* Add other user routes here */}
            </Route>
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
