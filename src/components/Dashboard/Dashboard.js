import React from "react";
import Container from "../Container/Container";

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Container>
        <MainContent>
          <Filters />
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
