import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import FooterLayout from "../FooterLayout/FooterLayout";
import "./MainLayout.scss";

const { Content } = Layout;

const MainLayout = (props) => {
  const { hasFooter } = props;
  const [pageTitle, setPageTitle] = useState("");

  return (
    <Layout className="cake-main-layout">
      <Sidebar />
      <Layout>
        <HeaderLayout pageTitle={pageTitle} />
        <Content className="cake-main-layout-content">
          {props.children &&
            React.cloneElement(props.children, {
              ...props,
              pageTitle: pageTitle,
              setPageTitle: setPageTitle,
            })}
        </Content>
        <FooterLayout hasFooter={hasFooter} />
      </Layout>
    </Layout>
  );
};
export default MainLayout;
