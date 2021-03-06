import { addExpense, removeExpense, editExpense } from "../expenses.actions.js";
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from "../../actionTypes";

describe("[Action] Expenses", () => {
  it("Test for addExpense action creators correct output", () => {
    const newExpense = {
      description: "New expense",
      note: "This is a big expense",
      createdAt: 1000000,
      amount: 15000
    };
    const action = addExpense(newExpense);

    expect(action).toEqual({
      type: ADD_EXPENSE,
      payload: {
        ...newExpense,
        id: expect.any(String)
      }
    });
  });

  it("Test for removeExpense action creators correct output", () => {
    const id = "123";
    const action = removeExpense(id);
    expect(action).toEqual({
      type: REMOVE_EXPENSE,
      payload: id
    });
  });

  it("Test for editExpense action creators correct output", () => {
    const id = "123";
    const updates = { note: "The updated note" };
    const action = editExpense(id, updates);
    expect(action).toEqual({
      type: EDIT_EXPENSE,
      payload: {
        id,
        updates
      }
    });
  });
});
