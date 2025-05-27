// App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import GallerySection from './components/GallerySection';
import MeetOurBarbers from './components/MeetOurBarbers';
import LocationSection from './components/LocationSection';
import Faqs from './components/Faqs';
import ContactUsPage from './components/ContactUsPage';
import BookAppointmentPage from './components/BookAppointmentPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <GallerySection />
      <MeetOurBarbers />
      <LocationSection />
      <Faqs />
      <ContactUsPage />
      <BookAppointmentPage />
      <Footer />
    </div>
  );
};

export default App;