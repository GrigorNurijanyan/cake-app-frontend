import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import FormInputText from "../../components/FormInputText/FormInputText";
import FormDraggerUpload from "../../components/FormUpload/FormDraggerUpload";
import FormSwitch from "../../components/FormSwitch/FormSwitch";
import { Form } from "antd";
import FormModal from "../../components/FormModal/FormModal";
import { notifyError } from "../../components/Notify/Notify";
import categoryActions from "../../actions/categoryActions";

const CategoryEditModal = forwardRef(({ onSave, item }, ref) => {
  const [form] = Form.useForm();

  const [uploadImage, setUploadImage] = useState([]);
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal() {
      setVisible(true);
    },
  }));

  useEffect(() => {
    if (visible) {
      if (item) {
        form?.setFieldsValue({
          categoryName: item.categoryName,
          isActive: item.isActive,
        });
        setUploadImage(item.images);
      } else {
        form?.setFieldsValue({ categoryName: "", isActive: false });
      }
    }
  }, [visible, item]);

  return (
    <FormModal
      visible={visible}
      title={"Create Category"}
      handleCancel={() => {
        form.resetFields();
        setVisible(false);
      }}
      form={form}
      onSave={async (values) => {
        const result = await categoryActions.editCategory(
          {
            images: uploadImage,
            ...values,
          },
          item.idCategory
        );
        if (result.success) {
          onSave();
          setVisible(false);
        } else {
          notifyError(result.errMsg);
        }
      }}
      onError={(error) => {
        notifyError(error.errorFields[0].errors[0]);
      }}
      formName={"createCategoryForm"}
      initialValues={{
        categoryName: item ? item.categoryName : "",
        isActive: item ? item.isActive : false,
      }}
    >
      <FormInputText name={"categoryName"} label={"Category Name"} required />
      <FormDraggerUpload
        mediaData={uploadImage}
        maxCount={1}
        label={"Upload your category photo"}
        onUpload={(file) => {
          setUploadImage(file.url);
        }}
        onRemoveItem={() => {
          setUploadImage([]);
        }}
      />
      <FormSwitch name={"isActive"} label={"Is Active"} />
    </FormModal>
  );
});

export default CategoryEditModal;
