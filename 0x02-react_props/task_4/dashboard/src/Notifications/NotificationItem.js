import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, value, html }) {
  return (
    <li data-notification-type={type}>
      {value && !html && value}
      {html && !value && (
        <div dangerouslySetInnerHTML={html}></div>
      )}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;