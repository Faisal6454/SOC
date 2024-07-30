import React from 'react';
import './Statistics.css';
import icon from "../../../../../assets/Dashboard/todayt.png";


const Statistics = () => {
  
    const transactions = [
      { type: "Income", time: "02:40 PM", amount: "$20.00", positive: true },
      { type: "Expenses", time: "10:20 AM", amount: "$20.00", positive: false },
      { type: "Income", time: "02:40 PM", amount: "$20.00", positive: true },
      { type: "Expenses", time: "10:20 AM", amount: "$20.00", positive: false },
      { type: "Income", time: "02:40 PM", amount: "$20.00", positive: true },
      { type: "Expenses", time: "10:20 AM", amount: "$20.00", positive: false },
    ];

  return (
    <>
      <div className="statistics">
        <div className="statistics-section">
          <div className="software-statistics">
            <h3>Software Statistics</h3>
            <div className="stat-item">
              <div className="stat-header">
                <span>Active</span>
                <span className="percentage">65.72%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "65.72%" }}></div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-header">
                <span>Inactive</span>
                <span className="percentage">80.25%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "80.25%" }}></div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-header">
                <span>Live</span>
                <span className="percentage">35.10%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "35.10%" }}></div>
              </div>
            </div>
          </div>

          <div className="today-transactions">
            <h3>Today Transactions</h3>
            {transactions.map((transaction, index) => (
              <div key={index} className="transaction-item">
                <div className="transaction-icon">
                  <img src={icon} alt="icon" />
                </div>
                <div className="transaction-details">
                  <span className="transaction-type">
                    {transaction.type} Amount
                  </span>
                  <span className="transaction-time">{transaction.time}</span>
                </div>
                <div
                  className={`transaction-amount ${
                    transaction.positive ? "positive" : "negative"
                  }`}
                >
                  {transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
