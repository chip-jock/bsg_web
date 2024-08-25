import React, { useState } from 'react';

// Image imports
import bsi0 from '/src/assets/3.brightsandinc_images/2021-0-carbon-black-global-holdings-landaira-plant-dunlap.webp';
import bsi1 from '/src/assets/3.brightsandinc_images/2022-1-carbon-black-global-holdings-landaira-plant-dunlap.webp';
import bsi2 from '/src/assets/3.brightsandinc_images/2022-2-carbon-black-global-holdings-landaira-plant-dunlap.webp';
import bsi3 from '/src/assets/3.brightsandinc_images/2022-3-carbon-black-global-holdings-landaira-plant-dunlap.webp';
import bsi4 from '/src/assets/3.brightsandinc_images/2023-multi-patent-1.webp';

// Image descriptions
const descriptions = {
  bsi0: '',
  bsi1: '',
  bsi2: '',
  bsi3: '',
  bsi4: '',
};

export function BsiImages() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      images: [
        { imageLink: bsi0, description: descriptions.bsi0 },
        { imageLink: bsi1, description: descriptions.bsi1 },
        { imageLink: bsi2, description: descriptions.bsi2 },
        { imageLink: bsi3, description: descriptions.bsi3 },
        { imageLink: bsi4, description: descriptions.bsi4 },
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

export default BsiImages;
