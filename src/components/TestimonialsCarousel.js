import React from 'react';
import './TestimonialsCarousel.css';

function TestimonialsCarousel() {
    return (
        <div className="testimonials-carousel">
            <h2>What People Are Saying</h2>
            <div className="carousel">
                <div className="testimonial">
                    <p>“The bot is not only educational but super fun to play with!”</p>
                    <span>- Alex, Robotics Enthusiast</span>
                </div>
                <div className="testimonial">
                    <p>“It reacts just like a pet, and it’s amazing for learning STEM concepts!”</p>
                    <span>- Jamie, Parent</span>
                </div>
                <div className="testimonial">
                    <p>“This bot makes STEM education so much more accessible and enjoyable.”</p>
                    <span>- Taylor, Teacher</span>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsCarousel;