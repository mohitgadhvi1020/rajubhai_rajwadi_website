'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

interface CartSummaryProps {
  onCheckout?: () => void;
  isCheckingOut?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ onCheckout, isCheckingOut = false }) => {
  const router = useRouter();
  const { getTotalPrice, getSubtotalPrice, getSavingsAmount, getDeliveryCharge, getTotalQuantity, hasMinimumOrder, getFinalTotal } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [showCouponInput] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [localIsCheckingOut, setLocalIsCheckingOut] = useState(false);

  // Get cart totals
  const subtotal = getSubtotalPrice();
  const savings = getSavingsAmount();
  const total = getTotalPrice();
  const deliveryCharge = getDeliveryCharge();
  const totalQuantity = getTotalQuantity();
  const isMinimumOrderMet = hasMinimumOrder();
  
  // Additional coupon discount
  const finalPrice = getFinalTotal() - couponDiscount;

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponError('Please enter a coupon code');
      return;
    }

    // Demo coupon codes
    if (couponCode.toUpperCase() === 'RAJWADI10') {
      setCouponDiscount(total * 0.1);
      setCouponError('');
    } else if (couponCode.toUpperCase() === 'RAJWADI20') {
      setCouponDiscount(total * 0.2);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code');
      setCouponDiscount(0);
    }
  };

  const handleCheckout = () => {
    setLocalIsCheckingOut(true);
    if (onCheckout) {
      onCheckout();
    } else {
      // Short delay for animation
      setTimeout(() => {
        router.push('/checkout');
      }, 300);
    }
  };

  // Use either the prop or local state
  const isProcessing = isCheckingOut || localIsCheckingOut;

  return (
    <motion.div 
      className="p-6 border-t border-gray-100 bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        <div className="w-full md:w-1/2 md:border-r border-gray-200 md:pr-8">
          <h3 className="font-bold text-lg mb-4">Have a coupon?</h3>
          
          {/* <button 
            onClick={() => setShowCouponInput(!showCouponInput)}
            className="text-yellow-600 hover:text-yellow-800 text-sm font-medium mb-2 flex items-center"
          >
            {showCouponInput ? 'Hide coupon input' : 'Click here to enter your code'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-1 transition-transform ${showCouponInput ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button> */}
          
          <AnimatePresence>
            {showCouponInput && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex mt-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleApplyCoupon}
                    className="bg-yellow-500 text-black px-4 py-2 rounded-r-lg font-medium hover:bg-yellow-600 transition-colors"
                  >
                    Apply
                  </motion.button>
                </div>
                
                <AnimatePresence>
                  {couponError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {couponError}
                    </motion.p>
                  )}
                </AnimatePresence>
                
                <div className="text-sm text-gray-500 mt-2">
                  Try demo codes: RAJWADI10 or RAJWADI20
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>
          
          {/* Minimum Order Notification */}
          <AnimatePresence>
            {!isMinimumOrderMet && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg"
              >
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-amber-800">
                      Add {5 - totalQuantity} more packet{5 - totalQuantity !== 1 ? 's' : ''} for FREE delivery!
                    </p>
                    <p className="text-xs text-amber-600 mt-1">
                      Currently: {totalQuantity} packet{totalQuantity !== 1 ? 's' : ''} • Need: 5+ packets
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Free Delivery Success */}
          <AnimatePresence>
            {isMinimumOrderMet && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm font-medium text-green-800">
                    🎉 Congratulations! You qualify for FREE delivery
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            
            <AnimatePresence>
              {savings > 0 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex justify-between text-sm"
                >
                  <span className="text-green-600">Product Discount</span>
                  <span className="text-green-600">-₹{savings.toFixed(2)}</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {couponDiscount > 0 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex justify-between text-sm"
                >
                  <span className="text-green-600">Coupon Discount</span>
                  <span className="text-green-600">-₹{couponDiscount.toFixed(2)}</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivery Charge</span>
              <span className={deliveryCharge === 0 ? 'text-green-600 font-medium' : ''}>
                {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge.toFixed(2)}`}
              </span>
            </div>
            
            <div className="border-t border-gray-200 my-2 pt-2"></div>
            
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <motion.span 
                key={finalPrice} 
                initial={{ scale: 1.1 }} 
                animate={{ scale: 1 }}
                className="text-xl"
              >
                ₹{finalPrice.toFixed(2)}
              </motion.span>
            </div>
            
            <div className="pt-4 space-y-3">
              <motion.button 
                onClick={handleCheckout}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`bg-yellow-500 text-black w-full py-3 rounded-lg font-medium transition-all ${
                  isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-600'
                }`}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : 'Proceed to Checkout'}
              </motion.button>
              
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link 
                  href="/" 
                  className="block text-center w-full py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartSummary; 