import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from "../actionTypes";

export default (state = {}, { type, payload }) => {
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
