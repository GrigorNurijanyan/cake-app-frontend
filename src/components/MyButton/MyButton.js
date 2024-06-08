import { Button } from "antd";
import React from "react";

const MyButton = ({ disabled, type, htmlType, buttonText, onClick }) => {
  return (
    <Button
      form={"fieldForm"}
      type={type}
      htmlType={htmlType}
      disabled={disabled}
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};

MyButton.defaultProps = {
  buttonText: "Button",
  type: "primary",
  htmlType: "submit",
};

export default MyButton;
