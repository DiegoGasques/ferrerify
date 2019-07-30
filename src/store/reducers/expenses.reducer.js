import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from "../actionTypes";
import moment from "moment";

const initState = {
  "1": {
    id: "1",
    description: "Rent",
    note: "Monthly payment",
    amount: 150000,
    createdAt: moment(0).valueOf()
  },
  "2": {
    id: "2",
    description: "Car washing",
    note: "Non planned expense",
    amount: 1000,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  "3": {
    id: "3",
    description: "Groceries",
    note: "Weekly expense",
    amount: 22000,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE:
      return {
        ...state,
        [payload.id]: payload
      };
    case REMOVE_EXPENSE:
      return Object.keys(state).reduce((acc, key) => {
        if (key !== payload) {
          acc[key] = state[key];
        }
        return acc;
      }, {});
    case EDIT_EXPENSE:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          ...payload.updates
        }
      };
    default:
      return state;
  }
};
