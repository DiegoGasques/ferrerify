import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Container } from "./Container";

describe("[COMPONENT] Container", () => {
  it("Tests for changes in the rendered component", () => {
    const wrapper = shallow(<Container />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
