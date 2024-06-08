import { Form } from "antd";
import Input from "antd/es/input/Input";
import React from "react";

const FormInputPassword = ({ label, name, placeholder, required }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: `Please input your ${label || placeholder}!`,
        },
      ]}
    >
      <Input.Password placeholder={placeholder} />
    </Form.Item>
  );
};

export default FormInputPassword;
