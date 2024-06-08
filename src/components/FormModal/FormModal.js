import React, { useState, useEffect } from "react";
import { Form, Input, Modal, Radio } from "antd";

const CollectionCreateForm = ({
  initialValues,
  onFormInstanceReady,
  children,
  formName,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    onFormInstanceReady(form);
  }, []);
  return (
    <Form
      layout="vertical"
      form={form}
      name={formName}
      initialValues={initialValues}
    >
      {children}
    </Form>
  );
};
const FormModal = ({
  visible,
  onSave,
  handleCancel,
  initialValues,
  title,
  children,
  formName,
  onError,
}) => {
  const [formInstance, setFormInstance] = useState();
  return (
    <Modal
      open={visible}
      title={title}
      okText="Save"
      getContainer={false}
      cancelText="Cancel"
      okButtonProps={{
        autoFocus: true,
      }}
      onCancel={handleCancel}
      destroyOnClose
      onOk={async () => {
        try {
          const values = await formInstance?.validateFields();
          formInstance?.resetFields();
          onSave(values);
        } catch (error) {
          onError(error);
        }
      }}
    >
      <CollectionCreateForm
        formName={formName}
        initialValues={initialValues}
        onFormInstanceReady={(instance) => {
          setFormInstance(instance);
        }}
      >
        {children}
      </CollectionCreateForm>
    </Modal>
  );
};

export default FormModal;
