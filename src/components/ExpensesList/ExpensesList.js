import React from "react";
import ExpenseListItem from "./ExpensesListItem/ExpensesListItem";
import { connect } from "react-redux";
import { sortByMatchSelector } from "../../store/selectors/expenses.selector";
import "./ExpensesList.scss";

export const ExpensesList = ({ expenses }) => {
  const generate = () =>
    expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />);

  return (
    <div className="ExpensesList">
      <div className="ExpensesList__header">
        <h2>Expenses</h2>
      </div>
      <div className="ExpensesList__content">
        {!!expenses ? generate() : <div>Loading...</div>}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: sortByMatchSelector(state)
});

export default connect(
  mapStateToProps,
  null
)(ExpensesList);
