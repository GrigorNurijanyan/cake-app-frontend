import React, { useCallback, useEffect, useState } from "react";
import PageComponent from "../../components/PageComponent/PageComponent";
import PageTitle from "../../components/PageComponent/PageTitle";
import MyButton from "../../components/MyButton/MyButton";
import Title from "antd/es/typography/Title";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { LIST_ITEMS_LIMIT } from "../../utils/constants";
import productActions from "../../actions/productActions";
import { notifyError, notifySuccess } from "../../components/Notify/Notify";
import PageTable from "../../components/Table/PageTable";
import { Image } from "antd";
import PageSwitch from "../../components/PageSwitch/PageSwitch";
import ConfirmActions from "../../components/PopConfirm/ConfirmActions";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Product = ({ setPageTitle }) => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState({
    list: [],
    total: 0,
  });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPageTitle("Products");
  }, []);

  const fill = useCallback(async () => {
    setLoading(true);
    const result = await productActions.getProductList({
      page,
      limit: LIST_ITEMS_LIMIT,
    });
    if (result.success) {
      setTableData({
        list: result.data.products.map((item, index) => {
          Object.assign(item, {
            key: index,
          });
          return item;
        }),
        total: result.data.totalCount,
      });
    } else {
      notifyError(result.errMsg);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fill();
  }, [fill]);

  return loading ? (
    <LoadingPage />
  ) : (
    <PageComponent>
      <PageTitle
        title={<Title style={{ margin: 0 }}>Products</Title>}
        rightPanel={
          <MyButton
            buttonText={"Create Product"}
            onClick={() => navigate("/product/create")}
          />
        }
      />
      <PageTable
        style={{ marginTop: "20px" }}
        columns={[
          {
            title: "Image",
            dataIndex: "defaultImage",
            render: (_, item) => {
              const { defaultImage } = item;
              return defaultImage ? (
                <Image width={100} height={100} src={defaultImage} />
              ) : (
                <Image
                  width={100}
                  height={100}
                  src="error"
                  fallback="data:image/png;base64,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"
                />
              );
            },
          },
          {
            title: "Name",
            dataIndex: "productName",
          },
          {
            title: "Active",
            dataIndex: "isActive",
            render: (_, item) => {
              const { isActive } = item;
              return <PageSwitch disabled={true} value={isActive} />;
            },
          },
          {
            width: 10,
            title: "",
            dataIndex: "",
            render: (_, item) => {
              return (
                <ConfirmActions
                  title={"Delete this Product"}
                  description={"Are you sure to delete this product?"}
                  loading={loading}
                  onConfirm={async () => {
                    setLoading(true);
                    const result = await productActions.deleteProductItem(
                      item.idProduct
                    );
                    if (result.success) {
                      const reminingItems = tableData.list.filter(
                        (filItems) => filItems.idProduct !== item.idProduct
                      );
                      setTableData({
                        list: reminingItems,
                        total: tableData.total - 1,
                      });
                      if (page !== 0) {
                        setPage(0);
                      }
                      notifySuccess("You deleted your product successfully");
                    } else {
                      notifyError(result.errMsg);
                    }
                    setLoading(false);
                  }}
                  s
                >
                  <DeleteOutlined />
                </ConfirmActions>
              );
            },
          },
          {
            width: 10,
            title: "",
            dataIndex: "",
            render: (_, item) => {
              return (
                <>
                  <EditOutlined onClick={() => {}} />
                </>
              );
            },
          },
        ]}
        data={tableData.list || []}
        defaultPageSize={LIST_ITEMS_LIMIT}
        paginationCurrentPage={page}
        paginationTotalCount={tableData.total}
        onPaginationChange={setPage}
      />
    </PageComponent>
  );
};

export default Product;
