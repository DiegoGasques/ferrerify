import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ExpensesList } from "./ExpensesList";
import { expensesArr } from "../../fixtures/expenses";

describe("[COMPONENT] ExpensesList", () => {
  it("Tests for changes in the rendered component with expenses", () => {
    const wrapper = shallow(<ExpensesList expenses={expensesArr} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Tests for changes in the rendered component with no expense", () => {
    const wrapper = shallow(<ExpensesList expenses={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
