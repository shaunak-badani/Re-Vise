import React, { useState } from "react";

const FormHooks = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log({enteredTitle, enteredAmount, enteredDate});
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    console.log(expenseData);
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Title</label>
          <input type="text" onChange={titleChangedHandler} />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangedHandler} />
        </div>
        <div>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler} />
        </div>
      </div>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default FormHooks;
