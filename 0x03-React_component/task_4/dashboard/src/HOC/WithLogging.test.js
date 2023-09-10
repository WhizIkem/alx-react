import React from "react";
import { shallow } from "enzyme";
import WithLogging from "./WithLogging";

describe("WithLogging HOC", () => {
  let spyConsoleLog;

  beforeAll(() => {
    spyConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    spyConsoleLog.mockRestore();
  });

  it('should log messages when wrapping pure HTML', () => {
    const WrappedComponent = () => <p>Pure HTML</p>;
    const ComponentWithLogging = WithLogging(WrappedComponent);

    const wrapper = shallow(<ComponentWithLogging />);
    wrapper.unmount();

    expect(spyConsoleLog).toHaveBeenCalledWith('Component is mounted');
    expect(spyConsoleLog).toHaveBeenCalledWith('Component is going to unmount');
  });

  it('should log messages with component name for Login component', () => {
    const Login = () => <p>Login component</p>;
    const ComponentWithLogging = WithLogging(Login);

    const wrapper = shallow(<ComponentWithLogging />);
    wrapper.unmount();

    expect(spyConsoleLog).toHaveBeenCalledWith('Component Login is mounted');
    expect(spyConsoleLog).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});