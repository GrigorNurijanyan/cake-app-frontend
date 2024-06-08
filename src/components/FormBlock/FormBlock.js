import React from "react";
import { Form } from "antd";
import "./FormStyles.scss";

const FormBlock = ({
  children,
  name,
  onFinish,
  onFinishFailed,
  autoComplete,
  form,
}) => {
  return (
    <Form
      id="fieldForm"
      form={form}
      layout="vertical"
      name={name}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete={autoComplete}
      className="cake-form-block"
    >
      {children}
    </Form>
  );
};

FormBlock.defaultProps = {
  autoComplete: "off",
};

export default FormBlock;
