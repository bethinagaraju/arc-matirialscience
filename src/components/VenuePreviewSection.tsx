// // import React from "react";
// // import { MapPin, Calendar, ArrowRight } from "lucide-react";
// // import { Link } from "react-router-dom";

// // const VenuePreviewSection = () => {
// //   return (
// //     <section className="py-16 px-6 lg:px-32 bg-white">
// //       <div className="container mx-auto text-center">
        
// //         {/* Title */}
// //         <h2
// //           className="text-3xl md:text-4xl font-bold mb-4"
// //           style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
// //         >
// //           Venue & Travel
// //         </h2>

// //         <p className="text-gray-600 max-w-2xl mx-auto mb-10">
// //           Join us in beautiful Rome for AIMLR 2026 — explore venue details, hotel options,
// //           travel routes, and local attractions.
// //         </p>

// //         {/* Small venue info card */}
// //         <div className="bg-indigo-50 hover:bg-indigo-100 transition rounded-xl p-6 max-w-3xl mx-auto shadow-md mb-8 flex flex-col md:flex-row items-center gap-6">

// //           <div className="flex-1 text-left">
// //             <div className="flex items-center gap-3 mb-2">
// //               <MapPin className="text-indigo-600" />
// //               <p className="font-semibold text-gray-800 text-lg">
// //                 Crowne Plaza — St. Peter’s Rome
// //               </p>
// //             </div>

// //             <div className="flex items-center gap-3">
// //               <Calendar className="text-indigo-600" />
// //               <p className="text-gray-700">
// //                 July 28–30, 2026
// //               </p>
// //             </div>
// //           </div>

// //           <img
// //             src="https://via.placeholder.com/120x120?text=Map"
// //             alt="map preview"
// //             className="rounded-lg shadow-sm w-28 h-28 object-cover"
// //           />

// //         </div>

// //         {/* Button */}
// //         <Link
// //           to="/venue-travel"
// //           className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300"
// //         >
// //           View Venue Details
// //           <ArrowRight className="w-5 h-5" />
// //         </Link>
// //       </div>
// //     </section>
// //   );
// // };

// // export default VenuePreviewSection;







// import React from "react";
// import { MapPin, Calendar, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const VenuePreviewSection = () => {
//   return (
//     <section className="py-10 px-6 lg:px-28 bg-white">
//       <div className="container mx-auto text-center max-w-4xl">

//         {/* Title */}
//         <h2
//           className="text-2xl md:text-3xl font-bold mb-3"
//           style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
//         >
//           Venue & Travel
//         </h2>

//         <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed">
//           Experience Rome while attending AIMLR 2026 — discover venue location,
//           travel guidance, and accommodation options.
//         </p>

//         {/* Compact Card */}
//         <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200 p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 transition hover:shadow-md">

//           <div className="text-center space-y-2">
//             <div className="flex items-center gap-2 justify-center">
//               <MapPin className="text-indigo-600 w-5 h-5" />
//               <p className="font-medium text-gray-800 text-base">
//                 Crowne Plaza — St. Peter's Rome
//               </p>
//             </div>

//             <div className="flex items-center gap-2 justify-center">
//               <Calendar className="text-indigo-600 w-5 h-5" />
//               <p className="text-gray-700 text-sm md:text-base">July 28–30, 2026</p>
//             </div>
//           </div>

//           <Link
//             to="/venue-travel"
//             className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-all duration-300 text-sm md:text-base whitespace-nowrap"
//           >
//             View Venue Details
//             <ArrowRight className="w-4 h-4" />
//           </Link>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default VenuePreviewSection;




import React from "react";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const VenuePreviewSection = () => {
  return (
    <section className="py-20 px-6 lg:px-28 bg-white">
      <div className="container mx-auto text-center max-w-6xl">

        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
        >
          Venue & Travel
        </h2>

        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          Immerse yourself in the timeless beauty of Rome during AIMLR 2026. Explore comprehensive venue details, seamless travel arrangements, luxurious accommodation options, and discover the rich cultural attractions that surround our conference location.
        </p>

        {/* Expanded Card */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10 transition hover:shadow-2xl rounded-2xl">

          {/* Text Section with Better Spacing */}
          <div className="space-y-6 text-center lg:text-left flex-1">

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <MapPin className="text-indigo-600 w-7 h-7" />
              <span className="font-semibold text-gray-900 text-2xl">
                Crowne Plaza — St. Peter’s Rome
              </span>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Calendar className="text-indigo-600 w-7 h-7" />
              <span className="text-gray-700 text-xl">
                July 28–30, 2026
              </span>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Located in the heart of Rome, this luxurious hotel offers world-class amenities, easy access to Vatican City, and stunning views of the Eternal City. Enjoy modern conference facilities combined with the charm of historic Rome.
            </p>

            {/* Venue Highlights */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-lg">Venue Highlights:</h3>
              <ul className="text-gray-600 text-sm md:text-base space-y-1">
                <li>• State-of-the-art conference rooms</li>
                <li>• Proximity to Vatican City and historic sites</li>
                <li>• Premium dining and accommodation</li>
                <li>• Easy access to Rome's public transport</li>
              </ul>
            </div>

          </div>

          {/* Button */}
          <Link
            to="/venue-travel"
            className="inline-flex items-center gap-3 bg-indigo-600 text-white px-10 py-4 hover:bg-indigo-700 transition-all duration-300 text-lg md:text-xl whitespace-nowrap rounded-lg shadow-lg hover:shadow-xl"
          >
            View Venue Details
            <ArrowRight className="w-6 h-6" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default VenuePreviewSection;
