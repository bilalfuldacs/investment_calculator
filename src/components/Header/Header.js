import React from "react";
import logo from "../../assets/investment-calculator-logo.png";
import Classes from "./Header.module.css";
function Header() {
  return (
    <div>
      <header className={Classes.Header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
}

export default Header;
