import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What are your opening hours?",
    answer: "We’re open from 9 AM to 8 PM, Monday to Saturday. Sundays we take a well-deserved break!"
  },
  {
    question: "Do I need to book an appointment?",
    answer: "We welcome walk-ins, but booking ahead guarantees your spot."
  },
  {
    question: "Do you offer styling for special events?",
    answer: "Yes! From weddings to parties, we’ll craft the perfect look for your big day."
  },
  {
    question: "Are your products eco-friendly?",
    answer: "Yes, we use high-quality products that are kind to your hair and the planet."
  },
  {
    question: "Where are you located?",
    answer: "We’re in the heart of the city at 123 Main Street, Downtown. Come visit!"
  }
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gray-900 py-24 px-6 sm:px-8 overflow-hidden" id="faqs">
      {/* Floating background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-float1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-float2"></div>
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          className="text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Curious? We’ve got answers. Here’s what you need to know about your experience at Fama Barber Shop.
        </motion.p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-r from-blue-500/40 to-purple-500/40 p-1 rounded-xl transform transition-transform hover:scale-105 shadow-lg`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{  duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/80 backdrop-blur rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left text-white font-semibold"
                >
                  <div className="flex items-center gap-3">
                    <span>{faq.question}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      className="p-4 text-gray-300"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
