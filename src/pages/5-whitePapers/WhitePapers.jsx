import React from 'react';
import Navbar from '/src/components/Navbar/Navbar.jsx';

import wp0 from '/src/assets/5.whitepapers_pdfs/0-aqueous-solution-algae-blooms.pdf';
import wp1 from '/src/assets/5.whitepapers_pdfs/1-butter-nut-tree.pdf';
import wp2 from '/src/assets/5.whitepapers_pdfs/2-landfill-methane-odor.pdf';
import wp3 from '/src/assets/5.whitepapers_pdfs/3-water-separation.pdf';
import wp4 from '/src/assets/5.whitepapers_pdfs/4-bsg-engineered-carbon-black.pdf';
import wp5 from '/src/assets/5.whitepapers_pdfs/5-exploring-the-versatility-of-bright-sands-engineered-carbon.pdf';
import wp6 from '/src/assets/5.whitepapers_pdfs/6-the-patented-process-behind-engineered-carbon-bright-sand.pdf';

const whitePapers = [
  {
    href: wp0,
    title:
      'Utilizing Bright Sand Aqueous Solution for Algae Bloom Prevention and Control',
  },
  {
    href: wp1,
    title:
      'Utilizing Bright Sand Aqueous Solution for Canker Sore Treatment in Trees',
  },
  {
    href: wp2,
    title:
      'Utilizing Bright Sand Aqueous Solution to Reduce Methane, Odor Production from Landfills',
  },
  {
    href: wp3,
    title:
      'Utilizing Bright Sand Aqueous Solution for Enhanced Water Separation from Colloidal Clay Samples',
  },
  {
    href: wp4,
    title: 'Bright Sand Group Engineered Carbon Black',
  },
  {
    href: wp5,
    title:
      'Exploring the Versatility of Bright Sands Engineered Carbon',
  },
  {
    href: wp6,
    title:
      'The Patented Process Behind Engineered Carbon Bright Sand',
  },
];

const WhitePapers = () => (
  <div className="flex">
    <Navbar /> {/* Add the Navbar component */}
    <div className="flex-grow flex flex-col items-center min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-gray-100 text-gray-900">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-changa text-left tracking-tighter">
            White Papers
          </h1>
        </div>
        <div className="text-lg md:text-xl p-6 md:p-10 bg-white rounded-lg shadow-xl mb-10 font-semibold">
          {whitePapers.map((paper, index) => (
            <div key={index} className="mb-4">
              {' '}
              {/* Adds space between items */}
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                {paper.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default WhitePapers;
