'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Customer } from '../types';

const CheckoutHeader: React.FC = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold">Checkout</h1>
            </div>
            <p className="mt-2 text-yellow-900">Complete your order</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 md:mt-0 flex space-x-4"
          >
            <Link href="/cart" className="flex items-center text-yellow-900 hover:text-black transition-colors">
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
              Back to Cart
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

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const { items, getTotalPrice, getFinalTotal, getDeliveryCharge, getTotalQuantity, hasMinimumOrder, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'whatsapp'>('whatsapp');

  const [customer, setCustomer] = useState<Customer>({
    name: '',
    address: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnlinePayment = () => {
    const finalAmount = getFinalTotal();
    
    if (paymentMethod === 'whatsapp') {
      // WhatsApp Payment
      const whatsappNumber = '918200558732'; // Your WhatsApp number
      const itemsList = items.map(item => 
        `• ${item.name} x ${item.quantity} = ₹${((item.discountPrice || item.price) * item.quantity).toFixed(2)}`
      ).join('\n');
      
      const message = `🕉️ *RAJUBHAI'S RAJWADI ORDER* 🕉️

👤 *Customer Details:*
Name: ${customer.name}
Email: ${customer.email}

📦 *Order Items:*
${itemsList}

💰 *Order Summary:*
Subtotal: ₹${getTotalPrice().toFixed(2)}
Delivery: ${getDeliveryCharge() === 0 ? 'FREE' : '₹' + getDeliveryCharge().toFixed(2)}
*Total: ₹${finalAmount}*

📍 *Delivery Address:*
${customer.address}

${getDeliveryCharge() === 0 ? '✅ Congratulations! You got FREE delivery (5+ packets)' : '⚠️ Add more items for FREE delivery (minimum 5 packets)'}

Please confirm this order and share payment details. Thank you! 🙏`;
      
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => {
        setFormSubmitted(true);
        clearCart();
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    setIsSubmitting(true);
    
    // Check payment method and handle accordingly
    if (paymentMethod === 'cod') {
      // Handle Cash on Delivery
      setTimeout(() => {
        setFormSubmitted(true);
        clearCart();
        setIsSubmitting(false);
      }, 1500);
    } else {
      // Handle Online payments (UPI, WhatsApp, Bank)
      handleOnlinePayment();
    }
    
    // Comment out the API call for demonstration purposes
    /*
    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer,
          items,
          total: getTotalPrice(),
        }),
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        clearCart();
      } else {
        alert('Something went wrong! Please try again.');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Error submitting order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  if (formSubmitted) {
    return (
      <div className="container mx-auto px-4 py-8 pt-20">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-green-600">Order Placed Successfully!</h2>
          <p className="mb-2">Thank you for your order!</p>
          <p className="text-sm text-gray-600 mb-6">
            {paymentMethod === 'whatsapp' 
              ? '🎉 Your order has been sent via WhatsApp! We\'ll confirm your order and share payment details shortly.' 
              : 'Your order will be delivered with Cash on Delivery. We\'ve sent you a confirmation email.'
            }
          </p>
          <div className="text-sm text-gray-500 mb-6">
            Order Total: ₹{getFinalTotal().toFixed(2)}
          </div>
          <button
            onClick={() => router.push('/')}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <CheckoutHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={customer.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={customer.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={customer.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  
                  {/* Payment Method Selection */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Payment Method
                    </label>
                    <div className="space-y-4">
                      <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                        <div className="flex items-center">
                          <input
                            id="whatsapp"
                            name="payment-method"
                            type="radio"
                            value="whatsapp"
                            checked={paymentMethod === 'whatsapp'}
                            onChange={(e) => setPaymentMethod(e.target.value as 'cod' | 'whatsapp')}
                            className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300"
                          />
                          <label htmlFor="whatsapp" className="ml-3 block text-sm font-medium text-gray-700">
                            💬 <strong>WhatsApp Order</strong> - <span className="text-green-600 font-semibold">Recommended</span>
                          </label>
                        </div>
                        <p className="text-xs text-gray-600 ml-7 mt-1">
                          Send order details via WhatsApp and get payment options (UPI, Bank Transfer, etc.)
                        </p>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="cod"
                          name="payment-method"
                          type="radio"
                          value="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={(e) => setPaymentMethod(e.target.value as 'cod' | 'whatsapp')}
                          className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300"
                        />
                        <label htmlFor="cod" className="ml-3 block text-sm font-medium text-gray-700">
                          💵 Cash on Delivery
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting || items.length === 0}
                      className="w-full bg-yellow-500 text-black px-4 py-3 rounded-lg font-medium hover:bg-yellow-600 transition disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : paymentMethod === 'cod' ? 'Place Order (COD)' : 'Send Order via WhatsApp 💬'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              {items.length === 0 ? (
                <p className="text-center py-4">Your cart is empty</p>
              ) : (
                <>
                  <div className="divide-y">
                    {items.map((item) => (
                      <div key={item.id} className="py-3 flex justify-between">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-600 block text-sm">
                            {item.quantity} x ₹{(item.discountPrice || item.price).toFixed(2)}
                          </span>
                        </div>
                        <span className="font-medium">
                          ₹{((item.discountPrice || item.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>₹{getTotalPrice().toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Delivery Charge:</span>
                      <span className={getDeliveryCharge() === 0 ? 'text-green-600 font-medium' : ''}>
                        {getDeliveryCharge() === 0 ? 'FREE' : `₹${getDeliveryCharge().toFixed(2)}`}
                      </span>
                    </div>
                    
                    {!hasMinimumOrder() && (
                      <div className="text-xs text-amber-600 bg-amber-50 p-2 rounded">
                        Add {5 - getTotalQuantity()} more packet{5 - getTotalQuantity() !== 1 ? 's' : ''} for FREE delivery!
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>₹{getFinalTotal().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage; 