import React, { useState } from "react";
import moment from "moment";

const ExpenseForm = ({ description, amount, note, createdAt, onSubmit }) => {
  const [description, setDescription] = useState(description || "");
  const [note, setNote] = useState(note || "");
  const [amount, setAmount] = useState(amount ? (amount / 100).toString() : "");
  const [createdAt, setCreatedAt] = useState(
    createdAt ? moment(createdAt) : moment()
  );
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    if (name === "description") return setDescription(value);
    if (name === "note") return setNote(value);
    if (name === "amount") {
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        setAmount(amount);
      }
      return setAmount(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!description || !amount) {
      setError("Please provide description and amount.");
    } else {
      setError("Please provide description and amount.");
      onSubmit({
        description,
        note,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf()
      });
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ex: 10, 10.00"
          value={amount}
          onChange={handleChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={setCreatedAt}
          focused={focused}
          onFocusChange={setFocused}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={note}
          onChange={handleChange}
        />
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
