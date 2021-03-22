import React from "react";
import { Redirect, Route } from "react-router";
import { useRiderContext } from "../RiderContextProvider/RiderContextProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const { loggedInUser } = useRiderContext();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
