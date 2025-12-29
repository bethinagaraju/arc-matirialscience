// // import { Bell } from "lucide-react";

// // export default function AnnouncementBar() {
// //   const announcements = [
// //     "Initial Announcement",
// //     "First Round of Abstract Submission Closes on December 15, 2025",
// //     "Early Bird Registration Closes on December 17, 2025",
// //   ];

// //   return (
// //     <div className="w-full bg-[#f2f4fa] py-2">
// //       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 px-4">
        
// //         {announcements.map((text, index) => (
// //           <div key={index} className={`flex items-center gap-2 text-[#053047] text-sm sm:text-sm font-medium ${text.includes("Early Bird") ? "animate-pulse" : ""}`}>
// //             <Bell size={20} className={`text-[#053047] ${text.includes("Early Bird") ? "text-red-500" : ""}`} />
// //             <span>{text}</span>
// //           </div>
// //         ))}

// //       </div>
// //     </div>
// //   );
// // }





// import { Bell } from "lucide-react";
// import { Link } from "react-router-dom"; // <-- Import Link

// export default function AnnouncementBar() {
//   const announcements = [
//     "Initial Announcement",
//     "First Round of Abstract Submission Closes on December 15, 2025",
//     "Early Bird Registration Closes on December 17, 2025",
//   ];

//   return (
//     <div className="w-full bg-[#f2f4fa] py-2">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 px-4">
        
//         {announcements.map((text, index) => {
//           const isEarlyBird = text.includes("Early Bird");

//           return (
//             <div
//               key={index}
//               className={`flex items-center gap-2 text-[#053047] text-sm font-medium ${
//                 isEarlyBird ? "animate-pulse" : ""
//               }`}
//             >
//               <Bell
//                 size={20}
//                 className={`text-[#053047] ${isEarlyBird ? "text-red-500" : ""}`}
//               />

//               {/* 🔗 Make only Early Bird text clickable */}
//               {isEarlyBird ? (
//                 <Link
//                   to="/register"
//                   className="underline hover:text-blue-600 transition"
//                 >
//                   {text}
//                 </Link>
//               ) : (
//                 <span>{text}</span>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function AnnouncementBar() {
  const announcements = [
    // "Initial Announcement",
    "First Round of Abstract Submission Closes on January 30, 2026",
    "Early Bird Registration Closes on February 15, 2026",
  ];

  return (
    <div className="w-full bg-[#f2f4fa] py-2">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 px-4">
        
        {announcements.map((text, index) => {
          const isEarlyBird = text.includes("Early Bird");
          const isAbstract = text.includes("Abstract Submission");

          return (
            <div
              key={index}
              className={`flex items-center gap-2 text-[#053047] text-sm font-medium ${
                isEarlyBird ? "animate-pulse" : ""
              }`}
            >
              <Bell
                size={20}
                className={`text-[#053047] ${isEarlyBird ? "text-red-500" : ""}`}
              />

              {/* Handle Links */}
              {isEarlyBird ? (
                <Link
                  to="/register"
                  className="underline hover:text-blue-600 transition"
                >
                  {text}
                </Link>
              ) : isAbstract ? (
                <Link
                  to="/AbstractSubmission"
                  className="underline hover:text-blue-600 transition"
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
