
// // // import React, { useState } from 'react';
// // // import { FaLink, FaAt } from 'react-icons/fa';
// // // import { FaCookieBite } from 'react-icons/fa6';
// // // import { Sidebar } from 'primereact/sidebar';
// // // import { Link } from 'react-router-dom';

// // // const EndFooter: React.FC = () => {
// // //   const [visibleLeft, setVisibleLeft] = useState(false);



// // //   return (
// // //     <footer className="bg-gray-100 text-[#002d45] text-sm">

// // //       {/* COOKIE SIDEBAR */}
// // //       <Sidebar
// // //         visible={visibleLeft}
// // //         position="left"
// // //         onHide={() => setVisibleLeft(false)}
// // //         style={{ width: '100%', maxWidth: '500px', background: 'white' }}
// // //         showCloseIcon={true}
// // //       >
// // //         <div className="p-6 text-[#002d45] text-sm space-y-6">
// // //           <h2 className="text-xl font-semibold">Privacy Preference Center</h2>

// // //           <p>
// // //             When you visit any website, it may store or retrieve information on your browser...
// // //           </p>

// // //           <div>
// // //             <h3 className="font-semibold mb-4">Manage Consent Preferences</h3>
// // //             <div className="border rounded overflow-hidden">
// // //               <div className="flex justify-between items-center px-4 py-3 border-b">
// // //                 <button className="font-medium">+ Strictly Necessary Cookies</button>
// // //                 <span className="text-blue-700 font-semibold text-sm">Always Active</span>
// // //               </div>

// // //               {["Targeting Cookies", "Analytics Cookies", "Social Media Cookies"].map((item, i) => (
// // //                 <div key={i} className="flex justify-between items-center px-4 py-3 border-b">
// // //                   <button className="font-medium">+ {item}</button>
// // //                   <label className="inline-flex cursor-pointer">
// // //                     <input type="checkbox" defaultChecked className="sr-only peer" />
// // //                     <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
// // //                   </label>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <button className="w-full bg-black text-white py-2 font-semibold" onClick={() => setVisibleLeft(false)}>
// // //             Confirm
// // //           </button>
// // //         </div>
// // //       </Sidebar>

// // //       {/* TOP SECTION */}
// // //       <div className="container mx-auto px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-300">

// // //         {/* Quick Links */}
// // //         <div>
// // //           <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
// // //             <FaLink /> QUICK LINKS
// // //           </h3>

// // //           <div className="grid grid-cols-2 gap-2 text-sm text-[#0b2b3a]">
// // //             <Link to="/">Home</Link>
// // //             <Link to="/about">About Conference</Link>
// // //             <Link to="/commitee">Committee</Link>
// // //             <Link to="/sessions">Sessions</Link>
// // //             <Link to="/speakers">Speakers</Link>
// // //             <Link to="/about-the-call">Call for Abstracts</Link>
// // //             <Link to="/call-for-papers">Call for Papers</Link>
// // //             <Link to="/call-for-posters">Call for Posters</Link>
// // //             <Link to="/call-for-speakers">Call for Speakers</Link>
// // //             <Link to="/call-for-reviewers">Call for Reviewers</Link>
// // //             <Link to="/schedule">Program Schedule</Link>
// // //             <Link to="/venue">Venue</Link>
// // //             <Link to="/importantdates">Important Dates</Link>
// // //             <Link to="/guidelines">Guidelines</Link>
// // //             <Link to="/faq">FAQ</Link>
// // //             <Link to="/poster">Poster</Link>
// // //             <Link to="/register">Register</Link>
// // //             <Link to="/contact">Contact</Link>
// // //           </div>
// // //         </div>

// // //         {/* Contact */}
// // //         <div>
// // //           <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
// // //             <FaAt /> CONTACT US
// // //           </h3>
// // //           <div className="space-y-3">
// // //             <p><strong>Email:</strong> secretary@roboticsaisummit.com</p>
// // //           </div>
// // //         </div>

// // //         {/* Resources */}
// // //         <div>
// // //           <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
// // //             <FaLink /> RESOURCES
// // //           </h3>
// // //           <ul className="space-y-2 underline underline-offset-2 text-sm text-[#0b2b3a]">
// // //             <li><Link to="/privacy-policy">Privacy Policy</Link></li>
// // //             <li><Link to="/cookie-policy">Cookie Policy</Link></li>
// // //             <li className="cursor-pointer" onClick={() => setVisibleLeft(true)}>Cookie Settings</li>
// // //             <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
// // //           </ul>
// // //         </div>
// // //       </div>

// // //       {/* MERGED BOTTOM CONTENT HERE */}
// // //       <div className="text-center py-3 space-y-3">
// // //         <ul className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm">
// // //           <li><Link to="/privacy-policy">Privacy Policy</Link></li>
// // //           <li><Link to="/cookie-policy">Cookie Policy</Link></li>
// // //           <li className="cursor-pointer" onClick={() => setVisibleLeft(true)}>Cookie Settings</li>
// // //           <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
// // //         </ul>

// // //         <span className="block text-sm text-gray-500">
// // //           © 2026 All rights reserved. AI, ML & Robotics Conference
// // //         </span>
        
// // //       </div>

// // //       {/* COOKIE FLOAT BUTTON */}
// // //       <button
// // //         onClick={() => setVisibleLeft(true)}
// // //         className="fixed bottom-4 left-4 z-50 focus:outline-none"
// // //       >
// // //         <FaCookieBite className="w-10 h-10 text-[#002d45]" />
// // //       </button>

// // //     </footer>
// // //   );
// // // };

// // // export default EndFooter;




// // import React, { useState } from "react";
// // import { FaLink, FaAt } from "react-icons/fa";
// // import { FaCookieBite } from "react-icons/fa6";
// // import { Sidebar } from "primereact/sidebar";
// // import { Link } from "react-router-dom";

// // const EndFooter: React.FC = () => {
// //   const [cookieVisible, setCookieVisible] = useState(false);

// //   return (
// //     <footer className="bg-gray-100 text-[#002d45] text-sm relative">

// //       {/* ================= COOKIE SIDEBAR ================= */}
// //       <Sidebar
// //         visible={cookieVisible}
// //         position="left"
// //         onHide={() => setCookieVisible(false)}
// //         style={{ width: "100%", maxWidth: "500px", background: "#fff" }}
// //         showCloseIcon
// //       >
// //         <div className="p-6 space-y-6">
// //           <h2 className="text-xl font-semibold">
// //             Privacy Preference Center
// //           </h2>

// //           <p className="text-gray-600 leading-relaxed">
// //             When you visit any website, it may store or retrieve information on your browser,
// //             mostly in the form of cookies. This information might be about you, your preferences,
// //             or your device.
// //           </p>

// //           <div>
// //             <h3 className="font-semibold mb-4">
// //               Manage Consent Preferences
// //             </h3>

// //             <div className="border rounded overflow-hidden">

// //               {/* Strictly Necessary */}
// //               <div className="flex justify-between items-center px-4 py-3 border-b">
// //                 <span className="font-medium">
// //                   Strictly Necessary Cookies
// //                 </span>
// //                 <span className="text-blue-700 font-semibold text-sm">
// //                   Always Active
// //                 </span>
// //               </div>

// //               {/* Optional Cookies */}
// //               {[
// //                 "Targeting Cookies",
// //                 "Analytics Cookies",
// //                 "Social Media Cookies",
// //               ].map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex justify-between items-center px-4 py-3 border-b last:border-none"
// //                 >
// //                   <span className="font-medium">{item}</span>

// //                   <label className="inline-flex cursor-pointer">
// //                     <input type="checkbox" defaultChecked className="sr-only peer" />
// //                     <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
// //                   </label>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <button
// //             className="w-full bg-black text-white py-2 font-semibold"
// //             onClick={() => setCookieVisible(false)}
// //           >
// //             Confirm Preferences
// //           </button>
// //         </div>
// //       </Sidebar>

// //       {/* ================= TOP FOOTER ================= */}
// //       <div className="container mx-auto px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-300">

// //         {/* Quick Links */}
// //         <div>
// //           <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
// //             <FaLink /> Quick Links
// //           </h3>

// //           <div className="grid grid-cols-4 gap-2 text-[#0b2b3a]">
// //             <Link to="/">Home</Link>
// //             <Link to="/about">About Conference</Link>
// //             <Link to="/commitee">Committee</Link>
// //             <Link to="/sessions">Sessions</Link>
// //             <Link to="/speakers">Speakers</Link>
// //             <Link to="/about-the-call">Call for Abstracts</Link>
// //             <Link to="/call-for-papers">Call for Papers</Link>
// //             <Link to="/call-for-posters">Call for Posters</Link>
// //             <Link to="/call-for-speakers">Call for Speakers</Link>
// //             <Link to="/call-for-reviewers">Call for Reviewers</Link>
// //             <Link to="/schedule">Program Schedule</Link>
// //             <Link to="/venue">Venue</Link>
// //             <Link to="/importantdates">Important Dates</Link>
// //             <Link to="/guidelines">Guidelines</Link>
// //             <Link to="/faq">FAQ</Link>
// //             <Link to="/register">Register</Link>
            
// //           </div>
// //         </div>

// //         {/* Contact */}
//         // <div>
//         //   <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
//         //     <FaAt /> Contact Us
//         //   </h3>

//         //   <p className="text-gray-700">
//         //     <strong>Email:</strong>{" "}
//         //     <a
//         //       href="mailto:secretary@roboticsaisummit.com"
//         //       className="text-blue-700 hover:underline"
//         //     >
//         //       secretary@roboticsaisummit.com
//         //     </a>
//         //   </p>
//         // </div>
// //       </div>

// //       {/* ================= BOTTOM FOOTER ================= */}
// //       <div className="text-center py-4 space-y-3">
// //         <ul className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm">
// //           <li><Link to="/privacy-policy">Privacy Policy</Link></li>
// //           <li><Link to="/cookie-policy">Cookie Policy</Link></li>
// //           <li className="cursor-pointer" onClick={() => setCookieVisible(true)}>
// //             Cookie Settings
// //           </li>
// //           <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
// //         </ul>

// //         <span className="block text-sm text-gray-500">
// //           © 2026 All rights reserved. AI, ML & Robotics Conference
// //         </span>
// //       </div>

// //       {/* ================= COOKIE FLOAT BUTTON ================= */}
// //       <button
// //         onClick={() => setCookieVisible(true)}
// //         className="fixed bottom-4 left-4 z-50 focus:outline-none"
// //         aria-label="Cookie Settings"
// //       >
// //         <FaCookieBite className="w-10 h-10 text-[#002d45]" />
// //       </button>

// //     </footer>
// //   );
// // };

// // export default EndFooter;




// import React, { useState } from "react";
// import { FaLink, FaAt } from "react-icons/fa";
// import { FaCookieBite } from "react-icons/fa6";
// import { Sidebar } from "primereact/sidebar";
// import { Link } from "react-router-dom";

// const EndFooter: React.FC = () => {
//   const [cookieVisible, setCookieVisible] = useState(false);

//   return (
//     <footer className="bg-gray-50 text-[#002d45] text-sm relative font-sans border-t border-gray-200">

//       {/* ================= COOKIE SIDEBAR ================= */}
//       <Sidebar
//         visible={cookieVisible}
//         position="left"
//         onHide={() => setCookieVisible(false)}
//         style={{ width: "100%", maxWidth: "400px", background: "#fff" }}
//         showCloseIcon
//       >
//         <div className="p-6 flex flex-col h-full">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Preference Center</h2>
          
//           <div className="flex-1 overflow-y-auto pr-2 space-y-6">
//             <p className="text-gray-600 leading-relaxed text-base">
//               When you visit any website, it may store or retrieve information on your browser, 
//               mostly in the form of cookies. This information might be about you, your preferences, 
//               or your device.
//             </p>

//             <div className="space-y-4">
//               <h3 className="font-bold text-lg text-gray-800">Manage Consent Preferences</h3>
              
//               <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
//                 {/* Strictly Necessary */}
//                 <div className="flex justify-between items-center px-5 py-4 border-b bg-gray-50">
//                   <span className="font-semibold text-gray-700">Strictly Necessary Cookies</span>
//                   <span className="text-blue-700 font-bold text-xs uppercase tracking-wide">Always Active</span>
//                 </div>

//                 {/* Optional Cookies */}
//                 {[
//                   "Targeting Cookies",
//                   "Analytics Cookies",
//                   "Social Media Cookies",
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex justify-between items-center px-5 py-4 border-b last:border-none hover:bg-gray-50 transition-colors"
//                   >
//                     <span className="font-medium text-gray-700">{item}</span>
//                     <label className="inline-flex cursor-pointer relative">
//                       <input type="checkbox" className="sr-only peer" />
//                       <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <button
//             className="w-full mt-6 bg-[#002d45] hover:bg-blue-900 text-white py-3 rounded-lg font-semibold transition-all shadow-md"
//             onClick={() => setCookieVisible(false)}
//           >
//             Confirm My Choices
//           </button>
//         </div>
//       </Sidebar>

//       {/* ================= MAIN FOOTER CONTENT ================= */}
//       <div className="container mx-auto px-6 lg:px-16 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

//           {/* --- Quick Links Section (Takes up 9 columns on large screens) --- */}
//           <div className="lg:col-span-9">
//             <h3 className="flex items-center gap-2 text-[#2e376d] font-bold text-xl mb-6">
//               <FaLink className="text-xl" /> Quick Links
//             </h3>

//             {/* Grid: 2 cols on mobile, 4 cols on desktop to match image spacing */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 text-[#4a5568]">
              
//               {/* Column 1 */}
//               <div className="flex flex-col space-y-3">
//                 <Link to="/" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Home</Link>
//                 <Link to="/speakers" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Speakers</Link>
//                 <Link to="/call-for-speakers" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Call for Speakers</Link>
//                 <Link to="/importantdates" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Important Dates</Link>
//               </div>

//               {/* Column 2 */}
//               <div className="flex flex-col space-y-3">
//                 <Link to="/about" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">About Conference</Link>
//                 <Link to="/about-the-call" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Call for Abstracts</Link>
//                 <Link to="/call-for-reviewers" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Call for Reviewers</Link>
//                 <Link to="/guidelines" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Guidelines</Link>
//               </div>

//               {/* Column 3 */}
//               <div className="flex flex-col space-y-3">
//                 <Link to="/commitee" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Committee</Link>
//                 <Link to="/call-for-papers" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Call for Papers</Link>
//                 <Link to="/schedule" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Program Schedule</Link>
//                 <Link to="/faq" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">FAQ</Link>
//               </div>

//               {/* Column 4 */}
//               <div className="flex flex-col space-y-3">
//                 <Link to="/sessions" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Sessions</Link>
//                 <Link to="/call-for-posters" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Call for Posters</Link>
//                 <Link to="/venue" className="hover:text-blue-700 transition-colors hover:translate-x-1 duration-200 inline-block">Venue</Link>
//                 <Link to="/register" className="font-semibold text-blue-800 hover:text-blue-600 transition-colors hover:translate-x-1 duration-200 inline-block">Register</Link>
//               </div>

//             </div>
//           </div>



//                   <div>
//           <h3 className="flex items-center text-[#2e376d] font-semibold text-lg mb-4">
//             <FaAt /> CONTACT US
//           </h3>

//           <p className="text-gray-700 flex items-center">
//             <strong className="mr-2">Email:</strong>
//             <a
//               href="mailto:secretary@roboticsaisummit.com"
//               className="text-blue-700 hover:underline"
//             >
//               secretary@roboticsaisummit.com
//             </a>
//           </p>
//         </div>

//         </div>
//       </div>


//              {/* ================= BOTTOM FOOTER ================= */}
//        <div className="text-center py-4 space-y-3">
//          <ul className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm">
//            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
//            <li><Link to="/cookie-policy">Cookie Policy</Link></li>
//            <li className="cursor-pointer" onClick={() => setCookieVisible(true)}>
//              Cookie Settings
//            </li>
//            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
//          </ul>

//          <span className="block text-sm text-gray-500">
//            © 2026 All rights reserved. AI, ML & Robotics Conference
//          </span>
//      </div>

//       {/* ================= COOKIE FLOAT BUTTON ================= */}
//       <button
//         onClick={() => setCookieVisible(true)}
//         className="fixed bottom-6 left-6 z-50 p-3 bg-white rounded-full shadow-lg border border-gray-200 text-[#002d45] hover:bg-gray-100 hover:scale-110 transition-all duration-300 focus:outline-none group"
//         aria-label="Cookie Settings"
//         title="Manage Cookies"
//       >
//         <FaCookieBite className="w-6 h-6 group-hover:rotate-12 transition-transform" />
//       </button>

//     </footer>
//   );
// };

// export default EndFooter;




import React, { useState } from "react";
import { FaLink, FaAt } from "react-icons/fa";
import { FaCookieBite } from "react-icons/fa6";
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";

interface CookiePreferences {
  targeting: boolean;
  analytics: boolean;
  social: boolean;
}

const EndFooter: React.FC = () => {
  const [cookieVisible, setCookieVisible] = useState(false);

  const [cookies, setCookies] = useState<CookiePreferences>({
    targeting: false,
    analytics: false,
    social: false,
  });

  const toggleCookie = (key: keyof CookiePreferences) => {
    setCookies((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleConfirmCookies = () => {
    console.log("Saved cookie preferences:", cookies);
    // later → save to localStorage / backend
    setCookieVisible(false);
  };

  return (
    <footer className="bg-gray-50 text-[#002d45] text-sm relative border-t border-gray-200">

      {/* ================= COOKIE SIDEBAR ================= */}
      <Sidebar
        visible={cookieVisible}
        position="left"
        onHide={() => setCookieVisible(false)}
        style={{ width: "100%", maxWidth: "420px" }}
        showCloseIcon
        className="bg-white"
      >
        <div className="p-6 flex flex-col h-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Privacy Preference Center
          </h2>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            We use cookies to enhance your browsing experience, analyze traffic,
            and personalize content. You can manage your preferences below.
          </p>

          <div className="flex-1 space-y-4 overflow-y-auto pr-1">

            {/* Strictly Necessary */}
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
              <span className="font-semibold text-gray-700">
                Strictly Necessary Cookies
              </span>
              <span className="text-xs font-bold text-blue-700 uppercase">
                Always Active
              </span>
            </div>

            {/* Optional Cookies */}
            {[
              { label: "Targeting Cookies", key: "targeting" },
              { label: "Analytics Cookies", key: "analytics" },
              { label: "Social Media Cookies", key: "social" },
            ].map(({ label, key }) => (
              <div
                key={key}
                className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-700">{label}</span>

                <label className="relative inline-flex cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookies[key as keyof CookiePreferences]}
                    onChange={() =>
                      toggleCookie(key as keyof CookiePreferences)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            ))}
          </div>

          <button
            onClick={handleConfirmCookies}
            className="mt-6 w-full bg-[#002d45] hover:bg-blue-900 text-white py-3 rounded-lg font-semibold transition shadow"
          >
            Confirm My Choices
          </button>
        </div>
      </Sidebar>

      {/* ================= MAIN FOOTER ================= */}
      <div className="container mx-auto px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Quick Links */}
          <div className="lg:col-span-9">
            <h3 className="flex items-center gap-2 text-[#2e376d] font-bold text-xl mb-6">
              <FaLink /> Quick Links
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-2 text-gray-600">
              {[
                ["Home", "/"],
                ["Speakers", "/speakers"],
                ["Call for Speakers", "/call-for-speakers"],
                ["Important Dates", "/importantdates"],
                ["Privacy Policy", "/privacy-policy"],

                ["About Conference", "/about"],
                ["Call for Abstracts", "/about-the-call"],
                ["Call for Reviewers", "/call-for-reviewers"],
                ["Guidelines", "/guidelines"],
                ["Terms & Conditions", "/terms-and-conditions"],

                ["Committee", "/commitee"],
                ["Call for Papers", "/call-for-papers"],
                ["Program Schedule", "/schedule"],
                ["FAQ", "/faq"],
                 ["Cookie Policy", "/cookie-policy"],

                ["Sessions", "/sessions"],
                ["Call for Posters", "/call-for-posters"],
                ["Venue", "/venue"],
                ["Register", "/register"],
                
               
                ["Cookie Settings", null, false],
                
              ].map(([label, path, isLink = true]) =>
                isLink ? (
                  <Link
                    key={label}
                    to={path}
                    className="text-blue-700 transition hover:translate-x-1 inline-block"
                  >
                    {label}
                  </Link>
                ) : (
                  <span
                    key={label}
                    className="text-blue-700 transition hover:translate-x-1 inline-block cursor-pointer"
                    onClick={() => setCookieVisible(true)}
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          {/* <div>
            <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
              <FaAt /> Contact Us
            </h3>
            <p className="text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:secretary@roboticsaisummit.com"
                className="text-blue-700 hover:underline"
              >
                secretary@roboticsaisummit.com
              </a>
            </p>
          </div> */}

          {/* Contact */}
<div className="lg:col-span-3">
  <h3 className="flex items-center gap-2 text-[#2e376d] font-bold text-xl mb-6">
    <FaAt className="text-xl" /> Contact Us
  </h3>

  <div className="space-y-2 text-gray-700">
    <p className="flex gap-2 items-center">
      <strong>Email:</strong>{" "}
      <p
       
        className="text-blue-700"
      >
        secretary@roboticsaisummit.com
      </p>
    </p>

    <p className="flex gap-2 items-center">
      <strong>WhatsApp:</strong>{" "}
      <p
        
        className="text-blue-700"
      >
        +1 (443) 653-0066
      </p>
    </p>

        <p className="flex gap-2">
      <strong>Address:</strong>{" "}
      <p
        
        className="text-blue-700"
      >
        30 N Gould St Ste R Sheridan, WY 82801
      </p>
    </p>
  </div>
</div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="text-center py-4 border-t space-y-3">
        {/* <ul className="flex flex-wrap justify-center gap-6 text-gray-700">
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/cookie-policy">Cookie Policy</Link></li>
          <li
            className="cursor-pointer hover:text-blue-700"
            onClick={() => setCookieVisible(true)}
          >
            Cookie Settings
          </li>
          <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
        </ul> */}

        <span className="block text-gray-500 text-sm">
          © 2026 All rights reserved. AI, ML & Robotics Conference
        </span>
      </div>

      {/* ================= FLOAT COOKIE BUTTON ================= */}
      <button
        onClick={() => setCookieVisible(true)}
        aria-label="Manage Cookies"
        className="fixed bottom-6 left-6 z-50 p-3 bg-white rounded-full shadow-lg border hover:scale-110 transition"
      >
        <FaCookieBite className="w-6 h-6 text-[#002d45]" />
      </button>

    </footer>
  );
};

export default EndFooter;
