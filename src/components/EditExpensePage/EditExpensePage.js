import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { editExpense } from "../../store/actions/expenses.actions";
import { getExpenseById } from "../../store/selectors/expenses.selector";
import Container from "../Container/Container";

export const EditExpensePage = ({ expense, editExpense, history }) => {
  const onSubmit = expense => {
    editExpense(expense);
    history.push("/");
  };

  return (
    <div className="EditExpensePage">
      <Container column={true}>
        <div className="EditExpensePage__header">
          <h2>Edit Expense</h2>
        </div>
        <ExpenseForm {...expense} onSubmit={onSubmit} />
      </Container>
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
