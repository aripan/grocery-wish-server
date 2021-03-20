import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  const someValue = true;
  return <div>Private route will come here</div>;
};

export default PrivateRoute;
