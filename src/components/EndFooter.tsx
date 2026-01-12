// // import React, { useState } from "react";
// // import { FaLink, FaAt } from "react-icons/fa";
// // import { FaCookieBite } from "react-icons/fa6";
// // import { Sidebar } from "primereact/sidebar";
// // import { Link } from "react-router-dom";

// // interface CookiePreferences {
// //   targeting: boolean;
// //   analytics: boolean;
// //   social: boolean;
// // }

// // const EndFooter: React.FC = () => {
// //   const [cookieVisible, setCookieVisible] = useState(false);

// //   const [cookies, setCookies] = useState<CookiePreferences>({
// //     targeting: false,
// //     analytics: false,
// //     social: false,
// //   });

// //   const toggleCookie = (key: keyof CookiePreferences) => {
// //     setCookies((prev) => ({ ...prev, [key]: !prev[key] }));
// //   };

// //   const handleConfirmCookies = () => {
// //     console.log("Saved cookie preferences:", cookies);
// //     // later → save to localStorage / backend
// //     setCookieVisible(false);
// //   };

// //   return (
// //     <footer className="bg-gray-50 text-[#002d45] text-sm relative border-t border-gray-200">

// //       {/* ================= COOKIE SIDEBAR ================= */}
// //       <Sidebar
// //         visible={cookieVisible}
// //         position="left"
// //         onHide={() => setCookieVisible(false)}
// //         style={{ width: "100%", maxWidth: "420px" }}
// //         showCloseIcon
// //         className="bg-white"
// //       >
// //         <div className="p-6 flex flex-col h-full">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //             Privacy Preference Center
// //           </h2>

// //           <p className="text-gray-600 text-base leading-relaxed mb-6">
// //             We use cookies to enhance your browsing experience, analyze traffic,
// //             and personalize content. You can manage your preferences below.
// //           </p>

// //           <div className="flex-1 space-y-4 overflow-y-auto pr-1">

// //             {/* Strictly Necessary */}
// //             <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
// //               <span className="font-semibold text-gray-700">
// //                 Strictly Necessary Cookies
// //               </span>
// //               <span className="text-xs font-bold text-blue-700 uppercase">
// //                 Always Active
// //               </span>
// //             </div>

// //             {/* Optional Cookies */}
// //             {[
// //               { label: "Targeting Cookies", key: "targeting" },
// //               { label: "Analytics Cookies", key: "analytics" },
// //               { label: "Social Media Cookies", key: "social" },
// //             ].map(({ label, key }) => (
// //               <div
// //                 key={key}
// //                 className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition"
// //               >
// //                 <span className="font-medium text-gray-700">{label}</span>

// //                 <label className="relative inline-flex cursor-pointer">
// //                   <input
// //                     type="checkbox"
// //                     checked={cookies[key as keyof CookiePreferences]}
// //                     onChange={() =>
// //                       toggleCookie(key as keyof CookiePreferences)
// //                     }
// //                     className="sr-only peer"
// //                   />
// //                   <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
// //                 </label>
// //               </div>
// //             ))}
// //           </div>

// //           <button
// //             onClick={handleConfirmCookies}
// //             className="mt-6 w-full bg-[#002d45] hover:bg-blue-900 text-white py-3 rounded-lg font-semibold transition shadow"
// //           >
// //             Confirm My Choices
// //           </button>
// //         </div>
// //       </Sidebar>

// //       {/* ================= MAIN FOOTER ================= */}
// //       <div className="container mx-auto px-6 lg:px-16 py-12">
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

// //           {/* Quick Links */}
// //           <div className="lg:col-span-9">
// //             <h3 className="flex items-center gap-2 text-[#2e376d] font-bold text-xl mb-6">
// //               <FaLink /> Quick Links
// //             </h3>

// //             <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-2 text-gray-600">
// //               {[
// //                 ["Home", "/"],
// //                 ["Speakers", "/speakers"],
// //                 ["Call for Speakers", "/call-for-speakers"],
// //                 ["Important Dates", "/important-dates"],
// //                 ["Privacy Policy", "/privacy-policy"],

// //                 ["About Conference", "/about"],
// //                 ["Call for Abstracts", "/call-for-abstract"],
// //                 ["Call for Reviewers", "/call-for-reviewers"],
// //                 ["Guidelines", "/guidelines"],
// //                 ["Terms & Conditions", "/terms-and-conditions"],

// //                 ["Committee", "/committee"],
// //                 ["Call for Papers", "/call-for-papers"],
// //                 ["Program Schedule", "/schedule"],
// //                 ["FAQ", "/faq"],
// //                  ["Cookie Policy", "/cookie-policy"],

// //                 ["Sessions", "/sessions"],
// //                 ["Call for Posters", "/call-for-posters"],
// //                 ["Venue", "/venue"],
// //                 ["Register", "/register"],
                
               
// //                 ["Cookie Settings", null, false],
                
// //               ].map(([label, path, isLink = true]) =>
// //                 isLink ? (
// //                   <Link
// //                     key={label}
// //                     to={path}
// //                     className="text-blue-700 transition hover:translate-x-1 inline-block"
// //                   >
// //                     {label}
// //                   </Link>
// //                 ) : (
// //                   <span
// //                     key={label}
// //                     className="text-blue-700 transition hover:translate-x-1 inline-block cursor-pointer"
// //                     onClick={() => setCookieVisible(true)}
// //                   >
// //                     {label}
// //                   </span>
// //                 )
// //               )}
// //             </div>
// //           </div>

// //           {/* Contact */}
// //           {/* <div>
// //             <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
// //               <FaAt /> Contact Us
// //             </h3>
// //             <p className="text-gray-700">
// //               <strong>Email:</strong>{" "}
// //               <a
// //                 href="mailto:secretary@roboticsaisummit.com"
// //                 className="text-blue-700 hover:underline"
// //               >
// //                 secretary@roboticsaisummit.com
// //               </a>
// //             </p>
// //           </div> */}

// //           {/* Contact */}
// // <div className="lg:col-span-3">
// //   <h3 className="flex items-center gap-2 text-[#2e376d] font-bold text-xl mb-6">
// //     <FaAt className="text-xl" /> Contact Us
// //   </h3>

// //   <div className="space-y-2 text-gray-700">
// //     <p className="flex gap-2 items-center">
// //       <strong>Email:</strong>{" "}
// //       <p
       
// //         className="text-blue-700"
// //       >
// //         secretary@roboticsaisummit.com
// //       </p>
// //     </p>

// //     <p className="flex gap-2 items-center">
// //       <strong>WhatsApp:</strong>{" "}
// //       <p
        
// //         className="text-blue-700"
// //       >
// //         +1 (443) 653-0066
// //       </p>
// //     </p>

// //         <p className="flex gap-2">
// //       <strong>Address:</strong>{" "}
// //       <p
        
// //         className="text-blue-700"
// //       >
// //         30 N Gould St Ste R Sheridan, WY 82801
// //       </p>
// //     </p>
// //   </div>
// // </div>

// //         </div>
// //       </div>

// //       {/* ================= BOTTOM BAR ================= */}
// //       <div className="text-center py-4 border-t space-y-3">
// //         {/* <ul className="flex flex-wrap justify-center gap-6 text-gray-700">
// //           <li><Link to="/privacy-policy">Privacy Policy</Link></li>
// //           <li><Link to="/cookie-policy">Cookie Policy</Link></li>
// //           <li
// //             className="cursor-pointer hover:text-blue-700"
// //             onClick={() => setCookieVisible(true)}
// //           >
// //             Cookie Settings
// //           </li>
// //           <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
// //         </ul> */}

// //         <span className="block text-gray-500 text-sm">
// //           © 2026 All rights reserved. AI, ML & Robotics Conference
// //         </span>
// //       </div>

// //       {/* ================= FLOAT COOKIE BUTTON ================= */}
// //       <button
// //         onClick={() => setCookieVisible(true)}
// //         aria-label="Manage Cookies"
// //         className="fixed bottom-6 left-6 z-50 p-3 bg-white rounded-full shadow-lg border hover:scale-110 transition"
// //       >
// //         <FaCookieBite className="w-6 h-6 text-[#002d45]" />
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

// interface CookiePreferences {
//   targeting: boolean;
//   analytics: boolean;
//   social: boolean;
// }

// const EndFooter: React.FC = () => {
//   const [cookieVisible, setCookieVisible] = useState(false);

//   const [cookies, setCookies] = useState<CookiePreferences>({
//     targeting: false,
//     analytics: false,
//     social: false,
//   });

//   const toggleCookie = (key: keyof CookiePreferences) => {
//     setCookies((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const handleConfirmCookies = () => {
//     console.log("Saved cookie preferences:", cookies);
//     setCookieVisible(false);
//   };

//   return (
//     <footer className="bg-[#1E245A] text-sm relative border-t border-[#334155]">

//       {/* ================= COOKIE SIDEBAR ================= */}
//       <Sidebar
//         visible={cookieVisible}
//         position="left"
//         onHide={() => setCookieVisible(false)}
//         style={{ width: "100%", maxWidth: "420px" }}
//         showCloseIcon
//         className="bg-white"
//       >
//         <div className="p-6 flex flex-col h-full">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">
//             Privacy Preference Center
//           </h2>

//           <p className="text-gray-600 text-base leading-relaxed mb-6">
//             We use cookies to enhance your browsing experience, analyze traffic,
//             and personalize content. You can manage your preferences below.
//           </p>

//           <div className="flex-1 space-y-4 overflow-y-auto pr-1">

//             {/* Strictly Necessary */}
//             <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
//               <span className="font-semibold text-gray-700">
//                 Strictly Necessary Cookies
//               </span>
//               <span className="text-xs font-bold text-blue-700 uppercase">
//                 Always Active
//               </span>
//             </div>

//             {/* Optional Cookies */}
//             {[
//               { label: "Targeting Cookies", key: "targeting" },
//               { label: "Analytics Cookies", key: "analytics" },
//               { label: "Social Media Cookies", key: "social" },
//             ].map(({ label, key }) => (
//               <div
//                 key={key}
//                 className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition"
//               >
//                 <span className="font-medium text-gray-700">{label}</span>

//                 <label className="relative inline-flex cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={cookies[key as keyof CookiePreferences]}
//                     onChange={() =>
//                       toggleCookie(key as keyof CookiePreferences)
//                     }
//                     className="sr-only peer"
//                   />
//                   <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
//                 </label>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={handleConfirmCookies}
//             className="mt-6 w-full bg-[#002d45] hover:bg-blue-900 text-white py-3 rounded-lg font-semibold transition shadow"
//           >
//             Confirm My Choices
//           </button>
//         </div>
//       </Sidebar>

//       {/* ================= MAIN FOOTER ================= */}
//       <div className="container mx-auto px-6 lg:px-16 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

//           {/* ================= CONTACT (MOBILE FIRST) ================= */}
//           <div className="lg:col-span-3 order-1 lg:order-2">
//             <h3 className="flex items-center gap-2 text-[#ffffff] font-bold text-xl mb-6">
//               <FaAt className="text-xl" /> Contact Us
//             </h3>

//             <div className="space-y-2 text-[#E0E7FF]">
//               <p className="flex gap-2 items-center">
//                 <strong>Email:</strong>
//                 <span className="text-[#E0E7FF]">
//                   secretary@roboticsaisummit.com
//                 </span>
//               </p>

//               <p className="flex gap-2 items-center">
//                 <strong>WhatsApp:</strong>
//                 <span className="text-[#E0E7FF]">
//                   +1 (443) 653-0066
//                 </span>
//               </p>

//               <p className="flex gap-2">
//                 <strong>Address:</strong>
//                 <span className="text-[#E0E7FF]">
//                   30 N Gould St Ste R Sheridan, WY 82801
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* ================= QUICK LINKS ================= */}
//           <div className="lg:col-span-9 order-2 lg:order-1">
//             <h3 className="flex items-center gap-2 text-[#ffffff] font-bold text-xl mb-6">
//               <FaLink /> Quick Links
//             </h3>

//             <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-2">
//               {[
//                 ["Home", "/"],
//                 ["Speakers", "/speakers"],
//                 ["Call for Speakers", "/call-for-speakers"],
//                 ["Important Dates", "/important-dates"],
//                 ["Privacy Policy", "/privacy-policy"],

//                 ["About Conference", "/about"],
//                 ["Call for Abstracts", "/call-for-abstract"],
//                 ["Call for Reviewers", "/call-for-reviewers"],
//                 ["Guidelines", "/guidelines"],
//                 ["Terms & Conditions", "/terms-and-conditions"],

//                 ["Committee", "/committee"],
//                 ["Call for Papers", "/call-for-papers"],
//                 ["Program Schedule", "/schedule"],
//                 ["FAQ", "/faq"],
//                 ["Cookie Policy", "/cookie-policy"],

//                 ["Sessions", "/sessions"],
//                 ["Call for Posters", "/call-for-posters"],
//                 ["Venue", "/venue"],
//                 ["Register", "/register"],

//                 ["Cookie Settings", null, false],
//               ].map(([label, path, isLink = true]) =>
//                 isLink ? (
//                   <Link
//                     key={label as string}
//                     to={path as string}
//                     className="text-[#C7D2FE] hover:text-[#60A5FA] transition hover:translate-x-1 inline-block"
//                     title={`${label} | AIMLR 2026 Conference`}
//                     aria-label={`${label} | AIMLR 2026 Conference`}
//                   >
//                     {label}
//                   </Link>
//                 ) : (
//                   <span
//                     key={label as string}
//                     className="text-[#C7D2FE] hover:text-[#60A5FA] transition hover:translate-x-1 inline-block cursor-pointer"
//                     onClick={() => setCookieVisible(true)}
//                   >
//                     {label}
//                   </span>
//                 )
//               )}
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ================= BOTTOM BAR ================= */}
//       <div className="text-center py-4 border-t border-[#334155]">
//         <span className="block text-[#94A3B8] text-sm">
//           © 2026 All rights reserved. AI, ML & Robotics Conference
//         </span>
//       </div>

//       {/* ================= FLOAT COOKIE BUTTON ================= */}
//       <button
//         onClick={() => setCookieVisible(true)}
//         aria-label="Manage cookie preferences for AIMLR 2026 Conference"
//         title="Manage cookie preferences for AIMLR 2026 Conference"
//         className="hidden md:block fixed bottom-6 left-6 z-50 p-3 bg-white rounded-full shadow-lg border hover:scale-110 transition"
//       >
//         <FaCookieBite className="w-6 h-6 text-[#002d45]" title="Manage cookie preferences for AIMLR 2026 Conference" aria-label="Manage cookie preferences for AIMLR 2026 Conference" />
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
    setCookieVisible(false);
  };

  return (
    <footer className="bg-[#3F444A] text-sm relative">

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
          <h2 className="text-2xl font-semibold text-[#111] mb-4">
            Privacy Preference Center
          </h2>

          <p className="text-[#555] text-base leading-relaxed mb-6">
            We use cookies to improve functionality, analyze traffic, and
            personalize content. You can manage your preferences below.
          </p>

          <div className="flex-1 space-y-4 overflow-y-auto pr-1">

            {/* Necessary */}
            <div className="flex justify-between items-center p-4 bg-[#F3F3F3]">
              <span className="font-semibold text-[#111]">
                Strictly Necessary Cookies
              </span>
              <span className="text-xs font-bold text-[#C9AB63] uppercase">
                Always Active
              </span>
            </div>

            {/* Optional */}
            {[
              { label: "Targeting Cookies", key: "targeting" },
              { label: "Analytics Cookies", key: "analytics" },
              { label: "Social Media Cookies", key: "social" },
            ].map(({ label, key }) => (
              <div
                key={key}
                className="flex justify-between items-center p-4 border border-[#E2E2E2]"
              >
                <span className="font-medium text-[#555]">{label}</span>

                <label className="relative inline-flex cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookies[key as keyof CookiePreferences]}
                    onChange={() =>
                      toggleCookie(key as keyof CookiePreferences)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#C9AB63] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            ))}
          </div>

          <button
            onClick={handleConfirmCookies}
            className="mt-6 w-full bg-[#3F444A] hover:bg-[#2F3439] text-white py-3 font-semibold transition"
          >
            Confirm My Choices
          </button>
        </div>
      </Sidebar>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Quick Links */}
          <div className="lg:col-span-8">
            <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-6">
              <FaLink /> Quick Links
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-6">
              {[
                ["Home", "/"],
                ["About Conference", "/about"],
                ["Speakers", "/speakers"],
                ["Sessions", "/sessions"],
                ["Register", "/register"],
                ["Call for Abstracts", "/call-for-abstract"],
                ["Call for Papers", "/call-for-papers"],
                ["Call for Speakers", "/call-for-speakers"],
                ["Call for Reviewers", "/call-for-reviewers"],
                ["Call for Posters", "/call-for-posters"],
                ["Important Dates", "/important-dates"],
                ["Program Schedule", "/schedule"],
                ["Venue", "/venue"],
                ["Committee", "/committee"],
                ["Guidelines", "/guidelines"],
                ["FAQ", "/faq"],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms & Conditions", "/terms-and-conditions"],
                ["Cookie Policy", "/cookie-policy"],
                ["Cookie Settings", null, false],
              ].map(([label, path, isLink = true]) =>
                isLink ? (
                  <Link
                    key={label as string}
                    to={path as string}
                    className="text-[#D1D5D8] hover:text-[#C9AB63] transition"
                  >
                    {label}
                  </Link>
                ) : (
                  <span
                    key={label as string}
                    className="text-[#D1D5D8] hover:text-[#C9AB63] transition cursor-pointer"
                    onClick={() => setCookieVisible(true)}
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-6">
              <FaAt /> Contact Us
            </h3>

            <div className="space-y-3 text-[#D1D5D8]">
              <p>
                <strong>Email:</strong> secretary@roboticsaisummit.com
              </p>
              <p>
                <strong>WhatsApp:</strong> +1 (443) 653-0066
              </p>
              <p>
                <strong>Address:</strong><br />
                30 N Gould St Ste R<br />
                Sheridan, WY 82801
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="text-center py-4 border-t border-[#555A60]">
        <span className="text-[#9CA3AF] text-sm">
          © 2026 All rights reserved. AI, ML & Robotics Conference
        </span>
      </div>

      {/* ================= FLOAT COOKIE BUTTON ================= */}
      <button
        onClick={() => setCookieVisible(true)}
        className="hidden md:flex fixed bottom-6 left-6 z-50 p-3 bg-[#C9AB63] rounded-full shadow hover:scale-105 transition"
        title="Manage cookie preferences"
      >
        <FaCookieBite className="w-6 h-6 text-white" />
      </button>

    </footer>
  );
};

export default EndFooter;
