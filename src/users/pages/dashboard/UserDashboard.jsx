import React from 'react'
import "./UserDashboard.css"

const UserDashboard = () => {

  const pieDataBefore = {
    labels: ['iOS', 'Android', 'MacOS', 'Windows'],
    datasets: [
      {
        label: 'Total Devices Before',
        data: [100, 150, 200, 250],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const pieDataAfter = {
    labels: ['iOS', 'Android', 'MacOS', 'Windows'],
    datasets: [
      {
        label: 'Total Devices After',
        data: [110, 140, 210, 240],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const barDataBefore = {
    labels: ['iOS', 'Android', 'MacOS', 'Windows'],
    datasets: [
      {
        label: 'Non-Compliant Devices Before',
        data: [6, 12, 4, 1],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const barDataAfter = {
    labels: ['iOS', 'Android', 'MacOS', 'Windows'],
    datasets: [
      {
        label: 'Non-Compliant Devices After',
        data: [3, 8, 9, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };


  return (
    <>
      <div className="user-dashboard">
        UserDashboard
      </div>
    </>
  )
}

export default UserDashboard