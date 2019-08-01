import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { addExpense } from "../../store/actions/expenses.actions";
import Container from "../Container/Container";

export const AddExpensePage = ({ addExpense, history }) => {
  const onSubmit = expense => {
    addExpense(expense);
    history.push("/");
  };

  return (
    <div className="AddExpensePage">
      <Container column={true}>
        <div className="AddExpensePage__header">
          <h2>Add Expense</h2>
        </div>
        <ExpenseForm onSubmit={onSubmit} />
      </Container>
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
