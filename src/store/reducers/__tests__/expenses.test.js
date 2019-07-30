import reducer from "../expenses.reducer";
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from "../../actionTypes";

describe("[Reducer] Expenses", () => {
  let initState;
  beforeEach(() => {
    initState = {
      "1": {
        id: "1",
        description: "Rent",
        note: "Montly rent",
        amount: 150000,
        createdAt: 1000000
      },
      "2": {
        id: "2",
        description: "Groceries",
        note: "Week 1",
        amount: 10000,
        createdAt: 30000000
      }
    };
  });

  it("Tests for correct output state given ADD_EXPENSE action", () => {
    const expense = {
      id: "3",
      description: "Expense",
      amount: 15000,
      note: "Note",
      createdAt: 1000
    };
    const action = { type: ADD_EXPENSE, payload: expense };
    const state = reducer(initState, action);
    expect(state).toEqual({
      ...initState,
      [expense.id]: expense
    });
  });

  it("Tests for correct output state given REMOVE_EXPENSE action", () => {
    const id = Object.keys(initState)[1];
    const action = { type: REMOVE_EXPENSE, payload: id };
    const state = reducer(initState, action);
    const expectedState = Object.keys(initState).reduce((acc, key) => {
      if (key !== id) {
        acc[key] = initState[key];
      }
      return acc;
    }, {});
    expect(state).toEqual(expectedState);
  });

  it("Tests for correct output state given EDIT_EXPENSE action", () => {
    const id = Object.keys(initState)[0];
    const updates = { note: "This is a test note" };
    const action = { type: EDIT_EXPENSE, payload: { id, updates } };
    const state = reducer(initState, action);
    const expectedState = {
      ...initState,
      [id]: { ...initState[id], note: updates.note }
    };
    expect(state).toEqual(expectedState);
  });
});
