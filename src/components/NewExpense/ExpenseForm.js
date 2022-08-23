import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const initialExpense = { id: 0, title: "", amount: "", date: "" };
  const [expense, setExpense] = useState(initialExpense);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setExpense((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      expense.title.trim() === "" ||
      expense.amount.trim() === "" ||
      expense.date.trim() === ""
    )
      return;
    const expenseData = expense
      .map((item) => new Date(item.date))
      .map((item) => +item.amount);
    onSaveExpenseData(expenseData);
    setExpense(initialExpense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            min="0.01"
            step="0.01"
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            min="2019-01-01"
            max="2023-12-31"
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
