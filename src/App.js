import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import DashBoard from "./components/Dashboard/Dashboard";
import AddExpensePage from "./components/AddExpensePage/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage/EditExpensePage";
import NotFound from "./components/NotFound/NotFound";
import "./styles/_styles.scss";
import "react-dates/lib/css/_datepicker.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/new" component={AddExpensePage} />
        <Route exact path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;
