import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "./contextProvider";

function PublicRoute({ children }) {
  const { value, contextDispatch } = useContext(Context);
  console.log(value);
  const auth = value.authenticated;
  return !auth ? children : <Navigate to="/" />;
}

export default PublicRoute;
