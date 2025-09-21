'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

interface CartNotificationProps {
  productName: string;
}

const CartNotification: React.FC<CartNotificationProps> = ({ productName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: -20, x: '-50%' }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>{productName} added to cart!</span>
    </motion.div>
  );
};

const GoToCartButton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15
        }
      }}
      exit={{ 
        opacity: 0, 
        y: 50,
        transition: { duration: 0.3 }
      }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link href="/cart">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-black px-6 py-3 rounded-full shadow-lg font-medium flex items-center space-x-2 group overflow-hidden relative"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-yellow-400 opacity-30"
            style={{ originX: 0 }}
          />
          <div className="relative h-6 w-6 mr-1 overflow-hidden rounded-full">
            <Image
              src="/images/rajwadi-products/Rajwadi Rajubhai Logo.png"
              alt="Rajubhai's Rajwadi Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="relative z-10">Go to Cart</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="relative z-10"
          >
            →
          </motion.span>
        </motion.button>
      </Link>
    </motion.div>
  );
};

const CartAnimation: React.FC = () => {
  const { items } = useCart();
  const [prevItemsCount, setPrevItemsCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [showGoToCartButton, setShowGoToCartButton] = useState(false);
  const [addedProduct, setAddedProduct] = useState('');
  
  useEffect(() => {
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    
    // Only show cart button if there are items in the cart
    setShowGoToCartButton(totalItems > 0);
    
    if (totalItems > prevItemsCount) {
      // Find the product that was added
      const addedItem = items.find(item => {
        const prevItem = items.find(prevItem => prevItem.id === item.id);
        return !prevItem || item.quantity > prevItem.quantity;
      });
      
      if (addedItem) {
        setAddedProduct(addedItem.name);
        setShowNotification(true);
        
        // Hide notification after 3 seconds
        const timer = setTimeout(() => {
          setShowNotification(false);
        }, 3000);
        
        return () => clearTimeout(timer);
      }
    }
    
    setPrevItemsCount(totalItems);
  }, [items, prevItemsCount]);
  
  // Check if we're on the cart page
  const [isCartPage, setIsCartPage] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isCart = window.location.pathname === '/cart' || 
                    window.location.pathname === '/checkout';
      setIsCartPage(isCart);
      
      // Update on route changes
      const handleRouteChange = () => {
        const isCartNow = window.location.pathname === '/cart' || 
                         window.location.pathname === '/checkout';
        setIsCartPage(isCartNow);
      };
      
      window.addEventListener('popstate', handleRouteChange);
      return () => window.removeEventListener('popstate', handleRouteChange);
    }
  }, []);
  
  return (
    <>
      <AnimatePresence>
        {showNotification && <CartNotification productName={addedProduct} />}
      </AnimatePresence>
      
      <AnimatePresence>
        {showGoToCartButton && !isCartPage && <GoToCartButton />}
      </AnimatePresence>
    </>
  );
};

export default CartAnimation; 