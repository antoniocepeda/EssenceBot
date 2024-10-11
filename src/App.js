import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <HeroSection />
            <FeaturesSection />
            <TestimonialsCarousel />
            <Footer />
        </div>
    );
}

export default App;