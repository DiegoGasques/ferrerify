import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../../../store/actions/expenses.actions";

export const ExpensesListItem = ({
  id,
  description,
  createdAt,
  note,
  amount,
  removeExpense
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <div className="ExpensesListItem">
      <div className="ExpensesListItem__header">
        <h3 className="ExpensesListItem__description">{description}</h3>
        <button className="ExpensesListItem__toggle-Btn" onClick={handleToggle}>
          {isOpen ? "Arrow Up" : "Arrow Down"}
        </button>
      </div>
      <div className="ExpensesListItem__body">
        <div>
          <span className="ExpenseListItem__createdAt">{createdAt}</span>
          <span className="ExpenseListItem__amount">R$: {amount}</span>
        </div>
        <div className="ExpenseListItem__note">Note: {note}</div>
        <div className="ExpenseListItem__action-buttons">
          <button
            className="ExpenseListItem__delete-btn"
            onClick={removeExpense}
          >
            delete
          </button>
          <button className="ExpenseListItem__edit-btn">
            <Link to={`/edit/${id}`}>edit</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, { id }) => ({
  removeExpense: () => dispatch(removeExpense(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ExpensesListItem);
