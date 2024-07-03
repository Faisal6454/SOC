import React, { useState } from 'react';
// import '../Company.css';
import './CompanyForm.css';
import Logo from "../../../assets/images/FoxHub.png"

const CompanyForm = (props) => {

  const [complianceSameAsPrimary, setComplianceSameAsPrimary] = useState(true);
  const [formData, setFormData] = useState({
    cname: "",
    language: "",
    cnumber: "",
    cwebsite: "",
    headquarterline1: "",
    headquarterline2: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    name: "",
    lname: "",
    email: "",
    job: "",
    roll: "",
    bnumber: "",
    pnumber: "",
    salutation: "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      ...formData,
      status: "pending",
    };
    props.setCustomer([...props.customer, data]);
    props.setAddCustomer(false);

   // Save to localStorage
   const updatedCompanies = [...props.customer, data];
   localStorage.setItem("companies", JSON.stringify(updatedCompanies));
 
  };;

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <div className="form-main">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <section>
            <h2>Company Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="English Language Only"
                  id="cname"
                  name="cname"
                  value={formData.cname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Company Name (Native Language)</label>
                <input
                  type="text"
                  placeholder="English Language Only"
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="upload-label">Upload Image</label>
                <div className="upload">
                  <button
                    className="upload-btn"
                    type="button"
                    onClick={() => document.querySelector(".img").click()}
                  >
                    <img src={formData.image || Logo} alt="logo" />
                  </button>
                  <input
                    type="file"
                    // multiple
                    accept="image/*"
                    onChange={handleUpload}
                    className="img"
                    style={{ display: "none" }}
                  />

                  <button
                    type="button"
                    className="remove-button"
                    onClick={() =>
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        image: null,
                      }))
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>Company Phone Number</label>
                <input
                  type="text"
                  placeholder="English Language Only"
                  id="cnumber"
                  name="cnumber"
                  value={formData.cnumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Website</label>
                <input
                  type="text"
                  placeholder="English Language Only"
                  id="cwebsite"
                  name="cwebsite"
                  value={formData.cwebsite}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          <section>
            <h2>Where is your company Headquartered?</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Line 1</label>
                <input
                  type="text"
                  placeholder="English Language Only"
                  id="headquarterline1"
                  name="headquarterline1"
                  value={formData.headquarterline1}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Line 2</label>
                <input
                  type="text"
                  placeholder="English Language Only"
                  id="headquarterline2"
                  name="headquarterline2"
                  value={formData.headquarterline2}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value="ind">India</option>
                  <option value="usa">USA</option>
                  <option value="can">Canada</option>
                </select>
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  placeholder="English Language Only"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  placeholder="English Language Only"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Zip Postal Code</label>
                <input
                  type="text"
                  placeholder="English Language Only"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
              <button type="button" className="modify-button">
                Modify Address
              </button>
            </div>
          </section>

          <section>
            <h2>Primary Contact</h2>
            <p>
              I attest that I have been authorized by the appointed contact to
              complete this form on their behalf and provide their personal data
              to VMware.
            </p>
            <div className="form-grid">
              <div className="form-group">
                <label>Salutation</label>
                <select
                  id="salutation"
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value={"Select1"}>Select1</option>
                  <option value={"Select2"}>Select2</option>
                  <option value={"Select3"}>Select3</option>
                </select>
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="English Language Only"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  placeholder="English Language Only"
                  id="job"
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>User Role</label>
                <input
                  type="text"
                  id="roll"
                  name="roll"
                  value={formData.roll}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Contact Business Phone</label>
                <input
                  type="text"
                  id="bnumber"
                  name="bnumber"
                  value={formData.bnumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Contact Mobile Phone</label>
                <input
                  type="text"
                  id="pnumber"
                  name="pnumber"
                  value={formData.pnumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          <section>
            <h2>Compliance Contact</h2>
            <p>
              Please provide a compliance contact for your organization. This
              contact should be responsible for ethics and compliance policies
              and your organization's business conduct guidelines. VMware may
              require this contact to respond to the Partner Integrity due
              diligence questionnaire.
            </p>
            <p>
              I attest that I have been authorized by the appointed contact to
              complete this form on their behalf and provide their personal data
              to VMware.
            </p>
            <div className="form-group">
              <label>My compliance contact is same as primary contact</label>
              <div className="radio-group">
                <input
                  className="radio-btn"
                  type="radio"
                  name="complianceContact"
                  checked={complianceSameAsPrimary}
                  onChange={() => setComplianceSameAsPrimary(true)}
                  id="radioYes"
                />
                <label htmlFor="radioYes">Yes</label>
                <input
                  className="radio-btn"
                  type="radio"
                  name="complianceContact"
                  checked={!complianceSameAsPrimary}
                  onChange={() => setComplianceSameAsPrimary(false)}
                  id="radioNo"
                />
                <label htmlFor="radioNo">No</label>
              </div>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Salutation</label>
                <select disabled={complianceSameAsPrimary}>
                  <option>Select</option>
                </select>
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" disabled={complianceSameAsPrimary} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" disabled={complianceSameAsPrimary} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="English Language Only"
                  disabled={complianceSameAsPrimary}
                />
              </div>
              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  placeholder="English Language Only"
                  disabled={complianceSameAsPrimary}
                />
              </div>
              <div className="form-group">
                <label>User Role</label>
                <input type="text" disabled={complianceSameAsPrimary} />
              </div>
              <div className="form-group">
                <label>Contact Business Phone</label>
                <input type="text" disabled={complianceSameAsPrimary} />
              </div>
              <div className="form-group">
                <label>Contact Mobile Phone</label>
                <input type="text" disabled={complianceSameAsPrimary} />
              </div>
            </div>
          </section>

          <button type="submit" className="submit-button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyForm;
