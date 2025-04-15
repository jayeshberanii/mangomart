
export type ProductType = {
  _id?: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  createdAt?: string;
  updatedAt?: string;
};

export interface OrderType {
  _id?: string;
  product: ProductType;
  customerName: string;
  email?: string;
  phone?: string;
  address?: string;
  quantity: number;
  status: "Pending" | "Confirmed" | "Shipped" | "Delivered" | "Cancelled"
  createdAt?: string;
  updatedAt?: string;
}

export type OrderStatus = "Pending" | "Confirmed" | "Shipped" | "Delivered" | "Cancelled";