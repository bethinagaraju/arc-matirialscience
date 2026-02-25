// // import { Bell } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import { useState, useEffect } from "react";

// // export default function AnnouncementBar() {
// //   const [isVisible, setIsVisible] = useState(true);
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const checkMobile = () => setIsMobile(window.innerWidth < 640);
// //     checkMobile();
// //     window.addEventListener('resize', checkMobile);
// //     return () => window.removeEventListener('resize', checkMobile);
// //   }, []);

// //   useEffect(() => {
// //     if (!isMobile) return;
// //     const handleScroll = () => {
// //       setIsVisible(window.scrollY === 0);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, [isMobile]);

// //   const announcements = [
// //     // "Initial Announcement",
// //     "First Round of Abstract Submission Closes on January 30, 2026",
// //     "Early Bird Registration Closes on February 15, 2026",
// //   ];

// //   if (!isMobile || isVisible) {
// //     return (
// //       <div className="w-full bg-[#f2f4fa] py-2">
// //         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 px-4">
          
// //           {announcements.map((text, index) => {
// //             const isEarlyBird = text.includes("Early Bird");
// //             const isAbstract = text.includes("Abstract Submission");

// //             return (
// //               <div
// //                 key={index}
// //                 className={`flex items-center gap-2 text-[#053047] text-sm font-medium ${
// //                   isEarlyBird ? "animate-pulse" : ""
// //                 }`}
// //               >
// //                 <Bell
// //                   size={20}
// //                   className={`text-[#053047] ${isEarlyBird ? "text-red-500" : ""}`}
// //                 />

// //                 {/* Handle Links */}
// //                 {isEarlyBird ? (
// //                   <Link
// //                     to="/register"
// //                     className="underline hover:text-blue-600 transition"
// //                   >
// //                     {text}
// //                   </Link>
// //                 ) : isAbstract ? (
// //                   <Link
// //                     to="/AbstractSubmission"
// //                     className="underline hover:text-blue-600 transition"
// //                   >
// //                     {text}
// //                   </Link>
// //                 ) : (
// //                   <span>{text}</span>
// //                 )}
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     );
// //   }

// //   return null;
// // }



// import { Bell } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function AnnouncementBar() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 640);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     if (!isMobile) return;
//     const handleScroll = () => setIsVisible(window.scrollY === 0);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isMobile]);

//   const announcements = [
//     "First Round of Abstract Submission Closes on January 30, 2026",
//     "Early Bird Registration Closes on February 15, 2026",
//   ];

//   if (!isMobile || isVisible) {
//     return (
//       <div className="w-full bg-[#f2f4fa] py-2 sm:py-2.5">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10 px-3 sm:px-4">

//           {announcements.map((text, index) => {
//             const isEarlyBird = text.includes("Early Bird");
//             const isAbstract = text.includes("Abstract Submission");

//             return (
//               <div
//                 key={index}
//                 className={`flex items-center gap-1.5 sm:gap-2 
//                 text-[#053047] 
//                 text-xs sm:text-sm 
//                 leading-snug 
//                 font-medium 
//                 text-center sm:text-left
//                 ${isEarlyBird ? "animate-pulse" : ""}`}
//               >
//                 <Bell
//                   size={isMobile ? 16 : 18}
//                   className={isEarlyBird ? "text-red-500" : "text-[#053047]"}
//                 />

//                 {isEarlyBird ? (
//                   <Link
//                     to="/register"
//                     className="underline hover:text-blue-600 transition"
//                   >
//                     {text}
//                   </Link>
//                 ) : isAbstract ? (
//                   <Link
//                     to="/AbstractSubmission"
//                     className="underline hover:text-blue-600 transition"
//                   >
//                     {text}
//                   </Link>
//                 ) : (
//                   <span>{text}</span>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }

//   return null;
// }



import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useConference } from "../contexts/ConferenceContext";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => setIsVisible(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const { data } = useConference();
  const importantDates = data?.importantDates || [];
  const getDate = (type: string) => importantDates.find((d: any) => d.dateType === type)?.date || "TBA";

  const announcements = [
    `First Round of Abstract Submission Closes on ${getDate("First Round of Abstract Submission Closes")}`,
    `Early Bird Registration Closes on ${getDate("Early Bird Registration Closes")}`,
  ];

  if (!isMobile || isVisible) {
    return (
      <div className="w-full bg-[#f2f4fa] py-2">
        <div className="
          max-w-7xl mx-auto 
          flex flex-col sm:flex-row 
          items-start sm:items-center 
          justify-start sm:justify-center 
          gap-2 sm:gap-10 
          px-4
        ">
          {announcements.map((text, index) => {
            const isEarlyBird = text.includes("Early Bird");
            const isAbstract = text.includes("Abstract Submission");

            return (
              <div
                key={index}
                className={`
                  w-full sm:w-auto
                  flex items-start sm:items-center
                  gap-2
                  text-[#053047]
                  text-xs sm:text-sm
                  leading-snug
                  font-medium
                  text-left
                  ${isEarlyBird ? "animate-pulse" : ""}
                `}
              >
                <Bell
                  size={isMobile ? 16 : 18}
                  className={isEarlyBird ? "text-red-500" : "text-[#053047]"}
                />

                {isEarlyBird ? (
                  <Link
                    to="/register"
                    className="underline hover:text-blue-600 transition"
                    title="Register for PharmaTech 2026 Conference - Early Bird Registration"
                    aria-label="Register for PharmaTech 2026 Conference - Early Bird Registration"
                  >
                    {text}
                  </Link>
                ) : isAbstract ? (
                  <Link
                    to="/AbstractSubmission"
                    className="underline hover:text-blue-600 transition"
                    title="Submit Abstract for PharmaTech 2026 Conference - Abstract Submission"
                    aria-label="Submit Abstract for PharmaTech 2026 Conference - Abstract Submission"
                  >
                    {text}
                  </Link>
                ) : (
                  <span>{text}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
