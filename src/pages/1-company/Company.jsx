import React from 'react';
import CompanyImages from '/src/components/1-companyImages/CompanyImages.jsx';
import Navbar from '/src/components/Navbar/Navbar.jsx'; // Import the Navbar component

const content = [
  {
    type: 'section',
    title: 'Historical Journey',
    text: `At Bright Sand, our name is more than just a label; it is a testament to a legacy of perseverance and vision. Rooted in a journey that began in 1911, the spirit of our forebears shapes the core of our identity and purpose.\n\nOur story traces back to a courageous venture when my grandfather, with a wagon and horses, embarked on a formidable trek through the Dakotas, ultimately settling in a quaint town in northern Saskatchewan. It was here, in Bright Sand, Saskatchewan, where my mother came into the world in 1929, planting the seeds of our future. This lineage and the tales of resilience deeply influenced the birth of our venture in 2014, when I established a sole proprietorship aptly named Bright Sand.`,
  },
  {
    type: 'section',
    title: 'Company Evolution',
    text: `Bright Sand transitioned from a humble beginning into a beacon of innovation and commitment. In 2014, we laid our foundation as a sole proprietorship, a nod to our familial roots and a testament to our dedication. The ensuing years marked our expansion and incorporation, first with Bright Sand Canada in Windsor, Ontario, in 2020, and soon after, Bright Sand Inc. in Chattanooga, TN. In 2023, we further solidified our presence by establishing Bright Sand Industries in Detroit, Michigan. Each step on this journey was not just a growth in our footprint but a reaffirmation of our commitment to making a tangible impact.`,
  },
  {
    type: 'section',
    title: 'Innovations and Achievements',
    text: `Our journey has been marked by significant milestones, including the acquisition of five patents with several more pending, underscoring our commitment to innovation and environmental stewardship. Each subsidiary, though unique in its focus, shares a unified mission: to mitigate the damage inflicted on our planet and spearhead restoration and innovation. Our patents are not just accolades; they are beacons of hope and symbols of our relentless pursuit of a sustainable future.`,
  },
  {
    type: 'section',
    title: "What's next for Bright Sand?",
    text: `The odyssey of Bright Sand, much like the journey of my grandfather, has been fraught with challenges. Yet, it is the clarity of our vision and the resilience ingrained in our DNA that propels us forward. As we look to the horizon, our path is unequivocal – to forge ahead with determination, continuously innovating and striving to repair the world we inhabit. In our narrative, every milestone is a tribute to the pioneering spirit that defines us, and every innovation, a step towards a brighter, more sustainable tomorrow.`,
  },
];

const Company = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow flex flex-col items-center min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-gray-100 text-gray-900">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-changa text-left tracking-tighter">
              Bright Sand Group
            </h1>
          </div>

          {content.map((item, index) => (
            <div
              key={index}
              className="text-lg md:text-xl p-8 md:p-10 bg-white rounded-lg shadow-md mb-10"
            >
              {item.type === 'section' && (
                <>
                  <h2 className="text-4xl text-black font-changa font-thin mb-4">
                    {item.title}
                  </h2>
                  <div className="border-b border-1 border-gray-900 mb-6"></div>
                </>
              )}
              <p className="text-lg md:text-xl text-black font-roboto text-left">
                {item.text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              {item.title === 'Company Evolution' && (
                <div className="flex-1 pt-12">
                  <CompanyImages />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
