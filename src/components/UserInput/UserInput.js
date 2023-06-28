import React, { useState } from "react";
const initialValue = {
  "current-savings": 100,
  "yearly-contribution": 500,
  "expected-return": 200,
  duration: 10,
};
const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialValue);
  const submitForm = (event) => {
    event.preventDefault(userInput);

    props.onCaluclate(userInput);
  };
  const resetForm = () => {
    setUserInput(initialValue);
  };
  const inputChangeHandler = (clicked, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [clicked]: value };
    });
  };
  return (
    <div>
      <form onSubmit={submitForm} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              onChange={(event) => {
                inputChangeHandler("current-savings", event.target.value);
              }}
              id="current-savings"
              value={userInput["current-savings"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              onChange={(event) => {
                inputChangeHandler("yearly-contribution", event.target.value);
              }}
              id="yearly-contribution"
              value={userInput["yearly-contribution"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              onChange={(event) => {
                inputChangeHandler("expected-return", event.target.value);
              }}
              id="expected-return"
              value={userInput["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              onChange={(event) => {
                inputChangeHandler("duration", event.target.value);
              }}
              id="duration"
              value={userInput["duration"]}
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetForm} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};
export default UserInput;
