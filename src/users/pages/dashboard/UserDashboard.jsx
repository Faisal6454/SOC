import React from 'react';
import "./UserDashboard.css";

import CombinedChart from './components/CombinedChart';

const UserDashboard = () => {

  const pieDataBefore = [
    { name: 'iOS', value: 407 },
    { name: 'Android', value: 9 },
    { name: 'macOS', value: 416 },
    { name: 'Windows', value: 164 },
  ];
  
  const pieDataAfter = [
    { name: 'iOS', value: 407 },
    { name: 'Android', value: 209 },
    { name: 'macOS', value: 416 },
    { name: 'Windows', value: 164 },
  ];
  
  const barDataBefore = [
    { name: 'Category 1', count: 6 },
    { name: 'Category 2', count: 12 },
    { name: 'Category 3', count: 4 },
    { name: 'Category 4', count: 1 },
  ];
  
  const barDataAfter = [
    { name: 'Category 1', count: 3 },
    { name: 'Category 2', count: 8 },
    { name: 'Category 3', count: 9 },
    { name: 'Category 4', count: 2 },
  ];

  const barDataBeforeThreeMore = [
    { name: 'Category 5', count: 7 },
    { name: 'Category 6', count: 15 },
    { name: 'Category 7', count: 5 },
  ];
  
  const barDataAfterThreeMore = [
    { name: 'Category 5', count: 5 },
    { name: 'Category 6', count: 10 },
    { name: 'Category 7', count: 8 },
  ];

  const barDataBeforeTwoMore = [
    { name: 'Category 8', count: 9 },
    { name: 'Category 9', count: 11 },
  ];
  
  const barDataAfterTwoMore = [
    { name: 'Category 8', count: 6 },
    { name: 'Category 9', count: 7 },
  ];

  return (
    <>
      <div className="user-dashboard">
        <div className="dashboard">
          
          <main className="dashboard-main">
            <div className="charts">
              <div className="chart">
                <h3>Total Devices</h3>
                <h4>Before</h4>
                <div className="chart-content">
                  <CombinedChart data={pieDataBefore} type="pie" />
                </div>
              </div>
              <div className="chart">
                <h3>Total Devices (5)</h3>
                <h4>After</h4>
                <div className="chart-content">
                  <CombinedChart data={pieDataAfter} type="pie" />
                </div>
              </div>
              <div className="chart">
                <h3>Non-Compliant Devices</h3>
                <h4>Before</h4>
                <div className="chart-content">
                  <CombinedChart data={barDataBefore} type="bar" />
                </div>
              </div>
              <div className="chart">
                <h3>Non-Compliant Devices</h3>
                <h4>After</h4>
                <div className="chart-content">
                  <CombinedChart data={barDataAfter} type="bar" />
                </div>
              </div>

              {/* Three more bar charts */}
              <div className="chart">
                <h3>Additional Data</h3>
                <h4>Before</h4>
                <div className="chart-content">
                  <CombinedChart data={barDataBeforeThreeMore} type="bar" />
                </div>
              </div>
              <div className="chart">
                <h3>Additional Data</h3>
                <h4>After</h4>
                <div className="chart-content">
                  <CombinedChart data={barDataAfterThreeMore} type="bar" />
                </div>
              </div>

              {/* Two more bar charts */}
              <div className="chart">
                <h3>More Data</h3>
                <h4>Before</h4>
                <div className="chart-content">
                  <CombinedChart data={barDataBeforeTwoMore} type="bar" />
                </div>
              </div>
              <div className="chart">
                <h3>More Data</h3>
                <h4>After</h4>
                <div className="chart-content">
                  <CombinedChart data={barDataAfterTwoMore} type="bar" />
                </div>
              </div>
                  {/* Four more bar charts */}
              <div className="chart">
                <h3>Non-Compliant Devices</h3>
                <h4>Before</h4>
                <div className="chart-content">
                  <CombinedChart data={barDataBefore} type="bar" />
                </div>
              </div>
              <div className="chart">
                <h3>Non-Compliant Devices</h3>
                <h4>After</h4>
                <div className="chart-content">
                  <CombinedChart data={barDataAfter} type="bar" />
                </div>
              </div>
            </div>
            <div className="descriptions">
              <div className="description">
                <h3>Description:</h3>
                <p>This MDM report provides a snapshot of the organization's device landscape, revealing a total of 785 managed devices. The breakdown of these devices shows 5 running on Android, 209 on iOS, 407 utilizing MacOS, and 164 operating with Windows. This report offers valuable insights into the composition of devices across different platforms, aiding in efficient management and resource allocation.</p>
              </div>
              <div className="description">
                <h3>Analyst Comments:</h3>
                <p>The CSU team has initiated a cleanup of outdated and inactive devices through the MDM console. The comparative data illustrates a decrease in Windows devices from 168 to 164 and a decrease in Android devices from 9 to 5. However, there is an observed increase in iOS and macOS devices, with a decrease of 2 devices in iOS and 9 devices in macOS. The cleanup effort demonstrates effective management of the device inventory, improving its accuracy and relevance.</p>
              </div>
              <div className="description box-3">
                <h3>Description:</h3>
                <p>Currently, Flipp's MDM AirWatch has identified a total of 22 non-compliant devices which includes Endpoints and mobile devices. These devices are not currently meeting Flipp's established MDM policies and compliance standards. Non-compliance can pose security and operational risks to our organization.</p>
              </div>
              <div className="description">
                <h3>Recommendations:</h3>
                <p>1. CSU Recommends to Enforce encryption policy.
                   2. CSU Recommends to Configure encryption on non-compliant devices.
                   3. CSU Recommends to Educate users on encryption.</p>
              </div>
                    {/* Three more bar charts */}
              <div className="description box-3">
                <h3>Description:</h3>
                <p>Currently, Flipp's MDM AirWatch has identified a total of 22 non-compliant devices which includes Endpoints and mobile devices. These devices are not currently meeting Flipp's established MDM policies and compliance standards. Non-compliance can pose security and operational risks to our organization.</p>
              </div>
              <div className="description">
                <h3>Recommendations:</h3>
                <p>1. CSU Recommends to Enforce encryption policy.
                   2. CSU Recommends to Configure encryption on non-compliant devices.
                   3. CSU Recommends to Educate users on encryption.</p>
              </div>
                      {/* Two more bar charts */}
              <div className="description box-3">
                <h3>Description:</h3>
                <p>Currently, Flipp's MDM AirWatch has identified a total of 22 non-compliant devices which includes Endpoints and mobile devices. These devices are not currently meeting Flipp's established MDM policies and compliance standards. Non-compliance can pose security and operational risks to our organization.</p>
              </div>
              <div className="description">
                <h3>Recommendations:</h3>
                <p>1. CSU Recommends to Enforce encryption policy.
                   2. CSU Recommends to Configure encryption on non-compliant devices.
                   3. CSU Recommends to Educate users on encryption.</p>
              </div>
              {/* Four more bar charts */}
              <div className="description last-reco">
                <h3>Recommendations:</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio temporibus est minima libero itaque laudantium!</p>
                <p>1. CSU Recommends to Enforce encryption policy.
                   2. CSU Recommends to Configure encryption on non-compliant devices.
                   3. CSU Recommends to Educate users on encryption.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
