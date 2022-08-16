import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRout = ({loggedIn, children }) => {
  return (
    <Route>
      {() =>
        loggedIn ? children : <Redirect to="./login" />
      }
    </Route>
  );
};

export default ProtectedRout;
