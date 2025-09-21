'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/story' },
      { name: 'Quality Promise', href: '/quality' },
      { name: 'Careers', href: '/careers' },
    ],
    products: [
      { name: 'Incense Sticks', href: '#menu' },
      { name: 'Dhup Collection', href: '#menu' },
      { name: 'Premium Tea', href: '#menu' },
      { name: 'Sacred Collection', href: '#menu' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447c0-1.297.49-2.448 1.297-3.323.875-.875 2.026-1.365 3.323-1.365 1.297 0 2.448.49 3.323 1.365.875.875 1.365 2.026 1.365 3.323 0 1.297-.49 2.448-1.365 3.323-.875.875-2.026 1.365-3.323 1.365z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-rajwadi-charcoal text-white relative overflow-hidden">
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-rajwadi-gold/5 to-transparent" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-premium py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="relative h-14 w-14">
                  <Image
                    src="/images/rajwadi-products/Rajwadi Rajubhai Logo.png"
                    alt="Rajubhai's Rajwadi Logo"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-rajwadi-gold">
                    Rajubhai's Rajwadi
                  </h3>
                  <p className="text-base text-gray-200 font-body">
                    Premium Incense & Tea
                  </p>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-200 font-body leading-relaxed max-w-md text-base"
              >
                Crafting divine tranquility with premium incense sticks, dhup, and finest tea blends. 
                Each product is carefully curated to elevate your spiritual journey and daily moments of peace.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3" style={{ color: '#D4AF37' }}>
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-body">Rajkot, Gujarat, India</span>
                </div>
                <div className="flex items-center space-x-3" style={{ color: '#D4AF37' }}>
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-body">+91 82005 58732</span>
                </div>
                <div className="flex items-center space-x-3" style={{ color: '#D4AF37' }}>
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-body">rajwadi.official99@gmail.com</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links - Simplified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-heading font-bold text-rajwadi-gold">
                About Us
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-accent hover:text-yellow-300 transition-colors duration-300 font-body hover:translate-x-1 transform inline-block"
                    style={{ color: '#D4AF37' }}
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quality"
                    className="hover:text-yellow-300 transition-colors duration-300 font-body hover:translate-x-1 transform inline-block"
                    style={{ color: '#D4AF37' }}
                  >
                    Quality Promise
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-yellow-300 transition-colors duration-300 font-body hover:translate-x-1 transform inline-block"
                    style={{ color: '#D4AF37' }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Products - Simplified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-heading font-bold text-rajwadi-gold">
                Products
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#menu"
                    className="hover:text-yellow-300 transition-colors duration-300 font-body hover:translate-x-1 transform inline-block"
                    style={{ color: '#D4AF37' }}
                  >
                    Incense Sticks
                  </Link>
                </li>
                <li>
                  <Link
                    href="#menu"
                    className="hover:text-yellow-300 transition-colors duration-300 font-body hover:translate-x-1 transform inline-block"
                    style={{ color: '#D4AF37' }}
                  >
                    Premium Tea
                  </Link>
                </li>
                <li>
                  <Link
                    href="#menu"
                    className="hover:text-yellow-300 transition-colors duration-300 font-body hover:translate-x-1 transform inline-block"
                    style={{ color: '#D4AF37' }}
                  >
                    Sacred Collection
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600">
          <div className="container-premium py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 font-body"
              >
                © {currentYear} Rajubhai's Rajwadi Pvt. Ltd. All rights reserved.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-1"
              >
                <span className="text-gray-400 font-body mr-3">Follow us:</span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-rajwadi-gold transition-all duration-300 p-2 hover:bg-white/5 rounded-full"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
