import { Table } from "antd";
import React from "react";

const PageTable = ({
  columns,
  data,
  onChange,
  className,
  style,
  position,
  defaultPageSize,
  paginationCurrentPage,
  onPaginationChange,
  withoutPagination,
  paginationTotalCount,
}) => {
  return (
    <Table
      style={style}
      className={`custom-table-wrapper ${className}`}
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={
        withoutPagination
          ? false
          : {
              position: position,
              defaultPageSize: defaultPageSize,
              current: paginationCurrentPage + 1,
              total: paginationTotalCount,
              onChange: (e) => {
                onPaginationChange(e - 1);
              },
              responsive: "responsive",
              showLessItems: true,
              showQuickJumper: false,
              showSizeChanger: false,
              showTitle: false,
              showTotal: false,
            }
      }
    />
  );
};

PageTable.defaultProps = {
  columns: [],
  data: [],
  onChange: () => {},
  className: "",
  style: {},
};

export default PageTable;
