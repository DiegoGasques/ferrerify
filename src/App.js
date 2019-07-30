import React from "react";
import Header from "./components/Header/Header";
import ExpensesList from "./components/ExpensesList/ExpensesList";
import Filters from "./components/Filters/Filters";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import AddExpenseBtn from "./components/AddExpenseBtn/AddExpenseBtn";
import "./App.css";
import "react-dates/lib/css/_datepicker.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <ExpensesList />
      <GeneralInfo />
      <AddExpenseBtn />
    </div>
  );
}

export default App;
