export interface ProductType {
    _id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

export interface OrderType {
    productId: string;
    quantity: number;
    customerName: string;
    address: string;
    phone: string;
    email: string;
}