import React, { useState } from 'react';
import "../Tools.css"
import "./AddTools.css";

const AddTools = (props) => {

    const [formData, setFormData] = useState({
      tname: "",
      version: "",
      state: "",
    });

  const handleChange = (event) => {
    console.log("event",event.target)
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Name: ${formData}, `
    // );

    const data = {
      tname: formData.tname,
      version: formData.version,
      status: "pending",
    };

    props.setCustomer([...props.customer, data]);
    props.setAddCustomer(false)
    console.log("customer",props.customer)

};
console.log("customer",props.customer)

  
  
  

  return (
    <>
   
      <div className="main-content">
        
      <div className="tools-container">
      <form onSubmit={handleSubmit}>
      <section>
          <h2>Tools Information</h2>
          <div className="tools-grid">
            <div className="form-group">
              <label>Tools Name</label>
              <input type="text" placeholder="English Language Only" id="tname" name="tname" value={formData.tname} onChange={handleChange} className="tools-input" />
            </div>
            <div className="form-group">
              <label>Tools Version</label>
              <input type="text" placeholder="2.1" id="version" name="version"  value={formData.version} onChange={handleChange} className="tools-input" />
            </div>
          </div>
      </section>
      <button type="submit" className="submit-button">Next</button>
      </form>
      </div>
      </div>
    </>
  )
}

export default AddTools
