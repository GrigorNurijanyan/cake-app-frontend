import Title from "antd/es/typography/Title";
import React from "react";
import CakeLogin from "../../assets/cakelogin.png";
import FormInputText from "../../components/FormInputText/FormInputText";
import FormInputPassword from "../../components/FormInputPassword/FormInputPassword";
import MyButton from "../../components/MyButton/MyButton";
import { Flex, Space } from "antd";
import FormBlock from "../../components/FormBlock/FormBlock";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../../components/Notify/Notify";
import userActions from "../../actions/userActions";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    const result = await userActions.register(values);
    console.log("result ====", result);
    if (result.success) {
      notifySuccess("You registered successfully");
      navigate("/login");
    } else {
      notifyError(result.errMsg);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    notifyError(errorInfo.errorFields[0].errors[0]);
  };
  return (
    <div className="login-page-wrapper">
      <Title>Register</Title>
      <Flex className="login-img-with-input-blocks">
        <img src={CakeLogin} alt="Cake" />
        <FormBlock onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <FormInputText
            name={"fullName"}
            placeholder={"Input fullname"}
            required
          />
          <FormInputText
            name={"username"}
            placeholder={"Input username"}
            required
          />
          <FormInputText
            name={"email"}
            placeholder={"Input email"}
            type={"email"}
            required
          />
          <FormInputPassword
            name={"password"}
            placeholder={"Input password"}
            required
          />
          <Space>
            <MyButton buttonText="Register" />
            <MyButton
              buttonText="Login"
              htmlType={"button"}
              type={"default"}
              onClick={() => navigate("/login")}
            />
          </Space>
        </FormBlock>
      </Flex>
    </div>
  );
};

export default Register;
