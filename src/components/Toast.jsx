// components/Toast.js
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Default configuration for all toasts
const defaultToastConfig = {
  //   position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

// Main Toast component
const Toast = () => {
  return <ToastContainer limit={3} {...defaultToastConfig} />;
};

// Reusable toast types
export const showSuccessToast = (message, options = {}) => {
  toast.success(message, { ...defaultToastConfig, ...options });
};

export const showErrorToast = (message, options = {}) => {
  toast.error(message, { ...defaultToastConfig, ...options });
};

export const showInfoToast = (message, options = {}) => {
  toast.info(message, { ...defaultToastConfig, ...options });
};

export const showWarningToast = (message, options = {}) => {
  toast.warn(message, { ...defaultToastConfig, ...options });
};

export default Toast;
