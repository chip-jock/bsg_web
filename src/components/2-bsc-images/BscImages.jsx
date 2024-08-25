import React, { useState } from 'react';

// Image imports
import bsc0 from '/src/assets/2.brightsandcanada_images/0-aqueous-solution-colloidal-separation.webp';
import bsc1 from '/src/assets/2.brightsandcanada_images/1-bsl-1000.1.webp';
import bsc2 from '/src/assets/2.brightsandcanada_images/2-algae-bloom-testing.webp';
import bsc3 from '/src/assets/2.brightsandcanada_images/3-algae-bloom-testing.webp';
import bsc4 from '/src/assets/2.brightsandcanada_images/4-initiator-test.webp';
import bsc5 from '/src/assets/2.brightsandcanada_images/5-engineered-carbon.webp';
import bsc6 from '/src/assets/2.brightsandcanada_images/6-butter-nut-canker.webp';

// Image descriptions
const descriptions = {
  bsc0: 'Aqueous Solution Colloidal Separation (2021)',
  bsc1: 'bsl-1000.1 (2022)',
  bsc2: 'Algae Bloom Testing (2022)',
  bsc3: 'Algae Bloom Testing (2022)',
  bsc4: 'Initiator Test (2022)',
  bsc5: 'Engineered Carbon',
  bsc6: 'Cured Butter Nut Canker',
};

export function BscImages() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      images: [
        { imageLink: bsc0, description: descriptions.bsc0 },
        { imageLink: bsc1, description: descriptions.bsc1 },
        { imageLink: bsc2, description: descriptions.bsc2 },
        { imageLink: bsc3, description: descriptions.bsc3 },
        { imageLink: bsc4, description: descriptions.bsc4 },
        { imageLink: bsc5, description: descriptions.bsc5 },
        { imageLink: bsc6, description: descriptions.bsc6 },
      ],
    },
  ];

  const openLightbox = (imageLink, index) => {
    setSelectedImage({ link: imageLink, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    const nextIndex =
      (selectedImage.index + 1) % data[0].images.length;
    setSelectedImage({
      link: data[0].images[nextIndex].imageLink,
      index: nextIndex,
    });
  };

  const showPrev = () => {
    const prevIndex =
      (selectedImage.index - 1 + data[0].images.length) %
      data[0].images.length;
    setSelectedImage({
      link: data[0].images[prevIndex].imageLink,
      index: prevIndex,
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {data[0].images.map(({ imageLink, description }, index) => (
          <div key={index} className="relative group">
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center cursor-pointer transition-transform transform group-hover:scale-80"
              src={imageLink}
              alt="image-photo"
              onClick={() => openLightbox(imageLink, index)}
            />
            <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-50 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              {description}
            </div>
          </div>
        ))}
      </div>

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
              {data[0].images[selectedImage.index]?.description || ''}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BscImages;
