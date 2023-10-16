import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import { getUnreadNotifications, getUnreadNotificationsByType } from "../selectors/notificationSelector";
import { connect } from "react-redux";
import { markAsRead, setNotificationFilter } from "../actions/notificationActionCreators";

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.displayDrawer !== this.props.displayDrawer || nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    return (
      <React.Fragment>
        {!this.props.displayDrawer ? (
          <div className={css(styles.menuItem)} data-testid="menu-item">
            <p>Your notifications</p>
          </div>
        ) : (
          <div className={css(styles.Notifications)} data-testid="notif-drawer">
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={(e) => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {this.props.listNotifications.length !== 0 ? (
              <p data-testid="notif-listltext">Here is the list of notifications</p>
            ) : null}
            <button
              onClick={() => this.props.setNotificationFilter("URGENT")}
              className={css(styles.button)}
              data-testid="urgent-btn"
            >
              !!
            </button>
            <button
              onClick={() => this.props.setNotificationFilter("DEFAULT")}
              className={css(styles.button)}
              data-testid="default-btn"
            >
              💠
            </button>
            <ul data-testid="notif-list">
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : null}
              {this.props.listNotifications.map((val, idx) => (
                <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                  markAsRead={() => this.props.markAsRead(val.id)}
                  id={val.id}
                  data-testid={`notif-item-${idx}`}
                />
              ))}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const opacityAnim = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnim = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const styles = StyleSheet.create({
  Notifications: {
    padding: "1em",
    border: "2px dashed red",
    position: "absolute",
    top: "1.8em",
    right: "0",
    zIndex: "100",
    "@media (max-width: 900px)": {
      width: "100%",
      padding: "0px",
      fontSize: 20,
      position: "relative",
      right: 0,
      left: 0,
      border: "none",
    },
  },

  menuItem: {
    position: "relative",
    zIndex: 100,
    textAlign: "right",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },
  button: {
    "@media (max-width: 900px)": {
      position: "relative",
      float: "right",
    },
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  setNotificationFilter: PropTypes.func,
  markAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  setNotificationFilter,
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
