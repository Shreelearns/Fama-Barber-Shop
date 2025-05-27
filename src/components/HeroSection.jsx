// HeroSection.jsx
import React from 'react';
import hero from "../assets/hero.webp";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 overflow-hidden" id="hero">
      <div className="mx-auto max-w-8xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pl-24 lg:py-40">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content - Left Side */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center lg:text-left">
              <motion.h3 
                className="text-xl font-medium text-blue-600 sm:text-xl mb-4 cursor-pointer transition-colors duration-300 hover:text-blue-400 hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                FAMA Barber Services in Denton
              </motion.h3>
              
              <motion.h1 
                className="text-4xl font-bold text-white sm:text-6xl lg:text-6xl mb-4 leading-tight cursor-pointer transition-all duration-300 hover:text-blue-500 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Classic Cuts, <span className="block">Modern Style</span>
              </motion.h1>
              
              <motion.h1 
                className="text-4xl font-bold text-blue-600 sm:text-4xl mb-8 cursor-pointer transition-colors duration-300 hover:text-blue-400 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Fama Barber Shop
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-8 text-gray-300 sm:text-xl mb-12 cursor-pointer transition-colors duration-300 hover:text-gray-100 hover:scale-[1.02]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                At  Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <button className="w-full sm:w-auto border-2 border-white hover:bg-blue-800 transition-all duration-300 rounded-lg transform hover:scale-105">
                  <a href="#" className="text-lg font-semibold text-white flex p-4 gap-3 justify-center items-center">
                    <i className="fa-solid fa-scissors text-blue-300"></i>
                    <p>Our services</p>
                  </a>
                </button>
                <button className="w-full sm:w-auto border-2 border-white bg-blue-600 hover:bg-blue-800 transition-all duration-300 rounded-lg transform hover:scale-105">
                  <a href="#" className="text-lg font-semibold text-white flex p-4 gap-3 justify-center items-center">
                    <i className="fa-solid fa-calendar text-white"></i>
                    <p>Book Now</p>
                  </a>
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img 
              className="w-full max-w-2xl rounded-xl shadow-2xl ring-2 ring-blue-500/20 hover:ring-blue-500/50 transition-all duration-500"
              src={hero} 
              alt="Professional barber at work" 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
