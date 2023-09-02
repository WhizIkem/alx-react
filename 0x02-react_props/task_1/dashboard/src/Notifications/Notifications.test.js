import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Test Notifications.js /> Component", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("Notifications renders without crashing", () => {
    expect(wrapper).not.toBeUndefined();
  });

  it("Notifications renders three list items", () => {
    expect(wrapper.find("li").length).toBe(3);
  });

  it("Notifications renders the text 'Here is the list of notifications'", () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

});