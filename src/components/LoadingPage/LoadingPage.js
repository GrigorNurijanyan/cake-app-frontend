import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoadingOutlined style={{ fontSize: 30 }} />
    </div>
  );
};

export default LoadingPage;
