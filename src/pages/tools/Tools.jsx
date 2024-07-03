import React, { useState } from "react";
import "./Tools.css";
import { useNavigate } from 'react-router-dom';
import ToolsList from "./toolslist/ToolsList";
import AddTools from "./addtools/AddTools";

const Tools = () => {
    const [addCustomer,setAddCustomer] = useState(false)
    const [customer,setCustomer] = useState([])
    console.log("comapney customer",customer)
    const navigate = useNavigate();

    return (
    <div className="company">

{

    addCustomer ? 
    <AddTools  setCustomer={setCustomer} customer={customer} setAddCustomer={setAddCustomer}/>
    :
    customer.length > 0 ?   <ToolsList company={customer} setAddCustomer={setAddCustomer} />
    :
    <div className="company-content">
    <div className="main-content">
    <div className="add-company">
    <button className="btn" onClick={() => setAddCustomer(true) }>Add Data</button>
    </div>
    </div>
    </div>  
}


</div>

    );
};

export default Tools;
