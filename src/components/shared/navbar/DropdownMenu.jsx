import React, { useState } from 'react';
import './DropdownMenu.css';
import '../navbar/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCog, faDownload, faSignOutAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faStar, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import pro from '../../../assets/images/pro.jpeg';

const DropdownMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
        <div className="nav_right">
          <ul>
            <li className={`nr_li dd_main ${isActive ? 'active' : ''}`} onClick={toggleDropdown}>
              <img src={pro} alt="profile_img" />
              <div className="dd_menu">
                <div className="dd_left">
                  <ul>
                    <li><FontAwesomeIcon icon={faMapMarkerAlt} /></li>
                    <li><FontAwesomeIcon icon={faStar} /></li>
                    <li><FontAwesomeIcon icon={faPlusSquare} /></li>
                    <li><FontAwesomeIcon icon={faCog} /></li>
                    <li><FontAwesomeIcon icon={faDownload} /></li>
                    <li><FontAwesomeIcon icon={faSignOutAlt} /></li>
                  </ul>
                </div>
                <div className="dd_right">
                  <ul>
                    <li>Location</li>
                    <li>Favorites</li>
                    <li>Addpeople</li>
                    <li>Settings</li>
                    <li>Downloads</li>
                    <li>Logout</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
  );
};

export default DropdownMenu;
