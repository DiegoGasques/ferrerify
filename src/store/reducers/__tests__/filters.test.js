import moment from "moment";
import reducer from "../filters.reducer";
import {
  SET_TEXT_FILTER,
  SET_SORT_BY,
  SET_START_DATE_FILTER,
  SET_END_DATE_FILTER
} from "../../actionTypes";

describe("[REDUCER] Filters", () => {
  let initState;
  beforeEach(() => {
    initState = {
      text: "",
      sortBy: "date",
      startDate: moment(-1000),
      endDate: moment(1000)
    };
  });

  it("Tests for correct output state given SET_TEXT_FILTER action", () => {
    const text = "Text";
    const action = { type: SET_TEXT_FILTER, payload: text };
    const state = reducer(initState, action);
    expect(state).toEqual({
      ...initState,
      text
    });
  });

  it("Tests for correct output state given SET_SORT_BY action", () => {
    const sortBy = "amount";
    const action = { type: SET_SORT_BY, payload: sortBy };
    const state = reducer(initState, action);
    expect(state).toEqual({
      ...initState,
      sortBy
    });
  });

  it("Tests for correct output state given SET_START_DATE_FILTER action", () => {
    const startDate = moment(0);
    const action = { type: SET_START_DATE_FILTER, payload: startDate };
    const state = reducer(initState, action);
    expect(state).toEqual({
      ...initState,
      startDate
    });
  });

  it("Tests for correct output state given SET_END_DATE_FILTER action", () => {
    const endDate = moment(0);
    const action = { type: SET_END_DATE_FILTER, payload: endDate };
    const state = reducer(initState, action);
    expect(state).toEqual({
      ...initState,
      endDate
    });
  });
});
