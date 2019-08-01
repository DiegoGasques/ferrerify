import React from "react";
import "./Container.scss";

export const Container = ({ children, column }) => {
  return <div className={`Container ${column && "column"}`}>{children}</div>;
};

export default Container;
