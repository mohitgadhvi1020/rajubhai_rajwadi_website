'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const QualityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rajwadi-warm-white to-rajwadi-cream">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16"
      >
        <div className="container-premium text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-rajwadi-primary/20 overflow-hidden">
                <Image
                  src="/images/rajwadi-products/Rajwadi Rajubhai Logo.png"
                  alt="Rajubhai's Rajwadi Logo"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-premium rounded-full opacity-20 animate-pulse-slow"></div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-heading font-bold text-rajwadi-brown mb-6"
          >
            Our <span className="text-gradient">Quality Promise</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-rajwadi-brown/70 max-w-3xl mx-auto"
          >
            Our legacy since <span className="font-bold text-rajwadi-primary">1993</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-premium mx-auto mt-6"
          ></motion.div>
        </div>
      </motion.div>

      {/* Introduction */}
      <div className="container-premium pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-premium p-8 md:p-12 text-center"
        >
          <p className="text-lg md:text-xl text-rajwadi-brown/80 leading-relaxed">
            At Rajubhai&apos;s Rajwadi, we are dedicated to manufacturing the finest <span className="font-semibold text-rajwadi-primary">Incense Sticks (Agarbatti)</span> and <span className="font-semibold text-rajwadi-primary">Tea</span>. Our promise is built on three key pillars: <span className="font-bold text-rajwadi-brown">Purity, Freshness, and Trust</span>.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container-premium pb-20">
        {/* For Our Incense Sticks Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="card-premium p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-rajwadi-brown">
                1. For Our Incense Sticks (Agarbatti)
              </h2>
            </div>

            <div className="space-y-6 ml-0 md:ml-16">
              {/* 100% Pure & Natural */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-semibold text-rajwadi-primary mb-3 flex items-center">
                  <span className="w-2 h-2 bg-rajwadi-primary rounded-full mr-3"></span>
                  100% Pure & Natural Fragrance
                </h3>
                <p className="text-rajwadi-brown/80 leading-relaxed ml-5">
                  We use only high-quality essential oils and natural aromatic ingredients. We strictly avoid harmful chemicals or cheap fillers, ensuring you receive a long-lasting, soothing, and authentic fragrance.
                </p>
              </motion.div>

              {/* Low-Smoke */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-semibold text-rajwadi-primary mb-3 flex items-center">
                  <span className="w-2 h-2 bg-rajwadi-primary rounded-full mr-3"></span>
                  Low-Smoke, Clean Burn
                </h3>
                <p className="text-rajwadi-brown/80 leading-relaxed ml-5">
                  Our sticks are crafted for a slow, steady burn that produces minimal smoke, creating a cleaner and more pleasant environment for your home or meditation space.
                </p>
              </motion.div>

              {/* Hand-Crafted */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-semibold text-rajwadi-primary mb-3 flex items-center">
                  <span className="w-2 h-2 bg-rajwadi-primary rounded-full mr-3"></span>
                  Hand-Crafted Assurance
                </h3>
                <p className="text-rajwadi-brown/80 leading-relaxed ml-5">
                  Every stick undergoes strict quality inspection to ensure uniform coating and superior durability, delivering perfection in every pack.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* For Our Tea Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="card-premium p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-rajwadi-brown">
                2. For Our Tea (Chai)
              </h2>
            </div>

            <div className="space-y-6 ml-0 md:ml-16">
              {/* Finest Sourced */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-semibold text-rajwadi-primary mb-3 flex items-center">
                  <span className="w-2 h-2 bg-rajwadi-primary rounded-full mr-3"></span>
                  Finest Sourced Tea Leaves
                </h3>
                <p className="text-rajwadi-brown/80 leading-relaxed ml-5">
                  Our tea is directly sourced from the best tea gardens in India. We select only the choicest leaves, guaranteeing unparalleled taste and aroma with every brew.
                </p>
              </motion.div>

              {/* Sealed-in Freshness */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-semibold text-rajwadi-primary mb-3 flex items-center">
                  <span className="w-2 h-2 bg-rajwadi-primary rounded-full mr-3"></span>
                  Sealed-in Freshness Guarantee
                </h3>
                <p className="text-rajwadi-brown/80 leading-relaxed ml-5">
                  We use advanced, hygienic packaging to lock in the freshness and flavor of the tea leaves. You are guaranteed the same rich, authentic taste from the first cup to the last.
                </p>
              </motion.div>

              {/* Purity & Safety */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-semibold text-rajwadi-primary mb-3 flex items-center">
                  <span className="w-2 h-2 bg-rajwadi-primary rounded-full mr-3"></span>
                  Purity & Safety
                </h3>
                <p className="text-rajwadi-brown/80 leading-relaxed ml-5">
                  Our tea is completely free from artificial colors and harmful preservatives. We adhere to the highest food safety (FSSAI) standards to ensure a healthy and safe product for you and your family.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Manufacturing & Trust Promise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="card-premium p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-rajwadi-brown">
                3. Our Manufacturing & Trust Promise
              </h2>
            </div>

            <div className="space-y-6 ml-0 md:ml-16">
              {/* Transparent Process */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-semibold text-rajwadi-primary mb-3 flex items-center">
                  <span className="w-2 h-2 bg-rajwadi-primary rounded-full mr-3"></span>
                  Transparent & Hygienic Process
                </h3>
                <p className="text-rajwadi-brown/80 leading-relaxed ml-5">
                  We maintain strict hygiene and quality control across our entire manufacturing facility, upholding transparency in all our processes.
                </p>
              </motion.div>

              {/* Customer Satisfaction */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-semibold text-rajwadi-primary mb-3 flex items-center">
                  <span className="w-2 h-2 bg-rajwadi-primary rounded-full mr-3"></span>
                  Your Satisfaction is Our Priority
                </h3>
                <p className="text-rajwadi-brown/80 leading-relaxed ml-5">
                  We stand behind our products. If you are not completely satisfied with the quality, we promise a hassle-free refund or replacement because your trust and happiness are what matter most to us.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="card-premium p-8 md:p-12 bg-gradient-to-br from-white/80 to-rajwadi-cream/50">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-rajwadi-brown mb-4">
              Experience the Difference
            </h3>
            <p className="text-lg text-rajwadi-brown/70 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Rajubhai&apos;s Rajwadi for their daily moments of peace and refreshment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/#menu"
                className="btn-premium text-lg px-8 py-4"
              >
                <span>Explore Our Products</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/contact"
                className="btn-secondary btn-premium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QualityPage;


