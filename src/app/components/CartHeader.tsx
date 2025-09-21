'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const CartHeader: React.FC = () => {
  const { items } = useCart();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black pt-16 mt-4 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-3">
              <div className="relative h-10 w-10 mr-3 overflow-hidden rounded-full border border-yellow-700">
                <Image
                  src="/images/rajwadi-products/Rajwadi Rajubhai Logo.png"
                  alt="Rajubhai's Rajwadi Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Your Shopping Cart</h1>
            </div>
            <p className="mt-2 text-yellow-900">
              {totalItems === 0
                ? "Your cart is empty"
                : totalItems === 1
                ? "You have 1 spice mix in your cart"
                : `You have ${totalItems} spice mixes in your cart`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 md:mt-0 flex space-x-4"
          >
            <Link href="/" className="flex items-center text-yellow-900 hover:text-black transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: 'left' }}
        className="h-1 bg-yellow-800"
      />
    </div>
  );
};

export default CartHeader; 