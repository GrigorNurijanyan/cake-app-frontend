import { Switch } from "antd";
import React from "react";

const PageSwitch = ({ onChange, value, disabled }) => {
  return <Switch onChange={onChange} value={value} disabled={disabled} />;
};

export default PageSwitch;
