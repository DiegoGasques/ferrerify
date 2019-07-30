import React from "react";
import { Link } from "react-router-dom";

export const AddExpenseBtn = () => {
  return (
    <Link to="/new">
      <button className="AddExpenseBtn">Add New Expense!</button>
    </Link>
  );
};

export default AddExpenseBtn;
