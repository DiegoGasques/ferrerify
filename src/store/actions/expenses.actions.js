import uuid from "uuid/v4";
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from "../actionTypes";

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  payload: {
    id: uuid(),
    ...expense
  }
});

export const removeExpense = id => ({
  type: REMOVE_EXPENSE,
  payload: id
});

export const editExpense = (id, updates) => {
  console.log("id: ", id);
  return {
    type: EDIT_EXPENSE,
    payload: {
      id,
      updates
    }
  };
};
