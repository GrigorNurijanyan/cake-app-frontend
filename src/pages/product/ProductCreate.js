import React, { useCallback, useEffect, useState } from "react";
import PageComponent from "../../components/PageComponent/PageComponent";
import PageTitle from "../../components/PageComponent/PageTitle";
import Title from "antd/es/typography/Title";
import { Col, Form, Row } from "antd";
import FormInputText from "../../components/FormInputText/FormInputText";
import { notifyError } from "../../components/Notify/Notify";
import FormBlock from "../../components/FormBlock/FormBlock";
import FormTextarea from "../../components/FormTextarea/FormTextarea";
import FormInputNumber from "../../components/FormInputNumber/FormInputNumber";
import FormSwitch from "../../components/FormSwitch/FormSwitch";
import FormSelect from "../../components/FormSelect/FormSelect";
import FormDraggerUpload from "../../components/FormUpload/FormDraggerUpload";
import { LIST_ITEMS_LIMIT } from "../../utils/constants";
import categoryActions from "../../actions/categoryActions";
import productActions from "../../actions/productActions";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

const ProductCreate = ({ setPageTitle }) => {
  const [uploadImage, setUploadImage] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState({
    list: [],
    total: 0,
  });

  const [form] = Form.useForm();

  useEffect(() => {
    setPageTitle("Create Product");
  }, []);

  const fill = useCallback(async () => {
    setLoading(true);
    const result = await categoryActions.getCategoryList({
      page,
      limit: LIST_ITEMS_LIMIT,
    });
    if (result.success) {
      setCategoryList({
        list: result.data.categories.map((item, index) => {
          Object.assign(item, {
            key: index,
            label: item.categoryName,
            value: item.idCategory,
          });
          return item;
        }),
        total: result.data.total,
      });
    } else {
      notifyError(result.errMsg);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fill();
  }, [fill]);

  const onFinish = async (values) => {
    console.log("____values", values);
    const result = await productActions.createProduct({
      images: uploadImage,
      ...values,
    });
    if (result.success) {
      fill();
    } else {
      notifyError(result.errMsg);
    }
  };
  const onFinishFailed = (errorInfo) => {
    notifyError(errorInfo.errorFields[0].errors[0]);
    console.log("Failed:", errorInfo);
  };

  return loading ? (
    <LoadingPage />
  ) : (
    <PageComponent>
      <PageTitle title={<Title style={{ margin: 0 }}>Create Product</Title>} />
      <FormBlock
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={16}>
          <Col span={12} style={{ marginTop: 20 }}>
            <FormInputText
              name={"productName"}
              label={"Product name"}
              placeholder={"Input product name"}
              required
            />
            <FormSelect
              name={"idCategory"}
              label="Categories"
              placeholder={"Select category item"}
              options={categoryList.list || []}
              loading={loading}
            />
            <FormTextarea
              name={"longDescription"}
              label={"Long description"}
              placeholder={"Input long description"}
              required
            />
            <FormTextarea
              name={"shortDescription"}
              label={"Short description"}
              placeholder={"Input short description"}
              required
            />
            <FormInputNumber
              name={"quantity"}
              label={"Quantity"}
              placeholder={"Input quantity"}
              required
            />
          </Col>
          <Col span={12} style={{ marginTop: 20 }}>
            <FormInputNumber
              name={"price"}
              label={"Price"}
              placeholder={"Input price"}
              formatter={(value) =>
                `֏ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              required
            />
            <FormSelect
              name={"productTags"}
              label="Product Tags"
              placeholder={"Select product tags"}
              options={[]}
              mode={"tags"}
            />
            <FormSwitch name={"isActive"} label={"Show product active"} />
            <FormDraggerUpload
              mediaData={uploadImage}
              multiple
              maxCount={4}
              label={"Upload your product photos"}
              onUpload={(file) => {
                setUploadImage(file.url);
              }}
              onRemoveItem={() => {
                setUploadImage([]);
              }}
            />
          </Col>
        </Row>
      </FormBlock>
    </PageComponent>
  );
};

export default ProductCreate;
