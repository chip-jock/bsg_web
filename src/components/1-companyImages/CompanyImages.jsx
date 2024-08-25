import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import React, { useState } from 'react';

// Image imports
import bsg0 from '/src/assets/1.company_images/2012-0-humble-beginnings-first-reactor.webp';
import bsg1 from '/src/assets/1.company_images/2012-1-first-reactor.webp';
import bsg2 from '/src/assets/1.company_images/2012-2-first-wet-scrubber.webp';
import bsg3 from '/src/assets/1.company_images/2012-3-first-bag-of-msw.webp';
// import bsg4 from '/src/assets/1.company_images/2012-4-syngas-flare.mp4';
import bsg5 from '/src/assets/1.company_images/2012-5-first-bag-of-activated-carbon.webp';
import bsg6 from '/src/assets/1.company_images/2012-6-first-post-process.webp';
import bsg7 from '/src/assets/1.company_images/2012-7-reactor-system-continuous-improvement.webp';
import bsg8 from '/src/assets/1.company_images/2013-0-first-mix-msw-and-tire.webp';
import bsg9 from '/src/assets/1.company_images/2013-1-reactor.webp';
import bsg10 from '/src/assets/1.company_images/2014-0-first-asr-auto-scrap-residual.webp';
import bsg11 from '/src/assets/1.company_images/2016-0-filter-and-heat-exchange.webp';
import bsg12 from '/src/assets/1.company_images/2016-0-full-scale-plant-development-dunlap.webp';
import bsg13 from '/src/assets/1.company_images/2016-1-full-scale-plant-development-dunlap.webp';
import bsg14 from '/src/assets/1.company_images/2016-2-full-scale-plant-development-dunlap.webp';
import bsg15 from '/src/assets/1.company_images/2016-3-full-scale-plant-dunlap.webp';
import bsg16 from '/src/assets/1.company_images/2016-4-full-scale-plant-dunlap.webp';
import bsg17 from '/src/assets/1.company_images/2016-5-full-scale-plant-dunlap.webp';
import bsg18 from '/src/assets/1.company_images/2016-6-process-automation.webp';
import bsg19 from '/src/assets/1.company_images/2016-7-reactor-upgrade-mobile-unit-dunlap.webp';
import bsg20 from '/src/assets/1.company_images/2016-8-scrubber.webp';
import bsg21 from '/src/assets/1.company_images/2016-9-scrubber-upgrades.webp';
import bsg22 from '/src/assets/1.company_images/2017-0-activated-carbon-dunlap.webp';
import bsg23 from '/src/assets/1.company_images/2017-1-bamboo-dunlap.webp';
import bsg24 from '/src/assets/1.company_images/2017-2-control-room.webp';
import bsg25 from '/src/assets/1.company_images/2017-3-first-activated-carbon-process-full-scale.webp';
import bsg26 from '/src/assets/1.company_images/2017-4-first-msw-process-full-scale.webp';
import bsg27 from '/src/assets/1.company_images/2017-5-full-scale-plant.webp';
import bsg28 from '/src/assets/1.company_images/2017-6-full-scale-plant.webp';
import bsg29 from '/src/assets/1.company_images/2017-7-msw-residual.webp';

// Image descriptions
const descriptions = {
  bsg0: 'Humble Beginnings: First Reactor (2012)',
  bsg1: 'First Reactor (2012)',
  bsg2: 'First Wet Scrubber (2012)',
  bsg3: 'First Bag of MSW (2012)',
  // bsg4: 'Syngas Flare (2012)',
  bsg5: 'First Bag of Activated Carbon (2012)',
  bsg6: 'First Post Process (2012)',
  bsg7: 'Reactor System Continuous Improvement (2012)',
  bsg8: 'First Mix MSW and Tires (2013)',
  bsg9: 'Reactor (2013)',
  bsg10: 'First ASR Auto Scrap Residual (2014)',
  bsg11: 'Filter and Heat Exchange (2016)',
  bsg12: 'Full Scale Plant Development, Dunlap (2016)',
  bsg13: 'Full Scale Plant Development, Dunlap (2016)',
  bsg14: 'Full Scale Plant Development, Dunlap (2016)',
  bsg15: 'Full Scale Plant, Dunlap (2016)',
  bsg16: 'Full Scale Plant, Dunlap (2016)',
  bsg17: 'Full Scale Plant, Dunlap (2016)',
  bsg18: 'Process Automation (2016)',
  bsg19: 'Upgraded Mobile Reactor Unit, Dunlap (2016)',
  bsg20: 'Scrubber (2016)',
  bsg21: 'Scrubber Upgrades (2016)',
  bsg22: 'Activated Carbon, Dunlap (2017)',
  bsg23: 'Bamboo (2017)',
  bsg24: 'Control Room, Dunlap (2017)',
  bsg25: 'First Full Scale Activated Carbon Process (2017)',
  bsg26: 'First Full Scale MSW Process (2017)',
  bsg27: 'Full Scale Process (2017)',
  bsg28: 'Full Scale Plant (2017)',
  bsg29: 'MSW Residual (2017)',
};

export function CompanyImages() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentTab, setCurrentTab] = useState('humble beginnings');
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      label: 'Humble Beginnings',
      value: 'humble beginnings',
      images: [
        { imageLink: bsg0, description: descriptions.bsg0 },
        { imageLink: bsg1, description: descriptions.bsg1 },
        { imageLink: bsg2, description: descriptions.bsg2 },
        { imageLink: bsg3, description: descriptions.bsg3 },
        // { imageLink: bsg4, description: descriptions.bsg4 },
        { imageLink: bsg5, description: descriptions.bsg5 },
        { imageLink: bsg6, description: descriptions.bsg6 },
        { imageLink: bsg7, description: descriptions.bsg7 },
        { imageLink: bsg8, description: descriptions.bsg8 },
        { imageLink: bsg9, description: descriptions.bsg9 },
        { imageLink: bsg10, description: descriptions.bsg10 },
        { imageLink: bsg11, description: descriptions.bsg11 },
      ],
    },
    {
      label: 'First Prototype Mobile Unit',
      value: 'first prototype mobile unit',
      images: [{ imageLink: bsg20, description: descriptions.bsg20 }],
    },
    {
      label: 'First Full Size Plant',
      value: 'first full size plant',
      images: [
        { imageLink: bsg12, description: descriptions.bsg12 },
        { imageLink: bsg13, description: descriptions.bsg13 },
        { imageLink: bsg14, description: descriptions.bsg14 },
        { imageLink: bsg15, description: descriptions.bsg15 },
        { imageLink: bsg16, description: descriptions.bsg16 },
        { imageLink: bsg17, description: descriptions.bsg17 },
        { imageLink: bsg18, description: descriptions.bsg18 },
        { imageLink: bsg19, description: descriptions.bsg19 },
        { imageLink: bsg21, description: descriptions.bsg21 },
        { imageLink: bsg22, description: descriptions.bsg22 },
        { imageLink: bsg23, description: descriptions.bsg23 },
        { imageLink: bsg24, description: descriptions.bsg24 },
        { imageLink: bsg25, description: descriptions.bsg25 },
        { imageLink: bsg26, description: descriptions.bsg26 },
        { imageLink: bsg27, description: descriptions.bsg27 },
        { imageLink: bsg28, description: descriptions.bsg28 },
        { imageLink: bsg29, description: descriptions.bsg29 },
      ],
    },
  ];

  const openLightbox = (imageLink, tabValue, index) => {
    setSelectedImage({ link: imageLink, tab: tabValue, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    const tab = data.find((tab) => tab.value === selectedImage.tab);
    const nextIndex = (selectedImage.index + 1) % tab.images.length;
    setSelectedImage({
      ...selectedImage,
      link: tab.images[nextIndex].imageLink,
      index: nextIndex,
    });
  };

  const showPrev = () => {
    const tab = data.find((tab) => tab.value === selectedImage.tab);
    const prevIndex =
      (selectedImage.index - 1 + tab.images.length) %
      tab.images.length;
    setSelectedImage({
      ...selectedImage,
      link: tab.images[prevIndex].imageLink,
      index: prevIndex,
    });
  };

  return (
    <>
      <Tabs
        value={currentTab}
        onChange={(value) => setCurrentTab(value)}
        className="relative"
      >
        <TabsHeader className="flex">
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className={`relative px-4 py-6 cursor-pointer transition-colors duration-300 z-10 ${
                currentTab === value
                  ? 'text-blue-500 font-semibold'
                  : 'text-gray-500'
              } group`}
              onClick={() => setCurrentTab(value)}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-1 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-in-out ${
                  currentTab === value ? 'scale-x-100' : ''
                }`}
              />
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4">
          {data.map(({ value, images }) => (
            <TabPanel
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
              key={value}
              value={value}
            >
              {images.map(({ imageLink, description }, index) => (
                <div key={index} className="relative group">
                  <img
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-transform transform group-hover:scale-80"
                    src={imageLink}
                    alt="image-photo"
                    onClick={() =>
                      openLightbox(imageLink, value, index)
                    }
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-50 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    {description}
                  </div>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing on image click
          >
            <img
              className="object-contain max-w-[90vw] max-h-[90vh]"
              src={selectedImage.link}
              alt="Selected"
            />
            <button
              className="fixed top-1/2 left-4 text-white text-3xl transform -translate-y-1/2"
              onClick={showPrev}
            >
              &lt;
            </button>
            <button
              className="fixed top-1/2 right-4 text-white text-3xl transform -translate-y-1/2"
              onClick={showNext}
            >
              &gt;
            </button>
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-black bg-opacity-70 text-white text-center"
              style={{ width: '80%', maxWidth: '500px' }}
            >
              {data.find((tab) => tab.value === selectedImage.tab)
                ?.images[selectedImage.index]?.description || ''}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CompanyImages;
