import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState.jsx";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  let handleText = (event) => {
    setText(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: Number(amount),
    };

    addTransaction(newTransaction);

    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => handleText(e)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => handleAmount(e)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
export default AddTransaction;
