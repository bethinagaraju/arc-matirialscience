// // // import React from 'react';
// // // import { Shield, Heart, Scale, Eye } from 'lucide-react';

// // // const EthicsValues: React.FC = () => {
// // //   const ethicsPoints = [
// // //     {
// // //       title: "Responsible AI Development",
// // //       description: "We prioritize ethical AI practices, ensuring algorithms are transparent, fair, and free from bias to build trust and accountability.",
// // //       icon: Shield
// // //     },
// // //     {
// // //       title: "Human-Centric Innovation",
// // //       description: "Our focus remains on technology that enhances human potential, promotes well-being, and respects individual rights and dignity.",
// // //       icon: Heart
// // //     },
// // //     {
// // //       title: "Fairness & Equity",
// // //       description: "We advocate for equitable access to AI benefits, addressing digital divides and ensuring technology serves diverse global communities.",
// // //       icon: Scale
// // //     },
// // //     {
// // //       title: "Transparency & Accountability",
// // //       description: "Open dialogue about AI's societal impact, with mechanisms for oversight and responsible deployment across all applications.",
// // //       icon: Eye
// // //     }
// // //   ];

// // //   return (
// // //     <section className="py-16 px-4 lg:px-28 bg-white">
// // //       <div className="container mx-auto max-w-6xl">
// // //         <div className="text-center mb-12">
// // //           <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}>
// // //             Ethics & Values
// // //           </h2>
// // //           <p className="text-gray-600 max-w-3xl mx-auto mt-3">
// // //             At AIMLR 2026, we are committed to advancing AI, ML, and robotics in ways that are ethical, inclusive, and beneficial to humanity. Our core values guide every aspect of our work and discussions.
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// // //           {ethicsPoints.map((point, index) => {
// // //             const IconComponent = point.icon;
// // //             return (
// // //               <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100 hover:shadow-md transition-shadow">
// // //                 <div className="flex items-start gap-4">
// // //                   <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center flex-shrink-0">
// // //                     <IconComponent className="w-6 h-6" />
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
// // //                     <p className="text-gray-600 leading-relaxed">{point.description}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>

// // //         <div className="mt-12 text-center">
// // //           <p className="text-gray-500 text-sm max-w-2xl mx-auto">
// // //             Join us in shaping a future where technology serves humanity's highest ideals, fostering innovation that is both powerful and principled.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default EthicsValues;


// // import React from 'react';
// // import { Shield, Heart, Scale, Eye } from 'lucide-react';

// // const EthicsValues: React.FC = () => {
// //   const ethicsPoints = [
// //     {
// //       title: "Responsible AI Development",
// //       description: "We prioritize ethical AI practices, ensuring algorithms are transparent, fair, and free from bias to build trust and accountability.",
// //       icon: Shield
// //     },
// //     {
// //       title: "Human-Centric Innovation",
// //       description: "Our focus remains on technology that enhances human potential, promotes well-being, and respects individual rights and dignity.",
// //       icon: Heart
// //     },
// //     {
// //       title: "Fairness & Equity",
// //       description: "We advocate for equitable access to AI benefits, addressing digital divides and ensuring technology serves diverse global communities.",
// //       icon: Scale
// //     },
// //     {
// //       title: "Transparency & Accountability",
// //       description: "Open dialogue about AI's societal impact, with mechanisms for oversight and responsible deployment across all applications.",
// //       icon: Eye
// //     }
// //   ];

// //   return (
// //     <section className="py-16 px-4 lg:px-28 bg-white">
// //       <div className="container mx-auto max-w-6xl">
        
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}>
// //             Ethics & Values
// //           </h2>
// //           <p className="text-gray-600 max-w-3xl mx-auto mt-3">
// //             At AIMLR 2026, we are committed to advancing AI, ML, and robotics in ways that are ethical, inclusive, and beneficial to humanity. Our core values guide every aspect of our work and discussions.
// //           </p>
// //         </div>

// //         {/* Square Cards */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// //           {ethicsPoints.map((point, index) => {
// //             const IconComponent = point.icon;
// //             return (
// //               <div
// //                 key={index}
// //                 className="min-h-[280px] aspect-square bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col justify-between"
// //               >
// //                 <div>
// //                   <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center mb-4">
// //                     <IconComponent className="w-6 h-6" />
// //                   </div>
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">{point.title}</h3>
// //                 </div>

// //                 <p className="text-gray-600 text-sm leading-relaxed">
// //                   {point.description}
// //                 </p>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         <div className="mt-12 text-center">
// //           <p className="text-gray-500 text-sm max-w-2xl mx-auto">
// //             Join us in shaping a future where technology serves humanity's highest ideals, fostering innovation that is both powerful and principled.
// //           </p>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default EthicsValues;



// import React from "react";
// import { Shield, Heart, Scale, Eye } from "lucide-react";

// const EthicsValues: React.FC = () => {
//   const ethicsPoints = [
//     {
//       title: "Responsible AI Development",
//       description:
//         "We prioritize ethical AI practices, ensuring algorithms are transparent, fair, and free from bias to build trust and accountability.",
//       icon: Shield,
//       color: "#FF6B6B", // Red
//     },
//     {
//       title: "Human-Centric Innovation",
//       description:
//         "Our focus remains on technology that enhances human potential, promotes well-being, and respects individual rights and dignity.",
//       icon: Heart,
//       color: "#4CAF50", // Green
//     },
//     {
//       title: "Fairness & Equity",
//       description:
//         "We advocate for equitable access to AI benefits, addressing digital divides and ensuring technology serves diverse global communities.",
//       icon: Scale,
//       color: "#FFAA33", // Orange
//     },
//     {
//       title: "Transparency & Accountability",
//       description:
//         "Open dialogue about AI's societal impact, with mechanisms for oversight and responsible deployment across all applications.",
//       icon: Eye,
//       color: "#3B82F6", // Blue
//     },
//   ];

//   return (
//     <section className="py-16 px-4 lg:px-28 bg-white">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-12">
//           <h2
//             className="text-3xl md:text-4xl font-bold"
//             style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
//           >
//             Ethics & Values
//           </h2>
//           <p className="text-gray-600 max-w-3xl mx-auto mt-3">
//             At AIMLR 2026, we are committed to advancing AI, ML, and robotics in
//             ways that are ethical, inclusive, and beneficial to humanity. Our
//             core values guide every aspect of our work and discussions.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {ethicsPoints.map((point, index) => {
//             const IconComponent = point.icon;
//             return (
//               <div
//                 key={index}
//                 className="min-h-[280px] aspect-square bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col justify-between"
//               >
//                 <div>
//                   <div
//                     className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
//                     style={{ backgroundColor: `${point.color}20` }} // Light tinted background
//                   >
//                     <IconComponent
//                       className="w-6 h-6"
//                       style={{ color: point.color }}
//                     />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                     {point.title}
//                   </h3>
//                 </div>

//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {point.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-gray-500 text-sm max-w-2xl mx-auto">
//             Join us in shaping a future where technology serves humanity's
//             highest ideals, fostering innovation that is both powerful and
//             principled.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EthicsValues;




import React from "react";
import { Shield, Heart, Scale, Eye } from "lucide-react";

const EthicsValues: React.FC = () => {
  const ethicsPoints = [
    {
      title: "Responsible AI Development",
      description:
        "We prioritize ethical AI practices, ensuring algorithms are transparent, fair, and free from bias to build trust and accountability.",
      icon: Shield,
      color: "#FF6B6B", // Red
    },
    {
      title: "Human-Centric Innovation",
      description:
        "Our focus remains on technology that enhances human potential, promotes well-being, and respects individual rights and dignity.",
      icon: Heart,
      color: "#4CAF50", // Green
    },
    {
      title: "Fairness & Equity",
      description:
        "We advocate for equitable access to AI benefits, addressing digital divides and ensuring technology serves diverse global communities.",
      icon: Scale,
      color: "#FFAA33", // Orange
    },
    {
      title: "Transparency & Accountability",
      description:
        "Open dialogue about AI's societal impact, with mechanisms for oversight and responsible deployment across all applications.",
      icon: Eye,
      color: "#3B82F6", // Blue
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-28 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
          >
            Ethics & Values
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
            At AIMLR 2026, we are committed to advancing AI, ML, and robotics in
            ways that are ethical, inclusive, and beneficial to humanity.
          </p>
        </div>

        {/* List Layout (2 columns for better readability on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {ethicsPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="flex gap-5 items-start">
                {/* Icon Column */}
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${point.color}15` }} // Very light tint of the brand color
                >
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: point.color }}
                  />
                </div>

                {/* Text Column */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center border-t border-gray-100 pt-8">
          <p className="text-gray-500 italic text-sm max-w-2xl mx-auto">
            "Join us in shaping a future where technology serves humanity's
            highest ideals, fostering innovation that is both powerful and
            principled."
          </p>
        </div>
      </div>
    </section>
  );
};

export default EthicsValues;