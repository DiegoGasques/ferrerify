import { addExpense, removeExpense, editExpense } from "../expenses.actions.js";

it("Test for addExpense action creators correct output", () => {
  const newExpense = {
    description: "New expense",
    note: "This is a big expense",
    createdAt: 1000000,
    amount: 15000
  };
  const action = addExpense(newExpense);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...newExpense,
      id: expect.any(String)
    }
  });
});

it("Test for removeExpense action creators correct output", () => {
  const id = "123";
  const action = removeExpense(id);
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id
  });
});

it("Test for editExpense action creators correct output", () => {
  const id = "123";
  const updates = { note: "The updated note" };
  const action = editExpense(id, updates);
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id,
    updates
  });
});
