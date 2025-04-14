import axios from "axios";
import { BASE_URL } from "../constants/constants";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Helper to format Axios errors
const isError = (err: any) => {
  if (axios.isAxiosError(err)) {
    return err;
  }
  return new Error(err);
};

// Simple response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(isError(error));
  }
);

export default apiClient;

// Optional utility to extract meaningful error messages
export const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error?.response?.data?.message;
  } else {
    return error;
  }
};
