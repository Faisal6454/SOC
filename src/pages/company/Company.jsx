import React, { useState } from "react";
import "./Company.css";
import { FiAlignCenter, FiRefreshCw, FiDownload } from "react-icons/fi"; // Importing icons

const CompanyList = (props) => {

  const [activeFilter, setActiveFilter] = useState("All");
  const [isSpinning, setIsSpinning] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


  const handleRefreshClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      // Add your refresh logic here
    }, 1000); // Adjust timeout duration as needed
  };

  const handleExport = (format) => {
    console.log(`Exporting as ${format}`);
    // Add your export logic here
  };

  const defaultCompanies = [
    {
      image:
        "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp", // Placeholder image URL
      cname: "Company 1",
      cemail: "company1@example.com", // Add email here
      cnumber: "123-456-7890",
      status: "Completed",
    },
    {
      image: "https://pics.craiyon.com/2023-11-13/I-4oH4PwSp6sFlfKujkp8w.webp", // Placeholder image URL
      cname: "Company 2",
      cemail: "company2@example.com", // Add email here
      cnumber: "987-654-3210",
      status: "Pending",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqVK-GFAbd6Nwqn3dnA2lH4JAEJ4-RQaq7Q&s", // Placeholder image URL
      cname: "Company 3",
      cemail: "company3@example.com", // Add email here
      cnumber: "999-765-1144",
      status: "In Route",
    },
    // Add more default companies as needed
  ];

  // Using company prop if passed, otherwise defaultCompanies
  const companies = [...defaultCompanies, ...(props.company || [])];

  console.log("companies", companies);

  return (
    <>
      <div className="main-content">
        <div className="c-btn">
          <div className="filter-btns">
            <button
              className={`filter-btn ${activeFilter === "All" ? "active" : ""}`}
              onClick={() => setActiveFilter("All")}
            >
              All
            </button>
            <button
              className={`filter-btn ${activeFilter === "Active" ? "active" : ""}`}
              onClick={() => setActiveFilter("Active")}
            >
              Active
            </button>
            <button
              className={`filter-btn ${activeFilter === "Inactive" ? "active" : ""}`}
              onClick={() => setActiveFilter("Inactive")}
            >
              Inactive
            </button>
          </div>
          <div className="ref-sec">
          <button
              className={`refresh-btn ${isSpinning ? "spinning" : ""}`}
              onClick={handleRefreshClick}
            >
              <FiRefreshCw size={16} />
            </button>
            <div className="export-btn-container">
              <button
                className="export-btn"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <FiDownload size={16} /> Export
              </button>
              {showDropdown && (
                <div className="export-dropdown">
                  <button
                    className="export-option"
                    onClick={() => handleExport("PDF")}
                  >
                    Export PDF
                  </button>
                  <button
                    className="export-option"
                    onClick={() => handleExport("Excel")}
                  >
                    Export Excel
                  </button>
                  <button
                    className="export-option"
                    onClick={() => handleExport("Doc")}
                  >
                    Export Doc
                  </button>
                </div>
              )}
            </div>
            <button
              className="add-company-btn"
              onClick={() => props.setAddCustomer(true)}
            >
              + Add Company
            </button>
          </div>
        </div>
        <div className="company-list-container">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c, index) => {
                  return (
                    <tr key={index}>
                      <td className="email-cell" data-label="Name">
                        <img
                          src={c.image}
                          alt={c.cname}
                          className="company-image"
                        />
                        {c.cname}
                      </td>
                      <td className="email-cell" data-label="Email">{c.cemail}</td>
                      <td data-label="Phone Number">{c.cnumber}</td>
                      <td
                        data-label="Status"
                        className={`status ${
                          c.status ? c.status.toLowerCase() : ""
                        }`}
                      >
                        <span className="status-dot"></span>
                        {c.status}
                      </td>
                      <td className="details-cell" data-label="Actions">
                        <button className="details-button">Details</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyList;
