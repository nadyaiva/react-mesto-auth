import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRout = ({isLoggedIn, children }) => {
  return (
    <Route>
      {() =>
        isLoggedIn ? children : <Redirect to="./login" />
      }
    </Route>
  );
};

export default ProtectedRout;
