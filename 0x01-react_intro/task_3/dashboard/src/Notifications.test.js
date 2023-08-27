import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications test", () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('Notifications renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.find('p').text();
    expect(text).toContain('Here is the list of Notifications');
  });
});