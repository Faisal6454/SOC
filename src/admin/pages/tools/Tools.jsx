import React, { useState } from 'react';
import { FiRefreshCw, FiDownload, FiPlus, FiX } from 'react-icons/fi';
import AddTools from './addtools/AddTools';
import './Tools.css';
import defaultLogo from '../../../assets/Dashboard/driver.png'; // Import the default icon

const Tools = (props) => {
  const [tools, setTools] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isSpinning, setIsSpinning] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown by index
  const [showAddToolsForm, setShowAddToolsForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const handleRefreshClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      // Add your refresh logic here
    }, 1000);
  };

  const handleExport = (format) => {
    console.log(`Exporting as ${format}`);
    // Add your export logic here
  };

  const handleAddTool = (toolData) => {
    setTools([...tools, toolData]);
    setShowAddToolsForm(false);
  };

  const handleDeleteTool = (index) => {
    setTools(tools.filter((_, i) => i !== index));
  };

  const defaultTools = [
    { tname: 'Tools 1', tidnumber: '#SOC11', status: 'Active', icon: defaultLogo },
    { tname: 'Tools 2', tidnumber: '#SOC12', status: 'Inactive', icon: defaultLogo },
    { tname: 'Tools 3', tidnumber: '#SOC13', status: 'Active', icon: defaultLogo },
    { tname: 'Tools 4', tidnumber: '#SOC14', status: 'Active', icon: defaultLogo },
    { tname: 'Tools 5', tidnumber: '#SOC15', status: 'Inactive', icon: defaultLogo },
    { tname: 'Tools 6', tidnumber: '#SOC16', status: 'Active', icon: defaultLogo },
    { tname: 'Tools 7', tidnumber: '#SOC17', status: 'Inactive', icon: defaultLogo },
    { tname: 'Tools 8', tidnumber: '#SOC18', status: 'Active', icon: defaultLogo },
  ];

  const allTools = [...defaultTools, ...tools];
  const filteredTools = allTools.filter((tool) => activeFilter === 'All' || tool.status === activeFilter);

  if (showAddToolsForm) {
    return <AddTools onAddTool={handleAddTool} />;
  }

  // Calculate the current companies to display
  const indexOfLastTools = currentPage * itemsPerPage;
  const indexOfFirstTools = indexOfLastTools - itemsPerPage;
  const currentTools = filteredTools.slice(indexOfFirstTools, indexOfLastTools);

  // Calculate total pages
  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      <div className="main-content">
        <div className="c-btn">
          <div className="filter-btns">
            <button className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`} onClick={() => setActiveFilter('All')}>All</button>
            <button className={`filter-btn ${activeFilter === 'Active' ? 'active' : ''}`} onClick={() => setActiveFilter('Active')}>Active</button>
            <button className={`filter-btn ${activeFilter === 'Inactive' ? 'active' : ''}`} onClick={() => setActiveFilter('Inactive')}>Inactive</button>
          </div>
          <div className="ref-sec">
            <button className={`refresh-btn ${isSpinning ? 'spinning' : ''}`} onClick={handleRefreshClick}>
              <FiRefreshCw size={16} />
            </button>
            <div className="export-btn-container">
              <button className="export-btn" onClick={() => setOpenDropdown('export')}>
                <FiDownload size={16} /> Export
              </button>
              {openDropdown === 'export' && (
                <div className="export-dropdown">
                  <button className="export-option" onClick={() => handleExport('PDF')}>Export PDF</button>
                  <button className="export-option" onClick={() => handleExport('Excel')}>Export Excel</button>
                  <button className="export-option" onClick={() => handleExport('Doc')}>Export Doc</button>
                </div>
              )}
            </div>
            <button className="add-tools-btn add-company-btn" onClick={() => setShowAddToolsForm(true)}>+ Add Tools</button>
          </div>
        </div>
        <div className="tools-list-container">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Tools Icon</th>
                  <th>Tools Name</th>
                  <th>Tools ID Number</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentTools.map((tool, index) => (
                  <tr key={index}>
                    <td data-label="Icon"><img src={tool.icon} alt="icon" className="tool-icon" /></td>
                    <td data-label="Tools Name">{tool.tname}</td>
                    <td data-label="Tools ID Number">{tool.tidnumber}</td>
                    <td data-label="Status" className={`status ${tool.status.toLowerCase()}`}>
                      <span className="status-dot"></span>
                      {tool.status}
                    </td>
                    <td className="details-cell" data-label="Actions">
                      <button className="details-button plus-btn" onClick={() => toggleDropdown(index)}>
                        {openDropdown === index ? <FiX /> : <FiPlus />}
                      </button>
                      {openDropdown === index && (
                        <div className="action-dropdown">
                          <h5>Select Actions:</h5>
                          <div className="dropdown-option">
                            <input type="checkbox" id={`checkbox1-${index}`} />
                            <label htmlFor={`checkbox1-${index}`}>Start1</label>
                          </div>
                          <div className="dropdown-option">
                            <input type="checkbox" id={`checkbox2-${index}`} />
                            <label htmlFor={`checkbox2-${index}`}>Start2</label>
                          </div>
                          <div className="dropdown-option">
                            <input type="checkbox" id={`checkbox3-${index}`} />
                            <label htmlFor={`checkbox3-${index}`}>Start3</label>
                          </div>
                          <div className="dropdown-option">
                            <input type="checkbox" id={`checkbox4-${index}`} />
                            <label htmlFor={`checkbox4-${index}`}>Start4</label>
                          </div>
                          <div className="dropdown-option">
                            <input type="checkbox" id={`checkbox5-${index}`} />
                            <label htmlFor={`checkbox5-${index}`}>Start5</label>
                          </div>
                          <div className="dropdown-option">
                            <input type="checkbox" id={`checkbox6-${index}`} />
                            <label htmlFor={`checkbox6-${index}`}>Start6</label>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
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
    </>
  );
};

export default Tools;
