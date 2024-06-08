import axios from "axios";
import reduxActions from "../redux/reduxActions";

const baseURL = process.env.REACT_APP_BASE_URL;

export const axiosServiceFile = axios.create({
  headers: {
    Accept: "application/json;charset=UTF-8",
    "Content-Type": "multipart/form-data",
  },
  validateStatus: false,
  withCredentials: false,
  timeout: 5000,
});

const adapter = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json;charset=UTF-8",
    "Content-Type": "application/json",
  },
  validateStatus: false,
  withCredentials: false,
  timeout: 10000,
});

export async function fetchFromUrlPOSTAsync(url, parameters = []) {
  try {
    let dataPost = {};

    if (Array.isArray(parameters)) {
      parameters.forEach((par) => {
        dataPost[par.key] = par.value;
      });
    } else {
      Object.assign(dataPost, parameters);
    }

    let finalResult = await adapter.post(url, dataPost);
    switch (finalResult.status) {
      case 400:
        console.log("BAD REQUEST");
        break;
      case 401:
        console.log("UNAUTHENTICATED,MUST IDENTIFY USER!!");
        break;
      case 402:
        console.log("PAYMENT IS REQUIRED");
        break;
      case 403:
        console.log("AUTHENTICATED,SESSION TOKEN IS REQUIRED!!");
        break;
      case 404:
        console.log("PAGE NOT FOUND,ROUTE DOES NOT EXIST!!");
        break;
      case 410:
        console.log("Token expired");
        break;
      default:
        break;
    }
    if (!finalResult.data.success) {
      finalResult.data.status = finalResult.status;
    }
    return finalResult.data;
  } catch (error) {
    let errorMsg = error.message || "";
    if (errorMsg === "Network Error") {
      errorMsg = "You are in offline mode please connect to the internet";
    }
    console.log("error :>> ", error);
    return { success: false, errMsg: errorMsg };
  }
}

export async function fetchFromUrlGETAsync(url, parameters = {}) {
  try {
    let token = reduxActions.getAccessToken();
    if (token) {
      adapter.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete adapter.defaults.headers.common["Authorization"];
    }
    const response = await adapter.get(url, { params: parameters });

    switch (response.status) {
      case 400:
        console.log("BAD REQUEST");
        break;
      case 401:
        console.log("UNAUTHENTICATED, MUST IDENTIFY USER!!");
        break;
      case 402:
        console.log("PAYMENT IS REQUIRED");
        break;
      case 403:
        console.log("AUTHENTICATED, SESSION TOKEN IS REQUIRED!!");
        break;
      case 404:
        console.log("PAGE NOT FOUND, ROUTE DOES NOT EXIST!!");
        break;
      case 410:
        console.log("Token expired");
        break;
      default:
        break;
    }

    if (!response.data.success) {
      response.data.status = response.status;
    }

    return response.data;
  } catch (error) {
    let errorMsg = error.message || "";
    if (errorMsg === "Network Error") {
      errorMsg = "You are in offline mode please connect to the internet";
    }
    console.log("error :>> ", error);
    return { success: false, errMsg: errorMsg };
  }
}

export async function fetchPostFileFS(url, response) {
  let urlFinal = baseURL + url;
  var formData = new FormData();
  formData.append("files", response);
  let token = reduxActions.getAccessToken();
  if (token) {
    axiosServiceFile.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  } else {
    delete axiosServiceFile.defaults.headers.common["Authorization"];
  }
  let result = await axiosServiceFile.post(urlFinal, formData);
  return result.data;
}

export async function fetchFromUrlDELETEAsync(url, parameters = []) {
  try {
    let dataPost = {};

    if (Array.isArray(parameters)) {
      parameters.forEach((par) => {
        dataPost[par.key] = par.value;
      });
    } else {
      Object.assign(dataPost, parameters);
    }

    let finalResult = await adapter.delete(url, dataPost);
    switch (finalResult.status) {
      case 400:
        console.log("BAD REQUEST");
        break;
      case 401:
        console.log("UNAUTHENTICATED,MUST IDENTIFY USER!!");
        break;
      case 402:
        console.log("PAYMENT IS REQUIRED");
        break;
      case 403:
        console.log("AUTHENTICATED,SESSION TOKEN IS REQUIRED!!");
        break;
      case 404:
        console.log("PAGE NOT FOUND,ROUTE DOES NOT EXIST!!");
        break;
      case 410:
        console.log("Token expired");
        break;
      default:
        break;
    }
    if (!finalResult.data.success) {
      finalResult.data.status = finalResult.status;
    }
    return finalResult.data;
  } catch (error) {
    let errorMsg = error.message || "";
    if (errorMsg === "Network Error") {
      errorMsg = "You are in offline mode please connect to the internet";
    }
    console.log("error :>> ", error);
    return { success: false, errMsg: errorMsg };
  }
}

export async function fetchFromUrlPATCHAsync(url, parameters = []) {
  try {
    let dataPost = {};

    if (Array.isArray(parameters)) {
      parameters.forEach((par) => {
        dataPost[par.key] = par.value;
      });
    } else {
      Object.assign(dataPost, parameters);
    }

    let finalResult = await adapter.patch(url, dataPost);
    switch (finalResult.status) {
      case 400:
        console.log("BAD REQUEST");
        break;
      case 401:
        console.log("UNAUTHENTICATED,MUST IDENTIFY USER!!");
        break;
      case 402:
        console.log("PAYMENT IS REQUIRED");
        break;
      case 403:
        console.log("AUTHENTICATED,SESSION TOKEN IS REQUIRED!!");
        break;
      case 404:
        console.log("PAGE NOT FOUND,ROUTE DOES NOT EXIST!!");
        break;
      case 410:
        console.log("Token expired");
        break;
      default:
        break;
    }
    if (!finalResult.data.success) {
      finalResult.data.status = finalResult.status;
    }
    return finalResult.data;
  } catch (error) {
    let errorMsg = error.message || "";
    if (errorMsg === "Network Error") {
      errorMsg = "You are in offline mode please connect to the internet";
    }
    console.log("error :>> ", error);
    return { success: false, errMsg: errorMsg };
  }
}
