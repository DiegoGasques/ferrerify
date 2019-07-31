import { createSelector } from "reselect";
import moment from "moment";

export const expensesSelector = state =>
  Object.keys(state.expenses).map(key => state.expenses[key]);
export const textFilterSelector = state => state.filters.text;
export const sortBySelector = state => state.filters.sortBy;
export const startDateFilterSelector = state => state.filters.startDate;
export const endDateFilterSelector = state => state.filters.endDate;

export const getExpenseById = createSelector(
  ({ expenses }, { match }) => expenses[match.params.id],
  expense => expense
);

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
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "days")
        : true;
      return startDateMatch && endDateMatch;
    })
);

export const sortByMatchSelector = createSelector(
  betweenDatesFilterExpensesSelector,
  sortBySelector,
  (expenses, sortBy) => {
    return expenses.sort((a, b) => {
      if (sortBy === "amount") {
        return a.amount > b.amount ? -1 : 1;
      }

      return a.createdAt > b.createdAt ? -1 : 1;
    });
  }
);
