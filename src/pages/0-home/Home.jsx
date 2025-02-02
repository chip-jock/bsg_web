import React from 'react';
import heroimg from '/src/assets/heroimg.png';
import Hero from '/src/pages/0-home/Hero.jsx';

const Home = () => {
  return (
    <section
      className="relative h-screen flex justify-center items-center"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroimg}
          alt="Background image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-y-0 top-24 lg:top-64">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
