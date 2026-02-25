

import React from 'react';

function HighletTwo() {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[80vh] p-4 px-2">
      {/* Left section */}
      <div className="w-full md:w-[55vw] flex flex-col gap-4 bg-white shadow-md overflow-hidden">
        <div className="w-full h-auto md:h-[50%]">
          <img
            // src="Gemini_Generated_Image_j5zwdpj5zwdpj5zw.png"
            src="PharmaTech-2025-official-group-photo.jpeg"
            alt="PharmaTech 2025 Official Group Photo"
            className="w-full h-full object-cover lazyload"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[50%]">
          <div className="w-full md:w-1/2 h-auto">
            <img
              // src="Gemini_Generated_Image_4od9wb4od9wb4od9.png"
               src="PharmaTech-2025-virtual-presentation-session.png"
              alt="PharmaTech 2025 Virtual Presentation Session"
              className="w-full h-full object-cover lazyload"
            />
          </div>

          <div className="w-full md:w-1/2 h-auto">
            <img
              src="PharmaTech-2025-poster-award-presentation.jpeg"
              alt="PharmaTech 2025 Poster Award Presentation"
              className="w-full h-full object-cover lazyload"
            />
          </div>

        </div>
      </div>

      {/* Right section-a */}
      <div className="w-full md:w-[28vw] flex flex-col gap-4">
        <div className="h-auto md:h-[35vh]">
          <img
            src="venue.png"
            alt="PharmaTech 2025 Venue"
            className="w-full h-full object-cover lazyload"
          />
        </div>
        <div className="h-auto md:h-[38vh]">
          <img
            src="PharmaTech-2025-keynote-presentation.jpg"
            alt="PharmaTech 2025 Keynote Presentation"
            className="w-full h-full object-cover lazyload"
          />
        </div>
      </div>
    </div>
  );
}

export default HighletTwo;
