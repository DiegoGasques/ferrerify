import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { editExpense } from "../../store/actions/expenses.actions";
import { getExpenseById } from "../../store/selectors/expenses.selector";

export const EditExpensePage = ({ expense, editExpense, history }) => {
  const onSubmit = expense => {
    editExpense(expense);
    history.push("/");
  };

  return (
    <div className="EditExpensePage">
      <ExpenseForm {...expense} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: getExpenseById(state, props)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  editExpense: expense => dispatch(editExpense(match.params.id, expense))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
