import { Form, InputNumber } from "antd";
import React from "react";

const FormInputNumber = ({
  label,
  name,
  placeholder,
  required,
  min,
  max,
  formatter,
  parser,
}) => {
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
      <InputNumber
        min={min}
        max={max}
        placeholder={placeholder}
        formatter={formatter}
        parser={parser}
      />
    </Form.Item>
  );
};

export default FormInputNumber;
