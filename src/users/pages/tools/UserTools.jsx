import React, { useState } from 'react';
import "./UserTools.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiRefreshCw, FiDownload } from 'react-icons/fi';

const UserTools = () => {
  const [file, setFile] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const notify = () => toast("Upload Succecefull !");
    
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFile(reader.result);
      };
      reader.readAsDataURL(uploadedFile);
    }
  };

  const handleRefreshClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000); // Simulate a refresh action
  };

  const handleExport = (type) => {
    console.log(`Exporting as ${type}`);
    setShowDropdown(false);
  };

  return (
    <div className="page-container">
      <div className="top-bar">
        <div className="ref-sec">
          <button className={`refresh-btn ${isSpinning ? 'spinning' : ''}`} onClick={handleRefreshClick}>
            <FiRefreshCw size={16} />
          </button>
          <div className="export-btn-container">
            <button className="export-btn" onClick={() => setShowDropdown(!showDropdown)}>
              <FiDownload size={16} /> Export
            </button>
            {showDropdown && (
              <div className="export-dropdown">
                <button className="export-option" onClick={() => handleExport('PDF')}>Export PDF</button>
                <button className="export-option" onClick={() => handleExport('Excel')}>Export Excel</button>
                <button className="export-option" onClick={() => handleExport('Doc')}>Export Doc</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="upload-container">
        <div className="upload-box">
          <input type="file" id="file-upload" onChange={handleFileChange} />
          <label htmlFor="file-upload">
            <div className="upload-icon">🌥️</div>
            <p>
              <strong>Click to upload</strong> or drag and drop file
            </p>
            <button onClick={notify} className="upload-button">Upload File</button>
            <ToastContainer position="top-center" />
          </label>
          <p className="upload-info">
            <span>📄 Maximum file size: 50 MB</span>
            <span>📂 File Supported: PDF, EXCL, DOC</span>
          </p>
        {file && (
          <div className="uploaded-file-preview">
            <img src={file} alt="Uploaded File Preview" />
          </div>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default UserTools;
