import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>If you'd like to get in touch, feel free to drop a message!</p>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
