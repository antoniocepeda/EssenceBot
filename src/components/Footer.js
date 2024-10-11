import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="company-info">
                    <h3>EssenceBot</h3>
                    <p>Bring lifelike robotics into your home—affordable, interactive, and fun to build.</p>
                </div>
                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div className="social-media">
                    <h4>Follow Us</h4>
                    <div className="icons">
                        <a href="#"><img src="/assets/images/icon-instagram.png" alt="Instagram" /></a>
                        <a href="#"><img src="/assets/images/icon-youtube.png" alt="YouTube" /></a>
                        <a href="#"><img src="/assets/images/icon-twitter.png" alt="Twitter" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 EssenceBot. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;