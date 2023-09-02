import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

describe("<Test Notifications.js /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("Notifications renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Notifications renders NotificationItem", () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("Notifications renders the text 'Here is the list of notifications'", () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
  });

  it("verifies that Notifications renders the list correctly and the first NotificationItem element renders the right HTML", () => {
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});