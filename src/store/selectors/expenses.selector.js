import { createSelector } from "reselect";
import moment from "moment";

export const expensesSelector = state =>
  Object.keys(state.expenses).map(key => state.expenses[key]);
export const textFilterSelector = state => state.filters.text;
export const startDateFilterSelector = state => state.filters.startDate;
export const endDateFilterSelector = state => state.filters.endDate;

export const textFilterExpensesSelector = createSelector(
  expensesSelector,
  textFilterSelector,
  (expenses, text) =>
    expenses.filter(expense =>
      expense.description.toLowerCase().includes(text.toLowerCase())
    )
);

export const betweenDatesFilterExpensesSelector = createSelector(
  textFilterExpensesSelector,
  startDateFilterSelector,
  endDateFilterSelector,
  (expenses, startDate, endDate) =>
    expenses.filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "days")
        : true;
      const endDateMatch = startDate
        ? endDate.isSameOrAfter(createdAtMoment, "days")
        : true;
      return startDateMatch && endDateMatch;
    })
);

export const sortBySelector = createSelector(
  betweenDatesFilterExpensesSelector,
  sortBySelector,
  (expenses, sortBy) =>
    expenses.sort((a, b) => {
      if (sortBy === "amount") {
        return b.amount - a.amount;
      }
      if (sortBy === "date") {
        return a.createdAt > b.createAt ? -1 : 1;
      }
    })
);
