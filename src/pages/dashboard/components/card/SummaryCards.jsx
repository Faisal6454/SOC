import React, { useState } from 'react';
import { FaBuilding, FaLaptop, FaVirus, FaChartBar } from 'react-icons/fa';
import Card from './Cards';
import './SummaryCards.css';

const SummaryCards = () => {
   const [data,setData]= useState([

    {icon :<FaBuilding />,
        title:"Active Company's of SOC",
        value:"511+"
    },
    {icon :<FaLaptop />,
        title:"All Software's of SOC",
        value:"120+"
    },
    {
        icon :<FaVirus />,
        title:"Active Malware List",
        value:"20"
    },
    {
        icon :<FaVirus />,
        title :"Active Company's of SOC",
        value:"20+"
    },
    {
        icon :<FaChartBar />,
        title :"All Software's of SOC",
        value:"20%"
    },
    {
        icon :<FaBuilding />,
        title :"Active Company's of SOC",
        value:"1.2%"
    }
   ])

  return (
    <div className="summary-cards">
    {data.map((item)=>{
        return( <Card icon={item.icon} title={item.title} value={item.value} />)
    })}
    </div>
  );
};

export default SummaryCards;
