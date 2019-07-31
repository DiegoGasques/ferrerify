import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { NotFound } from "./NotFound";

describe("[COMPONENT] NotFound", () => {
  it("Tests for changes in the rendered component", () => {
    const wrapper = shallow(<NotFound />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
