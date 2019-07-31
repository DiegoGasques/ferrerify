import React from "react";
import { connect } from "react-redux";
import { expensesSelector } from "../../store/selectors/expenses.selector";
import "./GeneralInfo.scss";

export const GeneralInfo = ({ expenses }) => {
  return (
    <div className="GeneralInfo">
      <div className="GeneralInfo__header">
        <h3>General Info</h3>
      </div>
      <div className="GeneralInfo__body">
        <div className="GeneralInfo__all-expen-amount">
          All Expenses: $<span>{289328}</span>
        </div>
        <div className="GeneralInfo__curr-month-expen-amount">
          Current Month: $<span>{289328}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: expensesSelector(state)
});

export default connect(mapStateToProps)(GeneralInfo);
