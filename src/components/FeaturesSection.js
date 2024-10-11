import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
    return (
        <div className="features-section">
            <div className="feature">
                <div className="feature-image">
                    <img src="/assets/images/bot-curious.png" alt="Bot exploring" />
                </div>
                <div className="feature-text">
                    <h2>Curiosity in Motion</h2>
                    <p>The bot’s sensors allow it to explore its environment, react to sounds, and learn from its surroundings. Experience lifelike exploration that brings STEM concepts to life.</p>
                </div>
            </div>
            <div className="feature">
                <div className="feature-text">
                    <h2>Reacts to Your Environment</h2>
                    <p>With integrated light and sound sensors, the bot displays behaviors like fear and excitement—scurrying into dark corners or moving towards interaction.</p>
                </div>
                <div className="feature-image">
                    <img src="/assets/images/bot-reacting.png" alt="Bot reacting to environment" />
                </div>
            </div>
            <div className="feature">
                <div className="feature-image">
                    <img src="/assets/images/bot-human-reaction.png" alt="Bot with human-like reactions" />
                </div>
                <div className="feature-text">
                    <h2>Human-Like Reactions</h2>
                    <p>Whether it's curiosity, caution, or fear, the bot's human-like traits create an emotional connection, making it more than just a machine—it’s almost like a companion.</p>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;