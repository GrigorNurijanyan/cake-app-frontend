import { Form, Input } from "antd";
import React from "react";

const FormInputText = ({ label, name, placeholder, required, type }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          type: type,
          message: "The input is not valid E-mail!",
        },
        {
          required: required,
          message: `Please input your ${label || placeholder}!`,
        },
      ]}
    >
      <Input placeholder={placeholder} />
    </Form.Item>
  );
};

export default FormInputText;
