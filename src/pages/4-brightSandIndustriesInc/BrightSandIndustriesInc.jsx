import React from 'react';
import Navbar from '/src/components/Navbar/Navbar.jsx'; // Import the Navbar component
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BsiiImages from '/src/components/4-bsii-images/BsiiImages.jsx';

const BrightSandIndustriesInc = () => {
  return (
    <div className="flex">
      <Navbar /> {/* Add the Navbar component */}
      <div className="flex-grow flex flex-col justify-center items-center min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-gray-100 text-gray-900">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-changa text-left tracking-tighter">
              Bright Sand Industries Inc.
            </h1>
          </div>

          <div className="text-lg md:text-xl p-6 md:p-10 bg-white rounded-lg shadow-xl mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Developing Cutting-Edge Equipment and Systems
            </h2>
            <p className="font-roboto">
              Established in 2023 in Detroit, Michigan, Bright Sand
              Industries Inc. develops advanced equipment and systems
              necessary for sustainable waste management and resource
              recovery. Our focus is on creating innovative solutions
              that address the diverse needs of municipal, medical,
              industrial, commercial, and agricultural waste
              processing.
            </p>
          </div>

          <div className="p-6 md:p-10 bg-white rounded-lg shadow-xl mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Our Innovations
            </h2>
            <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto">
              <p>
                <span className="font-semibold">
                  Continuous Feed Reactor for Waste Processing:
                </span>{' '}
                Developing a state-of-the-art reactor designed to
                process various types of waste, reducing environmental
                impact.
              </p>
              <p>
                <span className="font-semibold">
                  Advanced Nano Deposition Particle Module:
                </span>{' '}
                In collaboration with Bright Sand Canada Inc.,
                focusing on converting waste into high-value
                nanocarbon particles and clean hydrogen.
              </p>
            </div>
          </div>

          {/* Photo Carousel */}
          <div className="flex flex-col">
            <div className="text-lg md:text-xl p-6 md:p-10 bg-white rounded-lg shadow-xl mb-12 flex-1">
              <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
                Current Projects
              </h2>
              <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto">
                <p>
                  <span className="font-semibold">
                    South Pacific Initiatives:
                  </span>{' '}
                  Collaborating with Pacific Environmental Solutions
                  on design-build systems for the Solomon Islands and
                  other South Pacific islands, providing sustainable
                  waste processing solutions.
                </p>
                <div className="flex-1 md:p-8">
                  <BsiiImages />
                  {/* <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    autoPlay
                    className="bg-white rounded-lg shadow-xl"
                  >
                    <div className="carousel-item">
                      <img src={bsii0} alt="Project Image 1" />
                    </div>
                    <div className="carousel-item">
                      <img src={bsii1} alt="Project Image 2" />
                    </div>
                    <div className="carousel-item">
                      <img src={bsii2} alt="Project Image 3" />
                    </div>
                    <div className="carousel-item">
                      <img src={bsii3} alt="Project Image 4" />
                    </div>
                    <div className="carousel-item">
                      <img src={bsii4} alt="Project Image 5" />
                    </div>
                    <div className="carousel-item">
                      <img src={bsii5} alt="Project Image 6" />
                    </div>
                    <div className="carousel-item">
                      <img src={bsii6} alt="Project Image 7" />
                    </div>
                  </Carousel> */}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 bg-white rounded-lg shadow-xl mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Patent Protection and Development
            </h2>
            <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto">
              <p>
                Applying for patent protection for our continuous feed
                reactor and other technologies, ensuring we remain at
                the forefront of the industry with sustainable and
                efficient systems.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-10 bg-white rounded-lg shadow-xl">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Our Commitment
            </h2>
            <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto">
              <p>
                At Bright Sand Industries Inc., our goal is to develop
                equipment and systems that drive the future of waste
                management. We are dedicated to creating technologies
                that not only address current waste challenges but
                also contribute to a more sustainable and
                environmentally friendly world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrightSandIndustriesInc;
