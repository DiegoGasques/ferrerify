import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="NotFound">
    404 - <Link to="/">Go home</Link>
  </div>
);

export default NotFound;
