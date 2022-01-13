import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "./contextProvider";

function PrivateRoute({ children }) {
  const { value, contextDispatch } = useContext(Context);
  const auth = value.authenticated;
  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
