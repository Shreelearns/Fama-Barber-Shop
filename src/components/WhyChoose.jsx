import React from 'react';
import { motion } from 'framer-motion';

const WhyChoose = () => {
  return (
    <div className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 max-w-8xl" id="whychoose">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-30"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          animate={{
            background: [
              'linear-gradient(to top right, #2563eb, #7c3aed)',
              'linear-gradient(to top right, #7c3aed, #2563eb)',
              'linear-gradient(to top right, #2563eb, #7c3aed)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
        />
      </motion.div>

      {/* Header section */}
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2 
          className="font-semibold text-blue-400 text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          EXCEPTIONAL EXPERIENCE
        </motion.h2>
        <motion.p 
          className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text  bg-gradient-to-r from-blue-400 to-blue-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Why Choose Fama Barbershop
        </motion.p>
      </div>

      <motion.p 
        className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-300 sm:text-xl/8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        We don't just cut hair - we craft confidence and style that lasts
      </motion.p>
      
      {/* Cards section */}
      <motion.div 
        className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        
        
        <ReasonCard 
          title="Premium Experience"
          description="Luxury amenities and personalized service for every client."
          items={[
            "Hot towel treatments",
            "Premium grooming products",
            "Complimentary beverages",
            "Relaxing atmosphere"
          ]}
          icon={
            <StarIcon className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors" />
          }
          delay={0.4}
        />
        <ReasonCard 
          title="Master Barbers"
          description="Our team consists of award-winning barbers with 10+ years experience each."
          items={[
            "Certified grooming specialists",
            "Continuous training in latest trends",
            "Precision-focused techniques",
            "Artistic flair for unique styles"
          ]}
          icon={
            <ScissorsIcon className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors" />
          }
          delay={0.2}
        />
        
        <ReasonCard 
          title="Client Focused"
          description="Your satisfaction is our top priority from start to finish."
          items={[
            "Personalized consultations",
            "100% satisfaction guarantee",
            "Loyalty rewards program",
            "Flexible scheduling"
          ]}
          icon={
            <HeartIcon className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors" />
          }
          delay={0.6}
        />
      </motion.div>
    </div>
  );
};

const ReasonCard = ({ title, description, items, icon, delay = 0 }) => {
  return (
    <motion.div
      className="group relative rounded-3xl bg-gray-800 p-8 shadow-2xl ring-1 ring-gray-700 hover:ring-blue-500 transition-all duration-300 sm:p-10 m-4 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.3)'
      }}
    >
      {/* Animated background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-gray-700 group-hover:bg-blue-600 transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">
          {description}
        </p>
        
        <ul className="mt-8 space-y-4 text-white">
          {items.map((item, index) => (
            <motion.li 
              key={index}
              className="flex items-start gap-3"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <svg 
                className="h-6 w-6 flex-none text-blue-400 group-hover:text-white transition-colors duration-300 mt-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        
        <motion.a
          href="#"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </div>
    </motion.div>
  );
};

// Custom Icons
const ScissorsIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export default WhyChoose;