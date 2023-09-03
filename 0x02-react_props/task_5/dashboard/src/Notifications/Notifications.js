import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer, listNotifications }) {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div>
      {displayDrawer && (
        <div className="menuItem">Your notifications</div>
      )}
      <div className="Notifications">
      <button
        style={{
          color: '#3a3a3a',
          fontWeight: 'bold',
          background: 'none',
          border: 'none',
          fontSize: '15px',
          position: 'absolute',
          right: '3px',
          top: '3px',
          cursor: 'pointer',
          outline: 'none',
        }}
        aria-label="Close"
        onClick={handleClose}
      >
        <img src={closeIcon} alt="close-icon" />
      </button>
      {listNotifications.length === 0 ? (
        <p>No new notification for now</p>
      ) : (
        <ul>
          {listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
            />
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
