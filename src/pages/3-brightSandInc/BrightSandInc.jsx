import React from 'react';
import Navbar from '/src/components/Navbar/Navbar.jsx'; // Import the Navbar component
import BsiImages from '/src/components/3-bsi-images/BsiImages.jsx';

const BrightSandInc = () => {
  return (
    <div className="flex">
      <Navbar /> {/* Add the Navbar component */}
      <div className="flex-grow flex flex-col justify-center items-center min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-gray-100 text-gray-900">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-changa text-left tracking-tighter">
              Bright Sand Inc.
            </h1>
          </div>

          <div className="text-lg md:text-xl p-6 md:p-10 bg-white rounded-lg shadow-xl mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Innovating Intellectual Property for a Sustainable
              Future
            </h2>
            <p className="font-roboto">
              Bright Sand Inc. is dedicated to developing and holding
              intellectual property that drives innovation and
              sustainability in waste management and resource
              recovery. With five US patents granted and multiple
              patents pending or in development, we are at the
              forefront of technological advancements in our field.
            </p>
          </div>

          <div className="p-6 md:p-10 bg-white rounded-lg shadow-xl mb-10 flex flex-col md:flex-row">
            <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto md:w-1/2 align-middle">
              <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
                Our Patents and Innovations
              </h2>
              <p>
                <span className="font-semibold">
                  Apparatus and Method for Producing Activated Carbon:
                </span>{' '}
                US Patent #8,715,582 - An innovative approach to
                producing activated carbon.
              </p>
              <p>
                <span className="font-semibold">
                  Reactor for the Advanced Thermal Chemical Conversion
                  of Municipal Solid Waste:
                </span>{' '}
                US Patent #11,098,251 B2 - Enhances efficiency and
                sustainability in waste conversion.
              </p>
              <p>
                <span className="font-semibold">
                  Process to Produce Engineered Carbon:
                </span>{' '}
                US Patent #11,325,834 B2 - Pending patents in multiple
                countries, aims to reduce reliance on fertilizers and
                restore soil carbon.
              </p>
              <p>
                <span className="font-semibold">
                  Advanced Thermal Chemical Conversion Process of
                  Municipal Solid Waste:
                </span>{' '}
                US Patent #11,584,893 B2 - Globally granted, with
                pending patents in various countries.
              </p>
              <p>
                <span className="font-semibold">
                  Multi-Fuel Isolated Pulse Initiator:
                </span>{' '}
                US Patent #11,325,834 B2 - Pending patents in multiple
                countries.
              </p>
            </div>
            <div className="flex-1 md:p-8">
              <BsiImages />
            </div>
          </div>

          <div className="p-6 md:p-10 bg-white rounded-lg shadow-xl mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Licensing and Collaborations
            </h2>
            <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto">
              <p>
                Bright Sand Inc. collaborates with industry leaders to
                expand the reach and impact of our technologies.
                Licensing agreements with Carbon Black Global Holding
                LLC and Landaira Inc. enable the broader application
                of our innovations.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-10 bg-white rounded-lg shadow-xl">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Our Commitment
            </h2>
            <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto">
              <p>
                At Bright Sand Inc., we are committed to advancing
                technologies that support sustainable waste management
                and resource recovery. Our intellectual property
                portfolio reflects our dedication to innovation,
                excellence, and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrightSandInc;
