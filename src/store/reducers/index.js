import { combineReducers } from "redux";
import expensesReducer from "./expenses.reducer";
import filtersReducer from "./filters.reducer";

export default combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});
