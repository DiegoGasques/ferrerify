import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { EditExpensePage } from "./EditExpensePage";
import { expensesArr } from "../../fixtures/expenses";

describe("[COMPONENT] EditExpensePage", () => {
  it("Tests for correct render", () => {
    const wrapper = shallow(
      <EditExpensePage
        expense={expensesArr[0]}
        editExpense={() => {}}
        history={{ push: () => {} }}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Tests for correct onSubmit call", () => {
    const edits = {
      description: "New Description",
      note: "New Note",
      amount: "67368",
      createdAt: expensesArr[0].createdAt
    };
    const editExpenseSpy = jest.fn();
    const historyPushSpy = jest.fn();
    const wrapper = shallow(
      <EditExpensePage
        expense={expensesArr[0]}
        editExpense={editExpenseSpy}
        history={{ push: historyPushSpy }}
      />
    );

    wrapper.find("ExpenseForm").prop("onSubmit")(edits);
    expect(editExpenseSpy).toHaveBeenCalledWith(edits);
    expect(historyPushSpy).toHaveBeenCalledWith("/");
  });
});
