import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import React, { useState } from 'react';

// Image imports
import bsg1 from '/src/assets/1.company_images/2012-FirstBagOfActivatedCarbon.jpg';
import bsg2 from '/src/assets/1.company_images/2012-FirstBagOfMSW.jpg';
import bsg3 from '/src/assets/1.company_images/2012-FirstPostProcess.jpg';
import bsg4 from '/src/assets/1.company_images/2012-FirstReactor1.jpg';
import bsg5 from '/src/assets/1.company_images/2012-FirstReactor2.jpg';
import bsg6 from '/src/assets/1.company_images/2012-FirstWetScrubber.jpg';
import bsg7 from '/src/assets/1.company_images/2012-ReactorSystemContinuousImprovement.jpg';
import bsg9 from '/src/assets/1.company_images/2013-FirstASRAutoScrapResidual.jpg';
import bsg10 from '/src/assets/1.company_images/2013-FirstMixMSWAndTire.jpg';
import bsg11 from '/src/assets/1.company_images/2013-Reactor.jpg';
import bsg12 from '/src/assets/1.company_images/2016-FilterAndHeatExchange.jpg';
import bsg13 from '/src/assets/1.company_images/2016-FullScalePlantDevelopment.jpg';
import bsg14 from '/src/assets/1.company_images/2016-Plant.jpg';
import bsg15 from '/src/assets/1.company_images/2016-Plant2.jpg';
import bsg16 from '/src/assets/1.company_images/2016-Plant9.jpg';
import bsg17 from '/src/assets/1.company_images/2016-PlantDev8.jpg';
import bsg18 from '/src/assets/1.company_images/2016-PlantDevel.jpg';
import bsg19 from '/src/assets/1.company_images/2016-ProcessAutomation.jpg';
import bsg21 from '/src/assets/1.company_images/2016-Scrubber2.jpg';
import bsg22 from '/src/assets/1.company_images/2016-ScrubberUpgrades.jpg';
import bsg23 from '/src/assets/1.company_images/2017-ActivatedCarbon2.jpg';
import bsg24 from '/src/assets/1.company_images/2017-Bamboo.jpg';
import bsg25 from '/src/assets/1.company_images/2017-ControlRoom.jpg';
import bsg26 from '/src/assets/1.company_images/2017-FirstActivatedCarbonProcessFullScale.jpg';
import bsg27 from '/src/assets/1.company_images/2017-FirstMSWProcessFullScale.jpg';
import bsg28 from '/src/assets/1.company_images/2017-FullScale5.jpg';
import bsg29 from '/src/assets/1.company_images/2017-FullScalePlant4.jpg';
import bsg30 from '/src/assets/1.company_images/2017-MSWResidual.jpg';
import bsg20 from '/src/assets/1.company_images/2016-Reactor2UpgradeMobileUnit.jpg';

// Image descriptions
const descriptions = {
  bsg1: 'First Bag of Activated Carbon',
  bsg2: 'First Bag of MSW',
  bsg3: 'First Post Process',
  bsg4: 'First Reactor',
  bsg5: 'First Reactor',
  bsg6: 'First Wet Scrubber',
  bsg7: 'Reactor System Continuous Improvement',
  bsg9: 'First ASR Auto Scrap Residual',
  bsg10: 'First Mix MSW and Tire',
  bsg11: 'Reactor',
  bsg12: 'Filter and Heat Exchange',
  bsg13: 'Full Scale Plant Development',
  bsg14: 'Plant',
  bsg15: 'Plant',
  bsg16: 'Plant',
  bsg17: 'Plant Development',
  bsg18: 'Plant Development',
  bsg19: 'Process Automation',
  bsg21: 'Scrubber',
  bsg22: 'Scrubber Upgrades',
  bsg23: 'Activated Carbon',
  bsg24: 'Bamboo',
  bsg25: 'Control Room',
  bsg26: 'First Activated Carbon Process Full Scale',
  bsg27: 'First MSW Process Full Scale',
  bsg28: 'Full Scale Plant',
  bsg29: 'Full Scale Plant',
  bsg30: 'MSW Residual',
  bsg20: 'Mobile Unit Reactor Upgrade',
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
        { imageLink: bsg1, description: descriptions.bsg1 },
        { imageLink: bsg2, description: descriptions.bsg2 },
        { imageLink: bsg3, description: descriptions.bsg3 },
        { imageLink: bsg4, description: descriptions.bsg4 },
        { imageLink: bsg5, description: descriptions.bsg5 },
        { imageLink: bsg6, description: descriptions.bsg6 },
        { imageLink: bsg7, description: descriptions.bsg7 },
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
        { imageLink: bsg30, description: descriptions.bsg30 },
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
