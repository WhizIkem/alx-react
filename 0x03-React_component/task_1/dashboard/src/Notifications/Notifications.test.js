import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Test Notifications.js /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("Notifications renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Notifications renders NotificationItem", () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    wrapper.setProps({ listNotifications: notifications });

    expect(wrapper.find(NotificationItem)).toHaveLength(2); // Updated to 2
  });

  it("Notifications renders the text 'Here is the list of notifications'", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".Notifications p").text()).toEqual("No new notification for now");
  });

  it("verifies that Notifications renders the list correctly and the first NotificationItem element renders the right HTML", () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    wrapper.setProps({ listNotifications: notifications });

    expect(wrapper.find(NotificationItem).first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".Notifications").exists()).toBe(true);
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".Notifications").exists()).toBe(true);
  });

  it("renders correctly when listNotifications is not passed (empty array)", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
    expect(wrapper.contains(<p>No new notification for now</p>)).toEqual(true);
  });

  it("renders correctly when listNotifications is an empty array", () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
    expect(wrapper.contains(<p>No new notification for now</p>)).toEqual(true);
  });

  it("renders correctly when listNotifications is not empty", () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available', html: undefined },
      { id: 2, type: 'urgent', value: 'New resume available', html: { __html: '<u>test</u>' }},
    ];
    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });
});
