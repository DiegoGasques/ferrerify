import {
  SET_TEXT_FILTER,
  SET_SORT_BY,
  SET_START_DATE_FILTER,
  SET_END_DATE_FILTER
} from "../actionTypes";

const initialState = {
  text: "",
  sortBy: "date",
  startDate: null,
  endDate: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.payload
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      };
    case SET_START_DATE_FILTER:
      return {
        ...state,
        startDate: action.payload
      };
    case SET_END_DATE_FILTER:
      return {
        ...state,
        endDate: action.payload
      };
    default:
      return state;
  }
};
