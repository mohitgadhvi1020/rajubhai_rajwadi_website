'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '../types';

// Define the state type
interface CartState {
  items: CartItem[];
}

// Define action types
type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

// Create initial state
const initialState: CartState = {
  items: [],
};

// Local storage key
const CART_STORAGE_KEY = 'rajwadi_cart';

// Create reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newState: CartState;

  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // Item already exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        newState = { ...state, items: updatedItems };
      } else {
        // Add new item
        newState = {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
      break;
    }
    case 'REMOVE_ITEM': {
      newState = {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
      break;
    }
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        newState = {
          ...state,
          items: state.items.filter((item) => item.id !== id),
        };
      } else {
        newState = {
          ...state,
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        };
      }
      break;
    }
    case 'CLEAR_CART': {
      newState = { ...state, items: [] };
      break;
    }
    case 'LOAD_CART': {
      newState = { ...state, items: action.payload };
      break;
    }
    default:
      return state;
  }

  // Save to localStorage after state changes
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newState.items));
  }
  
  return newState;
};

// Define context type
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getSubtotalPrice: () => number;
  getSavingsAmount: () => number;
  getDeliveryCharge: () => number;
  getTotalQuantity: () => number;
  hasMinimumOrder: () => boolean;
  getFinalTotal: () => number;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart) as CartItem[];
          dispatch({ type: 'LOAD_CART', payload: parsedCart });
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Calculate the total price with discounts
  const getTotalPrice = () => {
    return state.items.reduce(
      (total, item) => {
        const effectivePrice = item.discountPrice || item.price;
        return total + effectivePrice * item.quantity;
      },
      0
    );
  };

  // Calculate the original subtotal without discounts
  const getSubtotalPrice = () => {
    return state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Calculate the total savings amount
  const getSavingsAmount = () => {
    return state.items.reduce(
      (total, item) => {
        if (item.discountPrice) {
          return total + (item.price - item.discountPrice) * item.quantity;
        }
        return total;
      },
      0
    );
  };

  // Calculate total quantity of items
  const getTotalQuantity = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  // Check if minimum order requirement is met (5 packets)
  const hasMinimumOrder = () => {
    return getTotalQuantity() >= 5;
  };

  // Calculate delivery charge
  const getDeliveryCharge = () => {
    return hasMinimumOrder() ? 0 : 40;
  };

  // Calculate final total including delivery charge
  const getFinalTotal = () => {
    return getTotalPrice() + getDeliveryCharge();
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getSubtotalPrice,
        getSavingsAmount,
        getDeliveryCharge,
        getTotalQuantity,
        hasMinimumOrder,
        getFinalTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 