// // import React from 'react';
// // import { MapPin, Phone, Mail, ExternalLink, Navigation, Building2 } from 'lucide-react';

// // function VenueComponent() {
// //   return (
// //     <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
// //       <div className="p-4 md:p-6">
        


// //         <div className="grid lg:grid-cols-2 gap-6">
          
// //           {/* Left Column: Details */}
// //           <div className="flex flex-col h-full justify-between">
// //             <div>
// //               <div className="flex items-center gap-2 mb-2">
// //                 <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
// //                   Official Venue
// //                 </span>
// //               </div>
// //               <h3 className="text-2xl font-bold text-indigo-900 mb-4">Crowne Plaza - St. Peter's Rome</h3>
// //               <p className="text-gray-600 leading-relaxed mb-4">
// //                 Located in a green area near the Villa Doria Pamphili park, this prestigious 4-star superior hotel offers state-of-the-art conference facilities, a spa, and easy access to Vatican City.
// //               </p>


// //               <div className="space-y-2 mb-4">
// //                 <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
// //                   <MapPin className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
// //                   <div>
// //                     <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Address</span>
// //                     <span className="text-gray-800 font-medium">Via Aurelia Antica, 415, 00165 Roma RM, Italy</span>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
// //                   <Phone className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
// //                   <div>
// //                     <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Phone</span>
// //                     <a href="tel:+390666304000" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
// //                       +39 06 6630 4000
// //                     </a>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
// //                   <Mail className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
// //                   <div>
// //                     <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Email</span>
// //                     <a href="mailto:info.rome@crowneplaza.com" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
// //                       info.rome@crowneplaza.com
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Action Buttons */}
// //             <div className="flex flex-wrap gap-4 mt-auto">
// //               <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200">
// //                 <Navigation className="w-4 h-4" /> Get Directions
// //               </button>
// //               <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:text-indigo-600 transition-colors">
// //                 <ExternalLink className="w-4 h-4" /> Visit Website
// //               </button>
// //             </div>


// //                           <div className="mb-4 mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
// //                 <p className="text-sm text-yellow-800 font-medium mb-2">Important Note:</p>
// //                 <ul className="text-sm text-yellow-700 space-y-1">
// //                   <li>• The Hotel staff will only provide general information about the hotel and guest rooms; and are not responsible for any specific details about the conference.</li>
// //                   <li>• Please mention the conference name, dates along with the organizer "Magnus Group", if you wish to contact the hotel reception.</li>
// //                 </ul>
// //               </div>
// //           </div>

// //           {/* Right Column: Map */}
// //           <div className="relative h-full min-h-[400px] lg:min-h-auto rounded-2xl overflow-hidden shadow-inner border border-gray-200 bg-gray-100">
// //             <iframe
// //               title="Venue Map"
// //               width="100%"
// //               height="100%"
// //               style={{ border: 0, minHeight: '400px' }}
// //               loading="lazy"
// //               allowFullScreen
// //               referrerPolicy="no-referrer-when-downgrade"
// //               src="https://maps.google.com/maps?q=Crowne+Plaza+Rome+-+St.+Peter's&t=&z=14&ie=UTF8&iwloc=&output=embed"
// //               className="w-full h-full object-cover"
// //             ></iframe>
            
// //             {/* Map Overlay Button (Optional visual flair) */}
// //             <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold text-gray-700 flex items-center gap-2 pointer-events-none">
// //               <MapPin className="w-4 h-4 text-red-500 fill-current" />
// //               Live Location
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default VenueComponent;



// import React from 'react';
// import { MapPin, Phone, Mail, ExternalLink, Navigation } from 'lucide-react';

// function VenueComponent() {
//   return (
//     <div className=" overflow-hidden transition-all duration-300 font-sans">
      
//       {/* --------------------------------------------------
//          TOP SECTION: TEXT CONTENT
//          -------------------------------------------------- */}
//       <div className="p-6 lg:p-8">
        
//         {/* Badge & Title */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//           <div>
//             <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-3">
//               Official Venue
//             </span>
//             <h3 className="text-3xl font-bold text-indigo-900">
//               Crowne Plaza - St. Peter's Rome
//             </h3>
//           </div>
          
//           {/* Action Buttons (Moved to top-right for desktop) */}
//           <div className="flex gap-3">
//             <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 text-sm whitespace-nowrap">
//               <Navigation className="w-4 h-4" /> Get Directions
//             </button>
//             <button className="flex items-center gap-2 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-50 hover:text-indigo-600 transition-colors text-sm whitespace-nowrap">
//               <ExternalLink className="w-4 h-4" /> Visit Website
//             </button>
//           </div>
//         </div>

//         <p className="text-gray-600 leading-relaxed mb-8 text-base max-w-4xl">
//           Located in a green area near the Villa Doria Pamphili park, this prestigious 4-star superior hotel offers state-of-the-art conference facilities, a spa, and easy access to Vatican City.
//         </p>

//         {/* Info Grid - 3 Columns on Desktop since we have full width */}

// <div className="space-y-4 mb-8">

//   {/* Address */}
//   <div className="flex">
//     <div className="flex items-center text-center gap-2 p-0 w-full sm:w-80 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
//       <div className="p-3">
//         <MapPin className="w-6 h-6 text-indigo-600" />
//       </div>
//       {/* <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Address</h4> */}
//       <p className="text-gray-800 text-sm font-medium">
//         Crowne Plaza Rome, Italy
//       </p>
//     </div>
//   </div>

//   {/* Phone */}
//   <div className="flex">
//     <div className="flex items-center text-center gap-2 p-0 w-full sm:w-80 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
//       <div className="p-3">
//         <Phone className="w-6 h-6 text-indigo-600" />
//       </div>
//       {/* <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Phone</h4> */}
//       <a
//         href="tel:+390666304000"
//         className="text-gray-800 text-sm font-medium hover:text-indigo-600 transition-colors"
//       >
//         +39 06 6630 4000
//       </a>
//     </div>
//   </div>

//   {/* Email */}
//   <div className="flex">
//     <div className="flex items-center text-center gap-2 p-0 w-full sm:w-80 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
//       <div className="p-3">
//         <Mail className="w-6 h-6 text-indigo-600" />
//       </div>
//       {/* <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Email</h4> */}
//       <a
//         href="mailto:info.rome@crowneplaza.com"
//         className="text-gray-800 text-sm font-medium hover:text-indigo-600 transition-colors break-all"
//       >
//         info.rome@crowneplaza.com
//       </a>
//     </div>
//   </div>

// </div>


//         {/* Important Note */}
//         <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row gap-4 sm:items-center">
//           <div className="shrink-0 text-amber-900 font-bold text-sm uppercase flex items-center gap-2">
//              Important Note:
//           </div>
//           <div className="text-sm text-amber-800 opacity-90 border-l-0 sm:border-l-2 border-amber-200 sm:pl-4">
//              Please mention <strong>"Magnus Group"</strong> when contacting reception. Hotel staff only provide general room info, not conference details.
//           </div>
//         </div>

//       </div>

//       {/* --------------------------------------------------
//          BOTTOM SECTION: MAP (Full Width)
//          -------------------------------------------------- */}
//       <div className="w-full h-96 bg-gray-100 relative border-t border-gray-200">
//          <iframe
//            title="Venue Map"
//            width="100%"
//            height="100%"
//            style={{ border: 0 }}
//            loading="lazy"
//            allowFullScreen
//            referrerPolicy="no-referrer-when-downgrade"
//            src="http://googleusercontent.com/maps.google.com/6"
//            className="w-full h-full object-cover"
//          ></iframe>
         
//          {/* Overlay Button */}
//          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md border border-gray-200 text-xs font-bold text-gray-700 flex items-center gap-2 pointer-events-none">
//            <MapPin className="w-3 h-3 text-red-500 fill-current" />
//            Live Map View
//          </div>
//       </div>

//     </div>
//   );
// }

// export default VenueComponent;



import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Navigation } from 'lucide-react';

function VenueComponent() {
  return (
    <div className="overflow-hidden transition-all duration-300 font-sans">
      
      {/* --------------------------------------------------
         TOP SECTION: TEXT CONTENT
      -------------------------------------------------- */}
      <div className="p-6 lg:p-8">
        
        {/* Badge & Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-3">
              Official Venue
            </span>
            <h3 className="text-3xl font-bold text-indigo-900">
              Crowne Plaza Rome – St. Peter’s, Rome, Italy
            </h3>
          </div>
          
          {/* Action Buttons */}
          {/* <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 text-sm whitespace-nowrap">
              <Navigation className="w-4 h-4" /> Get Directions
            </button>
            <button className="flex items-center gap-2 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-50 hover:text-indigo-600 transition-colors text-sm whitespace-nowrap">
              <ExternalLink className="w-4 h-4" /> Visit Website
            </button>
          </div> */}
        </div>



        {/* Info Section */}
        <div className="mb-8 flex flex-col sm:flex-row justify-center sm:justify-start gap-4 sm:gap-6">
          {/* Address */}
          <div className="flex items-center gap-2 w-full sm:w-80 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition p-0">
            <div className="p-3">
              <MapPin className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-gray-800 text-sm font-medium">
              Crowne Plaza Rome, Italy
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 p-0">
              <a href="https://www.google.com/maps?q=Crowne+Plaza+Rome+St+Peter's+Rome+Italy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 text-sm whitespace-nowrap p-2">
              <Navigation className="w-4 h-4" /> Get Directions
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 w-full sm:w-80 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition p-0">
            <div className="p-3">
              <ExternalLink className="w-5 h-5 text-indigo-600" />
            </div>
            <a
              href="mailto:info.rome@crowneplaza.com"
              className="text-gray-800 text-sm font-medium hover:text-indigo-600 transition-colors break-all"
            >
              Visit Website
            </a>
          </div>
        </div>

        {/* Important Note */}
        {/* <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row gap-4 sm:items-center mb-4">
          <div className="shrink-0 text-amber-900 font-bold text-sm uppercase flex items-center gap-2">
            Important Note:
          </div>
          <div className="text-sm text-amber-800 opacity-90 border-l-0 sm:border-l-2 border-amber-200 sm:pl-4">
            Please mention <strong>"Magnus Group"</strong> when contacting reception. Hotel staff only provide general room info, not conference details.
          </div>
        </div> */}

        {/* Additional Conference Info */}
        {/* <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm text-blue-900 leading-relaxed">
            <strong>Conference Dates:</strong> July 28-30, 2026.<br /><br />
            The Hotel staff will only provide general information about the hotel and guest rooms; and are not responsible for any specific details about the conference. <br /><br />
            Please mention the conference name, dates along with the organizer “Magnus Group”, if you wish to contact the hotel reception.
          </p>
        </div> */}

      </div>

      {/* --------------------------------------------------
         MAP SECTION
      -------------------------------------------------- */}


      <div className="w-full h-95 bg-gray-100 relative border-t border-gray-200">
  <iframe
    title="Venue Map"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1927616323837!2d12.423528374610969!3d41.88871136475198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5fe8b4bf70cd%3A0x586cc964285c08da!2sCrowne%20Plaza%20Rome%20-%20St.%20Peter&#39;s%20by%20IHG!5e0!3m2!1sen!2sin!4v1765214827132!5m2!1sen!2sin"
    className="w-full h-full object-cover"
  ></iframe>

  {/* Overlay Button */}
  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md border border-gray-200 text-xs font-bold text-gray-700 flex items-center gap-2 pointer-events-none">
    <MapPin className="w-3 h-3 text-red-500" />
    Live Map View
  </div>
</div>


    </div>
  );
}

export default VenueComponent;
