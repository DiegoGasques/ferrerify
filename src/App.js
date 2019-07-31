import React from "react";
import Header from "./components/Header/Header";
import DashBoard from "./components/Dashboard/Dashboard";
import "./App.css";
import "react-dates/lib/css/_datepicker.css";

function App() {
  return (
    <div className="App">
      <Header />
      <DashBoard />
    </div>
  );
}

export default App;
