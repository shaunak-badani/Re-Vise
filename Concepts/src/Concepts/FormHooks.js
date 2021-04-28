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
    setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
  };

  return (
    <div>
      <h1>
        Adding value parameter to all inputs and using the state values for
        those "value" parameters is what enables 2 way binding.
      </h1>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangedHandler} />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangedHandler}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangedHandler}
            />
          </div>
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default FormHooks;
