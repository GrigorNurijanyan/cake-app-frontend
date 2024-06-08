import Layout, { Content } from "antd/es/layout/layout";
import React from "react";
import "./OuterLayout.scss";

const OuterLayout = (props) => {
  return (
    <Layout className="cake-outer-layout">
      <Content className="cake-outer-layout-content">
        {props.children &&
          React.cloneElement(props.children, {
            ...props,
          })}
      </Content>
    </Layout>
  );
};

export default OuterLayout;
