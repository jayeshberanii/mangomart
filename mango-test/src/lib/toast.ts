import { toast, TypeOptions } from "react-toastify";

export const showToast = (message: string, type: TypeOptions = "info") => {
  toast(message, {
    type,
    className: `custom-toast ${type}`,
  });
};
