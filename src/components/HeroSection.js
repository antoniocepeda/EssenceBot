import React from 'react';
import './HeroSection.css';
import botImage from '../assets/images/Bot1.svg'; // Importing the image directly

function HeroSection() {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Meet EssenceBot! The $50 Bot That Mimics Human Behavior</h1>
                    <p>Bring lifelike robotics into your home—affordable, interactive, and fun to build.</p>
                    <button className="cta-button">Learn More</button>
                </div>
                <div className="hero-image">
                    <img src={botImage} alt="Bot in action" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
