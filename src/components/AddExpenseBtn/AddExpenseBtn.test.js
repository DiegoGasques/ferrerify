import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { AddExpenseBtn } from "./AddExpenseBtn";

describe("[COMPONENT] AddExpenseBtn", () => {
  it("Tests for changes in the rendered component", () => {
    const wrapper = shallow(<AddExpenseBtn />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
