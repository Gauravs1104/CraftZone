import React from 'react';

const AboutPage = () => {
  return (
    <section>
      <h2>About Our Craft Journey</h2>
      <p>We are passionate about creating unique and high-quality handcrafted items. Our journey began with a love for traditional art forms and a desire to bring beauty into everyday life.</p>
      
      <h3>Our Story: How It All Began</h3>
      <p>My name is [Your Name], and crafting has been a part of my life since [mention early age/event]. I remember spending hours [describe early crafting experience, e.g., sketching, knitting, painting]. This passion grew over the years, leading me to explore various art forms and techniques.</p>
      <p>The idea for [Your Craft Store Name] sparked when [describe the moment/inspiration, e.g., I realized there was a need for unique, handmade gifts; I wanted to share my creations with a wider audience]. It started as a small hobby in [year], creating pieces for friends and family, and slowly blossomed into this wonderful venture.</p>
      <p>Each piece you find here is a reflection of my dedication and love for crafting. I meticulously select materials and pour my heart into every design, ensuring that it brings joy and beauty to your home.</p>
      
      {/* Placeholder for personal images */}
      <div style={{ margin: '30px 0', textAlign: 'center' }}>
        {/* You can insert your personal images here, e.g.: */}
        {/* <img src="/images/your-crafting-space.jpg" alt="My Crafting Space" style={{ maxWidth: '100%', height: 'auto', margin: '10px' }} /> */}
        {/* <img src="/images/first-creation.jpg" alt="My First Creation" style={{ maxWidth: '100%', height: 'auto', margin: '10px' }} /> */}
        <p><i>(Insert personal images here, e.g., of your crafting space, early creations, or yourself crafting)</i></p>
      </div>

      <h3>Our Philosophy</h3>
      <p>We believe in the power of handmade items to connect people and tell stories. In a world of mass production, we stand for authenticity, quality, and the unique touch that only human hands can provide. We are committed to sustainable practices and supporting local communities whenever possible.</p>
      <p>Thank you for being a part of our journey and for supporting the art of handmade craftsmanship!</p>
    </section>
  );
};

export default AboutPage;