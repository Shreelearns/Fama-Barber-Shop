import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Helper to render stars for fractional rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <StarIconHalf key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
        );
      } else {
        stars.push(<StarIcon key={i} className="h-6 w-6 text-gray-600" />);
      }
    }
    return stars;
  };

  return (
    <div ref={ref} id="testimonials" className="relative overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 max-w-8xl mx-auto">
      {/* Animated background with parallax */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: yBg }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-40 mix-blend-overlay"></div>
        </div>
      </motion.div>

      {/* Header section */}
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.h2 
          className="font-semibold text-blue-400 text-xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          WHAT OUR CLIENTS SAY
        </motion.h2>
        <motion.p 
          className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Client Testimonials
          </span>
        </motion.p>
      </div>

      <motion.p 
        className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-300 sm:text-xl/8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Hear from those who've experienced the Fama difference firsthand
      </motion.p>

      {/* Overall Company Rating */}
      <motion.div
        className="mx-auto mt-10 flex items-center justify-center gap-3 text-yellow-400 text-lg font-semibold relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex gap-1"> <span>4.6</span>
          {renderStars(4.6)}
       </div>
        <span className="text-gray-300 text-base font-medium ml-2">(116+ reviews)</span>
      </motion.div>
      
      {/* Testimonial cards */}
      <motion.div 
        className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <TestimonialCard 
          name="Michael Rodriguez"
          role="Regular Client"
          quote="The best barbershop experience I've ever had. The attention to detail is unmatched and I always leave feeling like a million bucks."
          rating={5}
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&h=128&q=80"
          delay={0.2}
        />
        
        <TestimonialCard 
          name="Sarah Johnson"
          role="First-time Visitor"
          quote="Costly compared to other barbershops with better haircuts."
          rating={3}
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&h=128&q=80"
          delay={0.4}
          featured
        />
        
        <TestimonialCard 
          name="David Chen"
          role="Loyal Customer"
          quote="Consistently excellent service for over 3 years. They remember my preferences and always deliver top-notch results. Worth every penny."
          rating={5}
          image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&h=128&q=80"
          delay={0.6}
        />
      </motion.div>
    </div>
  );
};

const TestimonialCard = ({ name, role, quote, rating, image, delay = 0, featured = false }) => {
  return (
    <motion.div
      className={`group perspective-1000 ${featured ? "lg:mt-[-1.5rem]" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="relative h-[50vh] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden bg-gray-800 rounded-3xl p-8 shadow-2xl ring-1 ring-gray-700 hover:ring-blue-500 overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 via-blue-900/10 to-blue-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 blur-md opacity-75"></div>
                <img 
                  src={image} 
                  alt={name} 
                  className="relative w-16 h-16 rounded-full object-cover border-2 border-gray-700 group-hover:border-blue-500 transition-colors duration-300"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <p className="text-blue-400">{role}</p>
              </div>
            </div>
            
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon 
                  key={i} 
                  className={`h-6 w-6 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} 
                />
              ))}
            </div>
            
            <p className="mt-4 text-gray-300 italic flex-grow">"{quote}"</p>
            
            <div className="mt-8 pt-4 border-t border-gray-700 flex justify-between items-center">
              <div className="text-sm text-gray-400">Verified Customer</div>
              <div className="flex space-x-2">
                <TwitterIcon className="h-5 w-5 text-gray-500 hover:text-blue-400 transition-colors" />
                <InstagramIcon className="h-5 w-5 text-gray-500 hover:text-pink-500 transition-colors" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Back of card - flips on hover */}
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-blue-900/30 to-gray-900 rounded-3xl p-8 overflow-hidden">
          <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-10"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
            <div className="mb-6 p-3 rounded-full bg-blue-600/20 border border-blue-500/30">
              <HeartIcon className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-blue-300 mb-4">We appreciate your trust</p>
            <p className="text-gray-300 text-sm">Your satisfaction is our greatest reward. We look forward to serving you again soon.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Custom Icons
const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

// Half star icon for fractional ratings (yellow fill half)
const StarIconHalf = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor">
    <defs>
      <linearGradient id="halfGradient">
        <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="50%" stopColor="transparent" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="1.5" 
      fill="url(#halfGradient)"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
    />
  </svg>
);

const TwitterIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.64 4.077 4.077 0 001.804-2.238 8.19 8.19 0 01-2.605.977 4.107 4.107 0 00-7.004 3.74A11.652 11.652 0 013 4.794a4.096 4.096 0 001.27 5.475A4.073 4.073 0 012.8 9.71v.052a4.106 4.106 0 003.292 4.022 4.096 4.096 0 01-1.853.07 4.108 4.108 0 003.833 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm8.125 2a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" />
  </svg>
);

const HeartIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0l-.5.5-.5-.5a5.5 5.5 0 00-7.8 7.8l8.3 8.3 8.3-8.3a5.5 5.5 0 000-7.8z" />
  </svg>
);

export default Testimonials;
