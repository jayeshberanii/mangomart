import { ORDER_ROUTES } from "../constants/routes";
import apiClient from "../lib/axios";
import { OrderType } from "../types/product";

export const getOrdersApi = async (
    limit?: number,
    offset?: number,
    status?: string,
) => {
    try {
        const response = await apiClient.get(ORDER_ROUTES.GET_ORDERS, {
            params: { limit, offset, status },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const createOrderApi = async (brandData: OrderType) => {
    try {
        const response = await apiClient.post(ORDER_ROUTES.ADD_ORDER, brandData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const updateOrderApi = async (id: string, brandData: OrderType) => {
    try {
        const response = await apiClient.put(`${ORDER_ROUTES.EDIT_ORDER}/${id}`, brandData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const deleteOrderApi = async (id: string) => {
    try {
        const response = await apiClient.delete(`${ORDER_ROUTES.DELETE_ORDER}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const getOrderByIdApi = async (id: string) => {
    try {
        const response = await apiClient.get(`${ORDER_ROUTES.GET_ORDER_BY_ID}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error
    }
}