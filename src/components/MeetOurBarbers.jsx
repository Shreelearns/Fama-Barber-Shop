import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MeetOurBarbers = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Barber data
  const barbers = [
    {
      id: 1,
      name: "Marcus Johnson",
      role: "Master Barber / Owner",
      experience: "15+ years",
      specialty: "Precision Fades & Classic Cuts",
      bio: "Marcus founded Fama with a vision for luxury grooming. His meticulous attention to detail sets the standard for our shop.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      skills: ["Fade Specialist", "Beard Sculpting", "Traditional Shaves"]
    },
    {
      id: 2,
      name: "Carlos Mendez",
      role: "Senior Stylist",
      experience: "12 years",
      specialty: "Modern Styles & Creative Designs",
      bio: "Carlos brings artistic flair to every cut, specializing in contemporary styles and personalized looks.",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      skills: ["Creative Designs", "Hair Coloring", "Texture Cutting"]
    },
    {
      id: 3,
      name: "Darnell Williams",
      role: "Master Barber",
      experience: "10 years",
      specialty: "Beard Grooming & Hot Towel Shaves",
      bio: "Darnell's expertise in beard maintenance and traditional shaving techniques is unmatched in the city.",
      image: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      skills: ["Beard Sculpting", "Straight Razor", "Skin Care"]
    }
  ];

  return (
    <div className="relative bg-gray-900 overflow-hidden py-24 px-6 sm:px-8" id="barbers">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl animate-float2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold text-blue-400 tracking-wider mb-2">
            OUR TEAM
          </h2>
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Meet Our Master Barbers
          </motion.h1>
          <motion.p 
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get to know the skilled artisans behind your perfect cut
          </motion.p>
        </motion.div>

        {/* Barber Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((barber) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: barber.id * 0.2 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setHoveredCard(barber.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card glow effect */}
              {hoveredCard === barber.id && (
                <motion.div 
                  className="absolute inset-0 bg-blue-600 rounded-2xl filter blur-xl opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <div className="relative h-full rounded-2xl bg-gray-800 overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300">
                {/* Barber Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: hoveredCard === barber.id ? 1.05 : 1 
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Experience badge */}
                  <div className="absolute bottom-4 left-4 bg-blue-600/90 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {barber.experience} Experience
                  </div>
                </div>
                
                {/* Barber Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">{barber.name}</h3>
                      <p className="text-blue-400">{barber.role}</p>
                    </div>
                    {/* Specialty badge */}
                    <div className="bg-gray-700/80 text-white text-xs font-medium px-2 py-1 rounded">
                      {barber.specialty}
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-300">{barber.bio}</p>
                  
                  {/* Skills */}
                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {barber.skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          className="text-xs bg-gray-700/50 text-white px-3 py-1 rounded-full"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(59, 130, 246, 0.5)'
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  
                </div>
                
                {/* Hover effect - floating social icons */}
                <AnimatePresence>
                  {hoveredCard === barber.id && (
                    <motion.div
                      className="absolute top-4 right-4 flex flex-col space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a 
                        href="#" 
                        className="p-2 bg-gray-800/90 rounded-full text-white hover:bg-blue-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <InstagramIcon className="h-5 w-5" />
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className="p-2 bg-gray-800/90 rounded-full text-white hover:bg-blue-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <TwitterIcon className="h-5 w-5" />
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          
        </motion.div>
      </div>
    </div>
  );
};

// Icon components
const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

export default MeetOurBarbers;