import React, { forwardRef } from "react";
import { Modal } from "antd";
import MyButton from "../MyButton/MyButton";

const PageModal = ({
  trigger,
  title,
  open,
  handleOk,
  handleCancel,
  style,
  className,
  children,
  formName,
  footer,
  onOk,
}) => {
  return (
    <>
      {trigger}
      <Modal
        className={className}
        style={style}
        title={title}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          footer || [
            <MyButton
              htmlType={"button"}
              key={"cancel"}
              buttonText={"Cancel"}
              onClick={handleCancel}
            />,
            <MyButton
              formName={formName}
              htmlType={"button"}
              key={"save"}
              buttonText={"Save"}
              onClick={onOk}
            />,
          ]
        }
      >
        {children}
      </Modal>
    </>
  );
};

PageModal.defaultProps = {
  title: "My Modal",
  trigger: "Open Modal",
  open: false,
  handleOk: () => {},
  handleCancel: () => {},
  type: "primary",
  children: "Modal Body",
};

export default PageModal;
