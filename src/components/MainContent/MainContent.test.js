import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { MainContent } from "./MainContent";

describe("[COMPONENT] MainContent", () => {
  it("Tests for changes in the rendered component", () => {
    const wrapper = shallow(<MainContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
