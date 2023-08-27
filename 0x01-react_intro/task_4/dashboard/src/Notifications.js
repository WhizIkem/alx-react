import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
      style={{ 
        position: 'absolute',
        float: 'right',
        right: '5px',
        top: '5px',
      }}
      aria-label="Close"
      onClick={handleClick}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of Notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;