import { Header } from "antd/es/layout/layout";
import React from "react";

const HeaderLayout = ({ pageTitle }) => {
  return <Header style={{ color: "#fff", fontSize: 16 }}>{pageTitle}</Header>;
};

export default HeaderLayout;
