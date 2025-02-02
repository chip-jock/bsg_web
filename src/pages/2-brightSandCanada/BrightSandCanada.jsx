import React from 'react';
import Navbar from '/src/components/Navbar/Navbar';
import BscImages from '/src/components/2-bsc-images/BscImages.jsx';

const sections = [
  {
    title: 'Pioneering Applied Research and Development',
    content: [
      `Bright Sand Canada is dedicated to cutting-edge research and development in the field of waste management and resource recovery. Our innovative approach has led to numerous breakthroughs and patents, positioning us as a leader in the industry.`,
    ],
  },
  {
    title: 'Our Patents and Innovations',
    content: [
      {
        label: 'Engineered Carbon:',
        text: 'US Patent 11,325,834 B2 - This innovation in engineered carbon laid the foundation for our future developments.',
      },
      {
        label: 'Advanced Reactor and Waste Conversion Process:',
        text: 'US Patent 11,098,251 B2 - Recognized for converting waste through chemical and thermal methods, with patents pending in multiple countries.',
      },
      {
        label: 'Multi-Fueled Isolated Pulse Initiator:',
        text: 'US Patent 11,325,834 B2 - Granted in November 2023, exemplifying our commitment to innovation and excellence.',
      },
      {
        label: 'Multi Autoclave Lateral Conversion Module:',
        text: 'Pending under US 2022/0126249A1 - Aims to enhance our waste conversion capabilities.',
      },
      {
        label:
          'Aqueous Solutions for Algae, Methane, and Odor Control:',
        text: 'Pending under US 2022/0401348 - Developed to control algae blooms, methane, and odor emissions from landfills.',
      },
    ],
    extraContent: <BscImages />,
  },
  {
    title: 'Current Projects',
    content: [
      {
        label: 'Continuous MSW Processing System:',
        text: 'Developing a new system to handle large volumes of municipal solid waste efficiently and sustainably.',
      },
      {
        label: 'Plastic Waste Conversion to Nanocarbon and Hydrogen:',
        text: 'Developing a module to convert plastic waste into high-value nanocarbon particles and clean hydrogen.',
      },
    ],
  },
  {
    title: 'Our Commitment',
    content: [
      `At Bright Sand Canada, our commitment to sustainability, innovation, and excellence drives everything we do. We strive to lead the industry in waste management and resource recovery, creating solutions that contribute to a cleaner, more sustainable future.`,
    ],
  },
];

const BrightSandCanada = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-gray-100 text-gray-900">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-changa text-left tracking-tighter">
              Bright Sand Canada
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

export default BrightSandCanada;
