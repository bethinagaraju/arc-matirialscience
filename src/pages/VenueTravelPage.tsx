// // import React from 'react';
// // import Header from '../components/Header';
// // import { MapPin, Plane, Car, Hotel, Camera, Phone, Mail, Globe } from 'lucide-react';

// // function VenueTravelPage() {
// //   return (
// //     <div>
// //       <Header />
// //       <div className="bg-gradient-to-r from-indigo-900 to-blue-500 text-white py-16">
// //         <div className="container mx-auto px-4 text-center">
// //           <h1 className="text-4xl font-bold mb-4">Venue & Travel</h1>
// //           <p className="text-xl">Everything you need to know about attending AIMLR 2026 in Rome</p>
// //         </div>
// //       </div>

// //       <div className="py-16 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-6xl mx-auto space-y-16">

// //             {/* Venue Information */}
// //             <div className="bg-gray-50 p-8 rounded-lg">
// //               <div className="flex items-start gap-4">
// //                 <MapPin className="w-8 h-8 text-indigo-600 mt-1" />
// //                 <div className="w-full">
// //                   <h2 className="text-3xl font-bold mb-6 text-gray-900">Conference Venue</h2>
// //                   <div className="grid md:grid-cols-2 gap-8">
// //                     <div>
// //                       <h3 className="text-2xl font-semibold mb-4 text-indigo-900">Crowne Plaza - St. Peter's Rome</h3>
// //                       <p className="text-gray-700 mb-4">
// //                         Located in the heart of Rome, this prestigious hotel offers state-of-the-art conference facilities,
// //                         elegant accommodations, and easy access to Vatican City and historic Rome.
// //                       </p>
// //                       <div className="space-y-2 text-gray-600">
// //                         <p><strong>Address:</strong> Via Aurelia Antica, 415, 00165 Roma RM, Italy</p>
// //                         <p><strong>Phone:</strong> +39 06 6630 4000</p>
// //                         <p><strong>Email:</strong> info.rome@crowneplaza.com</p>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-lg font-semibold mb-4">Location Map</h3>
// //                       <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
// //                         <iframe
// //                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.036!2d12.446!3d41.902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sCrowne%20Plaza%20Rome%20-%20St.%20Peter's!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
// //                           width="100%"
// //                           height="100%"
// //                           style={{ border: 0 }}
// //                           allowFullScreen=""
// //                           loading="lazy"
// //                           referrerPolicy="no-referrer-when-downgrade"
// //                           className="rounded-lg"
// //                         ></iframe>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Travel Information */}
// //             <div className="grid md:grid-cols-2 gap-8">
// //               <div className="bg-gray-50 p-8 rounded-lg">
// //                 <div className="flex items-start gap-4">
// //                   <Plane className="w-8 h-8 text-blue-600 mt-1" />
// //                   <div>
// //                     <h3 className="text-2xl font-bold mb-4 text-gray-900">Nearest Airport</h3>
// //                     <p className="text-gray-700 mb-4">
// //                       <strong>Fiumicino Airport (Leonardo da Vinci)</strong> is Rome's main international airport,
// //                       located approximately 30 km from the city center.
// //                     </p>
// //                     <div className="space-y-2 text-gray-600">
// //                       <p><strong>Airport Code:</strong> FCO</p>
// //                       <p><strong>Distance to Venue:</strong> ~30 km (45 minutes by car)</p>
// //                       <p><strong>Alternative:</strong> Ciampino Airport (CIA) for budget flights</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="bg-gray-50 p-8 rounded-lg">
// //                 <div className="flex items-start gap-4">
// //                   <Car className="w-8 h-8 text-green-600 mt-1" />
// //                   <div>
// //                     <h3 className="text-2xl font-bold mb-4 text-gray-900">Local Transport</h3>
// //                     <p className="text-gray-700 mb-4">
// //                       Rome offers excellent public transportation and taxi services to get around the city.
// //                     </p>
// //                     <div className="space-y-2 text-gray-600">
// //                       <p><strong>Airport Transfer:</strong> Taxi (~€50), Train (€14), Bus (€6)</p>
// //                       <p><strong>City Transport:</strong> Metro, Buses, Trams</p>
// //                       <p><strong>Rome Pass:</strong> Includes public transport + attractions</p>
// //                       <p><strong>Rideshare:</strong> Uber, Free Now available</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Hotel Suggestions */}
// //             <div className="bg-gray-50 p-8 rounded-lg">
// //               <div className="flex items-start gap-4">
// //                 <Hotel className="w-8 h-8 text-purple-600 mt-1" />
// //                 <div className="w-full">
// //                   <h3 className="text-2xl font-bold mb-6 text-gray-900">Hotel Suggestions</h3>
// //                   <p className="text-gray-700 mb-6">
// //                     We recommend these hotels near the conference venue. These are suggestions only -
// //                     booking is not required through the conference.
// //                   </p>
// //                   <div className="grid md:grid-cols-3 gap-6">
// //                     <div className="bg-white p-4 rounded-lg border">
// //                       <h4 className="font-semibold text-lg mb-2">Crowne Plaza Rome</h4>
// //                       <p className="text-gray-600 text-sm mb-2">Conference Venue Hotel</p>
// //                       <p className="text-sm text-gray-500">Walking distance to venue</p>
// //                     </div>
// //                     <div className="bg-white p-4 rounded-lg border">
// //                       <h4 className="font-semibold text-lg mb-2">Hotel Degli Aranci</h4>
// //                       <p className="text-gray-600 text-sm mb-2">4-star hotel</p>
// //                       <p className="text-sm text-gray-500">15 min walk to venue</p>
// //                     </div>
// //                     <div className="bg-white p-4 rounded-lg border">
// //                       <h4 className="font-semibold text-lg mb-2">Hotel Mozart</h4>
// //                       <p className="text-gray-600 text-sm mb-2">3-star hotel</p>
// //                       <p className="text-sm text-gray-500">Budget-friendly option</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Recommended Attractions */}
// //             <div className="bg-gray-50 p-8 rounded-lg">
// //               <div className="flex items-start gap-4">
// //                 <Camera className="w-8 h-8 text-pink-600 mt-1" />
// //                 <div className="w-full">
// //                   <h3 className="text-2xl font-bold mb-6 text-gray-900">Recommended Attractions</h3>
// //                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //                     <div className="text-center">
// //                       <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                         <Globe className="w-8 h-8 text-pink-600" />
// //                       </div>
// //                       <h4 className="font-semibold mb-2">Vatican City</h4>
// //                       <p className="text-sm text-gray-600">St. Peter's Basilica, Sistine Chapel</p>
// //                     </div>
// //                     <div className="text-center">
// //                       <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                         <Globe className="w-8 h-8 text-pink-600" />
// //                       </div>
// //                       <h4 className="font-semibold mb-2">Colosseum</h4>
// //                       <p className="text-sm text-gray-600">Ancient Roman amphitheater</p>
// //                     </div>
// //                     <div className="text-center">
// //                       <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                         <Globe className="w-8 h-8 text-pink-600" />
// //                       </div>
// //                       <h4 className="font-semibold mb-2">Trevi Fountain</h4>
// //                       <p className="text-sm text-gray-600">Iconic Baroque fountain</p>
// //                     </div>
// //                     <div className="text-center">
// //                       <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                         <Globe className="w-8 h-8 text-pink-600" />
// //                       </div>
// //                       <h4 className="font-semibold mb-2">Spanish Steps</h4>
// //                       <p className="text-sm text-gray-600">Famous staircase and piazza</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Visa & Travel Information */}
// //             <div className="bg-indigo-50 p-8 rounded-lg">
// //               <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Visa & Travel Information</h2>

// //               <div className="grid md:grid-cols-2 gap-8">
// //                 <div>
// //                   <h3 className="text-2xl font-semibold mb-6 text-indigo-900">Visa Requirements</h3>
// //                   <div className="space-y-4">
// //                     <div className="flex items-start gap-3">
// //                       <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
// //                       <p className="text-gray-700">Visa on Arrival available for 169 countries</p>
// //                     </div>
// //                     <div className="flex items-start gap-3">
// //                       <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
// //                       <p className="text-gray-700">30-day tourist visa: $35 USD</p>
// //                     </div>
// //                     <div className="flex items-start gap-3">
// //                       <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
// //                       <p className="text-gray-700">Valid passport with 6+ months validity</p>
// //                     </div>
// //                     <div className="flex items-start gap-3">
// //                       <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
// //                       <p className="text-gray-700">Return ticket required</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <h3 className="text-2xl font-semibold mb-6 text-indigo-900">Conference Support</h3>
// //                   <div className="space-y-4">
// //                     <div className="flex items-start gap-3">
// //                       <Mail className="w-5 h-5 text-indigo-500 mt-1" />
// //                       <p className="text-gray-700">Official invitation letters provided</p>
// //                     </div>
// //                     <div className="flex items-start gap-3">
// //                       <Phone className="w-5 h-5 text-indigo-500 mt-1" />
// //                       <p className="text-gray-700">Visa application assistance</p>
// //                     </div>
// //                     <div className="flex items-start gap-3">
// //                       <Car className="w-5 h-5 text-indigo-500 mt-1" />
// //                       <p className="text-gray-700">Airport pickup coordination</p>
// //                     </div>
// //                     <div className="flex items-start gap-3">
// //                       <Phone className="w-5 h-5 text-indigo-500 mt-1" />
// //                       <p className="text-gray-700">24/7 conference support hotline</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default VenueTravelPage;



// import React from 'react';
// import Header from '../components/Header';
// import { 
//   MapPin, 
//   Plane, 
//   Car, 
//   Hotel, 
//   Camera, 
//   Phone, 
//   Mail, 
//   Globe, 
//   Star, 
//   ExternalLink,
//   Info,
//   CheckCircle2
// } from 'lucide-react';

// function VenueTravelPage() {
//   return (
//     <div className="font-sans bg-gray-50 min-h-screen text-slate-800">
//       <Header />
      
//       {/* --- HERO SECTION --- */}
//       <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
//         {/* Background Image of Rome */}
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
//             alt="Rome Skyline" 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply"></div>
//         </div>
        
//         <div className="relative container mx-auto px-6 text-center z-10 text-white">
//           <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-widest mb-4">
//             AIMLR 2026
//           </span>
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Venue & Travel</h1>
//           <p className="text-xl text-indigo-100 max-w-2xl mx-auto font-light">
//             Your guide to Rome: from the conference floor to the historic streets.
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 -mt-20 relative z-20 pb-20">
        
//         {/* --- VENUE CARD (Split Layout) --- */}
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
//           <div className="flex flex-col lg:flex-row">
//             {/* Image Side */}
//             <div className="lg:w-2/5 relative h-64 lg:h-auto">
//               <img 
//                 src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
//                 alt="Crowne Plaza Hotel" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-indigo-900 px-4 py-1 rounded-full text-xs font-bold uppercase">
//                 Official Venue
//               </div>
//             </div>
            
//             {/* Info Side */}
//             <div className="lg:w-3/5 p-8 lg:p-12">
//               <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-wider mb-2">
//                 <MapPin className="w-4 h-4" /> Rome, Italy
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Crowne Plaza - St. Peter's Rome</h2>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Located in a green area near the Villa Doria Pamphili park, this 4-star superior hotel offers a spa, outdoor pool, and easy access to the Vatican City and the historic center.
//               </p>
              
//               <div className="grid md:grid-cols-2 gap-6 mb-8">
//                 <div className="space-y-3">
//                   <ContactItem icon={<MapPin />} text="Via Aurelia Antica, 415, 00165 Roma" />
//                   <ContactItem icon={<Phone />} text="+39 06 6630 4000" />
//                   <ContactItem icon={<Mail />} text="info.rome@crowneplaza.com" />
//                 </div>
                
//                 {/* Embedded Map */}
//                 <div className="h-32 bg-gray-100 rounded-lg overflow-hidden shadow-inner border border-gray-200">
//                    <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.668742838703!2d12.423984576569112!3d41.87843827124194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132588e1a10065ad%3A0x66c8d76c70308064!2sCrowne%20Plaza%20Rome%20-%20St.%20Peter&#39;s%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sin!4v1709664273210!5m2!1sen!2sin"
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen=""
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                     ></iframe>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
//                   Get Directions
//                 </button>
//                 <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
//                   Visit Website <ExternalLink className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-6xl mx-auto space-y-20">
          
//           {/* --- HOTEL SUGGESTIONS --- */}
//           <section>
//             <div className="text-center mb-12">
//                <h2 className="text-3xl font-bold text-gray-900 mb-3">Accommodation</h2>
//                <p className="text-gray-500 max-w-2xl mx-auto">
//                  We have negotiated special rates with several hotels near the venue. Mention "AIMLR 2026" when booking.
//                </p>
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-8">
//                <HotelCard 
//                   name="Crowne Plaza Rome"
//                   stars={4}
//                   image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   distance="Conference Venue"
//                   price="€€€"
//                   tag="Best Convenience"
//                />
//                <HotelCard 
//                   name="Hotel Degli Aranci"
//                   stars={4}
//                   image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   distance="15 min walk"
//                   price="€€"
//                   tag="Quiet Area"
//                />
//                <HotelCard 
//                   name="Hotel Mozart"
//                   stars={3}
//                   image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   distance="20 min (Metro)"
//                   price="€"
//                   tag="City Center"
//                />
//             </div>
//           </section>

//           {/* --- ATTRACTIONS --- */}
//           <section>
//              <div className="flex items-center justify-between mb-8">
//                <div>
//                   <h2 className="text-3xl font-bold text-gray-900">Explore Rome</h2>
//                   <p className="text-gray-500">Don't miss these iconic landmarks during your stay.</p>
//                </div>
//                <button className="hidden md:flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800">
//                  View all attractions <ExternalLink className="w-4 h-4" />
//                </button>
//              </div>

//              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <AttractionCard 
//                   name="Vatican City"
//                   location="0.8 km from Venue"
//                   image="https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                 />
//                 <AttractionCard 
//                   name="The Colosseum"
//                   location="4.5 km from Venue"
//                   image="https://images.unsplash.com/photo-1552483338-03853b312a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                 />
//                 <AttractionCard 
//                   name="Trevi Fountain"
//                   location="3.2 km from Venue"
//                   image="https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                 />
//                 <AttractionCard 
//                   name="Spanish Steps"
//                   location="3.5 km from Venue"
//                   image="https://images.unsplash.com/photo-1529154036614-a60975f5c760?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                 />
//              </div>
//           </section>

//           {/* --- TRAVEL LOGISTICS (Grid) --- */}
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Airport Info */}
//             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
//                  <Plane className="w-6 h-6" />
//                </div>
//                <h3 className="text-xl font-bold text-gray-900 mb-4">Arrival: Fiumicino (FCO)</h3>
//                <p className="text-gray-600 mb-6 text-sm">
//                  Rome's main international airport is located approximately 30km from the venue.
//                </p>
//                <ul className="space-y-3">
//                  <TransportOption label="Taxi" value="~€50 fixed rate" time="45 min" />
//                  <TransportOption label="Leonardo Express Train" value="€14" time="32 min" />
//                  <TransportOption label="Bus Shuttle" value="€6" time="60 min" />
//                </ul>
//             </div>

//             {/* Local Transport */}
//             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
//                  <Car className="w-6 h-6" />
//                </div>
//                <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Around</h3>
//                <p className="text-gray-600 mb-6 text-sm">
//                  Public transport is affordable and efficient. We recommend buying a <strong>Roma Pass</strong>.
//                </p>
//                <ul className="space-y-3">
//                  <TransportOption label="Metro/Bus Ticket" value="€1.50" time="100 min valid" />
//                  <TransportOption label="Uber / FreeNow" value="Available" time="24/7" />
//                  <TransportOption label="Day Pass" value="€7.00" time="24 hours" />
//                </ul>
//             </div>
//           </div>

//           {/* --- VISA INFO --- */}
//           <div className="bg-indigo-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
//             <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
//             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
//               <div>
//                 <h2 className="text-2xl font-bold mb-2">Visa Requirements</h2>
//                 <p className="text-indigo-200 mb-6 max-w-lg">
//                   Many attendees can enter Italy with a Visa on Arrival. Please check if you require an invitation letter for your application.
//                 </p>
//                 <div className="flex gap-4 text-sm font-medium">
//                   <div className="flex items-center gap-2 bg-indigo-800 px-3 py-1.5 rounded-lg">
//                     <CheckCircle2 className="w-4 h-4 text-green-400" /> Invitation Letter Provided
//                   </div>
//                   <div className="flex items-center gap-2 bg-indigo-800 px-3 py-1.5 rounded-lg">
//                     <CheckCircle2 className="w-4 h-4 text-green-400" /> Support Hotline
//                   </div>
//                 </div>
//               </div>
//               <button className="bg-white text-indigo-900 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition-colors whitespace-nowrap">
//                 Request Invitation Letter
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// // --- SUB-COMPONENTS ---

// function ContactItem({ icon, text }) {
//   return (
//     <div className="flex items-center gap-3 text-gray-600">
//       <div className="text-indigo-500">{icon}</div>
//       <span className="font-medium">{text}</span>
//     </div>
//   );
// }

// function HotelCard({ name, stars, image, distance, price, tag }) {
//   return (
//     <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//       <div className="relative h-48 overflow-hidden">
//         <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//         <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
//           {tag}
//         </div>
//       </div>
//       <div className="p-5">
//         <div className="flex justify-between items-start mb-2">
//           <div>
//             <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
//             <div className="flex text-yellow-400 mb-1">
//               {[...Array(stars)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
//             </div>
//           </div>
//           <span className="text-gray-400 text-xs font-medium border border-gray-200 px-2 py-1 rounded">{price}</span>
//         </div>
        
//         <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
//           <MapPin className="w-3 h-3" />
//           {distance}
//         </div>
        
//         <button className="w-full py-2 rounded-lg border border-indigo-600 text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition-colors">
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }

// function AttractionCard({ name, location, image }) {
//   return (
//     <div className="group relative rounded-xl overflow-hidden aspect-[4/5] shadow-md cursor-pointer">
//       <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      
//       <div className="absolute bottom-0 left-0 p-5 text-white">
//         <h3 className="text-xl font-bold mb-1">{name}</h3>
//         <div className="flex items-center gap-1 text-xs text-gray-300">
//           <MapPin className="w-3 h-3 text-red-500 fill-current" />
//           {location}
//         </div>
//       </div>
//     </div>
//   );
// }

// function TransportOption({ label, value, time }) {
//   return (
//     <li className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 last:border-0 last:pb-0">
//       <span className="text-gray-600 font-medium">{label}</span>
//       <div className="text-right">
//         <span className="block text-gray-900 font-bold">{value}</span>
//         <span className="block text-xs text-gray-400">{time}</span>
//       </div>
//     </li>
//   );
// }

// export default VenueTravelPage;


import React from 'react';
import Header from '../components/Header';
import { 
  MapPin, 
  Plane, 
  Car, 
  Hotel, 
  Camera, 
  Phone, 
  Mail, 
  Globe, 
  Star, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import VenueComponent from '../components/VenueComponent';
import EndFooter from '../components/EndFooter';

function VenueTravelPage() {
  return (
    <div>
      {/* <Header /> */}
      
      {/* --- 1. OLD BANNER (Restored) --- */}
      {/* <div className="bg-[#312e81] bg-[url('https://www.transparenttextures.com/patterns/dark-fish-skin.png')] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Venue & Travel</h1>
          <p className="text-xl">Everything you need to know about attending AIMLR 2026 in Rome</p>
        </div>
      </div> */}

      <div className="py-0 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">

            {/* --- 2. OLD VENUE COMPONENT (Restored) --- */}
            {/* <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-indigo-600 mt-1" />
                <div className="w-full">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Conference Venue</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-indigo-900">Crowne Plaza - St. Peter's Rome</h3>
                      <p className="text-gray-700 mb-4">
                        Located in the heart of Rome, this prestigious hotel offers state-of-the-art conference facilities,
                        elegant accommodations, and easy access to Vatican City and historic Rome.
                      </p>
                      <div className="space-y-2 text-gray-600">
                        <p><strong>Address:</strong> Via Aurelia Antica, 415, 00165 Roma RM, Italy</p>
                        <p><strong>Phone:</strong> +39 06 6630 4000</p>
                        <p><strong>Email:</strong> info.rome@crowneplaza.com</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Location Map</h3>
                      <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.036!2d12.446!3d41.902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sCrowne%20Plaza%20Rome%20-%20St.%20Peter's!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Venue Map"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <VenueComponent />





            {/* --- 5. IMPROVED TRAVEL & VISA INFO --- */}
            <div className="grid md:grid-cols-2 gap-8">
               {/* Airport Info */}
               <div className="bg-gray-50 p-8 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <Plane className="w-8 h-8 text-blue-600 mt-1" />
                    <div className="w-full">
                       <h3 className="text-2xl font-bold mb-4 text-gray-900">Nearest Airport</h3>
                       <p className="text-gray-700 mb-4">
                         <strong>Rome Fiumicino Airport (FCO)</strong> is approximately 30 km from the conference venue.
                       </p>
                       <ul className="space-y-3">
                         <TransportOption label="Taxi (Fixed Rate)" value="" time="" />
                         <TransportOption label="Leonardo Express" value="" time="" />
                         <TransportOption label="Bus Shuttle" value="" time="" />
                       </ul>
                      <p className="text-gray-600 mt-4 text-sm">Travel time and fares may vary depending on traffic and service provider.</p>
                    </div>
                    
                  </div>
               </div>

               {/* Local Transport */}
               <div className="bg-gray-50 p-8 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <Car className="w-8 h-8 text-green-600 mt-1" />
                    <div className="w-full">
                       <h3 className="text-2xl font-bold mb-4 text-gray-900">Local Transport</h3>
                       <p className="text-gray-700 mb-4">
                         Rome offers excellent public transportation.
                       </p>
                       <ul className="space-y-3">
                         <TransportOption label="Metro/Bus Ticket" value="" time="" />
                         <TransportOption label="Roma Pass" value="" time="" />
                         <TransportOption label="Rideshare" value="" time="" />
                       </ul>
                       <p className="text-gray-600 mt-4 text-sm">Availability and fares depend on provider and duration.</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Visa Section */}
            <div className="bg-indigo-50 p-8 rounded-lg border border-indigo-100">
               <h2 className="text-2xl font-bold mb-6 text-center text-indigo-900">Visa & Support</h2>
               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-indigo-800">Requirements</h3>
                    <ul className="space-y-2 text-gray-700">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Visa on Arrival available for 169 countries</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> 30-day tourist visa: $35 USD</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Valid passport with 6+ months validity</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Return ticket required</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-indigo-800">Conference Support</h3>
                    <ul className="space-y-2 text-gray-700">
                       <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-indigo-500"/> Invitation letter provided upon request</li>
                       <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-indigo-500"/> Support hotline for visa assistance</li>
                    </ul>
                  </div>

                  <div className="md:col-span-2 flex justify-center">
                    <button className="mt-4 bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                      Request Invitation Letter
                    </button>
                  </div>
               </div>
            </div>


                        {/* --- 3. NEW HOTEL SUGGESTIONS (With Real Images) --- */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Hotel className="w-8 h-8 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Hotel Suggestions</h3>
                  <p className="text-gray-600 mt-2">
                    We recommend these hotels near the venue. Mention "AIMLR 2026" for special rates.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                 <HotelCard 
                    name="Crowne Plaza Rome"
                    stars={4}
                    image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    distance="Conference Venue"
                    price="€€€"
                    tag="On-Site"
                 />
                 <HotelCard 
                    name="Hotel Degli Aranci"
                    stars={4}
                    image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    distance="15 min walk"
                    price="€€"
                    tag="Quiet"
                 />
                 <HotelCard 
                    name="Hotel Mozart"
                    stars={3}
                    image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    distance="20 min (Metro)"
                    price="€"
                    tag="City Center"
                 />
              </div>
            </div>



                        {/* --- 4. NEW ATTRACTIONS (With Real Images & Location) --- */}
            <div>
               <div className="flex items-start gap-4 mb-6">
                  <Camera className="w-8 h-8 text-pink-600 mt-1" />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Explore Rome</h3>
                    <p className="text-gray-600 mt-2">Don't miss these iconic landmarks during your stay.</p>
                  </div>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AttractionCard 
                    name="Vatican City"
                    location="0.8 km from Venue"
                    image="https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
                  <AttractionCard 
                    name="The Colosseum"
                    location="4.5 km from Venue"
                    image="https://th.bing.com/th/id/R.22620bc7580ff093ce87facf219b34de?rik=ctnM8sLMUoAgLg&riu=http%3a%2f%2fwww.mostamazingwonders.com%2fwp-content%2fuploads%2f2014%2f06%2fRoman-Colosseum1.jpg%3f0cc007&ehk=3313Bf0SVYWKUN5T%2fwj%2b9PRLfWhl2izz6A0K0qAFaO0%3d&risl=&pid=ImgRaw&r=0"
                  />
                  <AttractionCard 
                    name="Trevi Fountain"
                    location="3.2 km from Venue"
                    image="https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
                  <AttractionCard 
                    name="Spanish Steps"
                    location="3.5 km from Venue"
                    image="https://images.unsplash.com/photo-1529154036614-a60975f5c760?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
               </div>
            </div>

          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center mt-6 flex justify-center items-center px-4">
       
        <p className="text-sm text-gray-600 italic">
          <strong>NOTE:</strong> Venue details and transportation information are provided for general guidance only. Participants are advised to confirm arrangements independently.
        </p>
        
      </div>

      {/* <EndFooter /> */}
    </div>
  );
}

// --- SUB-COMPONENTS ---

function HotelCard({ name, stars, image, distance, price, tag }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
          {tag}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
            <div className="flex text-yellow-400 mb-1">
              {[...Array(stars)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
          </div>
          <span className="text-gray-400 text-xs font-medium border border-gray-200 px-2 py-1 rounded">{price}</span>
        </div>
        
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
          <MapPin className="w-3 h-3" />
          {distance}
        </div>
        
        <button className="w-full py-2 rounded-lg border border-indigo-600 text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}

function AttractionCard({ name, location, image }) {
  return (
    <div className="group relative rounded-xl overflow-hidden aspect-[4/5] shadow-md cursor-pointer">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      
      <div className="absolute bottom-0 left-0 p-5 text-white">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="flex items-center gap-1 text-xs text-gray-300">
          <MapPin className="w-3 h-3 text-red-500 fill-current" />
          {location}
        </div>
      </div>
    </div>
  );
}

function TransportOption({ label, value, time }) {
  return (
    <li className="flex justify-between items-center text-sm border-b border-gray-200 pb-2 last:border-0 last:pb-0">
      <span className="text-gray-600 font-medium">{label}</span>
      <div className="text-right">
        <span className="block text-gray-900 font-bold">{value}</span>
        <span className="block text-xs text-gray-500">{time}</span>
      </div>
    </li>
  );
}

export default VenueTravelPage;