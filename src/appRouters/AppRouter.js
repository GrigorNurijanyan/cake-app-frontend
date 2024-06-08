import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import OuterLayout from "../layouts/OuterLayout/OuterLayout";
import Register from "../pages/login/Register";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/users/Users";
import Orders from "../pages/orders/Orders";
import Product from "../pages/product/Product";
import Category from "../pages/category/Category";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";
import ProductCreate from "../pages/product/ProductCreate";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Root />} />
      <Route
        exact
        path="/login"
        element={
          <OuterLayout>
            <Login />
          </OuterLayout>
        }
      />
      <Route
        exact
        path="/register"
        element={
          <OuterLayout>
            <Register />
          </OuterLayout>
        }
      />
      <Route
        exact
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/orders"
        element={
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/product/list"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/product/create"
        element={
          <PrivateRoute hasFooter>
            <ProductCreate />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/category/list"
        element={
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
