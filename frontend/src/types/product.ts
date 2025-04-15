export interface ProductType {
    _id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

export interface OrderType {
    product: ProductType;
    quantity: number;
    customerName: string;
    address: string;
    phone: string;
    email: string;
}