import React from 'react';
import Navbar from '/src/components/Navbar/Navbar.jsx';

import pdf0 from '/src/assets/6.consulting_pdfs/introducing-bright-sand-canada.pdf';
import pdf1 from '/src/assets/6.consulting_pdfs/transform-your-waste-into-value-with-bright-sand-canada Inc.pdf';

const consulting = [
  {
    href: pdf0,
    title: 'Introducing Bright Sand Canada',
  },
  {
    href: pdf1,
    title:
      'Transform Your Waste into Value with Bright Sand Canada Inc',
  },
];

const Consulting = () => (
  <div className="flex">
    <Navbar /> {/* Add the Navbar component */}
    <div className="flex-grow flex flex-col items-center min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-gray-100 text-gray-900">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-changa text-left tracking-tighter">
            Consultancy Services
          </h1>
        </div>
        <div className="text-lg md:text-xl p-8 md:p-10 bg-white rounded-lg shadow-md mb-10">
          {consulting.map((paper, index) => (
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

export default Consulting;
