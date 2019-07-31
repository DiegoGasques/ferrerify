import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { AddExpenseBtn } from "./AddExpenseBtn";

describe("[COMPONENT] AddExpenseBtn", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<AddExpenseBtn />)));
  afterEach(cleanup);

  it("Tests for changes in the rendered component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Tests for right path on the Link component", () => {
    expect(wrapper.prop("to")).toBe("/new");
  });
});
