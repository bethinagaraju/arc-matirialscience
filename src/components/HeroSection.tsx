

import React from 'react';
import { Link } from 'react-router-dom';
import QuickLinksSection from './QuickLinksSection';

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/aimlr-banner-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Content Container */}
      <div className="relative min-h-[430px] flex items-center justify-center px-4 sm:px-6 md:px-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-start gap-2 lg:gap-4 pt-20 pb-10 justify-center items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl w-full bg-white bg-opacity-40 backdrop-blur-sm py-5 sm:py-6 px-4 sm:px-6 text-center lg:text-left">
            <p
              className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 text-black uppercase leading-snug"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {/* Artificial Intelligence, Machine Learning and Robotics Conference */}
              3rd Global Conference on AI, ML & Robotics – July 2026, Rome, Italy.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-5 text-gray-800">
              July 28–30, 2026 | Crowne Plaza – St. Peter's Rome, Italy
            </p>

            <div className="flex flex-row items-center lg:items-start justify-center lg:justify-center gap-3 sm:gap-4 w-full">


              <Link to="/register">
                <button
                  className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition hover:opacity-90"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)',
                  }}
                >
                  REGISTER
                </button>
              </Link>

                <Link to="/register">

                <button
                  className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition hover:opacity-90"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(0,72,139,1) 0%, rgba(15,133,255,1) 100%)',
                  }}
                >
                  SUBMISSION
                </button>

              </Link>
            </div>



          </div>

          {/* RIGHT SIDE QUICK LINKS */}
          <div className="w-full lg:w-auto lg:ml-3">
            <QuickLinksSection />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
