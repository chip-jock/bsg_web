import React from 'react';
import heroimg from '/src/assets/heroimg.png';

const Hero = () => {
  return (
    <section
      className="relative h-screen flex justify-center"
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
      <div className="relative z-10 text-gray-100 bg-gray-50 font-roboto font-light flex flex-row bg-opacity-50 tracking-tight pt-24">
        <div className="md:w-1/4"></div>
        <div className="md:w-1/2 md:h-1/2">
          <p className="text-xl md:text-2xl text-gray-700 text-justify bg-gray-100 bg-opacity-75 p-8 mx-16 mt-32 md:mt-12 lg:mt-24 rounded-md">
            Bright Sand Group of Companies was formed to develop,
            design, and build patented systems, focusing on converting
            waste-to-energy/products. Our primary mission is to
            develop processes and equipment that can positively reduce
            our collective footprint on the Earth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
