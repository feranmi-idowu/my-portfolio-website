import React from 'react';
import '../styles/About.css';
import images from './images.js'

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="about-image">
                    <img src={images.overPics} alt="About me" />
                </div>
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                        I'm Idowu, a passionate frontend developer with a keen eye for details. I specialize in creating beautiful, user-friendly websites.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
