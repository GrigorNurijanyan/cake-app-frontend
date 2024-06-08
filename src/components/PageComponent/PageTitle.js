import { Flex } from "antd";
import React from "react";

const PageTitle = ({ title, rightPanel }) => {
  return (
    <Flex
      align={"center"}
      justify={"space-between"}
      className="page-title-wrapper"
    >
      {title}
      {rightPanel || null}
    </Flex>
  );
};

export default PageTitle;
