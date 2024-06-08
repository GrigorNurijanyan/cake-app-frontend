import React from "react";
import "./PageComponent.scss";

const PageComponent = ({ children }) => {
  return <div className="page-component-wrapper">{children}</div>;
};

export default PageComponent;
