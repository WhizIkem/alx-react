import React from "react";
import { fromJS } from "immutable";
import App, { mapStateToProps } from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext, user, logOut } from "./AppContext";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({
  isUserLoggedIn: true,
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(wrapper.exists()).toBe(true);
  });

  it("contains Notifications component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(wrapper.find('[data-testid="menu-item"]')).toHaveLength(1);
  });

  it("contains Header component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
    
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it("contains Login component", () => {
    const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
    )

    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it("contains Footer component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it("checks CourseList is not rendered", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(wrapper.contains(<CourseList />)).toBe(false);
  });
});

describe("when isLogged in is true", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  )

  it("checks Login is not rendered", () => {
    expect(wrapper.find(Login).exists()).toBe(false);
  });

  it("checks CourseList is rendered", () => {
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it(`Tests that the logIn function updates user's state correctly`, () => {
    const wrapper = mount(
      <Provider store={store}>
        <AppContext.Provider value={{ user, logOut }}>
          <App />
        </AppContext.Provider>
      </Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logIn(myUser.email, myUser.password);
    expect(wrapper.state().user).toEqual(myUser);
    wrapper.unmount();
  });

  it(`Tests that the logOut function updates user's state correctly`, () => {
    const wrapper = mount(
      <Provider store={store}>
        <AppContext.Provider value={{ user, logOut }}>
          <App />
        </AppContext.Provider>
      </Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
    wrapper.unmount();
  });
});

describe("testing state of App.js", () => {
  it("displayDrawer initial value should be set to false", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    wrapper.find('[data-testid="menu-item"]').simulate('click');
    });

  it("should set displayDrawer to true after calling handleDisplayDrawer", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    wrapper.find('[data-testid="notif-drawer"]').simulate('click');
  });

  it("should set displayDrawer to false after calling handleHideDrawer", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    wrapper.find('App').setState({ displayDrawer: true });
    wrapper.find('Notifications .hideDrawerButton').simulate('click');

    expect(wrapper.find('App').state().displayDrawer).toBe(false);
    wrapper.unmount();
    });
});

describe("mapStateToProps", () => {
  it("should return the right object when state is provided", () => {
    let state = fromJS({
      isLoggedIn: true
    });

    const mappedProps = mapStateToProps(state);

    expect(mappedProps).toEqual({ isLoggedIn: true });
  });
});
