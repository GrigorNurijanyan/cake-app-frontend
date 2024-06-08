import { Form, Select } from "antd";
import React from "react";

const FormSelect = ({
  label,
  name,
  placeholder,
  required,
  options,
  onChange,
  mode,
  loading,
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: `Please select your ${label || placeholder}!`,
        },
      ]}
    >
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        loading={loading}
        mode={mode}
      />
    </Form.Item>
  );
};

export default FormSelect;
