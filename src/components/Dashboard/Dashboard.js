import React from "react";
import Container from "../Container/Container";
import MainContent from "../MainContent/MainContent";
import SecondaryContent from "../SecondaryContent/SecondaryContent";
import ExpensesList from "../ExpensesList/ExpensesList";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import AddExpenseBtn from "../AddExpenseBtn/AddExpenseBtn";

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Container>
        <MainContent>
          <ExpensesList />
        </MainContent>
        <SecondaryContent>
          <GeneralInfo />
          <AddExpenseBtn />
        </SecondaryContent>
      </Container>
    </div>
  );
};

export default Dashboard;
