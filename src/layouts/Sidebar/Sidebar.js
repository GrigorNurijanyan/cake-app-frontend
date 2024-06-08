import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import {
  DashboardFilled,
  ProductFilled,
  UserOutlined,
  HomeFilled,
  OrderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import reduxActions from "../../redux/reduxActions";
import { useNavigate } from "react-router-dom";
import CakeLogo from "../../assets/cakelogo.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuOpen = useSelector((state) => {
    return state.menuOpen;
  });

  const menuItems = [
    {
      key: "/dashboard",
      label: "Dashboard",
      icon: <DashboardFilled />,
    },
    {
      key: "/category/list",
      label: "Category",
      icon: <HomeFilled />,
    },
    {
      key: "/product/list",
      label: "Product",
      icon: <ProductFilled />,
    },
    {
      key: "/users",
      label: "Users",
      icon: <UserOutlined />,
    },
    {
      key: "/orders",
      label: "Order",
      icon: <OrderedListOutlined />,
    },
    {
      key: "/logout",
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={menuOpen}
      onCollapse={(value) => reduxActions.setMenuOpen(value)}
      className="cake-sidbar-wrapper"
    >
      <div
        className="sidebar-logo"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "30px 10px",
        }}
      >
        <img style={{ width: 60 }} src={CakeLogo} alt="Cake" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        items={menuItems}
        onClick={(e) => {
          if (e.key === "/logout") {
            navigate("/login");
          } else {
            navigate(e.key);
          }
        }}
      />
    </Sider>
  );
};

export default Sidebar;
