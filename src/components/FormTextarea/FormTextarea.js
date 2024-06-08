import { Form, Input } from "antd";
import React from "react";

const { TextArea } = Input;

const FormTextarea = ({
  name,
  label,
  type,
  required,
  placeholder,
  rows,
  autoSize,
}) => {
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
      <TextArea placeholder={placeholder} rows={rows} autoSize={autoSize} />
    </Form.Item>
  );
};

export default FormTextarea;
