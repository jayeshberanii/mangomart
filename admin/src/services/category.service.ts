import { CATEGORY_ROUTES } from "../constants/routes";
import apiClient from "../lib/axios";

// Create a new category
export const createCategoryApi = async (categoryData: unknown) => {
  try {
    const response = await apiClient.post(CATEGORY_ROUTES.ADD_CATEGORY, categoryData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error
  }
};

// Retrieve all categories
export const fetchCategoriesApi = async (
  limit?: number,
  offset?: number,
  search?: string,
  filter?: { [key: string]: string },
  sorting?: { [key: string]: string }
) => {
  try {
    const response = await apiClient.get(CATEGORY_ROUTES.GET_CATEGORIES, {
      params: { limit, offset, search, filter, sorting },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error
  }
};

// Retrieve a category by ID
export const getCategoryByIdApi = async (id: string) => {
  try {
    const response = await apiClient.get(`${CATEGORY_ROUTES.GET_CATEGORIES}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error
  }
};

// Update a category
export const updateCategoryApi = async (id: string, categoryData: unknown) => {
  try {
    const response = await apiClient.put(`${CATEGORY_ROUTES.EDIT_CATEGORY}/${id}`, categoryData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error
  }
};

// Delete a category
export const deleteCategoryApi = async (id: string) => {
  try {
    const response = await apiClient.delete(`${CATEGORY_ROUTES.DELETE_CATEGORY}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error
  }
};