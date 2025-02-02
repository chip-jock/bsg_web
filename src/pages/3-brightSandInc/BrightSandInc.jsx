import React from 'react';
import Navbar from '/src/components/Navbar/Navbar.jsx'; // Import the Navbar component
import BsiImages from '/src/components/3-bsi-images/BsiImages.jsx';

const sections = [
  {
    title:
      'Innovating Intellectual Property for a Sustainable Future',
    content: [
      `Bright Sand Inc. is dedicated to developing and holding intellectual property that drives innovation and sustainability in waste management and resource recovery. With five US patents granted and multiple patents pending or in development, we are at the forefront of technological advancements in our field.`,
    ],
  },
  {
    title: 'Our Patents and Innovations',
    content: [
      {
        label: 'Apparatus and Method for Producing Activated Carbon:',
        text: 'US Patent #8,715,582 - An innovative approach to producing activated carbon.',
      },
      {
        label:
          'Reactor for the Advanced Thermal Chemical Conversion of Municipal Solid Waste:',
        text: 'US Patent #11,098,251 B2 - Enhances efficiency and sustainability in waste conversion.',
      },
      {
        label: 'Process to Produce Engineered Carbon:',
        text: 'US Patent #11,325,834 B2 - Pending patents in multiple countries, aims to reduce reliance on fertilizers and restore soil carbon.',
      },
      {
        label:
          'Advanced Thermal Chemical Conversion Process of Municipal Solid Waste:',
        text: 'US Patent #11,584,893 B2 - Globally granted, with pending patents in various countries.',
      },
      {
        label: 'Multi-Fuel Isolated Pulse Initiator:',
        text: 'US Patent #11,325,834 B2 - Pending patents in multiple countries.',
      },
    ],
    extraContent: <BsiImages />,
  },
  {
    title: 'Licensing and Collaborations',
    content: [
      `Bright Sand Inc. collaborates with industry leaders to expand the reach and impact of our technologies. Licensing agreements with Carbon Black Global Holding LLC and Landaira Inc. enable the broader application of our innovations.`,
    ],
  },
  {
    title: 'Our Commitment',
    content: [
      `At Bright Sand Inc., we are committed to advancing technologies that support sustainable waste management and resource recovery. Our intellectual property portfolio reflects our dedication to innovation, excellence, and environmental stewardship.`,
    ],
  },
];

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

          {sections.map((section, index) => (
            <div
              key={index}
              className="text-lg md:text-xl p-8 md:p-10 bg-white rounded-lg shadow-md mb-10"
            >
              <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-4 font-thin">
                {section.title}
              </h2>
              <div className="border-b border-1 border-gray-900 mb-6"></div>
              <div className="text-lg md:text-xl space-y-6 text-gray-800 font-roboto">
                {Array.isArray(section.content)
                  ? section.content.map((item, idx) =>
                      typeof item === 'string' ? (
                        <p key={idx}>{item}</p>
                      ) : (
                        <p key={idx}>
                          <span className="font-semibold">
                            {item.label}
                          </span>{' '}
                          {item.text}
                        </p>
                      )
                    )
                  : null}
              </div>
              {section.extraContent && (
                <div className="flex-1 md:p-8">
                  {section.extraContent}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrightSandInc;
