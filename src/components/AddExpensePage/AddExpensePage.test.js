import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { AddExpensePage } from "./AddExpensePage";

describe("[COMPONENT] AddExpensePage", () => {
  it("Tests for correct render", () => {
    const wrapper = shallow(
      <AddExpensePage addExpense={() => {}} history={{ push: () => {} }} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Tests for correct onSubmit call", () => {
    const expense = {
      description: "New Description",
      note: "New Note",
      amount: "67368",
      createdAt: 1283773
    };
    const addExpenseSpy = jest.fn();
    const historyPushSpy = jest.fn();
    const wrapper = shallow(
      <AddExpensePage
        addExpense={addExpenseSpy}
        history={{ push: historyPushSpy }}
      />
    );

    wrapper.find("ExpenseForm").prop("onSubmit")(expense);
    expect(addExpenseSpy).toHaveBeenCalledWith(expense);
    expect(historyPushSpy).toHaveBeenCalledWith("/");
  });
});
