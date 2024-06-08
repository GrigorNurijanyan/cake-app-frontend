import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => {
    return state.accessToken;
  });

  useEffect(() => {
    if (isLogin) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);

  return;
};

export default Root;
