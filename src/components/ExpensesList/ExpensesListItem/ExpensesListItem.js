import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";
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
        <h3>{description}</h3>
        <button onClick={handleToggle}>
          {isOpen ? (
            <i class="fas fa-sort-up" />
          ) : (
            <i class="fas fa-sort-down" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="ExpensesListItem__body active">
          <div className="ExpenseListItem__info">
            <div className="ExpenseListItem__createdAt">
              {moment(createdAt).calendar()}
            </div>
            <div className="ExpenseListItem__amount">
              <span>$</span>
              {numeral(amount).format(0, 0.0)}
            </div>
          </div>
          <div className="ExpenseListItem__note">
            <span>Note: </span>
            {note}
          </div>
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
      )}
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
