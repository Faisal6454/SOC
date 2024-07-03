import React from "react";
import "../Tools.css";
import "./ToolsList.css";
import { FiAlignCenter } from "react-icons/fi"; // Importing the filter icon

const ToolsList = (props) => {

  const defaultCompanies = [
    {
      image:
        "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp", // Placeholder image URL
      tname: "Tools 1",
      version: "1.0",
      status: "Completed",
    },
    {
      image: "https://pics.craiyon.com/2023-11-13/I-4oH4PwSp6sFlfKujkp8w.webp", // Placeholder image URL
      tname: "Tools 2",
      version: "2.0",
      status: "Pending",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqVK-GFAbd6Nwqn3dnA2lH4JAEJ4-RQaq7Q&s", // Placeholder image URL
      tname: "Tools 3",
      version: "3.0",
      status: "In route",
    },
    // Add more default companies as needed
  ];

  const companies = [...defaultCompanies, ...(props.company || [])];


  return (
    <>
      <div className="main-content">
        <div className="t-btn">
          <button
            className="add-tools-btn"
            onClick={() => props.setAddCustomer(true)}
          >
            + Add Tools
          </button>
        </div>
        <div className="tools-list-container">
          <div className="tools-list-header">
            <h2>Malware List</h2>
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
                  <th>Tools Name</th>
                  <th>Tools Version</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c, index) => (
                  <tr key={index}>
                    <td data-label="No." >{index + 1}</td>
                    <td data-label="Tools Name" >
                      {/* <img
                        src={c.image}
                        // alt={c.cname}
                        className="tools-logo"
                      /> */}
                      {c.tname}
                    </td>
                    <td data-label="Tools Version" >{c.version}</td>
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsList;
