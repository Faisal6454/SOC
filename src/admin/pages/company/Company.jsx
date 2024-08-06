import React, { useState } from "react";
import "./Company.css";
import { Link } from "react-router-dom"; 
import CompanyForm from "./companyform/CompanyForm";
// Importing icons
import { FiRefreshCw, FiDownload } from "react-icons/fi"; 
import { BsFillHddStackFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";



const CompanyList = (props) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isSpinning, setIsSpinning] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [addCustomer, setAddCustomer] = useState(false);
  const [customer, setCustomer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showActionDropdown, setShowActionDropdown] = useState(null);
  const itemsPerPage = 7;

  console.log("comapney customer", customer);

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
      status: "Active",
    },
    {
      image: "https://pics.craiyon.com/2023-11-13/I-4oH4PwSp6sFlfKujkp8w.webp", // Placeholder image URL
      cname: "Company 2",
      cemail: "company2@example.com", // Add email here
      cnumber: "987-654-3210",
      status: "Inactive",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqVK-GFAbd6Nwqn3dnA2lH4JAEJ4-RQaq7Q&s", // Placeholder image URL
      cname: "Company 3",
      cemail: "company3@example.com", // Add email here
      cnumber: "999-765-1144",
      status: "Active",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s", // Placeholder image URL
      cname: "Company 4",
      cemail: "company4@example.com", // Add email here
      cnumber: "123-456-7890",
      status: "Active",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLmnW-lo-v4ztV1dMdqWaCEdl-8u83ABGqw&s", // Placeholder image URL
      cname: "Company 5",
      cemail: "company5@example.com", // Add email here
      cnumber: "987-654-3210",
      status: "Inactive",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmSAJEUT-WmVOy8fiVVyqpNlYwmAQPUW03_sk6q6jqQ&s", // Placeholder image URL
      cname: "Company 6",
      cemail: "company6@example.com", // Add email here
      cnumber: "999-765-1144",
      status: "Active",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&s", // Placeholder image URL
      cname: "Company 7",
      cemail: "company7@example.com", // Add email here
      cnumber: "987-654-3210",
      status: "Inactive",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfnK37IYV1H2frmk1O8Bmle418-IhMpGDdA&s", // Placeholder image URL
      cname: "Company 8",
      cemail: "company8@example.com", // Add email here
      cnumber: "987-654-3210",
      status: "Inactive",
    },
    
    // Add more default companies as needed
  ];

  const filteredCompanies =
    activeFilter === "All"
      ? defaultCompanies
      : defaultCompanies.filter((company) => company.status === activeFilter);

  // Using company prop if passed, otherwise defaultCompanies
  const companies = [...defaultCompanies, ...(props.company || [])];

  console.log("companies", companies);

  // Calculate the current companies to display
  const indexOfLastCompany = currentPage * itemsPerPage;
  const indexOfFirstCompany = indexOfLastCompany - itemsPerPage;
  const currentCompanies = filteredCompanies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);


  const handleDetailsClick = (index) => {
    setShowActionDropdown(index === showActionDropdown ? null : index);
  };

  const handleAddCustomer = () => {
    setAddCustomer(true);
  };

  return (
    <>
      {addCustomer ? (
        <CompanyForm
          setCustomer={setCustomer}
          customer={customer}
          setAddCustomer={setAddCustomer}
        />
      ) : customer.length > 0 ? (
        <CompanyList company={customer} setAddCustomer={setAddCustomer} />
      ) : (
        <div className="main-content">
          <div className="c-btn">
            <div className="filter-btns">
              <button
                className={`filter-btn ${
                  activeFilter === "All" ? "active" : ""
                }`}
                onClick={() => setActiveFilter("All")}
              >
                All
              </button>
              <button
                className={`filter-btn ${
                  activeFilter === "Active" ? "active" : ""
                }`}
                onClick={() => setActiveFilter("Active")}
              >
                Active
              </button>
              <button
                className={`filter-btn ${
                  activeFilter === "Inactive" ? "active" : ""
                }`}
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
                onClick={handleAddCustomer}
                // onClick={() => props.setAddCustomer(true)}
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
                  {currentCompanies.map((c, index) => {
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
                        <td className="email-cell" data-label="Email">
                          {c.cemail}
                        </td>
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
                          <button
                            className="details-button"
                            onClick={() => handleDetailsClick(index)}
                          >
                            ...
                          </button>
                          {showActionDropdown === index && (
                            <div className="action-dropdown">
                              <Link to="managetools" className="action-option">
                                <BsFillHddStackFill />
                                Manage Tool
                              </Link>
                              <Link className="action-option">
                                <FaUser />
                                Manage User
                              </Link>
                              <Link className="action-option">
                                <RiEdit2Fill />
                                Edit
                              </Link>
                              <Link className="action-option">
                                <RiDeleteBin5Fill />
                                 Delete
                              </Link>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyList;
