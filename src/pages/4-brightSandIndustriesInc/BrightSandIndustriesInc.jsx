import React from 'react';
import Navbar from '/src/components/Navbar/Navbar.jsx'; // Import the Navbar component
import BsiiImages from '/src/components/4-bsii-images/BsiiImages.jsx';

const sections = [
  {
    title: 'Developing Cutting-Edge Equipment and Systems',
    content: [
      `Established in 2023 in Detroit, Michigan, Bright Sand Industries Inc. develops advanced equipment and systems necessary for sustainable waste management and resource recovery. Our focus is on creating innovative solutions that address the diverse needs of municipal, medical, industrial, commercial, and agricultural waste processing.`,
    ],
  },
  {
    title: 'Our Innovations',
    content: [
      {
        label: 'Continuous Feed Reactor for Waste Processing:',
        text: 'Developing a state-of-the-art reactor designed to process various types of waste, reducing environmental impact.',
      },
      {
        label: 'Advanced Nano Deposition Particle Module:',
        text: 'In collaboration with Bright Sand Canada Inc., focusing on converting waste into high-value nanocarbon particles and clean hydrogen.',
      },
    ],
  },
  {
    title: 'Current Projects',
    content: [
      {
        label: 'South Pacific Initiatives:',
        text: 'Collaborating with Pacific Environmental Solutions on design-build systems for the Solomon Islands and other South Pacific islands, providing sustainable waste processing solutions.',
      },
    ],
    extraContent: <BsiiImages />,
  },
  {
    title: 'Patent Protection and Development',
    content: [
      `Applying for patent protection for our continuous feed reactor and other technologies, ensuring we remain at the forefront of the industry with sustainable and efficient systems.`,
    ],
  },
  {
    title: 'Our Commitment',
    content: [
      `At Bright Sand Industries Inc., our goal is to develop equipment and systems that drive the future of waste management. We are dedicated to creating technologies that not only address current waste challenges but also contribute to a more sustainable and environmentally friendly world.`,
    ],
  },
];

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

export default BrightSandIndustriesInc;
