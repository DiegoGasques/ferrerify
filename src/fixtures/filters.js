import moment from "moment";

export const defaultFilters = {
  text: "",
  sortBy: "date",
  startDate: null,
  endDate: null
};

export const filters = {
  text: "Rent",
  sortBy: "amount",
  startDate: moment(0),
  endDate: moment(0).add(4, "days")
};
