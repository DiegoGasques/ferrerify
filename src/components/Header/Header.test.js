import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "./Header";

describe("[COMPONENT] Header", () => {
  it("Tests for changes in the rendered component", () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
