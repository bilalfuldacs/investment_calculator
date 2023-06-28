import React from "react";

function ResultTable(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  console.log(props.yearlyData);

  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.yearlyData.map((items) => (
            <tr key={items.year}>
              <td>{items.year}</td>
              <td>{formatter.format(items.savingsEndOfYear)}</td>
              <td>{formatter.format(items.yearlyInterest)}</td>
              <td>
                {items.savingsEndOfYear -
                  props.intialInvestment -
                  items.yearlyContribution * items.year}
              </td>
              <td>
                {props.intialInvestment + items.yearlyContribution * items.year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
