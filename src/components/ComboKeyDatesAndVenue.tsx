// // // // import React from 'react';
// // // // import { Calendar, Clock, FileText, UserCheck, MapPin, ArrowRight } from 'lucide-react';
// // // // import { Link } from 'react-router-dom';

// // // // const ComboKeyDatesAndVenue: React.FC = () => {
// // // //   const conferenceDates = [
// // // //     { day: 'Wednesday', date: '28 July 2026', time: '08:00 – 16:00' },
// // // //     { day: 'Thursday', date: '29 July 2026', time: '08:30 – 16:00' },
// // // //     { day: 'Friday', date: '30 July 2026', time: '09:00 – 16:00' }
// // // //   ];

// // // //   const deadlines = [
// // // //     { title: 'Abstract Submission Deadline', date: 'March 15, 2026', icon: FileText, color: 'orange' },
// // // //     { title: 'Registration Deadline', date: 'June 15, 2026', icon: UserCheck, color: 'red' }
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       {/* Key Dates Section */}
// // // //       <section className="py-16 px-4 sm:px-6 lg:px-32 bg-gradient-to-br from-slate-50 to-gray-50">
// // // //         <div className="container mx-auto max-w-6xl">
// // // //           {/* Header */}
// // // //           <div className="text-center mb-12">
// // // //             <h2
// // // //               style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
// // // //               className="text-3xl md:text-4xl font-bold mb-4"
// // // //             >
// // // //               Key Dates
// // // //             </h2>
// // // //             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
// // // //               Mark your calendar for the most important dates of ICAMLR 2026
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // // //             {/* Conference Schedule */}
// // // //             <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
// // // //               <div className="flex items-center gap-3 mb-6">
// // // //                 <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
// // // //                   <Clock className="w-5 h-5 text-indigo-600" />
// // // //                 </div>
// // // //                 <h3 className="text-xl font-bold text-gray-800">Conference Schedule</h3>
// // // //               </div>

// // // //               <div className="space-y-4">
// // // //                 {conferenceDates.map((item, index) => (
// // // //                   <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-400">
// // // //                     <div>
// // // //                       <p className="font-semibold text-gray-800">{item.day} {item.date}</p>
// // // //                     </div>
// // // //                     <div className="text-right">
// // // //                       <p className="text-sm text-gray-600">{item.time}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* Important Deadlines */}
// // // //             <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
// // // //               <div className="flex items-center gap-3 mb-6">
// // // //                 <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
// // // //                   <FileText className="w-5 h-5 text-red-600" />
// // // //                 </div>
// // // //                 <h3 className="text-xl font-bold text-gray-800">Important Deadlines</h3>
// // // //               </div>

// // // //               <div className="space-y-4">
// // // //                 {deadlines.map((deadline, index) => {
// // // //                   const IconComponent = deadline.icon;
// // // //                   return (
// // // //                     <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-400">
// // // //                       <div className={`w-10 h-10 bg-${deadline.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
// // // //                         <IconComponent className={`w-5 h-5 text-${deadline.color}-600`} />
// // // //                       </div>
// // // //                       <div>
// // // //                         <p className="font-semibold text-gray-800 text-sm">{deadline.title}</p>
// // // //                         <p className="text-lg font-bold text-gray-900 mt-1">{deadline.date}</p>
// // // //                       </div>
// // // //                     </div>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Venue Preview Section */}
// // // //       <section className="py-20 px-6 lg:px-28 bg-white">
// // // //         <div className="container mx-auto text-center max-w-6xl">
// // // //           {/* Title */}
// // // //           <h2
// // // //             className="text-4xl md:text-5xl font-bold mb-4"
// // // //             style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
// // // //           >
// // // //             Venue & Travel
// // // //           </h2>

// // // //           <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
// // // //             Immerse yourself in the timeless beauty of Rome during ICAMLR 2026. Explore comprehensive venue details, seamless travel arrangements, luxurious accommodation options, and discover the rich cultural attractions that surround our conference location.
// // // //           </p>

// // // //           {/* Expanded Card */}
// // // //           <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10 transition hover:shadow-2xl rounded-2xl">
// // // //             {/* Text Section with Better Spacing */}
// // // //             <div className="space-y-6 text-center lg:text-left flex-1">
// // // //               <div className="flex items-center gap-4 justify-center lg:justify-start">
// // // //                 <MapPin className="text-indigo-600 w-7 h-7" />
// // // //                 <span className="font-semibold text-gray-900 text-2xl">
// // // //                   Crowne Plaza — St. Peter’s Rome
// // // //                 </span>
// // // //               </div>

// // // //               <div className="flex items-center gap-4 justify-center lg:justify-start">
// // // //                 <Calendar className="text-indigo-600 w-7 h-7" />
// // // //                 <span className="text-gray-700 text-xl">
// // // //                   July 28–30, 2026
// // // //                 </span>
// // // //               </div>

// // // //               <p className="text-gray-600 text-base md:text-lg leading-relaxed">
// // // //                 Located in the heart of Rome, this luxurious hotel offers world-class amenities, easy access to Vatican City, and stunning views of the Eternal City. Enjoy modern conference facilities combined with the charm of historic Rome.
// // // //               </p>

// // // //               {/* Venue Highlights */}
// // // //               <div className="space-y-2">
// // // //                 <h3 className="font-semibold text-gray-900 text-lg">Venue Highlights:</h3>
// // // //                 <ul className="text-gray-600 text-sm md:text-base space-y-1">
// // // //                   <li>• State-of-the-art conference rooms</li>
// // // //                   <li>• Proximity to Vatican City and historic sites</li>
// // // //                   <li>• Premium dining and accommodation</li>
// // // //                   <li>• Easy access to Rome's public transport</li>
// // // //                 </ul>
// // // //               </div>
// // // //             </div>

// // // //             {/* Button */}
// // // //             <Link
// // // //               to="/venue-travel"
// // // //               className="inline-flex items-center gap-3 bg-indigo-600 text-white px-10 py-4 hover:bg-indigo-700 transition-all duration-300 text-lg md:text-xl whitespace-nowrap rounded-lg shadow-lg hover:shadow-xl"
// // // //             >
// // // //               View Venue Details
// // // //               <ArrowRight className="w-6 h-6" />
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </>
// // // //   );
// // // // };

// // // // export default ComboKeyDatesAndVenue;


// // // import React from 'react';
// // // import { Calendar, Clock, FileText, UserCheck, MapPin, ArrowRight } from 'lucide-react';
// // // import { Link } from 'react-router-dom';

// // // const ComboKeyDatesAndVenue: React.FC = () => {
// // //   const conferenceDates = [
// // //     { day: 'Wednesday', date: '28 July 2026', time: '08:00 – 16:00' },
// // //     { day: 'Thursday', date: '29 July 2026', time: '08:30 – 16:00' },
// // //     { day: 'Friday', date: '30 July 2026', time: '09:00 – 16:00' }
// // //   ];

// // //   const deadlines = [
// // //     { title: 'Abstract Submission Deadline', date: 'March 15, 2026', icon: FileText, color: 'orange' },
// // //     { title: 'Registration Deadline', date: 'June 15, 2026', icon: UserCheck, color: 'red' }
// // //   ];

// // //   return (
// // //     <section className="py-20 px-6 lg:px-20 bg-white">
// // //       <div className="max-w-6xl mx-auto">
        
// // //         {/* Unified Card */}
// // //         <div className="bg-white rounded-3xl shadow-2xl p-10 border border-indigo-200">

// // //           {/* Title */}
// // //           <div className="text-center mb-12">
// // //             <h2
// // //               className="text-4xl md:text-5xl font-bold mb-4"
// // //               style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
// // //             >
// // //               Key Dates & Venue
// // //             </h2>
// // //             <p className="text-gray-600 text-lg">
// // //               Your complete schedule and venue information — all in one place.
// // //             </p>
// // //           </div>

// // //           {/* Content Grid */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
// // //             {/* Conference Schedule */}
// // //             <div className="space-y-6">
// // //               <div className="flex items-center gap-4">
// // //                 <Clock className="text-indigo-600 w-7 h-7" />
// // //                 <h3 className="text-xl font-semibold text-gray-700">Conference Schedule</h3>
// // //               </div>

// // //               <div className="space-y-4">
// // //                 {conferenceDates.map((item, index) => (
// // //                   <div key={index} className="bg-gray-50 p-4 rounded-xl border border-indigo-100">
// // //                     <p className="font-semibold text-gray-900">{item.day}, {item.date}</p>
// // //                     <p className="text-sm text-gray-600">{item.time}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Important Deadlines */}
// // //             <div className="space-y-6">
// // //               <div className="flex items-center gap-4">
// // //                 <FileText className="text-red-600 w-7 h-7" />
// // //                 <h3 className="text-xl font-semibold text-gray-700">Important Deadlines</h3>
// // //               </div>

// // //               <div className="space-y-4">
// // //                 {deadlines.map((deadline, index) => {
// // //                   const IconComponent = deadline.icon;
// // //                   return (
// // //                     <div key={index} className="flex items-start gap-4 bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200">
// // //                       <div className={`w-10 h-10 bg-${deadline.color}-100 rounded-full flex items-center justify-center`}>
// // //                         <IconComponent className={`text-${deadline.color}-600 w-5 h-5`} />
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-semibold text-gray-800 text-sm">{deadline.title}</p>
// // //                         <p className="text-lg font-bold text-gray-900">{deadline.date}</p>
// // //                       </div>
// // //                     </div>
// // //                   );
// // //                 })}
// // //               </div>
// // //             </div>

// // //             {/* Venue */}
// // //             <div className="space-y-6">
// // //               <div className="flex items-center gap-4">
// // //                 <MapPin className="text-indigo-600 w-7 h-7" />
// // //                 <h3 className="text-xl font-semibold text-gray-700">Venue</h3>
// // //               </div>

// // //               <p className="text-gray-900 font-semibold text-lg">Crowne Plaza — St. Peter’s Rome</p>
// // //               <div className="flex items-center gap-3">
// // //                 <Calendar className="text-indigo-500 w-5 h-5" />
// // //                 <span className="text-gray-700">July 28–30, 2026</span>
// // //               </div>

// // //               <p className="text-gray-600 text-sm leading-relaxed">
// // //                 Located in the heart of Rome with premium facilities, transport access, and stunning historic surroundings.
// // //               </p>

// // //               <Link
// // //                 to="/venue-travel"
// // //                 className="inline-flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition-all"
// // //               >
// // //                 View Venue Details
// // //                 <ArrowRight className="w-5 h-5" />
// // //               </Link>
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ComboKeyDatesAndVenue;


// // import React from 'react';
// // import { Calendar, Clock, FileText, UserCheck, MapPin, ArrowRight } from 'lucide-react';
// // import { Link } from 'react-router-dom';

// // const ComboKeyDatesAndVenue: React.FC = () => {
// //   const conferenceDates = [
// //     { day: 'Wednesday', date: '28 July 2026', time: '08:00 – 16:00' },
// //     { day: 'Thursday', date: '29 July 2026', time: '08:30 – 16:00' },
// //     { day: 'Friday', date: '30 July 2026', time: '09:00 – 16:00' }
// //   ];

// //   const deadlines = [
// //     { title: 'Abstract Submission Deadline', date: 'March 15, 2026', icon: FileText, color: 'orange' },
// //     { title: 'Registration Deadline', date: 'June 15, 2026', icon: UserCheck, color: 'red' }
// //   ];

// //   return (
// //     <section className="py-20 px-6 lg:px-20 bg-white">
// //       <div className="max-w-6xl mx-auto">
        
// //         {/* Single Unified Card */}
// //         <div className="bg-white rounded-3xl shadow-2xl p-10 border border-indigo-200">

// //           {/* Header */}
// //           <div className="text-center mb-12">
// //             <h2
// //               className="text-4xl md:text-5xl font-bold mb-4"
// //               style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
// //             >
// //               Key Dates & Venue
// //             </h2>
// //             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
// //               Important dates and official venue information for ICAMLR 2026.
// //             </p>
// //           </div>

// //           {/* Top Two-Column Layout */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">

// //             {/* Conference Schedule */}
// //             <div className="space-y-6">
// //               <div className="flex items-center gap-4">
// //                 <Clock className="text-indigo-600 w-7 h-7" />
// //                 <h3 className="text-xl font-semibold text-gray-700">Conference Schedule</h3>
// //               </div>

// //               <div className="space-y-4">
// //                 {conferenceDates.map((item, index) => (
// //                   <div key={index} className="bg-gray-50 p-4 rounded-xl border border-indigo-100">
// //                     <p className="font-semibold text-gray-900">{item.day}, {item.date}</p>
// //                     <p className="text-sm text-gray-600">{item.time}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Deadlines */}
// //             <div className="space-y-6">
// //               <div className="flex items-center gap-4">
// //                 <FileText className="text-red-600 w-7 h-7" />
// //                 <h3 className="text-xl font-semibold text-gray-700">Important Deadlines</h3>
// //               </div>

// //               <div className="space-y-4">
// //                 {deadlines.map((deadline, index) => {
// //                   const IconComponent = deadline.icon;
// //                   return (
// //                     <div
// //                       key={index}
// //                       className="flex items-start gap-4 bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200"
// //                     >
// //                       <div className={`w-10 h-10 bg-${deadline.color}-100 rounded-full flex items-center justify-center`}>
// //                         <IconComponent className={`text-${deadline.color}-600 w-5 h-5`} />
// //                       </div>
// //                       <div>
// //                         <p className="font-semibold text-gray-800 text-sm">{deadline.title}</p>
// //                         <p className="text-lg font-bold text-gray-900">{deadline.date}</p>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Divider */}
// //           <div className="w-full border-t border-gray-200 my-10"></div>

// //           {/* Venue (Bottom, Full Width) */}
// //           <div className="text-center space-y-6 max-w-3xl mx-auto">
// //             <div className="flex items-center justify-center gap-3">
// //               <MapPin className="text-indigo-600 w-7 h-7" />
// //               <h3 className="text-2xl font-semibold text-gray-900">Crowne Plaza — St. Peter’s Rome</h3>
// //             </div>

// //             <div className="flex justify-center items-center gap-3">
// //               <Calendar className="text-indigo-500 w-5 h-5" />
// //               <span className="text-lg text-gray-700">July 28–30, 2026</span>
// //             </div>

// //             <p className="text-gray-600 text-base leading-relaxed">
// //               A luxury venue in the heart of Rome with world-class facilities, easy travel access, historic attractions, and premium hospitality services.
// //             </p>

// //             <Link
// //               to="/venue-travel"
// //               className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg shadow-lg hover:bg-indigo-700 transition-all"
// //             >
// //               View Venue Details
// //               <ArrowRight className="w-6 h-6" />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ComboKeyDatesAndVenue;


// import React from 'react';
// import { Calendar, Clock, FileText, UserCheck, MapPin, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const ComboKeyDatesAndVenue: React.FC = () => {
//   const conferenceDates = [
//     { day: 'Wednesday 28 July 2026', time: '08:00 – 16:00' },
//     { day: 'Thursday 29 July 2026', time: '08:30 – 16:00' },
//     { day: 'Friday 30 July 2026', time: '09:00 – 16:00' }
//   ];

//   const deadlines = [
//     { title: 'Abstract Submission Deadline', date: 'March 15, 2026', icon: FileText, color: "bg-orange-100 text-orange-500" },
//     { title: 'Registration Deadline', date: 'June 15, 2026', icon: UserCheck, color: "bg-red-100 text-red-500" }
//   ];

//   const conferenceOpenings = [
//     { title: 'Abstract Submission Opens', date: 'January 1, 2026', icon: FileText, color: "bg-blue-100 text-blue-500" },
//     { title: 'Registration Opens', date: 'February 1, 2026', icon: UserCheck, color: "bg-green-100 text-green-500" },
//     { title: 'Early Bird Registration', date: 'March 31, 2026', icon: Clock, color: "bg-purple-100 text-purple-500" }
//   ];

//   const registrationDeadlines = [
//     { title: 'Early Bird Registration', date: 'April 30, 2026', icon: Clock, color: "bg-green-100 text-green-500" },
//     { title: 'Mid Term Registration', date: 'June 15, 2026', icon: UserCheck, color: "bg-yellow-100 text-yellow-500" },
//     { title: 'On Spot Registration', date: 'July 28, 2026', icon: Calendar, color: "bg-red-100 text-red-500" }
//   ];

//   const abstractDeadlines = [
//     { title: 'First Round Submission', date: 'February 15, 2026', icon: FileText, color: "bg-blue-100 text-blue-500" },
//     { title: 'Second Round Submission', date: 'March 1, 2026', icon: FileText, color: "bg-indigo-100 text-indigo-500" },
//     { title: 'Final Round Submission', date: 'March 15, 2026', icon: FileText, color: "bg-red-100 text-red-500" }
//   ];

//   return (
//     <section className="py-20 px-6 lg:px-20 bg-[#f9fbff]">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-[#2E376C]">Important dates & venue</h2>
//           <p className="text-gray-600 max-w-xl mx-auto mt-2">
//             Mark your calendar for the most important dates of ICAMLR 2026
//           </p>
//         </div>

//         {/* Main Card */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {/* Conference Schedule Card */}
//           <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
//                 <Clock className="text-indigo-600" size={22} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">Conference Schedule</h3>
//             </div>

//             <div className="space-y-4">
//               {conferenceDates.map((item, index) => (
//                 <div key={index} className="flex justify-between items-center bg-gray-50 px-5 py-4 rounded-xl border-l-4 border-indigo-500">
//                   <p className="text-gray-800 font-medium">{item.day}</p>
//                   <p className="text-gray-600 text-sm">{item.time}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Conference Dates Card */}
//           <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                 <Calendar className="text-blue-600" size={22} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">Conference Dates</h3>
//             </div>

//             <div className="space-y-4">
//               {conferenceOpenings.map((item, index) => {
//                 const IconItem = item.icon;
//                 return (
//                   <div key={index} className="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-400 flex items-start gap-4">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.color}`}>
//                       <IconItem size={16} />
//                     </div>
//                     <div>
//                       <p className="text-gray-700 text-sm font-medium">{item.title}</p>
//                       <p className="text-base font-bold text-gray-900">{item.date}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Registration Deadlines Card */}
//           <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
//                 <UserCheck className="text-green-600" size={22} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">Registration Deadlines</h3>
//             </div>

//             <div className="space-y-4">
//               {registrationDeadlines.map((item, index) => {
//                 const IconItem = item.icon;
//                 return (
//                   <div key={index} className="p-4 rounded-xl bg-green-50 border-l-4 border-green-400 flex items-start gap-4">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.color}`}>
//                       <IconItem size={16} />
//                     </div>
//                     <div>
//                       <p className="text-gray-700 text-sm font-medium">{item.title}</p>
//                       <p className="text-base font-bold text-gray-900">{item.date}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Abstract Deadlines Card */}
//           <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
//                 <FileText className="text-purple-600" size={22} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">Abstract Deadlines</h3>
//             </div>

//             <div className="space-y-4">
//               {abstractDeadlines.map((item, index) => {
//                 const IconItem = item.icon;
//                 return (
//                   <div key={index} className="p-4 rounded-xl bg-purple-50 border-l-4 border-purple-400 flex items-start gap-4">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.color}`}>
//                       <IconItem size={16} />
//                     </div>
//                     <div>
//                       <p className="text-gray-700 text-sm font-medium">{item.title}</p>
//                       <p className="text-base font-bold text-gray-900">{item.date}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Important Deadlines Card */}
//           <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
//                 <FileText className="text-pink-500" size={22} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">Important Deadlines</h3>
//             </div>

//             <div className="space-y-4">
//               {deadlines.map((deadline, index) => {
//                 const IconItem = deadline.icon;
//                 return (
//                   <div key={index} className="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-400 flex items-start gap-4">
//                     <div className={`w-10 h-10 rounded-full flex items-center justify-center ${deadline.color}`}>
//                       <IconItem size={20} />
//                     </div>
//                     <div>
//                       <p className="text-gray-700 text-sm font-medium">{deadline.title}</p>
//                       <p className="text-lg font-bold text-gray-900">{deadline.date}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Venue Card Placeholder */}
//           <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex flex-col justify-center items-center text-center">
//             <MapPin className="text-indigo-600 mb-4" size={32} />
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">Conference Venue</h3>
//             <p className="text-gray-600 text-sm mb-4">Crowne Plaza — St. Peter's Rome</p>
//             <Link
//               to="/venue-travel"
//               className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
//             >
//               View Details
//               <ArrowRight size={16} />
//             </Link>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ComboKeyDatesAndVenue;



import React from 'react';
import { Calendar, Clock, FileText, UserCheck, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComboKeyDatesAndVenue: React.FC = () => {

  const conferenceOpenings = [
    { title: 'Abstract Submission Opens:', date: 'October 30, 2025' },
    { title: 'Registration Opens:', date: 'October 31, 2025' },
    { title: 'Early Bird Registration:', date: 'December 17, 2025' },
  ];

  const registrationDeadlines = [
    { title: 'Early Bird Registration:', date: 'December 17, 2025' },
    { title: 'Mid Term Registration:', date: 'February 28, 2026' },
    { title: 'On Spot Registration:', date: 'October 22, 2026' },
  ];

  const abstractDeadlines = [
    { title: 'First Round Submission:', date: 'December 15, 2025' },
    { title: 'Second Round Submission:', date: 'February 26, 2026' },
    { title: 'Final Round Submission:', date: 'October 14, 2026', highlight: false },
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#f9fbff]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2E376C]">Important Dates & Venue</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Mark your calendar for the key milestones of ICAMLR 2026
          </p>
        </div>

        {/* --- THREE MAIN CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Conference Dates */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200">
            <div className="bg-[#003b66] text-white text-center font-semibold py-3 rounded-t-3xl">
              Conference Dates
            </div>
            <div className="p-6 text-center space-y-5">
              {conferenceOpenings.map((item, index) => (
                <div key={index}>
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Deadline */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200">
            <div className="bg-[#0096c7] text-white text-center font-semibold py-3 rounded-t-3xl">
              Registrations Deadline
            </div>
            <div className="p-6 text-center space-y-5">
              {registrationDeadlines.map((item, index) => (
                <div key={index}>
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Deadlines */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200">
            <div className="bg-[#1a1a1a] text-white text-center font-semibold py-3 rounded-t-3xl">
              Abstract Deadline
            </div>
            <div className="p-6 text-center space-y-5">
              {abstractDeadlines.map((item, index) => (
                <div key={index}>
                  <p className={`font-semibold ${item.highlight ? "bg-teal-400 px-2 rounded text-white" : ""}`}>
                    {item.title}
                  </p>
                  <p>{item.date}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- VENUE SECTION BELOW CARDS --- */}
        <div className="mt-8 flex flex-col items-center text-center bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
          <MapPin size={36} className="text-indigo-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Conference Venue</h3>
          <p className="text-gray-600 text-lg mb-4">Crowne Plaza — St. Peter's Rome</p>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed max-w-2xl">
            Located in the heart of Rome near Vatican City, this prestigious 4-star superior hotel offers state-of-the-art conference facilities, 
            elegant accommodations, and easy access to historic landmarks and cultural attractions.
          </p>

          <Link
            to="/venue-travel"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            View Venue Details
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ComboKeyDatesAndVenue;
