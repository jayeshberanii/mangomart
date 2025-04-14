import axios from "axios";
import { BASE_URL } from "../constants/constant";

// Create axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Request interceptor to add access token
apiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken"); // or use cookies/session
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Response interceptor for centralized error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can redirect to login or handle 401 globally here
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        window.location.href = "/sign-in";
      }
      return Promise.reject(error.response?.data?.message || error);
    }
    return Promise.reject(error);
  }
);

export default apiClient;

// Error handler utility
export const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error?.response?.data?.message;
  } else {
    return error;
  }
};
