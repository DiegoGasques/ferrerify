import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import { sumAll, sumAllMonth } from "../../store/selectors/expenses.selector";

export const GeneralInfo = ({ sumAll, sumAllMonth }) => {
  return (
    <div className="GeneralInfo">
      <div className="GeneralInfo__header">
        <h3>General Info</h3>
      </div>
      <div className="GeneralInfo__body">
        <div className="GeneralInfo__all-expen-amount">
          All Expenses: <div>${numeral(sumAll / 100).format("0,0.00")}</div>
        </div>
        <div className="GeneralInfo__curr-month-expen-amount">
          Current Month:{" "}
          <div>${numeral(sumAllMonth / 100).format("0,0.00")}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  sumAll: sumAll(state),
  sumAllMonth: sumAllMonth(state)
});

export default connect(mapStateToProps)(GeneralInfo);
