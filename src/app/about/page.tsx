'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage: React.FC = () => {
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
            Our <span className="text-gradient">Story</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-rajwadi-brown/70 max-w-2xl mx-auto"
          >
            A Legacy Reborn Through Passion and Precision
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-premium mx-auto mt-6"
          ></motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container-premium pb-20">
        {/* The Foundation Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="card-premium p-8 md:p-12">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold text-xl">1993</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-rajwadi-brown mb-4">
                  The Foundation: Hand-Packed Dreams (1993)
                </h2>
                <div className="w-16 h-1 bg-gradient-premium mb-6"></div>
              </div>
            </div>
            
            <div className="ml-0 md:ml-16 space-y-4">
              <p className="text-lg text-rajwadi-brown/80 leading-relaxed">
                Our company&apos;s journey began in <span className="font-semibold text-rajwadi-primary">1993 in Gujarat</span> with a simple, powerful belief: that good tea should reach every home. We didn&apos;t start with large-scale factories; we began with loose tea. Soon, to ensure consistent quality, we personally transitioned to filling small tea packets by hand.
              </p>
              <p className="text-lg text-rajwadi-brown/80 leading-relaxed">
                Our founder&apos;s dedication was absolute—personally traveling to villages to distribute these packets to traders. Hand-packing every order and reaching every village established the core value of our brand: <span className="font-semibold text-rajwadi-brown">personal trust and unwavering purity</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Pause Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="card-premium p-8 md:p-12">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-rajwadi-brown mb-4">
                  The Pause, The Kirana Shop, and The Learning
                </h2>
                <div className="w-16 h-1 bg-gradient-premium mb-6"></div>
              </div>
            </div>
            
            <div className="ml-0 md:ml-16 space-y-4">
              <p className="text-lg text-rajwadi-brown/80 leading-relaxed">
                The hard work initially paid off, and our business spread across Gujarat. However, the path soon met a major challenge. Due to health issues, the large-scale operation had to be temporarily paused. During this time, we opened a small Kirana shop in Rajkot.
              </p>
              <p className="text-lg text-rajwadi-brown/80 leading-relaxed">
                This difficult phase proved invaluable, teaching us about the customer&apos;s needs and the true market demand from the ground up—knowledge that guides our brand today.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Comeback Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="card-premium p-8 md:p-12">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-rajwadi-brown mb-4">
                  The Comeback: Blending Experience with Innovation
                </h2>
                <div className="w-16 h-1 bg-gradient-premium mb-6"></div>
              </div>
            </div>
            
            <div className="ml-0 md:ml-16 space-y-6">
              <p className="text-lg text-rajwadi-brown/80 leading-relaxed">
                A few years ago, the family dream was powerfully reignited. Our son, armed with his Engineering education and a fresh, modern perspective, decided to revive the family legacy. This new beginning is a powerful blend of:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gradient-premium rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-rajwadi-brown">
                      The Founder&apos;s Legacy
                    </h3>
                  </div>
                  <p className="text-rajwadi-brown/80 leading-relaxed">
                    Three decades of seasoned experience and trust.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gradient-premium rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-rajwadi-brown">
                      The Son&apos;s Innovation
                    </h3>
                  </div>
                  <p className="text-rajwadi-brown/80 leading-relaxed">
                    Technical talent, modern vision, and youthful energy.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Deep Dive into Quality Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="card-premium p-8 md:p-12">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-rajwadi-brown mb-4">
                  The Deep Dive into Quality: From Siliguri to Darjeeling
                </h2>
                <div className="w-16 h-1 bg-gradient-premium mb-6"></div>
              </div>
            </div>
            
            <div className="ml-0 md:ml-16 space-y-4">
              <p className="text-lg text-rajwadi-brown/80 leading-relaxed">
                The commitment of the new generation was not just in packaging but in absolute quality. To honor and enhance the brand&apos;s promise, our son undertook rigorous research:
              </p>
              
              <div className="space-y-4 mt-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-white/50 rounded-xl p-5 hover:bg-white/70 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-rajwadi-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-rajwadi-brown/80 leading-relaxed flex-1">
                    He traveled to key tea hubs like <span className="font-semibold text-rajwadi-primary">Siliguri and Darjeeling</span>, immersing himself in the source of the world&apos;s best teas.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start space-x-4 bg-white/50 rounded-xl p-5 hover:bg-white/70 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-rajwadi-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-rajwadi-brown/80 leading-relaxed flex-1">
                    He joined various specialized classes to gain a deep, technical understanding of <span className="font-semibold text-rajwadi-brown">blending, processing, and world-class quality control</span>.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dual Promise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <div className="card-premium p-8 md:p-12">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-rajwadi-brown mb-4">
                  The Dual Promise: Tea, Tranquility, and Expansion
                </h2>
                <div className="w-16 h-1 bg-gradient-premium mb-6"></div>
              </div>
            </div>
            
            <div className="ml-0 md:ml-16 space-y-6">
              <p className="text-lg text-rajwadi-brown/80 leading-relaxed">
                With this new blend of wisdom and expertise, we expanded our offerings:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/70 to-rajwadi-cream/30 rounded-xl p-6 hover:shadow-premium transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-premium rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-rajwadi-brown">
                      Our Signature Tea
                    </h3>
                  </div>
                  <p className="text-rajwadi-brown/80 leading-relaxed">
                    The same trusted taste from 1993, now refined with research-backed quality control and hygienic packaging.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-white/70 to-rajwadi-cream/30 rounded-xl p-6 hover:shadow-premium transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-premium rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-rajwadi-brown">
                      Our Incense Sticks (Agarbatti)
                    </h3>
                  </div>
                  <p className="text-rajwadi-brown/80 leading-relaxed">
                    Driven by the new generation&apos;s increased capacity, we launched our Agarbatti manufacturing in <span className="font-semibold text-rajwadi-primary">2021</span> to bring peace and sanctity to your home. Now, you can start your day with our refreshing tea and end it with our pure fragrance.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Continuous Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="card-premium p-8 md:p-12 bg-gradient-to-br from-white/80 to-rajwadi-cream/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-rajwadi-brown mb-4">
                Our Story of Continuous Growth
              </h2>
              <div className="w-24 h-1 bg-gradient-premium mx-auto mb-6"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-rajwadi-brown/80 leading-relaxed text-center">
                Fueled by the combined strength of a father&apos;s experience and a son&apos;s innovation, and our relentless commitment to quality:
              </p>
              <p className="text-xl text-rajwadi-brown leading-relaxed text-center font-semibold">
                Today, our business is achieving new levels of growth year after year. The secret to our success lies in your trust and our continuous drive to move forward.
              </p>
              <p className="text-2xl text-rajwadi-primary leading-relaxed text-center font-heading font-bold mt-8">
                We are not just selling trust; we are shaping the taste of the future.
              </p>
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
          <div className="card-premium p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-rajwadi-brown mb-4">
              Be Part of Our Journey
            </h3>
            <p className="text-lg text-rajwadi-brown/70 mb-8 max-w-2xl mx-auto">
              Experience the legacy of three decades, now enhanced with modern quality and innovation.
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
                href="/quality"
                className="btn-secondary btn-premium"
              >
                Our Quality Promise
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

export default AboutPage;

