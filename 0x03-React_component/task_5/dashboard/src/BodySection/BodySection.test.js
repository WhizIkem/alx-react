import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("<BodySection test />", () => {
  it('renders h2 and p elements correctly', () => {
    const title = 'test title';
    const children = 'test children node';

    const wrapper = shallow(
      <BodySection title={title}>
        <p>{children}</p>
      </BodySection>
    );

    const h2Element = wrapper.find('h2');
    expect (h2Element).toHaveLength(1);
    expect (h2Element.text()).toBe(title);

    const pElement = wrapper.find('p');
    expect (pElement).toHaveLength(1);
    expect (pElement.text()).toBe(children);
  });
});