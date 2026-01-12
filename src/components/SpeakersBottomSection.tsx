// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Mic2 } from 'lucide-react';

// function SpeakersBottomSection() {
//   return (
//     <div className="py-12 bg-gradient-to-r from-indigo-900 to-blue-900 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

//       <div className="container mx-auto px-6 text-center relative z-10">
//         <div className="max-w-2xl mx-auto">
//           <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//             Ready to Share Your Research?
//           </h2>
//           <p className="text-indigo-200 mb-8 leading-relaxed">
//             Join our distinguished speakers and present your groundbreaking work at AIMLR 2026.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//             <Link to="/AbstractSubmission">
//               <button className="bg-white text-indigo-900 font-bold py-4 px-8 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
//                 <Mic2 className="w-5 h-5" />
//                 Submit Abstract
//               </button>
//             </Link>
//             <Link to="/call-for-papers">
//               <button className="bg-transparent border-2 border-indigo-400 text-indigo-100 font-semibold py-4 px-8 hover:bg-indigo-800 hover:text-white transition-all duration-300">
//                 Learn More
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>




//     </div>
//   );
// }

// export default SpeakersBottomSection;


import React from "react";
import { Link } from "react-router-dom";
import { Mic2, ArrowRight } from "lucide-react";

function SpeakersBottomSection() {
  return (
    <section className="relative py-12 bg-[#1F2327] overflow-hidden">

      {/* Subtle divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9AB63]/60 to-transparent" />

      <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">

        {/* Icon */}
        {/* <div className="flex justify-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center border border-[#C9AB63] text-[#C9AB63]">
            <Mic2 className="w-6 h-6" />
          </div>
        </div> */}

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Ready to Share Your Research?
        </h2>

        {/* Description */}
        <p className="text-[#D1D5D8] text-base leading-relaxed mb-10">
          Join distinguished researchers, academicians, and industry experts by
          presenting your work at the AIMLR 2026 Conference.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* Primary CTA */}
          <Link to="/AbstractSubmission">
            <button
              className="
                flex items-center gap-2
                px-8 py-4
                bg-[#C9AB63]
                text-[#1F2327]
                font-semibold
                hover:bg-[#D4B46A]
                transition
              "
            >
              Submit Abstract
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          {/* Secondary CTA */}
          <Link to="/call-for-papers">
            <button
              className="
                flex items-center gap-2
                px-8 py-4
                border border-[#6B6F74]
                text-[#D1D5D8]
                hover:border-[#C9AB63]
                hover:text-[#C9AB63]
                transition
              "
            >
              Learn More
            </button>
          </Link>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9AB63]/40 to-transparent" />

    </section>
  );
}

export default SpeakersBottomSection;
