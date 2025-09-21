'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full pt-20">
      {/* Full-width banner image with no margins */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {/* Subtle gradient overlay to enhance text readability while keeping image visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-10"></div>
        <Image
          src="/images/Rajwadi Tea BG heropage.png"
          alt="Rajubhai's Rajwadi - Premium Incense Sticks & Tea for Spiritual Wellness"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />


        {/* Call-to-action buttons overlaid on hero banner - Mobile Optimized */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start pl-2 sm:pl-4 md:pl-8 lg:pl-16 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <motion.a
              href="#menu"
              className="btn-premium text-xs sm:text-sm px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-center space-x-2 font-body font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="hidden sm:inline">Shop Sacred Collection</span>
              <span className="sm:hidden">Shop Now</span>
            </motion.a>
            <motion.a
              href="#menu" 
              className="btn-secondary text-xs sm:text-sm px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-center space-x-2 font-body font-semibold bg-white/95 backdrop-blur-sm text-rajwadi-brown border-2 border-rajwadi-primary/30 hover:border-rajwadi-primary hover:bg-rajwadi-primary hover:text-white rounded-full transition-all duration-300 shadow-premium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="hidden sm:inline">View Our Collection</span>
              <span className="sm:hidden">Our Products</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 