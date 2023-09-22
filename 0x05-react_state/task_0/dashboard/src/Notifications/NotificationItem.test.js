import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li[data-notification-type="default"]').text()).toBe(
      "test"
    );
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const wrapper = shallow(
    <NotificationItem html="<u>test</u>" />
  );
  expect(wrapper.find('li[data-urgent="true"] > u').html()).toEqual(
    '<u>test</u></li>'
    );
  });
});

describe("onclick event behaves as it should", () => {
  it("should call MarkAsRead with the correct id when clicked", () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <NotificationItem value="test item" markAsRead={spy} id={1} />
    );
    wrapper.find('li[data-notification-type="default"]').simulate("click");
    expect(spy).toHaveBeenCalledWith(1);
  });
});