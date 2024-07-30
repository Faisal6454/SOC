import React from 'react';
import './Chart.css';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", malware: 2000, lastYear: 2400 },
  { name: "Feb", malware: 2100, lastYear: 2210 },
  { name: "Mar", malware: 2200, lastYear: 2290 },
  { name: "Apr", malware: 2800, lastYear: 2000 },
  { name: "May", malware: 2500, lastYear: 2181 },
  { name: "Jun", malware: 2300, lastYear: 2500 },
  { name: "Jul", malware: 2600, lastYear: 2100 },
  { name: "Aug", malware: 2700, lastYear: 2300 },
  { name: "Sep", malware: 2900, lastYear: 2000 },
  { name: "Oct", malware: 3000, lastYear: 2100 },
  { name: "Nov", malware: 3200, lastYear: 2400 },
  { name: "Dec", malware: 3400, lastYear: 2500 },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="chart-container">
        <div className="chart-header">
          <h3>Malware Chart</h3>
          <select className="chart-select">
            <option value="jun-2024">Jan 2024</option>
            <option value="jun-2024">Feb 2024</option>
            <option value="jun-2024">Mar 2024</option>
            <option value="jun-2024">Apr 2024</option>
            <option value="jun-2024">May 2024</option>
            <option value="jun-2024">Jun 2024</option>
            <option value="jun-2024">Jul 2024</option>
            <option value="jun-2024">Aug 2024</option>
            <option value="jun-2024">Sep 2024</option>
            <option value="jun-2024">Oct 2024</option>
            <option value="jun-2024">Nov 2024</option>
            <option value="jun-2024">Dec 2024</option>
            {/* Add other options as needed */}
          </select>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="malware"
              stroke="#007bff"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="lastYear" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
