// // import React from "react";
// // import { MapPin, ArrowRight } from "lucide-react";
// // import { Link } from "react-router-dom";

// // const VenueAndContactSection = () => {
// //   return (
// //     <div className="py-16 px-6 md:px-16">
// //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

// //         {/* LEFT — Venue Section */}
// //         <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 text-center">
// //           <MapPin size={36} className="text-indigo-600 mb-4 mx-auto" />
// //           <h3 className="text-2xl font-semibold text-gray-900 mb-2">Conference Venue</h3>
// //           <p className="text-gray-600 text-lg mb-4">Crowne Plaza — St. Peter's Rome</p>
// //           <p className="text-gray-500 text-sm mb-6 leading-relaxed">
// //             Located in the heart of Rome near Vatican City, this prestigious 4-star superior hotel offers 
// //             state-of-the-art conference facilities, elegant accommodations, and easy access to historic 
// //             landmarks and cultural attractions.
// //           </p>

// //           <Link
// //             to="/venue-travel"
// //             className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
// //           >
// //             View Venue Details
// //             <ArrowRight size={18} />
// //           </Link>
// //         </div>

// //         {/* RIGHT — Contact Section */}
// //         <div>
// //           <div className="flex items-center gap-4 mb-4">
// //             <div className="w-12 h-12 border-2 border-white p-2 rounded">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //                 className="w-full h-full text-white"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M16 12H8m8 4H8m-4 4h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
// //                 />
// //               </svg>
// //             </div>
// //             <h2 className="text-2xl font-semibold text-white">Let's Keep in Touch</h2>
// //           </div>

// //           <p className="text-lg text-gray-700 leading-relaxed mb-6">
// //             For inquiries related to participation, sponsorship, speaking opportunities, or general 
// //             information, please visit our contact page. Our team will respond as soon as possible.
// //           </p>

// //           <Link to="/contact">
// //             <button className="bg-[#344278] hover:bg-[#46629a] text-white font-bold py-3 px-10 rounded-lg transition-colors duration-300">
// //               Contact Us
// //             </button>
// //           </Link>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default VenueAndContactSection;



// import React from "react";
// import { MapPin, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const VenueAndContactSection = () => {
//   return (
//     <div className="py-20 px-6 md:px-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT — Venue Section */}
//         <div
//           className="bg-white p-10 border border-gray-100 text-center transition-all duration-300 hover:shadow-2xl"
//         >
//           <MapPin size={40} className="text-indigo-600 mb-5 mx-auto" />
//           <h3 className="text-3xl font-semibold text-gray-900 mb-3">
//             Conference Venue
//           </h3>
//           <p className="text-gray-600 text-lg font-medium mb-4">
//             Crowne Plaza — St. Peter's Rome
//           </p>
          
//           {/* <p className="text-gray-500 text-sm leading-relaxed mb-8">
//             Nestled near Vatican City, this 4-star superior hotel features
//             advanced conference facilities, modern accommodations, and quick
//             access to Rome’s most iconic cultural and historical landmarks.
//           </p> */}

//           <Link
//             to="/venue-travel"
//             className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3 hover:bg-indigo-700 transition duration-300 font-semibold"
//             title="View detailed venue and travel information for AIMLR 2026 Conference in Rome"
//             aria-label="View detailed venue and travel information for AIMLR 2026 Conference in Rome"
//           >
//             View Venue Details
//             <ArrowRight size={18}/>
//           </Link>
//         </div>

//         {/* RIGHT — Contact Section */}
//         <div className="p-8 md:p-10 bg-gradient-to-r from-[#333f66] to-[#525f92] text-white shadow-xl">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-14 h-14 border-2 border-white p-3 rounded-lg flex justify-center items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-full h-full"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M16 12H8m8 4H8m-4 4h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 />
//               </svg>
//             </div>
//             <h2 className="text-3xl font-semibold">Let's Connect</h2>
//           </div>

//           <p className="text-lg text-gray-200 leading-relaxed mb-8">
//             Have questions about registration, sponsorship, or speaking
//             opportunities? Visit our contact page and our team will get back to
//             you shortly.
//           </p>

//           <Link to="/contact" title="Contact AIMLR 2026 Conference Organizers" aria-label="Contact AIMLR 2026 Conference Organizers">
//             <button className="bg-white text-[#344278] font-bold py-3 px-10 transition duration-300 hover:bg-gray-200" title="Contact AIMLR 2026 Conference Organizers" aria-label="Contact AIMLR 2026 Conference Organizers">
//               Contact Us
//             </button>
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default VenueAndContactSection;









import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const VenueAndContactSection = () => {
  return (
    <section className="bg-[#F3F3F3] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

        {/* LEFT — Venue */}
        <div className="bg-white p-12 border border-[#E2E2E2] flex flex-col justify-center">
          <MapPin size={36} className="text-[#C9AB63] mb-6" />

          <h3 className="text-2xl font-semibold text-[#111] mb-3">
            Conference Venue
          </h3>

          <p className="text-[#6B6F74] text-lg mb-8">
            Crowne Plaza — St. Peter&apos;s Rome
          </p>

          <Link
            to="/venue-travel"
            className="inline-flex items-center gap-3 text-sm font-semibold text-[#111] hover:underline"
            title="View detailed venue and travel information for AIMLR 2026 Conference in Rome"
            aria-label="View detailed venue and travel information for AIMLR 2026 Conference in Rome"
          >
            View Venue Details
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* RIGHT — Contact */}
        <div style={{ backgroundImage: "linear-gradient(180deg, #3f444aff 0%, #3a3f45 100%)" }} className="bg-[#3F444A] p-12 text-white flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">
            Let&apos;s Connect
          </h3>

          <p className="text-[#D1D5D8] text-lg leading-relaxed mb-10">
            Have questions about registration, sponsorship, or speaking
            opportunities? Visit our contact page and our team will get back to
            you shortly.
          </p>

          <Link
            to="/contact"
            title="Contact AIMLR 2026 Conference Organizers"
            aria-label="Contact AIMLR 2026 Conference Organizers"
            className="inline-block w-fit"
          >
            <span className="
              inline-block

              text-white
              text-sm
              font-semibold
              px-10 py-3
              transition

            "
            style={{ backgroundImage: "linear-gradient(90deg, rgba(201, 170, 99, 0.99) 0%, rgba(201, 170, 99, 0.94) 39%, rgba(201, 170, 99, 0.77) 100%, rgba(201, 170, 99, 0.95) 65%)" }}
            >
              Contact Us
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default VenueAndContactSection;
