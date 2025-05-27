import React from "react";
import { motion } from "framer-motion";

const BookAppointmentPage = () => {
  return (
    <section className="relative bg-gray-900 py-24 px-6 sm:px-8 overflow-hidden" id="book">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-400 rounded-full filter blur-3xl animate-float2"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center text-gray-100">
        <motion.h2
          className="text-base font-semibold tracking-wider mb-2 text-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          BOOK YOUR VISIT
        </motion.h2>
        <motion.h1
          className="text-4xl font-bold sm:text-5xl mb-4 bg-clip-text bg-gradient-to-r from-white to-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Book an Appointment
        </motion.h1>
        <motion.p
          className="max-w-xl mx-auto text-gray-200 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to elevate your style? Fill in the form below and we’ll confirm your appointment as soon as possible.
        </motion.p>

        {/* Appointment Form */}
        <motion.form
          className="mt-8 bg-blue-700/40 backdrop-blur rounded-xl p-8 shadow-lg text-left space-y-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-blue-100">Full Name</label>
            <input
              type="text"
              className="bg-blue-600/50 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-blue-100">Email</label>
            <input
              type="email"
              className="bg-blue-600/50 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-blue-100">Preferred Date & Time</label>
            <input
              type="datetime-local"
              className="bg-blue-600/50 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-blue-100">Message (Optional)</label>
            <textarea
              rows="4"
              className="bg-blue-600/50 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              placeholder="Any specific requests or notes..."
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Confirm Appointment
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookAppointmentPage;
