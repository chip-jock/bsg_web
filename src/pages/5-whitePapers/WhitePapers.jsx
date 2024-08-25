import React from 'react';
import Navbar from '/src/components/Navbar/Navbar.jsx';
import WP1 from '/src/assets/5.whitepapers_pdfs/aqueous-solution-algae-blooms.pdf';
import WP2 from '/src/assets/5.whitepapers_pdfs/butter-nut-tree.pdf';
import WP3 from '/src/assets/5.whitepapers_pdfs/landfill-methane-odor.pdf';
import WP4 from '/src/assets/5.whitepapers_pdfs/water-separation.pdf';

const whitePapers = [
  {
    href: WP1,
    title:
      'Utilizing Bright Sand Aqueous Solution for Algae Bloom Prevention and Control',
  },
  {
    href: WP2,
    title:
      'Utilizing Bright Sand Aqueous Solution for Canker Sore Treatment in Trees',
  },
  {
    href: WP3,
    title:
      'Utilizing Bright Sand Aqueous Solution to Reduce Methane, Odor Production from Landfills',
  },
  {
    href: WP4,
    title:
      'Utilizing Bright Sand Aqueous Solution for Enhanced Water Separation from Colloidal Clay Samples',
  },
];

const WhitePapers = () => (
  <div className="flex">
    <Navbar /> {/* Add the Navbar component */}
    <div className="flex-grow flex flex-col items-center min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-gray-100 text-gray-900">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-montserrat text-left tracking-tighter">
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
