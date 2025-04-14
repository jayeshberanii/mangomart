import apiClient from "../lib/axios";
import { OrderType } from "../types/product";

export const productService = {
    getAll: (): Promise<any> => apiClient.get("/products"),
    getOne: (id: number): Promise<any> => apiClient.get(`/products/${id}`),
};

export const orderService = {
    create: (data: OrderType) => apiClient.post("/orders", data),
};