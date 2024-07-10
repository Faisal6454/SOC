// import React from "react";
// import "./Dashboard.css";
// import {
//   LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
// } from 'recharts';

// import Companys from "../../assets/Dashboard/building.png";
// import Software from "../../assets/Dashboard/monitor-mobbile.png";
// import Malware from "../../assets/Dashboard/cpu-setting.png";
// import Driver from "../../assets/Dashboard/driver.png";
// import Cube from "../../assets/Dashboard/3dcube.png";
// import Judge from "../../assets/Dashboard/judge.png";

// const Dashboard = () => {

//   const data = [
//     { name: 'Jan', malware: 1000, lastYear: 1100 },
//     { name: 'Feb', malware: 1200, lastYear: 1300 },
//     { name: 'Mar', malware: 1800, lastYear: 1700 },
//     { name: 'Apr', malware: 1600, lastYear: 1500 },
//     { name: 'May', malware: 1900, lastYear: 2100 },
//     { name: 'Jun', malware: 2300, lastYear: 2200 },
//     { name: 'Jul', malware: 2100, lastYear: 2000 },
//     { name: 'Aug', malware: 2000, lastYear: 2100 },
//     { name: 'Sep', malware: 1900, lastYear: 1800 },
//     { name: 'Oct', malware: 2200, lastYear: 2300 },
//     { name: 'Nov', malware: 2100, lastYear: 2200 },
//     { name: 'Dec', malware: 2300, lastYear: 2400 },
// ];

//   return (
//     <>
//         <div className="dashboard">
//             <div className="left-side">
//               <div className="left-inner">
//                 <div className="left-box">
//                   <img src={Companys} alt="icon" />
//                   <h4>Active Company's of SOC</h4>
//                   <h2>511+  </h2>
//                 </div>

//                 <div className="left-box">
//                   <img src={Software} alt="icon" />
//                   <h4>All Software's of SOC</h4>
//                   <h2>120+  </h2>
//                 </div>

//                 <div className="left-box">
//                   <img src={Malware} alt="icon" />
//                   <h4>Active Malware List</h4>
//                   <h2>20  </h2>
//                 </div>

//                 <div className="left-box">
//                   <img src={Driver} alt="icon" />
//                   <h4>Active Company's of SOC</h4>
//                   <h2>20+  </h2>
//                 </div>

//                 <div className="left-box">
//                   <img src={Cube} alt="icon" />
//                   <h4>All Software's of SOC</h4>
//                   <h2>20%  </h2>
//                 </div>

//                 <div className="left-box">
//                   <img src={Judge} alt="icon" />
//                   <h4>Active Malware List</h4>
//                   <h2>1.2%  </h2>
//                 </div>
//               </div>

//               <div className="bottom-chart-section">
//             <div className="section-header">
//                 <h2>Malware Chart</h2>
//                 <select className="dropdown">
//                     <option>Jan 2024</option>
//                     <option>Fab 2024</option>
//                     <option>Mar 2024</option>
//                     <option>Apr 2024</option>
//                     <option>May 2024</option>
//                     <option>Jun 2024</option>
//                     <option>Jul 2024</option>
//                     <option>Aug 2024</option>
//                     <option>Sep 2024</option>
//                     <option>Oct 2024</option>
//                     <option>Nov 2024</option>
//                     <option>Dec 2024</option>
//                 </select>
//                 <div className="legend">
//                     <span><div className="dot malware"></div>Malware</span>
//                     <span><div className="dot lastYear"></div>Last Year Same Month</span>
//                 </div>
//             </div>
//             <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={data}>
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="malware" stroke="#3b82f6" dot={{ r: 6 }} activeDot={{ r: 8 }} />
//                     <Line type="monotone" dataKey="lastYear" stroke="#a0aec0" dot={{ r: 6 }} activeDot={{ r: 8 }} />
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//             </div>


//             <div className="right-side">
//             <div className="right-side-section">
//             <div className="section-header">
//                 <h2>Software Statistics</h2>
//                 <button className="refresh-button">↻</button>
//             </div>
//             <div className="stats">
//                 <div className="stat">
//                     <span>Active</span>
//                     <div className="progress-bar">
//                         <div className="progress" style={{width: '65.72%'}}></div>
//                         <span className="percentage">65.72%</span>
//                     </div>
//                 </div>
//                 <div className="stat">
//                     <span>Inactive</span>
//                     <div className="progress-bar">
//                         <div className="progress" style={{width: '80.25%'}}></div>
//                         <span className="percentage">80.25%</span>
//                     </div>
//                 </div>
//                 <div className="stat">
//                     <span>Live</span>
//                     <div className="progress-bar">
//                         <div className="progress" style={{width: '35.10%'}}></div>
//                         <span className="percentage">35.10%</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="transactions-header">
//                 <h3>Today Transactions</h3>
//                 <button className="sort-button">⇅</button>
//             </div>
//             <div className="transactions">
//                 <div className="transaction">
//                     <div className="transaction-icon">🔹</div>
//                     <div className="transaction-details">
//                         <span>Income Amount</span>
//                         <span>02:40 PM</span>
//                     </div>
//                     <div className="transaction-amount income">$20.00</div>
//                 </div>
//                 <div className="transaction">
//                     <div className="transaction-icon">🔹</div>
//                     <div className="transaction-details">
//                         <span>Expenses Amount</span>
//                         <span>10:20 AM</span>
//                     </div>
//                     <div className="transaction-amount expense">-$20.00</div>
//                 </div>
//                 <div className="transaction">
//                     <div className="transaction-icon">🔹</div>
//                     <div className="transaction-details">
//                         <span>Income Amount</span>
//                         <span>02:40 PM</span>
//                     </div>
//                     <div className="transaction-amount income">$20.00</div>
//                 </div>
//                 <div className="transaction">
//                     <div className="transaction-icon">🔹</div>
//                     <div className="transaction-details">
//                         <span>Expenses Amount</span>
//                         <span>10:20 AM</span>
//                     </div>
//                     <div className="transaction-amount expense">-$20.00</div>
//                 </div>
//                 <div className="transaction">
//                     <div className="transaction-icon">🔹</div>
//                     <div className="transaction-details">
//                         <span>Income Amount</span>
//                         <span>02:40 PM</span>
//                     </div>
//                     <div className="transaction-amount income">$20.00</div>
//                 </div>
//                 <div className="transaction">
//                     <div className="transaction-icon">🔹</div>
//                     <div className="transaction-details">
//                         <span>Expenses Amount</span>
//                         <span>10:20 AM</span>
//                     </div>
//                     <div className="transaction-amount expense">-$20.00</div>
//                 </div>
//             </div>
//         </div>
//             </div>
//         </div>
//     </>
//   );
// };

// export default Dashboard;



import React from 'react';
import SummaryCards from './components/card/SummaryCards';
import Chart from './components/chart/Chart';
import Statistics from './components/statistics/Statistics';
import './Dashboard.css';

const Dashboard = () => {
  
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="left-side">
        <SummaryCards />
          <Chart />
        </div>
        <div className="right-side">
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
