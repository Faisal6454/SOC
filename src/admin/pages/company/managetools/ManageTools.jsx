import React, { useState } from "react";
import "./ManageTools.css";
// Importing icons
import { FiRefreshCw, FiDownload } from "react-icons/fi"; 
import { RiDeleteBin5Fill } from "react-icons/ri";
import defaultLogo from '../../../../assets/Dashboard/driver.png'; // Import the default icon
const toolsData = [
  {
    // icon: '🔧',
    icon: defaultLogo,
    name: 'SOC Tool 1', id: '#SOC102', status: 'Active'
  },
    { 
      // icon: '🔧',
       icon: defaultLogo, 
      name: 'SOC Tool 2', id: '#SOC111', status: 'Inactive' },
    { 
      // icon: '🔧',
       icon: defaultLogo, 
      name: 'SOC Tool 4', id: '#SOC302', status: 'Active' },
    { 
      // icon: '🔧',
       icon: defaultLogo, 
      name: 'SOC Tool 6', id: '#SOC222', status: 'Active' },
    { 
      // icon: '🔧',
       icon: defaultLogo, 
      name: 'SOC Tool 10', id: '#SOC100', status: 'Active' },
];

const ManageTools = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [isSpinning, setIsSpinning] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [tools, setTools] = useState(toolsData);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
  
  
    const handleDelete = (index) => {
      setTools(tools.filter((_, i) => i !== index));
  };
  
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
        const newTool = {
            icon: '🔧',
            name: `SOC Tool ${tools.length + 1}`,
            id: `#SOC${tools.length + 1}00`,
            status: 'Active',
        };
        setTools([...tools, newTool]);
    };

    const filteredTools = 
        activeFilter === "All"
        ? tools
        : tools.filter((tool) => tool.status === activeFilter);

  
  // Calculate the current companies to display
  const indexOfLastCompany = currentPage * itemsPerPage;
  const indexOfFirstCompany = indexOfLastCompany - itemsPerPage;
  const currentCompanies = filteredCompanies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  
  
  return (
      <>
   
      
        <div className="tools-list-container">
            <header className="header">
                <div className="filters">
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
                <div className="header-actions">
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
                            <FiDownload size={16} /> Export Data
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
                    <button className="add-btn" onClick={handleAddTool}>
                        + Add New Tool
                    </button>
                </div>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Tools Icon</th>
                        <th>Tools Name</th>
                        <th>Tools ID Number</th>
                        <th>Tools Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTools.map((tool, index) => (
                        <tr key={index}>
                        <td>
                          {/* {tool.icon} */}
                          <img src={tool.icon} alt="icon" className="tool-icon" />
                        </td>
                            <td>{tool.name}</td>
                            <td>{tool.id}</td>
                            <td className={tool.status === 'Active' ? 'status-active' : 'status-inactive'}>
                                {tool.status}
                            </td>
                        <td>
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(index)}>
                            {/* 🗑️ */}
                            <RiDeleteBin5Fill size={20} />
                        </button>
                        </td>
                        </tr>
                    ))}
                </tbody>
        </table>
        
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
            
      </>
    );
};

export default ManageTools;
