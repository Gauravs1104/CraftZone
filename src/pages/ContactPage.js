import React from 'react';
import ContactForm from '../components/ContactForm';
import '../components/ContactForm.css';

const ContactPage = () => {
  return (
    <section id="contact-section" className="contact-page-section">
      <h2>Contact Us</h2>
      <p>Have a question or want to place an order? Send us a message!</p>
      <ContactForm />
      <div className="map-container responsive-map-container">
        <h3>Find Us Here</h3>
        {/* Placeholder for Google Map Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d261.05961400914174!2d85.4970221586818!3d26.047981949364264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDAyJzUyLjkiTiA4NcKwMjknNDkuNyJF!5e1!3m2!1sen!2sin!4v1755246122229!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;