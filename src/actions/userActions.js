import reduxActions from "../redux/reduxActions";
import { fetchFromUrlPOSTAsync } from "../utils/urlHelper";

const URL_LOGIN = "auth/login";
const URL_REGISTER = "auth/register";

const main = {
  loginBE: async (username, password) => {
    const result = fetchFromUrlPOSTAsync(URL_LOGIN, { username, password });
    return result;
  },
  registerBE: async (obj) => {
    const result = fetchFromUrlPOSTAsync(URL_REGISTER, obj);
    return result;
  },
};

const loc = {
  login: async (username, password) => {
    const result = await main.loginBE(username, password);
    if (result.success) {
      reduxActions.setAccessToken(result.data.token);
      reduxActions.setCurrentUser(result.data.user);
    }
    return result;
  },
  register: async (obj) => {
    const result = await main.registerBE(obj);
    return result;
  },
};

export default { ...main, ...loc };
