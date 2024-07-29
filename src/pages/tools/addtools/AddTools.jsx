import React, { useState } from 'react';
import "../Tools.css";
import "./AddTools.css";

const AddTools = (props) => {
  const [toolStatus, setToolStatus] = useState('active');
  const [toolId, setToolId] = useState('');
  const [toolName, setToolName] = useState('');
  const [toolIcon, setToolIcon] = useState(null);
  const [toolIconURL, setToolIconURL] = useState(''); // State to store the image URL

  const handleStatusChange = (event) => {
    setToolStatus(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setToolIcon(file);
    setToolIconURL(URL.createObjectURL(file)); // Create a URL for the image
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const toolData = {
      id: toolId,
      name: toolName,
      status: toolStatus,
      icon: toolIconURL, // Use the URL for the image
    };
    props.onAddTool(toolData); // Pass the tool data to the parent component
    clearForm();
  };

  const clearForm = () => {
    setToolId('');
    setToolName('');
    setToolStatus('active');
    setToolIcon(null);
    setToolIconURL(''); // Clear the image URL
  };

  return (
    <>
      <div className="add-tool-form">
        <form className="tools-form-container" onSubmit={handleSubmit}>
          <div className="tool-info">
            <h3>Tool Information</h3>
            <div className="upload-section">
              <div className="upload-box">
                <span className="upload-icon">📤</span>
                <span>Upload Tool Icon</span>
                <input
                  type="file"
                  className="upload-input"
                  onChange={handleFileChange}
                />
              </div>
              {toolIconURL && (
                <img src={toolIconURL} alt="Tool Icon" className="preview-icon" />
              )}
            </div>
            <div className="status-section">
              <label>Tool Status?*</label>
              <div className="status-options">
                <label>
                  <input
                    type="radio"
                    value="active"
                    checked={toolStatus === 'active'}
                    onChange={handleStatusChange}
                  />
                  Active
                </label>
                <label>
                  <input
                    type="radio"
                    value="inactive"
                    checked={toolStatus === 'inactive'}
                    onChange={handleStatusChange}
                  />
                  Inactive
                </label>
              </div>
            </div>
            <div className="input-section">
              <div className="input-group">
                <label>Tool ID Number *</label>
                <input
                  type="text"
                  placeholder="Enter tool ID number"
                  value={toolId}
                  onChange={(e) => setToolId(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Tool Name *</label>
                <input
                  type="text"
                  placeholder="Enter tool name"
                  value={toolName}
                  onChange={(e) => setToolName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-buttons">
            <button type="button" className="clear-button" onClick={clearForm}>
              Clear
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTools;
