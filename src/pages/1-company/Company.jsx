import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import bsg1 from '/src/assets/1.company_images/2012-FirstBagOfActivatedCarbon.jpg';
import bsg2 from '/src/assets/1.company_images/2012-FirstBagOfMSW.jpg';
import bsg3 from '/src/assets/1.company_images/2012-FirstPostProcess.jpg';
import bsg4 from '/src/assets/1.company_images/2012-FirstReactor1.jpg';
import bsg5 from '/src/assets/1.company_images/2012-FirstReactor2.jpg';
import bsg6 from '/src/assets/1.company_images/2012-FirstWetScrubber.jpg';
import bsg7 from '/src/assets/1.company_images/2012-ReactorSystemContinuousImprovement.jpg';
// import bsg8 from '/src/assets/1.company_images/2012-SyngasFlare.mp4';
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
import bsg20 from '/src/assets/1.company_images/2016-Reactor2UpgradeMobileUnit.jpg';
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

const Company = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen py-32 px-4 md:px-10 lg:px-16 bg-gray-100 text-gray-900">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-montserrat text-left tracking-tighter mb-8">
            Bright Sand Group
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-roboto text-left">
            At Bright Sand, our name is more than just a label; it is
            a testament to a legacy of perseverance and vision. Rooted
            in a journey that began in 1911, the spirit of our
            forebears shapes the core of our identity and purpose.
          </p>
        </div>

        <div className="text-lg md:text-xl p-6 md:p-10 bg-white rounded-lg shadow-xl mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
            Historical Journey
          </h2>
          <p className="text-gray-800 font-roboto">
            Our story traces back to a courageous venture when my
            grandfather, with a wagon and horses, embarked on a
            formidable trek through the Dakotas, ultimately settling
            in a quaint town in northern Saskatchewan. It was here, in
            Bright Sand, Saskatchewan, where my mother came into the
            world in 1929, planting the seeds of our future. This
            lineage and the tales of resilience deeply influenced the
            birth of our venture in 2014, when I established a sole
            proprietorship aptly named Bright Sand. The choice was
            deliberate, symbolizing the pioneering spirit and tenacity
            that not only brought me into existence but also fuels our
            company's ethos.
          </p>
        </div>

        <div className="flex flex-row md:flex-col">
          <div className="text-lg md:text-xl p-6 md:p-10 bg-white rounded-lg shadow-xl mb-12 flex-1">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
              Company Evolution
            </h2>
            <p className="text-gray-800 font-roboto">
              Bright Sand transitioned from a humble beginning into a
              beacon of innovation and commitment. In 2014, we laid
              our foundation as a sole proprietorship, a nod to our
              familial roots and a testament to our dedication. The
              ensuing years marked our expansion and incorporation,
              first with Bright Sand Canada in Windsor, Ontario, in
              2020, and soon after, Bright Sand Inc. in Chattanooga,
              TN. In 2023, we further solidified our presence by
              establishing Bright Sand Industries in Detroit,
              Michigan. Each step on this journey was not just a
              growth in our footprint but a reaffirmation of our
              commitment to making a tangible impact.
            </p>
            <div className="flex-1 md:p-8">
              <Carousel
                showThumbs={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                className="bg-white rounded-lg shadow-xl"
              >
                <div className="carousel-item">
                  <img
                    src={bsg1}
                    alt="First Bag of Activated Carbon"
                  />
                  <p className="legend">
                    First Bag of Activated Carbon (2012)
                  </p>
                </div>
                <div className="carousel-item">
                  <img src={bsg2} alt="First Bag of MSW" />
                  <p className="legend">First Bag of MSW (2012)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsg3} alt="First Post Process" />
                  <p className="legend">First Post Process (2012)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsg4} alt="First Reactor" />
                  <p className="legend">First Reactor (2012)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsg5} alt="First Reactor" />
                  <p className="legend">First Reactor (2012)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsg6} alt="First Wet Scrubber" />
                  <p className="legend">First Wet Scrubber (2012)</p>
                </div>
                <div className="carousel-item">
                  <img
                    src={bsg7}
                    alt="Reactor System Continuous Improvement"
                  />
                  <p className="legend">
                    Reactor System Continuous Improvement (2012)
                  </p>
                </div>
                {/* <div className="carousel-item">
                  <img src={bsg8} alt="Syngas Flare" />
                  <p className="legend">Syngas Flare</p>
                </div> */}
                <div className="carousel-item">
                  <img
                    src={bsg9}
                    alt="First ASR Auto Scrap Residual"
                  />
                  <p className="legend">
                    First ASR Auto Scrap Residual (2013)
                  </p>
                </div>
                <div className="carousel-item">
                  <img src={bsg10} alt="First Mix MSW and Tire" />
                  <p className="legend">
                    First Mix MSW and Tire (2013)
                  </p>
                </div>
                <div className="carousel-item">
                  <img src={bsg11} alt="Reactor" />
                  <p className="legend">Reactor (2013)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsg12} alt="Filter And Heat Exchange" />
                  <p className="legend">
                    Filter And Heat Exchange (2016)
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    src={bsg13}
                    alt="Full Scale Plant Development"
                  />
                  <p className="legend">
                    Full Scale Plant Development (2016)
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    src={bsg14}
                    alt="Full Scale Plant Development"
                  />
                  <p className="legend">
                    Full Scale Plant Development (2016)
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    src={bsg15}
                    alt="Full Scale Plant Development"
                  />
                  <p className="legend">
                    Full Scale Plant Development (2016)
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    src={bsg16}
                    alt="Full Scale Plant Development"
                  />
                  <p className="legend">
                    Full Scale Plant Development (2016)
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    src={bsg17}
                    alt="Full Scale Plant Development"
                  />
                  <p className="legend">
                    Full Scale Plant Development (2016)
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    src={bsg18}
                    alt="Full Scale Plant Development"
                  />
                  <p className="legend">
                    Full Scale Plant Development (2016)
                  </p>
                </div>
                <div className="carousel-item">
                  <img src={bsg19} alt="Process Automation" />
                  <p className="legend">Process Automation (2016)</p>
                </div>
                <div className="carousel-item">
                  <img
                    src={bsg20}
                    alt="Mobile Reactor Unit Upgrade"
                  />
                  <p className="legend">
                    Mobile Reactor Unit Upgrade (2016)
                  </p>
                </div>
                <div className="carousel-item">
                  <img src={bsg21} alt="Scrubber" />
                  <p className="legend">Scrubber (2016)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsg22} alt="Scrubber Upgrades" />
                  <p className="legend">Scrubber Upgrades (2016)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsg23} alt="Activated Carbon" />
                  <p className="legend">Activated Carbon (2017)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsg24} alt="Bamboo" />
                  <p className="legend">Bamboo (2017)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsg25} alt="Control Room" />
                  <p className="legend">Control Room (2017)</p>
                </div>
                <div className="carousel-item">
                  <img
                    src={bsg26}
                    alt="First Full Scale Activated Carbon Process"
                  />
                  <p className="legend">
                    First Full Scale Activated Carbon Process (2017)
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    src={bsg27}
                    alt="First Full Scale MSW Process"
                  />
                  <p className="legend">
                    First Full Scale MSW Process (2017)
                  </p>
                </div>
                <div className="carousel-item">
                  <img src={bsg28} alt="Full Scale Plant" />
                  <p className="legend">Full Scale Plant (2017)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsg29} alt="Full Scale Plant" />
                  <p className="legend">Full Scale Plant (2017)</p>
                </div>
                <div className="carousel-item">
                  <img src={bsg30} alt="MSW Residual" />
                  <p className="legend">MSW Residual (2017)</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="text-lg md:text-xl p-6 md:p-10 bg-white rounded-lg shadow-xl mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
            Innovations and Achievements
          </h2>
          <p className="text-gray-800 font-roboto">
            Our journey has been marked by significant milestones,
            including the acquisition of five patents with several
            more pending, underscoring our commitment to innovation
            and environmental stewardship. Each subsidiary, though
            unique in its focus, shares a unified mission: to mitigate
            the damage inflicted on our planet and spearhead
            restoration and innovation. Our patents are not just
            accolades; they are beacons of hope and symbols of our
            relentless pursuit of a sustainable future.
          </p>
        </div>

        <div className="text-lg md:text-xl p-6 md:p-10 bg-white rounded-lg shadow-xl">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-changa mb-6">
            What's next for Bright Sand?
          </h2>
          <p className="text-gray-800 font-roboto">
            The odyssey of Bright Sand, much like the journey of my
            grandfather, has been fraught with challenges. Yet, it is
            the clarity of our vision and the resilience ingrained in
            our DNA that propels us forward. As we look to the
            horizon, our path is unequivocal – to forge ahead with
            determination, continuously innovating and striving to
            repair the world we inhabit. In our narrative, every
            milestone is a tribute to the pioneering spirit that
            defines us, and every innovation, a step towards a
            brighter, more sustainable tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
