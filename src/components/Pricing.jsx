import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState('hair');
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative bg-gray-900 overflow-hidden" id="pricing">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-30 animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-30 animate-float2"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-30 animate-float3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
        {/* Header section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold text-blue-400 tracking-wider">
            PREMIUM GROOMING
          </h2>
          <motion.h1 
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Services & Pricing
          </motion.h1>
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Invest in your appearance with our expertly crafted grooming services
          </motion.p>
        </motion.div>

        {/* Service category tabs */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex rounded-xl bg-gray-800 p-1 border border-gray-700">
            {['hair', 'beard', 'premium'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 text-sm font-medium rounded-lg relative ${
                  selectedTab === tab
                    ? 'text-white bg-gray-700 shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {selectedTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2 capitalize">
                  {tab === 'hair' }
                  {tab === 'beard' }
                  {tab === 'premium' }
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {services[selectedTab].map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 + 0.3 }
                }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative"
              >
                {/* Card glow effect */}
                {hoveredCard === service.id && (
                  <motion.div 
                    className="absolute inset-0 bg-blue-600 rounded-2xl filter blur-xl opacity-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <div className={`relative h-full rounded-2xl bg-gray-800 overflow-hidden border ${
                  service.featured 
                    ? 'border-blue-500 shadow-xl shadow-blue-500/20' 
                    : 'border-gray-700 hover:border-blue-400'
                } transition-all duration-300`}>
                  {/* Featured badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      POPULAR
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${
                        service.featured 
                          ? 'bg-blue-600/20 text-blue-400' 
                          : 'bg-gray-700 text-gray-300'
                      }`}>
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>

                    <div className="mt-6">
                      <p className="text-gray-300">{service.description}</p>
                    </div>

                    <div className="mt-8 flex items-end">
                      <span className="text-4xl font-bold text-white">${service.price}</span>
                      {service.originalPrice && (
                        <span className="ml-2 text-lg text-gray-400 line-through">${service.originalPrice}</span>
                      )}
                      {service.duration && (
                        <span className="ml-auto text-gray-400">{service.duration} min</span>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ 
                        y: -2,
                        boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transition-all ${
                        service.featured
                          ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg'
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      Book Now
                    </motion.button>

                    {service.benefits && (
                      <div className="mt-8 pt-6 border-t border-gray-700/50">
                        <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                          Includes
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center text-gray-300">
                              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>


      </div>
    </div>
  );
};

// Services data
const services = {
  hair: [
    {
      id: 1,
      title: "Classic Cut",
      description: "Precision haircut with clipper and scissor work for a clean, timeless look",
      price: 45,
      originalPrice: 55,
      duration: 45,
      benefits: [
        "Haircut with styling",
        "Neck shave",
        "Hot towel treatment",
        "Product application"
      ],
      featured: false
    },
    {
      id: 2,
      title: "Signature Cut",
      description: "Our most popular haircut with detailed styling and premium finishing",
      price: 65,
      duration: 60,
      benefits: [
        "Detailed consultation",
        "Precision haircut",
        "Hot towel treatment",
        "Scalp massage",
        "Premium styling products"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Buzz Cut",
      description: "Simple, clean buzz cut with fade options and neck cleanup",
      price: 35,
      duration: 30,
      benefits: [
        "Clipper cut",
        "Neck cleanup",
        "Light styling"
      ],
      featured: false
    }
  ],
  beard: [
    {
      id: 4,
      title: "Beard Trim",
      description: "Precision beard shaping and trimming to maintain your style",
      price: 30,
      duration: 30,
      benefits: [
        "Beard shaping",
        "Neckline cleanup",
        "Hot towel treatment",
        "Beard oil application"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Royal Beard",
      description: "Complete beard service with detailed sculpting and conditioning",
      price: 50,
      duration: 45,
      benefits: [
        "Detailed sculpting",
        "Hot towel treatment",
        "Beard mask treatment",
        "Premium beard balm",
        "Detailed styling"
      ],
      featured: true
    },
    {
      id: 6,
      title: "Shave Service",
      description: "Traditional straight razor shave for a smooth, clean finish",
      price: 40,
      duration: 40,
      benefits: [
        "Hot towel prep",
        "Premium shave cream",
        "Straight razor shave",
        "After-shave treatment"
      ],
      featured: false
    }
  ],
  premium: [
    {
      id: 7,
      title: "The Executive",
      description: "Complete grooming package for the discerning gentleman",
      price: 110,
      originalPrice: 130,
      duration: 90,
      benefits: [
        "Signature haircut",
        "Royal beard service",
        "Hot towel treatment",
        "Scalp massage",
        "Facial moisturizing",
        "All premium products"
      ],
      featured: true
    },
    {
      id: 8,
      title: "Hair & Beard",
      description: "Combination haircut and beard service for complete styling",
      price: 85,
      duration: 75,
      benefits: [
        "Signature haircut",
        "Beard trim & shape",
        "Hot towel treatment",
        "Product application"
      ],
      featured: false
    },
    {
      id: 9,
      title: "The Works",
      description: "Ultimate grooming experience with all our premium services",
      price: 150,
      duration: 120,
      benefits: [
        "Signature haircut",
        "Royal beard service",
        "Traditional shave",
        "Facial treatment",
        "Scalp massage",
        "All premium products",
        "Complimentary drink"
      ],
      featured: false
    }
  ]
};

export default Pricing;