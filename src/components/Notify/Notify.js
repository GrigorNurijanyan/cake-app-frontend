import { toast } from "react-toastify";
import "./Notify.css";

const config = {
  closeButton: true,
  closeOnClick: true,
  position: "top-right",
  autoClose: 5000,
};

export const notifySuccess = (text) => toast.success(text, config);

export const notifyError = (text) => toast.error(text, config);

export const notifyWarning = (text) => toast.warning(text, config);

export const notifyText = (text) => toast(text, config);
