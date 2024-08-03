import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '/src/components/Navbar/Navbar'; // Import the Navbar component

import bsc1 from '/src/assets/2.brightsandcanada_images/2021-ColodialSeparation.jpg';
// import bsc2 from '/src/assets/2-brightsandcanada_images/2021-CombustorTestMobileUnit.mp4';
import bsc3 from '/src/assets/2.brightsandcanada_images/2021-InitiatorTest.jpg';
import bsc4 from '/src/assets/2.brightsandcanada_images/2022-AlgaeBloomTestingBrightSandCanadaTest2.jpg';
import bsc5 from '/src/assets/2.brightsandcanada_images/2022-BSL1000_1.jpg';

const BrightSandCanada = () => {
  return (
    <div className="flex">
      <Navbar /> {/* Add the Navbar component */}
      <div className="flex-grow flex flex-col justify-center items-center min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-gray-100 text-gray-900">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-montserrat text-left tracking-tighter">
              Bright Sand Canada
            </h1>
          </div>

          <div className="text-lg md:text-xl p-6 md:p-10 bg-white rounded-lg shadow-xl mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Pioneering Applied Research and Development
            </h2>
            <p className="font-roboto">
              Bright Sand Canada is dedicated to cutting-edge research
              and development in the field of waste management and
              resource recovery. Our innovative approach has led to
              numerous breakthroughs and patents, positioning us as a
              leader in the industry.
            </p>
          </div>

          <div className="p-6 md:p-10 bg-white rounded-lg shadow-xl mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Our Patents and Innovations
            </h2>
            <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto">
              <p>
                <span className="font-semibold">
                  Engineered Carbon:
                </span>{' '}
                US Patent 11,325,834 B2 - This innovation in
                engineered carbon laid the foundation for our future
                developments.
              </p>
              <p>
                <span className="font-semibold">
                  Advanced Reactor and Waste Conversion Process:
                </span>{' '}
                US Patent 11,098,251 B2 - Recognized for converting
                waste through chemical and thermal methods, with
                patents pending in multiple countries.
              </p>
              <p>
                <span className="font-semibold">
                  Multi-Fueled Isolated Pulse Initiator:
                </span>{' '}
                US Patent 11,325,834 B2 - Granted in November 2023,
                exemplifying our commitment to innovation and
                excellence.
              </p>
              <p>
                <span className="font-semibold">
                  Multi Autoclave Lateral Conversion Module:
                </span>{' '}
                Pending under US 2022/0126249A1 - Aims to enhance our
                waste conversion capabilities.
              </p>
              <p>
                <span className="font-semibold">
                  Aqueous Solutions for Algae, Methane, and Odor
                  Control:
                </span>{' '}
                Pending under US 2022/0401348 - Developed to control
                algae blooms, methane, and odor emissions from
                landfills.
              </p>
            </div>
            <div className="flex-1 md:p-8">
              <Carousel
                showThumbs={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                className="bg-white rounded-lg shadow-xl"
              >
                <div className="carousel-item">
                  <img
                    src={bsc1}
                    alt="Aqueous Solution Colloidal Separation"
                  />
                  <p className="legend">
                    Aqueous Solution Colloidal Separation (2021)
                  </p>
                </div>
                <div className="carousel-item">
                  <img src={bsc3} alt="Initiator Test" />
                  <p className="legend">Initiator Test (2021)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsc4} alt="Algae Bloom Testing" />
                  <p className="legend">Algae Bloom Testing (2022)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsc5} alt="BSL 1000" />
                  <p className="legend">BSL 1000 (2022)</p>
                </div>
              </Carousel>
            </div>
          </div>

          <div className="p-6 md:p-10 bg-white rounded-lg shadow-xl mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Current Projects
            </h2>
            <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto">
              <p>
                <span className="font-semibold">
                  Continuous MSW Processing System:
                </span>{' '}
                Developing a new system to handle large volumes of
                municipal solid waste efficiently and sustainably.
              </p>
              <p>
                <span className="font-semibold">
                  Plastic Waste Conversion to Nanocarbon and Hydrogen:
                </span>{' '}
                Developing a module to convert plastic waste into
                high-value nanocarbon particles and clean hydrogen.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-10 bg-white rounded-lg shadow-xl">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Our Commitment
            </h2>
            <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto">
              <p>
                At Bright Sand Canada, our commitment to
                sustainability, innovation, and excellence drives
                everything we do. We strive to lead the industry in
                waste management and resource recovery, creating
                solutions that contribute to a cleaner, more
                sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrightSandCanada;
