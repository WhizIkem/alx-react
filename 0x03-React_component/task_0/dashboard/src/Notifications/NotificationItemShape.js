import PropTypes from 'prop-types';

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

export default NotificationItemShape;