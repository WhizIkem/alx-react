import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Notifications from "./Notifications";

describe("<Test Notifications.js /> Component", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("Notifications renders without crashing", () => {
    expect(wrapper).to.not.be.an("undefined");
  });

  it("Notifications renders three list items", () => {
    expect(wrapper.find("li")).to.have.lengthOf(3);
  });

  it("Notifications renders the text 'Here is the list of notifications'", () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
  });

});