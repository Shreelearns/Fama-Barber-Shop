import React from "react";
import { motion } from "framer-motion";

const ContactUsPage = () => {
  return (
    <section className="relative bg-gray-900 py-24 px-6 sm:px-8 overflow-hidden" id="contact">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl animate-float2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Location card */}
        <motion.div
          className="md:w-1/5 bg-gradient-to-br from-purple-800 to-blue-900/80 rounded-xl p-6 shadow-lg flex flex-col justify-center items-center text-white"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-2">Our Location</h3>
          <p className="text-sm text-gray-100">123 Main Street</p>
          <p className="text-sm text-gray-100">Cityville, State 45678</p>
          <p className="mt-2 text-sm text-gray-200">contact@fama-barbershop.com</p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="md:w-4/5 bg-gray-800/80 backdrop-blur rounded-xl p-10 shadow-lg text-gray-300"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Let’s Connect
          </h2>
          <p className="mb-6 text-gray-400">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                className="bg-gray-700/60 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                className="bg-gray-700/60 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows="5"
                className="bg-gray-700/60 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsPage;
