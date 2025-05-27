// components/Footer.js
import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: 'Main',
      links: [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'whychoose', label: 'Why Choose Us' },
      ],
    },
    {
      title: 'Explore',
      links: [
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'barbers', label: 'Our Barbers' },
      ],
    },
    {
      title: 'Get in Touch',
      links: [
        { id: 'location', label: 'Location' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'contact', label: 'Contact Us' },
        { id: 'book', label: 'Book Appointment' },
      ],
    },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-900 to-gray-900 text-gray-300 py-16 px-8 sm:px-16 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 tracking-wide mb-3">
            Fama Barber Shop
          </h1>
          <p className="text-gray-400 text-center md:text-left text-base leading-relaxed max-w-xs">
            Mastering style and precision since day one.
          </p>
        </div>

        {/* Navigation columns */}
        {sections.map(({ title, links }) => (
          <div key={title}>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">{title}</h3>
            <nav className="flex flex-col space-y-3">
              {links.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs tracking-wide select-text">
        &copy; {new Date().getFullYear()} Fama Barber Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
