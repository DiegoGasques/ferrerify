import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Dashboard } from "./Dashboard";

describe("[COMPONENT] Dashboard", () => {
  it("Tests for changes in the rendered component", () => {
    const wrapper = shallow(<Dashboard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
