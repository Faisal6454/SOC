// Dashboard.js
import React, { useState } from "react";
import "./Company.css";
import { useNavigate } from 'react-router-dom';
import CompanyForm from "./companyform/CompanyForm";
import CompanyList from "./companylist/CompanyList";


const Company = ({}) => {
  const [addCustomer,setAddCustomer] = useState(false)
  const [customer,setCustomer] = useState([])
console.log("comapney customer",customer)
  const navigate = useNavigate();
  return (
  <div className="company">

{

  addCustomer ? 
  <CompanyForm  setCustomer={setCustomer} customer={customer} setAddCustomer={setAddCustomer}/>
  :
  customer.length > 0 ?   <CompanyList company={customer} setAddCustomer={setAddCustomer} />
:
  <div className="company-content">
  <div className="main-content">
  <div className="add-company">
  <button className="btn" onClick={() => setAddCustomer(true) }> Add Company</button>
  </div>
  </div>
</div>  
}


</div>

  );
};

export default Company;
