import React from 'react';
import Navbar from '/src/components/Navbar/Navbar.jsx';
import earlpic from '/src/assets/7.team_images/earl-pic.webp';

const OurTeam = () => {
  const content = [
    {
      image: earlpic,
      type: 'section',
      title: 'Earl R. Decker',
      subtitle:
        'President, Bright Sand Canada Inc., Bright Sand Inc., and Bright Sand Industries Inc.',
      text: `As President of Bright Sand Canada Inc., Bright Sand Inc., and Bright Sand Industries Inc., Earl R. Decker leads the Bright Sand Group, a pioneering force in clean technology and sustainable waste management. With extensive experience in waste-to-energy systems, carbon nanoparticle production, and integrated control solutions, Earl drives the Group’s initiatives across landfill reclamation, plastics recycling, and renewable energy generation. His work, backed by multiple patents in waste processing, nanoparticle development, and methane mitigation, has made impactful contributions to environmental sustainability and industrial advancement.\n\nCollaborating with Fortune 500 companies, Earl leverages Bright Sand’s proprietary technologies to solve complex waste management challenges. His expertise includes AI integration, data analytics, and sophisticated control systems to optimize operations and enhance productivity. Passionate about reducing environmental impact, Earl continuously advances the Group’s mission, transforming waste streams into valuable resources and advocating for a more sustainable future.`,
    },
  ];

  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow flex flex-col items-center min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-gray-100 text-gray-900">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-changa text-left tracking-tighter">
              Our Team
            </h1>
          </div>
          {content.map((item, index) => (
            <div
              key={index}
              className="text-lg md:text-xl p-8 md:p-10 bg-white rounded-lg shadow-md mb-10"
            >
              {item.type === 'section' && (
                <>
                  <div className="flex flex-row mb-2">
                    <div className="w-1/4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full max-w-sm mx-auto rounded-lg mb-4 mr-4"
                      />
                    </div>

                    <div className="w-3/4 ml-4 lg:ml-8 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                      <h2 className="text-4xl text-black font-changa font-thin mb-4">
                        {item.title}
                      </h2>
                      <h3 className="text-2xl text-black font-changa font-thin mb-4">
                        {item.subtitle}
                      </h3>
                      <div className="border-b border-1 border-gray-900"></div>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-black font-roboto text-left">
                    {item.text.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
