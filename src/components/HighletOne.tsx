


import React from 'react';

function HighletOne() {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[80vh] p-4 px-2">
      {/* Left section */}
      <div className="w-full md:w-[55vw] flex flex-col gap-4 bg-white shadow-md overflow-hidden">
        <div className="w-full h-auto md:h-[50%]">
          <img
            // src="Gemini_Generated_Image_j5zwdpj5zwdpj5zw.png"
            src="speaker-virtual.jpg"
            alt="Virtual Speaker Session"
            className="w-full h-full object-cover lazyload"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[50%]">
          <div className="w-full md:w-1/2 h-auto">
            <img
              src="PharmaTech-2025-participants-group-photo.jpeg"
              alt="PharmaTech 2025 Participants Group Photo"
              className="w-full h-full object-cover lazyload"
            />
          </div>

          <div className="w-full md:w-1/2 h-auto">
            <img
              src="PharmaTech-2025-poster-presentation.jpeg"
              alt="PharmaTech 2025 Poster Presentation"
              className="w-full h-full object-cover lazyload"
            />
          </div>

        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-[28vw] flex flex-col gap-4">
        <div className="h-auto md:h-[35vh]">
          <img
            src="PharmaTech-2025-networking-session.png"
            alt="PharmaTech 2025 Networking Session"
            className="w-full h-full object-cover lazyload"
          />
        </div>
        <div className="h-auto md:h-[38vh]">
          <img
            src="PharmaTech-2025-poster-explanation-session.jpeg"
            alt="PharmaTech 2025 Poster Explanation Session"
            className="w-full h-full object-cover lazyload"
          />
        </div>
      </div>
    </div>
  );
}

export default HighletOne;
