import React from "react";
import "./Dashboard.css"
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

// icon
import Companys from "../../assets/icons/companys.svg"
import Software from "../../assets/icons/software.svg"
import Malware from "../../assets/icons/malware.svg"


const Dashboard = () => {

  const malwareData = {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Malware",
        data: [120, 150, 180, 200, 170, 220],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
      {
        label: "Same period last year",
        data: [100, 140, 160, 190, 150, 200],
        borderColor: "rgba(201, 203, 207, 1)",
        backgroundColor: "rgba(201, 203, 207, 0.2)",
        fill: true,
      },
    ],
  };

  const lineOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: ["Hired", "Canceled", "Pending"],
    datasets: [
      {
        data: [54, 20, 26],
        backgroundColor: ["#4285F4", "#34A853", "#EA4335"],
        hoverBackgroundColor: ["#4285F4", "#34A853", "#EA4335"],
        borderWidth: 1,
        cutout: "70%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="container">
        <div className="main-div">
          <div className="left-side">
            <div className="">
              <div className="insights">
                <div className="box" id="one">
                  <img src={Companys} alt="logo" />
                  <div className="middle">
                    <h2>Company's</h2>
                    <h2>511</h2>
                  </div>
                </div>

                <div className="box" id="two">
                  <img src={Software} alt="logo" />
                  <div className="middle">
                    <h2>Software</h2>
                    <h2>511</h2>
                  </div>
                </div>

                <div className="box" id="three">
                  <img src={Malware} alt="logo" />
                  <div className="middle">
                    <h2>Malware</h2>
                    <h2>511</h2>
                  </div>
                </div>
              </div>

              {/* start recent order  */}
              <div className="recent_order">
                <div className="chart">
                  <div className="chart-heading">
                    <h4>Malware</h4>
                    <p>Mar 2022 - Oct 2022</p>
                  </div>
                  <Line data={malwareData} options={lineOptions} />
                </div>
              </div>
              {/* end recent order  */}
            </div>
          </div>

          <div className="right-side">
            {/* right section start */}
           
              <div className="right-pan">
                <div className="right-pan-head">
                  <h1>Todays Statistics</h1>
                  <p>Tue, 14 Nov, 2022, 11.30 AM</p>
                </div>
                <div className="content-right">
                  <div className="box-one">
                    <h2>
                      Income
                      <button className="today-button">Today</button>
                    </h2>
                    <h1>
                      $ 9460.00
                      <span className="down"> ↓ 1.5% </span>
                    </h1>
                    <p>Compared to $9940 yesterday</p>
                    <h4>
                      Last week income
                      <span>$25658.00</span>
                    </h4>
                  </div>
                  <div className="box-one">
                    <h2>
                      Expenses
                      <button className="today-button">Today</button>
                    </h2>
                    <h1>
                      $ 5660.00
                      <span className="up"> ↑ 2.5% </span>
                    </h1>
                    <p>Compared to $5240 yesterday</p>
                    <h4>
                      Last week expenses
                      <span>$22658.00</span>
                    </h4>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <h2>Hire vs Cancel</h2>
                      <button className="today-button">Today</button>
                    </div>
                    <Doughnut data={data} options={options} />
                    <div className="legend">
                      <div className="legend-item">
                        <span
                          className="legend-color"
                          style={{ backgroundColor: "#4285F4" }}
                        ></span>
                        Total Hired{" "}
                        <span className="percentage">
                          54% <span className="up-arrow">↑</span>
                        </span>
                      </div>
                      <div className="legend-item">
                        <span
                          className="legend-color"
                          style={{ backgroundColor: "#34A853" }}
                        ></span>
                        Total Canceled{" "}
                        <span className="percentage">
                          20% <span className="up-arrow">↑</span>
                        </span>
                      </div>
                      <div className="legend-item">
                        <span
                          className="legend-color"
                          style={{ backgroundColor: "#EA4335" }}
                        ></span>
                        Total Pending{" "}
                        <span className="percentage">
                          26% <span className="down-arrow">↓</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right section end */}
          </div>
        </div>
    </>
  );
};

export default Dashboard;
