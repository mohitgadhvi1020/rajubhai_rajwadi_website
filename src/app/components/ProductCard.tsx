'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // Calculate discount percentage
  const discountPercentage = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100) 
    : 0;

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    
    // Reset button state after animation
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative card-premium p-0 overflow-hidden h-[520px] sm:h-[580px] flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Discount Badge */}
      <AnimatePresence>
        {product.discountPrice && (
          <motion.div 
            initial={{ scale: 0, rotate: -12 }}
            animate={{ scale: 1, rotate: -12 }}
            exit={{ scale: 0 }}
            className="absolute top-4 right-4 z-20 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg"
          >
            <span className="flex items-center space-x-1">
              <span>{discountPercentage}%</span>
              <span className="text-xs">OFF</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Premium Image Container */}
      <div className="relative h-48 sm:h-64 w-full overflow-hidden rounded-t-2xl bg-gradient-warm flex-shrink-0">
        <motion.div
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            rotate: isHovered ? 0.5 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        
        {/* Premium Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-rajwadi-brown/30 via-transparent to-transparent"
        />
        
        {/* Quick View Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8
          }}
          className="absolute top-4 left-4 z-10"
        >
          <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-rajwadi-brown p-2 rounded-full shadow-premium transition-all duration-300 hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </motion.div>
      </div>
      
      {/* Premium Content Section */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          {/* Product Name */}
          <motion.h3 
            className="text-xl font-heading font-semibold text-rajwadi-brown group-hover:text-rajwadi-primary transition-colors duration-200"
            animate={{ color: isHovered ? '#E67E22' : '#4A2C2A' }}
            transition={{ duration: 0.2 }}
          >
            {product.name}
          </motion.h3>
          
          {/* Description */}
          <p className="text-rajwadi-brown/70 text-sm font-body line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          {/* Rating Stars (Mock) */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                className="w-4 h-4 text-rajwadi-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
            <span className="text-xs text-rajwadi-brown/60 ml-2 font-body">(4.8)</span>
          </div>
        </div>
        
        {/* Price and Add to Cart Section */}
        <div className="flex justify-between items-end mt-auto">
          {/* Premium Price Display */}
          <div className="space-y-1">
            {product.discountPrice ? (
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-heading font-bold text-rajwadi-primary">
                    ₹{product.discountPrice}
                  </span>
                  <span className="text-lg text-rajwadi-brown/50 line-through font-body">
                    ₹{product.price}
                  </span>
                </div>
                <p className="text-xs text-green-600 font-body font-medium">
                  You save ₹{product.price - product.discountPrice}
                </p>
              </div>
            ) : (
              <span className="text-2xl font-heading font-bold text-rajwadi-brown">
                ₹{product.price}
              </span>
            )}
          </div>
          
          {/* Premium Add to Cart Button */}
          <motion.button
            onClick={handleAddToCart}
            className="relative btn-premium text-sm px-6 py-3 flex items-center space-x-2 font-body font-semibold min-w-[120px] justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={isAdding ? {
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            } : {}}
            transition={isAdding ? { duration: 0.6 } : { duration: 0.2 }}
            disabled={isAdding}
          >
            <AnimatePresence mode="wait">
              {isAdding ? (
                <motion.div
                  key="adding"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center space-x-2"
                >
                  <motion.svg 
                    className="w-4 h-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5, repeat: 1 }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </motion.svg>
                  <span>Added!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="add"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M13 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Add to Cart</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
      
      {/* Premium Glow Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? '0 0 30px rgba(212, 175, 55, 0.3)' 
            : '0 0 0px rgba(212, 175, 55, 0)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ProductCard;