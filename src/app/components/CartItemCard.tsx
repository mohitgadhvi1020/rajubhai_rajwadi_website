'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CartItem } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemCardProps {
  item: CartItem;
  itemIndex?: number;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item, itemIndex = 0 }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    } else {
      handleRemove();
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeFromCart(item.id);
    }, 300);
  };

  // Use the discounted price if available
  const effectivePrice = item.discountPrice || item.price;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        delay: itemIndex * 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: -300,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={isRemoving ? "exit" : "visible"}
      className="border-b border-gray-100 overflow-hidden"
    >
      <div className="grid grid-cols-12 gap-4 p-6 items-center">
        <div className="col-span-6 md:col-span-7">
          <div className="flex items-center">
            <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="80px"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <div className="text-sm mt-1">
                {item.discountPrice ? (
                  <div className="flex items-center">
                    <span className="text-red-600 font-medium">₹{item.discountPrice} each</span>
                    <span className="text-gray-500 line-through ml-2">₹{item.price}</span>
                  </div>
                ) : (
                  <p className="text-gray-500">₹{item.price} each</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 md:col-span-2">
          <div className="flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
            >
              -
            </motion.button>

            <motion.span 
              key={item.quantity}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              className="w-10 text-center font-medium"
            >
              {item.quantity}
            </motion.span>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
            >
              +
            </motion.button>
          </div>
        </div>

        <div className="col-span-2 text-right">
          <motion.p 
            key={item.quantity} 
            initial={{ scale: 1.1 }} 
            animate={{ scale: 1 }}
            className="font-bold"
          >
            ₹{(effectivePrice * item.quantity).toFixed(2)}
          </motion.p>
        </div>

        <div className="col-span-1 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleRemove}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItemCard; 