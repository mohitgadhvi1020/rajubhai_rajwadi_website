'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import CartItemCard from '../components/CartItemCard';
import CartHeader from '../components/CartHeader';
import CartSummary from '../components/CartSummary';

const CartPage: React.FC = () => {
  const { items } = useCart();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <CartHeader />
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {items.length === 0 ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16 px-4 bg-white rounded-2xl shadow-lg"
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <svg 
                  className="w-24 h-24 mx-auto text-gray-300 mb-6"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <p className="text-2xl font-semibold mb-6 text-gray-700">Your cart is empty</p>
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/" 
                    className="bg-yellow-500 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-600 inline-block transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="filled"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="grid grid-cols-12 gap-4 text-gray-600 font-medium">
                    <div className="col-span-6 md:col-span-7">Product</div>
                    <div className="col-span-3 md:col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Price</div>
                    <div className="col-span-1 text-right">Action</div>
                  </div>
                </div>
                
                {items.map((item, index) => (
                  <CartItemCard key={item.id} item={item} itemIndex={index} />
                ))}
                
                <CartSummary />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default CartPage; 