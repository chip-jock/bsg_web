import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BrightSandIndustriesInc = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen py-32 px-4 md:px-8 lg:px-16 bg-gray-100 text-gray-900">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-montserrat text-left tracking-tighter">
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
            industrial, commercial, and agricultural waste processing.
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
              In collaboration with Bright Sand Canada Inc., focusing
              on converting waste into high-value nanocarbon particles
              and clean hydrogen.
            </p>
          </div>
        </div>

        {/* Photo Carousel */}
        {/* <div className="mt-10">
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            <div>
              <img src="image1.jpg" alt="Description 1" />
            </div>
            <div>
              <img src="image2.jpg" alt="Description 2" />
            </div>
            <div>
              <img src="image3.jpg" alt="Description 3" />
            </div>
          </Carousel>
        </div> */}

        <div className="p-6 md:p-10 bg-white rounded-lg shadow-xl mb-10">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
            Current Projects
          </h2>
          <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto">
            <p>
              <span className="font-semibold">
                South Pacific Initiatives:
              </span>{' '}
              Collaborating with Pacific Environmental Solutions on
              design-build systems for the Solomon Islands and other
              South Pacific islands, providing sustainable waste
              processing solutions.
            </p>
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
              that not only address current waste challenges but also
              contribute to a more sustainable and environmentally
              friendly world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrightSandIndustriesInc;
