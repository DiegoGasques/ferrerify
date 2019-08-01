import React, { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

const ExpenseForm = ({ description, amount, note, createdAt, onSubmit }) => {
  const [_description, setDescription] = useState(description || "");
  const [_note, setNote] = useState(note || "");
  const [_amount, setAmount] = useState(
    amount ? (amount / 100).toString() : ""
  );
  const [_createdAt, setCreatedAt] = useState(
    createdAt ? moment(createdAt) : moment()
  );
  const [_focused, setFocused] = useState(false);
  const [_error, setError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    if (name === "description") return setDescription(value);
    if (name === "note") return setNote(value);
    if (name === "amount") {
      if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
        return setAmount(value);
      }
    }
  };

  const handleDateChange = createdAt => {
    if (createdAt) {
      setCreatedAt(createdAt);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!_description || !_amount) {
      setError("Please provide description and amount.");
    } else {
      setError("");
      onSubmit({
        description: _description,
        note: _note,
        amount: parseFloat(_amount, 10) * 100,
        createdAt: _createdAt.valueOf()
      });
    }
  };

  return (
    <div>
      {_error && <p>{_error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          autoFocus
          value={_description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="amount"
          placeholder="Ex: 10, 10.00"
          value={_amount}
          onChange={handleChange}
        />
        <SingleDatePicker
          date={_createdAt}
          onDateChange={handleDateChange}
          focused={_focused}
          onFocusChange={setFocused}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          name="note"
          placeholder="Add a note for your expense (optional)"
          value={_note}
          onChange={handleChange}
        />
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
