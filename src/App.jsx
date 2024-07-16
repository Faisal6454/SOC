import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/Context";
import Layout from "./components/shared/Layout";
import LoginForm from "./pages/login/LoginForm";
import Otp from "./pages/Otp/OTP";
import ForgotPassword from "./pages/password/ForgotPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Company from "./pages/company/Company";
import Tools from "./pages/tools/Tools";



function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className={`App ${sidebarVisible ? "sidebar-visible" : ""}`}>
        <DataProvider>
          <div className="grid-container">
            <Router>
              <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/layout" element={<Layout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="company" element={<Company />} />
                  <Route path="tools" element={<Tools />} />
                </Route>
              </Routes>
            </Router>
          </div>
        </DataProvider>
      </div>
    </>
  );
}

export default App;
