import React from "react";
import Container from "../Container/Container";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="Header">
      <Container>
        <h1 className="Header__title">Ferrerify</h1>
      </Container>
    </header>
  );
};

export default Header;
