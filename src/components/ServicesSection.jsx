// ServicesSection.jsx
import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <div
      className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 max-w-8xl"
      id="services"
    >
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-semibold text-blue-600 text-xl">Premium Grooming</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          Our Barber Services
        </p>
      </motion.div>

      <motion.p
        className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-200 sm:text-xl/8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Experience the art of traditional barbering with modern precision. Each
        service is crafted to perfection.
      </motion.p>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:grid-cols-3">
        {/* Haircut Services Card */}
        <ServiceCard
          title="Haircut Services"
          description="Precision cuts tailored to your unique style and personality."
          items={[
            "Classic Barber Cut",
            "Skin Fade & Design",
            "Executive Cut",
            "Kids Cut (12 & under)",
          ]}
          id="tier-haircuts"
        />

        {/* Beard Services Card */}
        <ServiceCard
          title="Beard Services"
          description="Expert beard grooming to keep you looking sharp."
          items={[
            "Precision Beard Trim",
            "Hot Towel Beard Treatment",
            "Beard & Mustache Design",
            "Beard Conditioning",
          ]}
          id="tier-beard"
        />

        {/* Premium Services Card */}
        <ServiceCard
          title="Premium Services"
          description="Our signature experiences for the discerning gentleman."
          items={[
            "The Royal Shave (Hot Towel)",
            "Head Shave & Massage",
            "The Works (Haircut + Beard + Facial)",
            "Luxury Scalp Treatment",
          ]}
          id="tier-premium"
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, items, id }) => {
  return (
    <motion.div
      className="relative rounded-3xl bg-gray-700 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10 m-4 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(11, 35, 213, 0.6)" }}
      tabIndex={0}
      role="button"
      aria-labelledby={id}
    >
      <h3 id={id} className="text-base/7 font-semibold text-blue-600">
        {title}
      </h3>
      <p className="mt-6 text-base/7 text-gray-300">{description}</p>
      <ul role="list" className="mt-8 space-y-3 text-sm/6 text-white sm:mt-10">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex gap-x-3 items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.svg
              className="h-6 w-5 flex-none text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.3, color: "#60a5fa" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
              />
            </motion.svg>
            {item}
          </motion.li>
        ))}
      </ul>
      <a
        href="#"
        aria-describedby={id}
        className="mt-8 block rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-800 p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:mt-10 transition-colors duration-300"
      >
        Book Now
      </a>
    </motion.div>
  );
};

export default ServicesSection;
