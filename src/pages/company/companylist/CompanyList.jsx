// CompanyList.jsx
import React from "react";
import "../Company.css";
import "./CompanyList.css";
import { FiAlignCenter } from "react-icons/fi"; // Importing the filter icon

const CompanyList = (props) => {
  const defaultCompanies = [
    {
      image:
        "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp", // Placeholder image URL
      cname: "Company 1",
      cnumber: "123-456-7890",
      status: "Completed",
    },
    {
      image: "https://pics.craiyon.com/2023-11-13/I-4oH4PwSp6sFlfKujkp8w.webp", // Placeholder image URL
      cname: "Company 2",
      cnumber: "987-654-3210",
      status: "Pending",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqVK-GFAbd6Nwqn3dnA2lH4JAEJ4-RQaq7Q&s", // Placeholder image URL
      cname: "Company 3",
      cnumber: "999-765-1144",
      status: "In Route",
    },
    // Add more default companies as needed
  ];

  const companies = [...defaultCompanies, ...(props.company || [])];

  console.log("companies", companies);

  return (
    <>
      <div className="main-content">
        <div className="c-btn">
          <button
            className="add-company-btn"
            onClick={() => props.setAddCustomer(true)}
          >
            + Add Company
          </button>
        </div>
        <div className="company-list-container">
          <div className="company-list-header">
            <h2>Company List</h2>
            <div className="filter">
              <i>
                <FiAlignCenter size={24} />{" "}
                {/* You can adjust the size as needed */}
              </i>{" "}
              Filter
            </div>
          </div>

          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Company Name</th>
                  <th>Company Phone Number</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c, index) => {
                  return (
                    <tr key={index}>
                      <td data-label="No." >{index + 1}</td>
                      <td data-label="Company Name" >
                        <img
                          src={c.image}
                          // alt={c.cname}
                          className="company-image"
                        />
                        {c.cname}
                      </td>
                      <td data-label="Company Number" >{c.cnumber}</td>
                      <td data-label="Status" 
                        className={`status ${
                          c.status ? c.status.toLowerCase() : ""
                        }`}
                      >
                        <span className="status-dot"></span>
                        {c.status}
                      </td>
                      <td className="details-cell">
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
