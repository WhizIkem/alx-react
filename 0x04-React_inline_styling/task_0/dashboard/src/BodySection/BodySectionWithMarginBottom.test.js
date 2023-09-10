import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("<BodySectionWithMarginBottom />", () => {
  it('renders a BodySection component with correct props', () => {
    const title = 'test title';
    const children = 'test children';

    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    const bodySection = wrapper.find(BodySection);
    expect (bodySection).toHaveLength(1);

    expect(bodySection.prop('title')).toBe(title);
    expect(bodySection.prop('children')).toBe(children);
  });
});
