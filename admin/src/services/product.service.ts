import { PRODUCT_ROUTES } from "../constants/routes";
import apiClient, { errorHandler } from "../lib/axios";
import { showToast } from "../lib/toast";
import { ProductType } from "../types/product";

export const fetchProductsApi = async (
) => {
  try {
 
    const response = await apiClient.get(PRODUCT_ROUTES.GET_PRODUCTS);
    return response.data;
  } catch (error: unknown) {
    const errorMsg = errorHandler(error);
    showToast(errorMsg, "error");
  }
};

export const fetchProductByIdApi = async (id: string) => {
  try {
    const response = await apiClient.get(`${PRODUCT_ROUTES.GET_PRODUCT_BY_ID}/${id}`);
    return response.data;
  } catch (error: unknown) {
    const errorMsg = errorHandler(error);
    showToast(errorMsg, "error");
  }
}

export const addProductApi = async (product: ProductType) => {
  try {
    const response = await apiClient.post(PRODUCT_ROUTES.ADD_PRODUCT, product);
    showToast("Product added successfully", "success");
    return response.data;
  } catch {
    showToast("Error while adding Product", "error");
  }
};

export const deleteProductApi = async (id: string) => {
  try {
    const response = await apiClient.delete(`${PRODUCT_ROUTES.DELETE_PRODUCT}/${id}`);
    showToast("Product deleted successfully", "success");
    return response.data;
  } catch {
    showToast("Error while deleting Product", "error");
  }
};

export const editProductApi = async (id: string, product: ProductType) => {
  try {
    const response = await apiClient.put(`${PRODUCT_ROUTES.EDIT_PRODUCT}/${id}`, product);
    showToast("Product updated successfully", "success");
    return response.data;
  } catch {
    showToast("Error while updating Product", "error");
  }
}
