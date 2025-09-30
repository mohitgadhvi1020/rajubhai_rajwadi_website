'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { items } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);
  const [prevItemsCount, setPrevItemsCount] = useState(0);
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle cart item changes to trigger pulse animation
  useEffect(() => {
    if (totalItems > prevItemsCount) {
      setCartPulse(true);
      const timer = setTimeout(() => setCartPulse(false), 2000);
      return () => clearTimeout(timer);
    }
    setPrevItemsCount(totalItems);
  }, [totalItems, prevItemsCount]);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-premium py-3' 
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-premium">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <div className={`relative overflow-hidden rounded-full border-2 border-rajwadi-primary/20 transition-all duration-300 ${
                  scrolled ? 'h-12 w-12' : 'h-14 w-14'
                }`}>
                  <Image
                    src="/images/rajwadi-products/Rajwadi Rajubhai Logo.png"
                    alt="Rajubhai's Rajwadi - Premium Incense Sticks & Tea"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-premium rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-heading font-semibold text-rajwadi-brown">
                  Rajubhai&apos;s Rajwadi
                </h1>
                <p className="text-xs text-rajwadi-brown/60 font-body -mt-1">
                  Premium Incense Sticks & Tea
                </p>
              </div>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'Our Products', href: '#menu' },
              { name: 'About', href: '#about' },
              { name: 'Contact Us', href: '/contact' },
            ].map((item, index) => (
              <NavLink
                key={item.name}
                href={item.href}
                label={item.name}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Cart Button */}
            <div className="hidden md:block">
              <Link href="/cart">
                <motion.div
                  className="relative btn-premium text-sm px-6 py-3 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={cartPulse ? 
                    { scale: [1, 1.1, 1], transition: { repeat: 2, duration: 0.3 } } : 
                    {}
                  }
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M13 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Cart</span>
                  <AnimatePresence>
                    {totalItems > 0 && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg"
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-rajwadi-cream/50 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <motion.div
                initial={false}
                animate={mobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-around"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 },
                  }}
                  className="block h-0.5 w-6 bg-rajwadi-brown transition-colors"
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="block h-0.5 w-6 bg-rajwadi-brown transition-colors"
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 },
                  }}
                  className="block h-0.5 w-6 bg-rajwadi-brown transition-colors"
                ></motion.span>
              </motion.div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-rajwadi-primary/10"
          >
            <div className="container-premium py-6">
              <div className="space-y-4">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Our Products', href: '#menu' },
                  { name: 'About', href: '#about' },
                  { name: 'Contact Us', href: '/contact' },
                ].map((item) => (
                  <MobileNavLink
                    key={item.name}
                    href={item.href}
                    label={item.name}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ))}
                
                {/* Mobile Cart Link */}
                <MobileNavLink
                  href="/cart"
                  label={`Cart ${totalItems > 0 ? `(${totalItems})` : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                  highlight={cartPulse}
                  isCart={true}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  delay?: number;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link 
        href={href} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group font-body font-medium text-rajwadi-brown hover:text-rajwadi-primary transition-colors duration-300"
      >
        {label}
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-premium"
        />
      </Link>
    </motion.div>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
  highlight?: boolean;
  isCart?: boolean;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ 
  href, 
  label, 
  onClick, 
  highlight = false,
  isCart = false 
}) => {
  return (
    <Link href={href} onClick={onClick}>
      <motion.div
        className={`block py-3 px-4 rounded-xl transition-all duration-300 font-body font-medium ${
          isCart 
            ? 'bg-gradient-premium text-white shadow-premium'
            : highlight 
              ? 'bg-rajwadi-cream text-rajwadi-primary' 
              : 'text-rajwadi-brown hover:text-rajwadi-primary hover:bg-rajwadi-cream/30'
        }`}
        whileHover={{ x: 10 }}
        whileTap={{ scale: 0.98 }}
      >
        {highlight && !isCart ? (
          <motion.span
            animate={{ color: ['#E67E22', '#D4AF37', '#E67E22'] }}
            transition={{ duration: 1, repeat: 2 }}
          >
            {label} ✨
          </motion.span>
        ) : (
          <span className="flex items-center">
            {label}
            {isCart && (
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M13 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            )}
          </span>
        )}
      </motion.div>
    </Link>
  );
};

export default Navbar;