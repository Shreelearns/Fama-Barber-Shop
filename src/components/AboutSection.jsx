// AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import human from "../assets/human.jpg";

const AboutSection = () => {
  return (
    <div className="bg-gray-900 pl-24" id="about">
      {/* Title Section */}
      <motion.div
        className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-xl text-gray-300 mb-2 cursor-pointer hover:text-blue-400 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          whileHover={{ color: "#3b82f6" }} // Tailwind blue-500 hex
        >
          Our Story
        </motion.h2>
        <motion.h1
          className="text-4xl font-bold text-white sm:text-5xl cursor-pointer hover:text-blue-500 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ color: "#2563eb" }} // Tailwind blue-600 hex
        >
          About Fama Barbershop
        </motion.h1>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image - with subtle rotate + glow on hover */}
          <motion.div
            className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              rotate: 2,
              boxShadow: "0 0 30px 8px rgba(96, 165, 250, 0.6)",
            }}
            tabIndex={0}
            role="img"
            aria-label="Fama Barbershop team"
          >
            <img
              src={human}
              alt="Fama Barbershop team"
              className="w-[70vh] h-[60vh] object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <MotionParagraph delay={0.4}>
              Established in 2018, Fama Barbershop has been the premier destination
              for men's grooming in Denton, TX. We specialize in precision
              haircuts, hot towel shaves, and beard grooming tailored to each
              client's unique style. Our mission is to deliver exceptional service
              in a welcoming environment that blends classic barbershop traditions
              with modern techniques.
            </MotionParagraph>

            <MotionParagraph delay={0.7}>
              We take immense pride in our meticulous attention to detail and
              personalized service, ensuring every client leaves not just satisfied,
              but confident. Our skilled barbers are trained in both classic
              techniques and contemporary trends, blending the best of old-school
              craftsmanship with modern styling. Whether it's a timeless taper, a
              bold fade, or a perfectly shaped beard, we tailor each cut to match
              your personality and lifestyle.
            </MotionParagraph>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Separate component for paragraphs to handle fade in with delay + color hover
const MotionParagraph = ({ children, delay }) => (
  <motion.p
    className="text-lg sm:text-xl text-gray-300 leading-relaxed pr-[18vh] cursor-pointer transition-colors duration-300"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    whileHover={{ color: "#60a5fa" }} // Tailwind blue-400 hex
  >
    {children}
  </motion.p>
);

export default AboutSection;
