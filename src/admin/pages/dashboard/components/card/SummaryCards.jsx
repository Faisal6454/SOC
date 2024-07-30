import React, { useState } from "react";
import { FaLaptop, FaVirus, FaChartBar } from "react-icons/fa";
import Card from "./Cards";
import "./SummaryCards.css";

// Importing images from local assets folder
import company from "../../../../../assets/Dashboard/building.png";
import software from "../../../../../assets/Dashboard/monitor-mobbile.png";
import malware from "../../../../../assets/Dashboard/cpu-setting.png";
import driver from "../../../../../assets/Dashboard/driver.png";
import cube from "../../../../../assets/Dashboard/3dcube.png";
import judge from "../../../../../assets/Dashboard/judge.png";



const SummaryCards = () => {
  const [data, setData] = useState([
    {
      image: company,
      title: "Active Company's of SOC",
      value: "511+",
    },
    {
      image: software,
      title: "All Software's of SOC",
      value: "120+",
    },
    {
      image: malware,
      title: "Active Malware List",
      value: "20",
    },
    {
      image: driver,
      title: "Active Company's of SOC",
      value: "20+",
    },
    {
      image: cube,
      title: "All Software's of SOC",
      value: "20%",
    },
    {
      image: judge,
      title: "Active Malware List",
      value: "1.2%",
    },
  ]);

  return (
    <div className="summary-cards">
      {data.map((item, index) => (
        <Card
          key={index}
          icon={item.icon}
          title={item.title}
          value={item.value}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default SummaryCards;
