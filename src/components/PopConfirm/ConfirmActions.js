import { Popconfirm } from "antd";
import React from "react";

const ConfirmActions = ({
  title,
  onConfirm,
  description,
  onCancel,
  children,
  loading,
}) => {
  return (
    <Popconfirm
      title={title || "Delete the task"}
      description={description || "Are you sure to delete this task?"}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText="Yes"
      cancelText="No"
      loading={loading}
    >
      {children}
    </Popconfirm>
  );
};

export default ConfirmActions;
