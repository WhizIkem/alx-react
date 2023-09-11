import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should have 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("should have a disabled submit button by default", () => {
    const wrapper = shallow(<login />);
    const submitButton = wrapper.find("input[type='submit']");
    expect(submitButton.prop("disabled")).toEqual(true);
  });

  it("should enable submit button when email and password are entered", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("input[name='email']");
    const passwordInput = wrapper.find("input[name='password']");
    const submitButton = wrapper.find("input[type='submit']");

    expect(submitButton.prop("disabled")).toEqual(false);
  });
});