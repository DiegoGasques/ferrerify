import {
  SET_TEXT_FILTER,
  SET_SORT_BY,
  SET_START_DATE_FILTER,
  SET_END_DATE_FILTER
} from "../actionTypes";

export const setTextFilter = text => ({
  type: SET_TEXT_FILTER,
  payload: text
});

export const setSortBy = sortBy => ({
  type: SET_SORT_BY,
  payload: sortBy
});

export const setStartDateFilter = startDate => ({
  type: SET_START_DATE_FILTER,
  payload: startDate
});

export const setEndDateFilter = endDate => ({
  type: SET_END_DATE_FILTER,
  payload: endDate
});
