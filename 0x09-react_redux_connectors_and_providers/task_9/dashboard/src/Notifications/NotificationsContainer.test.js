import React from "react";
import { render } from "@testing-library/react";
import NotificationsContainer from "./NotificationsContainer";

test('NotificationsContainer fetches notifications on mount', () => {
  const fetchNotifications = jest.fn();
  render(
    <NotificationsContainer
      displayDrawer={true}
      listNotifications={[]}
      setNotificationFilter={() => {}}
      fetchNotifications={fetchNotifications}
    />
  );
});