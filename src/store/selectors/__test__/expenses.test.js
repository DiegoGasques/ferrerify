import moment from "moment";
import {
  expensesSelector,
  textFilterSelector,
  sortBySelector,
  startDateFilterSelector,
  endDateFilterSelector,
  textFilterExpensesSelector,
  betweenDatesFilterExpensesSelector,
  sortByMatchSelector
} from "../expenses.selector";

describe("[SELECTORS] Expenses", () => {
  const state = {
    expenses: {
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
    },

    filters: {
      text: "",
      sortBy: "date",
      startDate: null,
      endDate: null
    }
  };

  it("Should turn expenses data into an array of expenses", () => {
    const expensesArray = expensesSelector(state);
    expect(expensesArray.length).toBe(3);
    expect(typeof expensesArray[1]).toBe("object");
    expect(expensesArray[2]).toEqual(state.expenses["3"]);
  });

  it("Should return text filter value", () => {
    let textFilter = textFilterSelector(state);
    expect(textFilter).toBe("");

    const text = "Rent";
    textFilter = textFilterSelector({
      ...state,
      filters: {
        ...state.filters,
        text
      }
    });
    expect(textFilter).toBe(text);
  });

  it("Should return sortBy value correctly", () => {
    let sortBy = sortBySelector(state);
    expect(sortBy).toBe("date");

    const newSort = "Rent";
    sortBy = sortBySelector({
      ...state,
      filters: {
        ...state.filters,
        sortBy: newSort
      }
    });
    expect(sortBy).toBe(newSort);
  });

  it("Should return startDate value correctly", () => {
    let startDate = startDateFilterSelector(state);
    expect(startDate).toBe(null);

    const newStartDate = moment(1000);
    startDate = startDateFilterSelector({
      ...state,
      filters: {
        ...state.filters,
        startDate: newStartDate
      }
    });
    expect(startDate).toBe(newStartDate);
    expect(startDate.valueOf()).toBe(newStartDate.valueOf());
  });

  it("Should return endDate value correctly", () => {
    let endDate = endDateFilterSelector(state);
    expect(endDate).toBe(null);

    const newEndDate = moment(1000);
    endDate = endDateFilterSelector({
      ...state,
      filters: {
        ...state.filters,
        endDate: newEndDate
      }
    });
    expect(endDate).toBe(newEndDate);
    expect(endDate.valueOf()).toBe(newEndDate.valueOf());
  });

  it("Should return correct array of expenses filtered by text", () => {
    const expenses = textFilterExpensesSelector(state);
    expect(expenses.length).toBe(3);

    const expenses2 = textFilterExpensesSelector({
      ...state,
      filters: {
        ...state.filters,
        text: "e"
      }
    });
    expect(expenses2.length).toBe(2);

    const expenses3 = textFilterExpensesSelector({
      ...state,
      filters: {
        ...state.filters,
        text: "rent"
      }
    });
    expect(expenses3.length).toBe(1);
  });

  it("Should return correct array of expenses filtered by start Date", () => {
    const expenses = betweenDatesFilterExpensesSelector(state);
    expect(expenses.length).toBe(3);

    const expenses2 = betweenDatesFilterExpensesSelector({
      ...state,
      filters: {
        ...state.filters,
        startDate: moment(0)
      }
    });
    expect(expenses2.length).toBe(2);

    const expenses3 = betweenDatesFilterExpensesSelector({
      ...state,
      filters: {
        ...state.filters,
        startDate: moment(0).add(2, "days")
      }
    });
    expect(expenses3.length).toBe(1);
  });

  it("Should return correct array of expenses filtered by end Date", () => {
    const expenses = betweenDatesFilterExpensesSelector({
      ...state,
      filters: {
        ...state.filters,
        endDate: moment(0).subtract(4, "days")
      }
    });
    expect(expenses.length).toBe(1);

    const expenses2 = betweenDatesFilterExpensesSelector({
      ...state,
      filters: {
        ...state.filters,
        endDate: moment(0)
      }
    });
    expect(expenses2.length).toBe(2);

    const expenses3 = betweenDatesFilterExpensesSelector({
      ...state,
      filters: {
        ...state.filters,
        endDate: moment(0).subtract(2, "days")
      }
    });
    expect(expenses3.length).toBe(1);
  });

  it("Should return correct array of expenses sorted by amount", () => {
    const sortedByAmount = [
      {
        id: "1",
        description: "Rent",
        note: "Monthly payment",
        amount: 150000,
        createdAt: moment(0).valueOf()
      },
      {
        id: "3",
        description: "Groceries",
        note: "Weekly expense",
        amount: 22000,
        createdAt: moment(0)
          .add(4, "days")
          .valueOf()
      },
      {
        id: "2",
        description: "Car washing",
        note: "Non planned expense",
        amount: 1000,
        createdAt: moment(0)
          .subtract(4, "days")
          .valueOf()
      }
    ];
    const expenses = sortByMatchSelector({
      ...state,
      filters: {
        ...state.filters,
        sortBy: "amount"
      }
    });
    expect(expenses).toEqual(sortedByAmount);
  });

  it("Should return correct array of expenses sorted by data", () => {
    const sortedByDate = [
      {
        id: "3",
        description: "Groceries",
        note: "Weekly expense",
        amount: 22000,
        createdAt: moment(0)
          .add(4, "days")
          .valueOf()
      },
      {
        id: "1",
        description: "Rent",
        note: "Monthly payment",
        amount: 150000,
        createdAt: moment(0).valueOf()
      },
      {
        id: "2",
        description: "Car washing",
        note: "Non planned expense",
        amount: 1000,
        createdAt: moment(0)
          .subtract(4, "days")
          .valueOf()
      }
    ];
    const expenses = sortByMatchSelector({
      ...state,
      filters: {
        ...state.filters,
        sortBy: "date"
      }
    });
    expect(expenses).toEqual(sortedByDate);
  });
});
