import React, { useState } from "react";
import "./Tools.css";
import { FiRefreshCw, FiDownload } from "react-icons/fi"; // Importing icons
import logo from "../../assets/icons/ToolsIcon.png";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import AddTools from "./addtools/AddTools"; // Import your AddTools component

const Tools = (props) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isSpinning, setIsSpinning] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddToolsForm, setShowAddToolsForm] = useState(false); // State to control form visibility

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

  const handleAddTool = () => {
    console.log("Add tool logic here");
    // Add your add tool logic here
  };

  const handleDeleteTool = (index) => {
    console.log(`Deleting tool at index ${index}`);
    // Add your delete tool logic here
  };

  const defaultTools = [
    {
      tname: "Tools 1",
      tidnumber: "#SOC11",
      status: "Active",
    },
    {
      tname: "Tools 2",
      tidnumber: "#SOC12",
      status: "Inactive",
    },
    {
      tname: "Tools 3",
      tidnumber: "#SOC13",
      status: "Active",
    },
    // Add more default tools as needed
  ];

  // Using tools prop if passed, otherwise defaultTools
  const tools = [...defaultTools, ...(props.tools || [])];

  const filteredTools = tools.filter((tool) => {
    if (activeFilter === "All") return true;
    return tool.status === activeFilter;
  });

  // Conditionally render AddTools component if showAddToolsForm is true
  if (showAddToolsForm) {
    return (
      <AddTools
        setCustomer={props.setCustomer}
        customer={props.customer}
        setAddCustomer={setShowAddToolsForm} // pass state setter to AddTools component
      />
    );
  }

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
              className="add-tools-btn add-company-btn"
              onClick={() => setShowAddToolsForm(true)} // Show form when clicked
            >
              + Add Tools
            </button>
          </div>
        </div>
        <div className="tools-list-container">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Tools Icon</th> {/* Icon for "No." */}
                  <th>Tools Name</th>
                  <th>Tools ID Number</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTools.map((t, index) => (
                  <tr key={index}>
                    <td data-label="Icon">
                      <img src={logo} alt="icon" />
                    </td>
                    <td data-label="Tools Name">{t.tname}</td>
                    <td data-label="Tools ID">{t.tidnumber}</td>
                    <td
                      data-label="Status"
                      className={`status ${
                        t.status ? t.status.toLowerCase() : ""
                      }`}
                    >
                      <span className="status-dot"></span>
                      {t.status}
                    </td>
                    <td className="details-cell" data-label="Actions">
                      <button
                        className="details-button"
                        onClick={handleAddTool}
                      >
                        <PiPencilSimpleLineFill />
                      </button>
                      <button
                        className="details-button delete"
                        onClick={() => handleDeleteTool(index)}
                      >
                        <RiDeleteBin4Fill />
                      </button>
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

export default Tools;
