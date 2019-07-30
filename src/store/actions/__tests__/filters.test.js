import moment from "moment";
import {
  setTextFilter,
  setSortBy,
  setStartDateFilter,
  setEndDateFilter
} from "../expenses.actions.js";

describe("[Action] Filters", () => {
  it("Test for setTextFilter action creators correct output", () => {
    const text = "water";
    const action = setTextFilter(text);

    expect(action).toEqual({
      type: "SET_TEXT_FILTER",
      payload: text
    });
  });

  it("Test for setSortBy action creators correct output", () => {
    const sortBy = "amount";
    const action = setSortBy(sortBy);

    expect(action).toEqual({
      type: "SET_SORT_BY",
      payload: sortBy
    });
  });

  it("Test for setStartDateFilter action creators correct output", () => {
    const startDate = moment(0);
    const action = setStartDateFilter(startDate);

    expect(action).toEqual({
      type: "SET_START_DATE_FILTER",
      payload: startDate
    });
  });

  it("Test for setEndDateFilter action creators correct output", () => {
    const endDate = moment(0);
    const action = setEndDateFilter(endDate);

    expect(action).toEqual({
      type: "SET_END_DATE_FILTER",
      payload: endDate
    });
  });
});
