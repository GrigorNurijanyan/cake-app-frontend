import React from "react";
import { Navigate, Route } from "react-router-dom";
import reduxActions from "../redux/reduxActions";
import MainLayout from "../layouts/MainLayout/MainLayout";

const PrivateRoute = ({ children, ...rest }) => {
  return reduxActions.getAccessToken() ? (
    <MainLayout {...rest}>{React.cloneElement(children)}</MainLayout>
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  );
};

export default PrivateRoute;
