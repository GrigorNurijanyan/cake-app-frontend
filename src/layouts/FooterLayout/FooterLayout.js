import { Flex } from "antd";
import { Footer } from "antd/es/layout/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/MyButton/MyButton";

const FooterLayout = ({ hasFooter }) => {
  const navigate = useNavigate();
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      {hasFooter ? (
        <Flex justify={"flex-end"} gap="middle">
          <MyButton
            buttonText={"Cancel"}
            type={"default"}
            onClick={() => navigate(-1)}
            htmlType={"button"}
          />
          <MyButton buttonText={"Save changes"} htmlType={"submit"} />
        </Flex>
      ) : (
        `Cake App ©${new Date().getFullYear()} Created by Grigor and Davit`
      )}
    </Footer>
  );
};

export default FooterLayout;
