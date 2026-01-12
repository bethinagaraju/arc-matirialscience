

// import React from 'react';
// import { Link } from 'react-router-dom';
// import QuickLinksSection from './QuickLinksSection';

// const HeroSection: React.FC = () => {
//   return (
//     <section className="relative text-white overflow-hidden">

//       {/* Background Video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/aimlr-banner-video.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       ></video>

//       {/* Content Container */}
//       <div className="relative min-h-[430px] flex items-center justify-center px-4 sm:px-6 md:px-10">
//         <div className="container mx-auto flex flex-col lg:flex-row items-center justify-start gap-2 lg:gap-4 pt-20 pb-10 justify-center items-center">

//           {/* LEFT CONTENT */}
//           <div className="max-w-3xl w-full bg-white bg-opacity-40 backdrop-blur-sm py-5 sm:py-6 px-4 sm:px-6 text-center lg:text-left">
//             <h1
//               className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 text-black uppercase leading-snug"
//               style={{ fontFamily: 'Manrope, sans-serif' }}
//             >
//               {/* Artificial Intelligence, Machine Learning and Robotics Conference */}
//               3rd Global Conference on AI, ML & Robotics – July 2026, Rome, Italy.
//             </h1>

//             <p className="text-lg sm:text-xl md:text-2xl font-medium mb-5 text-gray-800">
//               July 28–30, 2026 | Crowne Plaza – St. Peter's Rome, Italy
//             </p>

//             <div className="flex flex-row items-center lg:items-start justify-center lg:justify-center gap-3 sm:gap-4 w-full">


//               <Link to="/register" title="Register for AIMLR 2026 Conference" aria-label="Register for AIMLR 2026 Conference">
//                 <button
//                   className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition hover:opacity-90"
//                   style={{
//                     backgroundImage:
//                       'linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)',
//                   }}
//                   title="Register for AIMLR 2026 Conference"
//                   aria-label="Register for AIMLR 2026 Conference"
//                 >
//                   REGISTER
//                 </button>
//               </Link>

//               <Link to="/register" title="Submit Abstract for AIMLR 2026 Conference" aria-label="Submit Abstract for AIMLR 2026 Conference">
//                 <button
//                   className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition hover:opacity-90"
//                   style={{
//                     backgroundImage:
//                       'linear-gradient(90deg, rgba(0,72,139,1) 0%, rgba(15,133,255,1) 100%)',
//                   }}
//                   title="Submit Abstract for AIMLR 2026 Conference"
//                   aria-label="Submit Abstract for AIMLR 2026 Conference"
//                 >
//                   SUBMISSION
//                 </button>
//               </Link>
//             </div>



//           </div>

//           {/* RIGHT SIDE QUICK LINKS */}
//           <div className="w-full lg:w-auto lg:ml-3">
//             <QuickLinksSection />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





import React from "react";
import { Link } from "react-router-dom";
import QuickLinksSection from "./QuickLinksSection";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] text-white overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/aimlr-banner-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">

        {/* TOP CONTENT */}
        <div className="container mx-auto px-6 lg:px-16 pt-32">
          <div className="max-w-3xl">

            {/* <h1 className="text-sm tracking-widest text-[#00C9FF] font-semibold mb-3 uppercase">
              The World’s Leading AI Conference
            </h1> */}

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Artificial Intelligence, <br />
              Machine Learning & Robotics
            </h2>

            <p className="text-lg text-white/90 mb-8">
              July 28–30, 2026 · Rome, Italy <br />
              Crowne Plaza – St. Peter’s
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                      <button 
                        className="
                        px-8 py-3
                        text-white font-semibold
                        hover:opacity-90
                        transition
                        "
                        style={{ backgroundImage: "linear-gradient(90deg, rgba(201, 171, 99, 0.92) 0%, rgba(201, 171, 99, 0.92) 39%, rgba(201, 171, 99, 0.5) 100%, rgba(201, 171, 99, 0.93) 65%)" }}
                      >
                        BOOK A STAND
                      </button>
                      </Link>

              <Link to="/AbstractSubmission">
                <button className="
                  px-8 py-3
                  border border-white/40
                  text-white font-semibold
                  hover:bg-white hover:text-black
                  transition
                ">
                  SUBMIT ABSTRACT
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="container mx-auto px-6 lg:px-16 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              ["25,000+", "Attendees"],
              ["250+", "Exhibitors"],
              ["1,000+", "Delegates"],
              ["500+", "Speakers"],
              ["120+", "Sessions"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="
                  bg-[#14181C]/70
                  border border-[#c9ab63]/40
                  p-4 text-center
                "
              >
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-sm text-white/80">{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>


    </section>
  );
};

export default HeroSection;
