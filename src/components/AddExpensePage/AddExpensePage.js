import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { addExpense } from "../../store/actions/expenses.actions";

export const AddExpensePage = ({ addExpense, history }) => {
  const onSubmit = expense => {
    addExpense(expense);
    history.push("/");
  };

  return (
    <div className="AddExpensePage">
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
