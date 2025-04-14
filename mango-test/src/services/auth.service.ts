import { API_ROUTES } from "../constants/routes";
import apiClient, { errorHandler } from "../lib/axios";
import { showToast } from "../lib/toast";

export const registerUser = async (payload: Record<string, unknown>) => {
  try {
    const response = await apiClient.post(API_ROUTES.SIGN_UP, payload);
    return response.data;
  } catch (error: unknown) {
    const errorMsg = errorHandler(error);
    showToast(errorMsg, "error");
    throw error;
  }
};

export const loginUser = async (payload: Record<string, unknown>) => {
  try {
    const response = await apiClient.post(API_ROUTES.SIGN_IN, payload);
    localStorage.setItem("accessToken", response.data.token);
    return response.data;
  } catch (error: unknown) {
    const errorMsg = errorHandler(error);
    showToast(errorMsg, "error");
    throw error;
  }
};

export const checkUserExistence = async (payload: Record<string, unknown>) => {
  try {
    const response = await apiClient.post(
      API_ROUTES.CHECK_USER_EXISTENCE,
      payload
    );
    return response.data;
  } catch (error: unknown) {
    const errorMsg = errorHandler(error);
    showToast(errorMsg, "error");
    throw error;
  }
};

export const getUserDetails = async () => {
  const response = await apiClient.get(API_ROUTES.USER);
  return response.data;
};

export const signOut = async () => {
  const response = await apiClient.get(API_ROUTES.LOGOUT);
  return response.data;
};

export const updateUser = async (payload: Record<string, unknown>) => {
  const response = await apiClient.post(API_ROUTES.USER, payload);
  return response.data;
};

export const forgotPassword = async (payload: Record<string, unknown>) => {
  const response = await apiClient.post(API_ROUTES.FORGOT_PASSWORD, payload);
  return response.data;
};

export const getUserCounts = async () => {
  const response = await apiClient.get(API_ROUTES.USERS_COUNT);
  return response.data;
};

export const verifyEmail = async (payload: Record<string, unknown>) => {
  const response = await apiClient.post(API_ROUTES.VERIFY_EMAIL, payload);
  return response.data;
};

export const intiateForgotPassword = async (
  payload: Record<string, unknown>
) => {
  try {
    const response = await apiClient.post(
      API_ROUTES.INTIATE_FORGOT_PASSWORD,
      payload
    );
    return response.data;
  } catch (error) {
    const msg = errorHandler(error);
    showToast(msg, "error");
  }
};

export const updatePassword = async (payload: Record<string, unknown>) => {
  try {
    const response = await apiClient.post(API_ROUTES.UPDATE_PASSWORD, payload);
    return response.data;
  } catch (error) {
    const msg = errorHandler(error);
    showToast(msg, "error");
  }
};
