import React from "react";
import Title from "antd/es/typography/Title";
import { Flex, Space } from "antd";
import CakeLogin from "../../assets/cakelogin.png";
import FormBlock from "../../components/FormBlock/FormBlock";
import FormInputText from "../../components/FormInputText/FormInputText";
import FormInputPassword from "../../components/FormInputPassword/FormInputPassword";
import MyButton from "../../components/MyButton/MyButton";
import { useNavigate } from "react-router-dom";
import userActions from "../../actions/userActions";
import { notifyError } from "../../components/Notify/Notify";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const result = await userActions.login(values.username, values.password);
    if (result.success) {
      navigate("/dashboard");
    } else {
      notifyError(result.errMsg);
    }
  };
  const onFinishFailed = (errorInfo) => {
    notifyError(errorInfo.errorFields[0].errors[0]);
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page-wrapper">
      <Title>Login</Title>
      <Flex className="login-img-with-input-blocks">
        <img src={CakeLogin} alt="Cake" />
        <FormBlock onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <FormInputText
            name={"username"}
            placeholder={"Input username"}
            required
          />
          <FormInputPassword
            name={"password"}
            placeholder={"Input password"}
            required
          />
          <Space>
            <MyButton buttonText="Login" />
            <MyButton
              buttonText="Register"
              htmlType={"button"}
              type={"default"}
              onClick={() => navigate("/register")}
            />
          </Space>
        </FormBlock>
      </Flex>
    </div>
  );
};

export default Login;
