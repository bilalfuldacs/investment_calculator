import ResultTable from "./components/ResultTable/ResultTable";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [userInput, setuserInput] = useState(null);
  const [yearlyData, setYearlydata] = useState(null);
  const calculateHandler = (userInput) => {
    setuserInput(userInput);
    const yearlyData = []; // per-year results

    let currentSavings = userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlydata(yearlyData);
  };

  return (
    <div>
      <Header />
      <UserInput onCaluclate={calculateHandler} />
      {!yearlyData && <h2>No Investment Found</h2>}
      {yearlyData && (
        <ResultTable
          yearlyData={yearlyData}
          intialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
