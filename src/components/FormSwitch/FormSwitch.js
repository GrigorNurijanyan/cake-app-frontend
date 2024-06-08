import { Form, Switch } from "antd";
import React from "react";

const FormSwitch = ({ label, name }) => {
  return (
    <Form.Item name={name} label={label} valuePropName="checked">
      <Switch />
    </Form.Item>
  );
};

export default FormSwitch;
