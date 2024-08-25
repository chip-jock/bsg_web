import React, { useState } from 'react';

// Image imports
import bsii0 from '/src/assets/4.brightsandindustriesinc_images/pes-0-bright-sand-industries-watson-ai.webp';
import bsii1 from '/src/assets/4.brightsandindustriesinc_images/pes-1-participating-countries.webp';
import bsii2 from '/src/assets/4.brightsandindustriesinc_images/pes-2.webp';
import bsii3 from '/src/assets/4.brightsandindustriesinc_images/pes-3.webp';
import bsii4 from '/src/assets/4.brightsandindustriesinc_images/pes-4.webp';
import bsii5 from '/src/assets/4.brightsandindustriesinc_images/pes-5.webp';
import bsii6 from '/src/assets/4.brightsandindustriesinc_images/pes-6-plastic-waste-drainage.webp';

// Image descriptions
const descriptions = {
  bsii0: '',
  bsii1: '',
  bsii2: '',
  bsii3: '',
  bsii4: '',
  bsii5: '',
  bsii6: '',
};

export function BSIImages() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      images: [
        { imageLink: bsii0, description: descriptions.bsi0 },
        { imageLink: bsii1, description: descriptions.bsii1 },
        { imageLink: bsii2, description: descriptions.bsii2 },
        { imageLink: bsii3, description: descriptions.bsii3 },
        { imageLink: bsii4, description: descriptions.bsii4 },
        { imageLink: bsii5, description: descriptions.bsii5 },
        { imageLink: bsii6, description: descriptions.bsii6 },
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

export default BSIImages;
