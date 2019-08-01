import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ExpensesListItem } from "./ExpensesListItem";
import { expensesArr } from "../../../fixtures/expenses";

describe("[COMPONENT] ExpensesListItem", () => {
  it("Tests for handle toggle button being called correctly", () => {
    const wrapper = shallow(<ExpensesListItem {...expensesArr[0]} />);
    expect(wrapper.find(".fa-sort-down")).toBeDefined();
    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.find(".ExpensesListItem__toggle-Btn").simulate("click");
    expect(wrapper.find(".fa-sort-up")).toBeDefined();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Tests for removeExpense to have been called on button click", () => {
    const removeExpenseSpy = jest.fn();
    const wrapper = shallow(
      <ExpensesListItem removeExpense={removeExpenseSpy} {...expensesArr[0]} />
    );

    wrapper.find(".ExpensesListItem__toggle-Btn").simulate("click");
    wrapper.find(".ExpenseListItem__delete-btn").simulate("click");
    expect(removeExpenseSpy).toHaveBeenCalled();
  });
});
