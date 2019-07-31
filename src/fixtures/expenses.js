import moment from "moment";

export const expensesArr = [
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
  },
  {
    id: "3",
    description: "Groceries",
    note: "Weekly expense",
    amount: 22000,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

export default {
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
