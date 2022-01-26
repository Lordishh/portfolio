import React from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServiceSection from '../components/ServiceSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => (
  <div>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ProjectsSection />
    <TestimonialsSection />
  </div>
);

export default Home;
