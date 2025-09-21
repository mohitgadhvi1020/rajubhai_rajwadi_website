// Product type
export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  description: string;
  image: string;
}

// Cart Item type
export interface CartItem extends Product {
  quantity: number;
}

// Customer type for checkout
export interface Customer {
  name: string;
  address: string;
  email: string;
}

// Order type
export interface Order {
  customer: Customer;
  items: CartItem[];
  total: number;
} 